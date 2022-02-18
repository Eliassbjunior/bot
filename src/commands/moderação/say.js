const Command = require('../../structures/Command')

module.exports = class extends Command{
    constructor(client){
        super(client, {
            name: 'say', 
            description : 'Comando para fazer anúncio',
            options: [
                {
                    name: 'canal',
                    type: 'CHANNEL',
                    description: 'Canal onde será enviada',
                    required: true
                },

                {
                    name: 'mensagem',
                    type: 'STRING',
                    description: 'Mensagem a ser enviada',
                    required: true
                }
            ]
        })
    }

    run = (interaction) => {
        const canal = interaction.options.getChannel('canal')
        if(!['GUILD_TEXT', 'GUILD_ANNOUNCEMENTS'].includes(canal.type)) return interaction.reply({ content: `CANAL INVÁLIDO | Informe um canal de texto ou de anúncios!`, ephemeral: true})
    
        const texto = interaction.options.getString('mensagem')

        canal.send( {content: texto})
        .then(() => interaction.reply({ content: `Anúncio efetuado com sucesso no canal \`${canal.name}\`.`,ephemeral: true}))
        .catch(() => interaction.reply({ content: `ERRO ao tentar enviar mensagem no canal`}))
    
    }
}

