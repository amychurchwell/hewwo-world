const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'hewwo') {
    msg.reply('h-hewwo');
  }
});

client.login(config.BOT_TOKEN);