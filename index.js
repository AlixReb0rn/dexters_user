const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  
  client.user.setGame("Watching Alix's - Tutorials", "https://www.twitch.tv/alix_plays");

});

client.on('message', msg => {
  if (msg.content === 'alix') {
    msg.reply('is awesome he hacked my account and popped me into a host also he hosted me on heroku so im online 24/7 ty god!');
  }
});
client.on('message', msg => {
    if (msg.content === 'dexter') {
      msg.reply('fuck you!');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply('@Alix ping');
      
     
     
    }
  });
  client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply('@everyone ping');
        msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');msg.reply('@everyone ping');
     
      
     
     
    }
  });

client.login('Mzg2OTE4MzE2NjY2NjUwNjI2.DYVgqg.8pTicgDBhDQ8o3snuEHfI68DYdo');
