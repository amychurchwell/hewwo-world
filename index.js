const Discord = require("discord.js");
const client = new Discord.Client();
const Canvas = require('canvas');

require('dotenv').config();
const TOKEN = process.env.TOKEN;

// text on image
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 80;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

client.on('message', async msg => {
  if (msg.content === 'hewwo') {
    const canvas = Canvas.createCanvas(900, 862);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./hewwo.jpg');

    // stretch to canvas dimension
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // text
    ctx.font = applyText(canvas, msg.member.displayName);
    ctx.fillStyle = '#000000';
    ctx.fillText(msg.member.displayName.charAt(0) + "-" + msg.member.displayName + "?", canvas.width / 2.5, canvas.height / 3.5);

    // process file
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hewwo-reply.png');

    msg.reply('h-hewwo', attachment);
  }
});

client.login(TOKEN);