const Command = require('../../structures/Command')

module.exports = class ClearCommand extends Command{
    constructor(client){
        super(client, {
            name: 'clear', 
            description : 'Limpa o chat escolhido.',
            options: [
                {
                    name: 'canal',
                    type: 'CHANNEL',
                    description: 'Canal que será limpo',
                    required: true
                }
            ]
        }
        
        )
    }

    run = async(interaction) => {
        const canal = interaction.options.getChannel('canal')
        
        const apagando = await canal.messages.fetch({
            limit: 100
        })
        canal.bulkDelete(apagando).then(() =>  interaction.reply({content: `Canal de texto \`${canal.name}\` limpo com sucesso.`,ephemeral: true}))
        .catch(() => interaction.reply({content: `Erro ao limpar canal de texto \`${canal.name}\`.`,ephemeral: true}))
        
        canal.send({content: `Canal de texto limpo pela Administração!`}).then(msg => msg.delete({timeout: 9000}))
        
    
        
        
    }
}

