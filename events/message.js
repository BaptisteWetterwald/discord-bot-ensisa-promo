const Discord  = require('discord.js');

module.exports = {
	name: Discord.Events.MessageCreate,
	execute(message) {
        if (message.author.bot) return;
    },
};