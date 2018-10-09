//const request = require('request');
//const cheerio = require('cheerio');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
	console.log(`${message.author.tag}: ${message.content} at ${message.createdTimestamp}`);
	if (message.channel.bot) return;
});

bot.on('ready', (message) => {
	setInterval(() => {

		let embed1 = new Discord.RichEmbed()
		.setTitle('**Newbie Starter Kit**')
		//.setImage()
		.setURL('http://rektnarok.boards.net/thread/31/newbie-starter-kit')
		.setColor('#205ec1')
		//.setThumbnail()
		.setTimestamp();
		//.addField('', '')
		//.addField('', '')
		//.addField('', '');
		//message.channel.send(embed1);

		let embed2 = new Discord.RichEmbed()
		.setTitle('**Halloween Event**')
		//.setImage()
		.setURL('http://rektnarok.boards.net/thread/32/halloween-event-quest')
		.setColor('#e00b35')
		//.setThumbnail()
		.setTimestamp();
		//.addField('', '')
		//.addField('', '')
		//.addField('', '');
		//message.channel.send(embed2);

		let embed3 = new Discord.RichEmbed()
		.setTitle('**Secret Shop**')
		//.setImage()
		.setURL('http://rektnarok.boards.net/thread/30/rektnarok-pvp-support-secret-shop')
		.setColor('#efc417')
		//.setThumbnail()
		.setTimestamp();
		//.addField('', '')
		//.addField('', '')
		//.addField('', '');
		//message.channel.send(embed3);

		//message.channel.send(':video_game:Note : Event Akan Selalu Update Setiap Habis Maintenance . Dont Miss it and Keep Follow Us \nThank Youuuuu:grinning:')

		const id = '488619421762453505';
		const channel = bot.channels.get(id);
		channel.send(embed1)
		channel.send(embed2)
		channel.send(embed3)
		channel.send(':video_game:Note : **Event Akan Selalu Update Setiap Habis Maintenance . Dont Miss it and Keep Follow Us** \nThank Youuuuu:grinning:')

		
	}, 18000000)
});

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
