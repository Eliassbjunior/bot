const Command = require('../../structures/Command')

const { MessageEmbed } = require('discord.js')

module.exports = class PingCommand extends Command{
    constructor(client){
        super(client, {
            name: 'anuncio', 
            description : 'Comando para anunciar em canais de texto',
            options: [
                {
                    name: 'canal',
                    type: 'CHANNEL',
                    description: 'Canal onde será anunciado',
                    required: true
                },

                {
                    name: 'titulo',
                    type: 'STRING',
                    description: 'Título do anúncio',
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
    
        const titulo = interaction.options.getString('titulo')
        const mensagem = interaction.options.getString('mensagem')



        const embed = new MessageEmbed()
        .setAuthor(`Equipe AGRESS1VE.`)
        .setTitle(titulo)
        .setThumbnail(`${this.client.user.avatarURL()}`)
        .setColor('#73EE3E')
        .setDescription(mensagem)
        .setFooter(`Att. Equipe AGRESS1VE.`)
        .setTimestamp()

        canal.send({embeds: [embed]})
        .then(() => interaction.reply({ content: `Anúncio feito no canal ${canal.name}!`}))
        .catch(() => interaction.reply({ content: `ERRO ao fazer anúncio`}))

    }
}