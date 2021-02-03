const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setDescription("**✅Voici le lien pour inviter le bot:** [Invitation]()")
        .setColor("#9910F0")
        .setTitle("❓Tu veux inviter le bot dans ton serveur ?")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("©️ French Club - 2020. Tous droits réservés.", client.user.avatarURL())
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'invite',
};