const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

     if(message.content == 'dt!ping') {
           message.reply ('Pong!');
      }

      if(message.content == 'dt!commands') {
            message.reply ('dt!amar dt!darktails dt!servers dt!invitelink');
      }

      if(message.content == 'dt!amar') {
          message.channel.send('Amar created me.');

      }

});

bot.login('NDg4MjU0NTQ3MTAyNDAwNTM0.DnZicA.2OKvoO01ogcg-qjFOz-SMFw7cpg');