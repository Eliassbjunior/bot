require('dotenv').config()

const Client = require('./src/structures/Client')

const client = new Client({
	intents: [
		
	]
})

client.once('ready', function () {
	console.log('Online');
})

client.on('messageCreate', function (message) {
    if(message.content === "oi") message.reply("Oi, funcionou!");
})
client.login(process.env.BOT_TOKEN);
