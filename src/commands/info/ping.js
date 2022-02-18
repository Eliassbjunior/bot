const Command = require('../../structures/Command')

module.exports = class PingCommand extends Command{
    constructor(client){
        super(client, {
            name: 'ping', 
            description : 'Mostra o ping do bot'
        })
    }

    run = (interaction) => {
        interaction.reply({
            content: `Ping:\`${this.client.ws.ping}\` ms.`
            
        })
    }
}

