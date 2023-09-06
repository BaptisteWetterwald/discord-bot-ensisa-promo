const { Events } = require('discord.js');

const { fetchMenuGeneral } = require('../commands/ensisa/menu');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		
		client.user.setPresence({
			activities: [{ name: "/help" }],
			status: "online",
		});

	},
};
