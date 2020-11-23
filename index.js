const Discord = require("discord.js");
const client = new Discord.Client();

require('dotenv').config();
const TOKEN = process.env.TOKEN;

client.on('message', msg => {
  if (msg.content === 'hewwo') {
    msg.reply('h-hewwo');
  }
});

client.login(TOKEN);