const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet");


    return message.channel.send("Den Haag bot is online!")

}

module.exports.help = {
    name: "test",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}