require('dotenv').config()

const Client = require('./src/structures/Client')

const client = new Client({
	intents: [
		'GUILDS',
		'GUILD_MESSAGE_REACTIONS',
		'GUILD_MESSAGES',
		'GUILD_INVITES',
		'GUILD_VOICE_STATES',
		'GUILD_MEMBERS',
		'GUILD_PRESENCES'
	]
});



client.login("OTQyMTIyMTk3NDQ5ODM0NTU3.Ygf5qw.k65qVZCxGcU1yLPpu3r2-I__NiQ");
