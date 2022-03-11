const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class AnuncioCommand extends Command{
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
                    name: 'paragrafo1',
                    type: 'STRING',
                    description: 'Mensagem a ser enviada',
                    required: true
                },
                {
                    name: 'paragrafo2',
                    type: 'STRING',
                    description: 'Mensagem a ser enviada',
                    required: false
                },
                {
                    name: 'paragrafo3',
                    type: 'STRING',
                    description: 'Mensagem a ser enviada',
                    required: false
                },

                {
                    name: 'paragrafo4',
                    type: 'STRING',
                    description: 'Mensagem a ser enviada',
                    required: false
                }


            ]
        })
    }

    run = (interaction) => {
        const canal = interaction.options.getChannel('canal')
    
        
        if(!['GUILD_TEXT', 'GUILD_ANNOUNCEMENTS'].includes(canal.type)) return interaction.reply({ content: `CANAL INVÁLIDO | Informe um canal de texto ou de anúncios!`, ephemeral: true})
        





        const titulo = interaction.options.getString('titulo')
        var p1 = interaction.options.getString('paragrafo1')
        var p2 = interaction.options.getString('paragrafo2')
        var p3 = interaction.options.getString('paragrafo3')
        var p4 = interaction.options.getString('paragrafo4')
        var footer = "Att. Equipe AGRESS1VE."
        

        if(p2 === null){
           var mensagem = '\n\n\n\n' + p1 + '\n\n\n' + footer + '\n\n\n'
        }else{
            if(p3 === null){
                var mensagem = '\n\n\n\n' + p1 + '\n\n\n' + p2 + '\n\n\n' + footer + '\n\n\n'
            }else{
                if( p4 === null){
                    var mensagem = '\n\n\n\n' + p1 + '\n\n\n' + p2 + '\n\n\n' + p3 + '\n\n\n' + footer + '\n\n\n'
                }else{
                    var mensagem = '\n\n\n\n' + p1 + '\n\n\n' + p2 + '\n\n\n' + p3 + '\n\n\n' + p4 + '\n\n\n' + footer
                }
            }
        }


        const embed = new MessageEmbed()
        .setAuthor(`Equipe AGRESS1VE`)
        .setTitle(titulo)
        .setThumbnail(`${this.client.user.avatarURL()}`)
        .setColor('#73EE3E')
        .setDescription(mensagem)
        .setFooter(`© 2022 Elias Junior  - Todos os direitos reservados. | E. Junior #7074`)
        .setTimestamp()

        canal.send({embeds: [embed]})
        .then(() => interaction.reply({ content: `Anúncio feito no canal ${canal.name}!`}))
        .catch(() => interaction.reply({ content: `ERRO ao fazer anúncio`}))

    }
}