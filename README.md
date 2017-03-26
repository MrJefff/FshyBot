[![2b1](http://i.imgur.com/hftWBMJ.jpg)](http://arc.moe)
[![2b2](http://i.imgur.com/uBZlAzC.jpg)](http://discord.arc.moe)
[![2b3](http://i.imgur.com/sY7kVJA.jpg)](#installation)

[![Discord](https://discordapp.com/api/guilds/136501988941758464/embed.png)](http://discord.arc.moe/)
[![AppVeyor](https://img.shields.io/appveyor/ci/Fshy/FshyBot.svg?style=flat-square)](https://ci.appveyor.com/project/Fshy/fshybot)
[![David](https://img.shields.io/david/Fshy/FshyBot.svg?style=flat-square)](https://david-dm.org/Fshy/FshyBot)
[![David](https://img.shields.io/david/dev/Fshy/FshyBot.svg?style=flat-square)](https://david-dm.org/Fshy/FshyBot?type=dev)
---
<h2><p align="center">Commands</p></h2>

<h5>General</h5>
<pre>
!help                   - Displays all available commands.
!ping                   - Displays response time to server.
!uptime                 - Displays time since launch.
</pre>

<h5>API Lookup</h5>

<pre>
!btc                    - Displays current Bitcoin spot price
!eth                    - Displays current Ethereum spot price
!anime_irl              - Uploads a random image from the r/anime_irl frontpage
</pre>

<h5>Music</h5>

<pre>
!play [title/link]      - Searches and queues the given term link for playback
!playlist [playlistId]  - Queues all videos from a youtube playlist
!skip [number]          - Skip some number of songs or 1 song if a number is not specified
!queue                  - Display the current queue
!leave                  - Clears the song queue and leaves the channel
</pre>

<h5>Misc</h5>

<pre>
!roll [sides] [num]     - Rolls an n-sided die, m times and displays the result
</pre>

<hr>
<h2><p align="center">Installation</p></h2>
<h3>Prerequisites</h3>

* [Node.js](https://nodejs.org/en/download/) (Version 6.x or newer)
* [python 2.7](https://www.python.org/download/releases/2.7/)

<h5>Windows:</h5>

```shell
#Install Microsoft Build Tools
npm install --global --production windows-build-tools
```

<h5>Ubuntu/Linux:</h5>

```shell
#Install Node/npm
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs

#Install python2.7
$ sudo apt-get install -y python2.7

#Install required build tools (make, gcc)
$ sudo apt-get install -y build-essential

#Configure python for node-gyp
$ npm config set python python2.7
```

<hr>

<h3>Build</h3>

```shell
$ git clone https://github.com/Fshy/FshyBot
$ cd FshyBot
$ npm install
```

Rename `config_example.json` to `config.json` and add your user token/API keys to suit.

<hr>

<h3>Running</h3>

With a working config file in place, we're ready to start the script from the terminal/command prompt.

```shell
#Launch bot
$ node app.js
```

It's recommended however, to run scripts using a process manager such as [PM2](https://github.com/Unitech/pm2). This ensures your bot automatically restarts in case of a crash. We can also configure pm2 to launch on startup.

```shell
#Install pm2
$ npm install pm2 -g

#Launch using pm2
$ pm2 start app.js

# Configure pm2 to launch on startup
$ pm2 startup
```
