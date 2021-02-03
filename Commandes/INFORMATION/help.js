const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
    message.delete();
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`French Club | Commandes`, message.guild.iconURL({dynamic: true, size: 512}))
    .setColor("#9910F0")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`> ● Voici mon prefix :\`+\`
    > ● J'ai un total de \`${client.commands.size}\` commandes !\n
    **⚙️ ● Commandes pour configurer le bot :**
     En développement !\n
    **🏅 ● Commandes pour les administrateur :**
    \`mp\`,\`sondage\`,\`kick\`,\`ban\`,\`clear\`,\`annonce\`\n
    **✅ ● Toute les commmandes générale :**
     \`help\`,\`invite\`,\`maj\`,\`ping\`\n
    **📢 ● Toute les commandes information :**
     \`botinfo\`,\`channelinfo\`,\`uptime\`,\`userinfo\`,\`serverinfo\`,\`avatar\`\n
    **🖥️ ● Toute les commandes fun:**
     \`8ball\`,\`ascii\`,\`mdr\`,\`pleure\`,\`dice\`,\`frapper\`,\`calin\`,\`kiss\`\n
    **🌉 ● Toute les commandes gif:**
     \`birb\`,\`baguette\`,\`bunny\`,\`fail\`,\`pout\`,\`cat\`,\`clyde\`,\`dog\`,\`duck\`,\`fire\`\n
    **🔗 ● Liens : **
    > [**Invite-moi**]() **|** [**Support**](tu es dessus)
    `)
    message.channel.send(embed)

}


module.exports.help = {
    name: 'help',
};