const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Hallo, wij zijn Den Haag")
            .setColor("#0b03fc")
            .setDescription("**Server naam:** DenHaag {BETA}")
            .addField("Je bent deze server gejoind op", message.member.joinedAt, true)
            .addField("Totaal memebers", message.guild.memberCount, true)
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}