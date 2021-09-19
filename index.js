const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { SlowBuffer } = require("buffer");

bot.login(process.env.token)

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => { 

        var fileGet = require(`./commands/${f}`);
        console.log(`de file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);




    })


});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get(`879420297571340399`);

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get(`881267033109585921`);

    if(!channel) return;


var DMembed = new discord.MessageEmbed()
    .setDescription(`${member} Hallo, leuk dat je in de server bent gekomen!\n\nAls je de game wild bekijken dan kunt u dat doen via deze link: https://www.roblox.com/games/6763236398/Gemeenten-Tilburg-V1-BETA\n\nMocht u willen weten wat alle commands zijn kunt u dat doen via !help.\n\nDe game creator is Lorenzo, de Co-Creator is jesse.`)
    .setColor("#0b03fc")
    .setTimestamp();

return guildMemberAdd.send(DMembed);









})