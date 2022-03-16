const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class AjudaCommand extends Command{
    constructor(client){
        super(client, {
            name: 'ajuda', 
            description : 'Explica o uso dos comandos do bot.'
        })
    }

    run = (interaction) => {

        if(!interaction.member.roles.cache.some(r => [
            "797136213953085486",
            "797136213836300362"
        ].includes(r.id))){
            return interaction.reply({content: "**`Permissões insuficientes`**", ephemeral: true })
        }else{

            var p1 = "/say <mensagem> - O bot vai repetir a mensagem inserida pelo autor do comando.";
            var p2 = "/anuncio <canal> <titulo> <paragrafo 1 é OBRIGATÓRIO> <paragrafo 2 opcional> <paragrafo 3 opcional> <paragrafo 4 opcional> - Comando para fazer anúncios" 

            var mensagem = '\n\n' + p1 + '\n\n' + p2 + '\n\n\n';
            
            
            const embed = new MessageEmbed()
            .setAuthor(`Equipe AGRESS1VE`)
            .setTitle(`Comandos do BOT AGRESS1VE`)
            .setThumbnail(`${this.client.user.avatarURL()}`)
            .setColor('#73EE3E')
            .setDescription(mensagem)
            .setFooter(`© 2022 Elias Junior  - Todos os direitos reservados. | E. Junior #7074`)
            .setTimestamp()

            interaction.reply({embeds: [embed], ephemeral: true})
        }

        
    }
}