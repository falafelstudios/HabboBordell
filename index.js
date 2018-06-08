//Saker
const commando = require("discord.js-commando");
const bot = new commando.Client();
bot.login("NDUyMTQ1ODQwMTgyNzg4MTA2.DfMGNQ.r0YB738daCMSISirBRJ-RmPGXD8");
owner: '452815382722379776',
// a b ø w 
bot.registry.registerGroup('bordell', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
