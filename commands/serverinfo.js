const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Hallo, wij zijn Den Haag")
            .setColor("#0b03fc")
            .addField("Server naam: ", serverName)
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount)
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}