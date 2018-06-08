const commando = require("discord.js-commando");

class SnurraHorHjuletCommand extends commando.Command {
    constructor(client) {
    super(client, {
        name: 'horor',
        group: 'bordell',
        memberName: 'horor',
        description: 'Hur många premium horor du får',
        
    });
}
    async run(message, args) {
        var horor = Math.floor(Math.random() * 999) + 1;
        var horRum = Math.floor(Math.random() * 101) + 1;
        var vaning = Math.floor(Math.random() * 19) + 1;
        message.reply("Du har fått " + horor + " Premium horor som väntar på dig i rum nummer " + horRum + " ," + " våning " + vaning + ".");
    }
        }

module.exports = SnurraHorHjuletCommand;
