const { Message } = require("discord.js");

module.exports = {
    name: "clear",
    description: "Clears message",

    async run (client, uwer, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('s’il vous plaît veuillez fournir un nombre de messages à supprimer')

        if(amount > 100) return message.reply(`vous ne pouvez pas effacer plus de 100 messages à la fois`)
        
        if(amount < 1) return message.reply(`vous devez supprimer au moins un message`)

        await message.channel.messages.fetch({limit: amount}).then(message => {
            message .channel.bulkDelete(messages

        )});

        message.channel.send('Succès!')
    }
}