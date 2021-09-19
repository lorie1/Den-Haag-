const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "889101650059468841";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt");

            return;
        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hey " + message.author.username)
        .setFooter("Wij zijn een ticket aan het maken voor u even geduld A.U.B\n\n")
        .setColor("#0b03fc")
        .setTimestamp();

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'staff team'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo ${message.author.username}`)
                        .setDescription("Meld u vraag/klacht vast.")
                        .setFooter("Ticket")
                        .setColor("#0b03fc")
                        .setTimestamp();
                        
                    
                        settedParent.send(embedParent);

           

                }
            ).catch(err => {
                message.channel.send("Er is iets misgelopen probeer het later nog eens.");
                console.log(err)
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
        console.log(err)
    });
}

module.exports.help = {
    name: "new"
}