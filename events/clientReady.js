const { Events, Client } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	/**
	 * @param {Client} client 
	 */
	run: async (client) => {
		console.log(`${client.user.tag} is online!`);
	},
};