const Discord   = require('discord.js');
const _         = require('lodash/core');
const fs        = require('fs');
const config    = require('./config.json');

// Helper Functions
class Lib {
  embed(text,message){
    return ({embed:new Discord.RichEmbed().setDescription(text).setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)});
  }

  checkOwner(message){
    return (message.author.id===config.ownerID);
  }

  // execute a single shell command where "cmd" is a string
  exec(cmd, cb){
    var child_process = require('child_process');
    var parts = cmd.split(/\s+/g);
    var p = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'});
    p.on('exit', function(code){
      var err = null;
      if (code) {
        err = new Error('command "'+ cmd +'" exited with wrong status code "'+ code +'"');
        err.code = code;
        err.cmd = cmd;
      }
      if (cb) cb(err);
    });
  };

  // execute multiple commands in series
  series(cmds, cb){
    var ex = this.exec;
    var execNext = function(){
      ex(cmds.shift(), function(err){
        if (err) {
          cb(err);
        } else {
          if (cmds.length) execNext();
          else cb(null);
        }
      });
    };
    execNext();
  };

  map_to_object(map) {
    const out = Object.create(null);
    map.forEach((value, key) => {
      if (value instanceof Map) {
        out[key] = map_to_object(value);
      }
      else {
        out[key] = value;
      }
    })
    return out;
  }

  object_to_map(obj) {
    let map = new Map();
    Object.keys(obj).forEach(key => {
        map.set(key, obj[key]);
    });
    return map;
  }

  writeMapToFile(guildsMap){
    var guildObj = this.map_to_object(guildsMap);
    Object.keys(guildObj).forEach(function(key) {
      var guild = guildObj[key];
      delete guild.playing;
    });
    fs.writeFile('guildRecords.json', JSON.stringify(guildObj), 'utf8', function (err,data) {
      if (err){
        console.log(err);
      }
    });
  }

  readFileToMap(){
    var guildObj = JSON.parse(fs.readFileSync('guildRecords.json', 'utf8'));
    return this.object_to_map(guildObj);
  }
}

module.exports = new Lib();
