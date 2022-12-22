const { Events, Client, CommandInteraction } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	/**
	 * @param {Client} client 
	 * @param {CommandInteraction} interaction
	 */
	run: async (client, interaction) => {
		if (interaction.isChatInputCommand()) {
			await interaction.deferReply({ ephemeral: false });
			const command = interaction.client.commands.get(interaction.commandName);
			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}
			try {
				await command.run(client, interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
	},
};