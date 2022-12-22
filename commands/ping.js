const { SlashCommandBuilder, Client, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder() 
		.setName('ping')
		.setDescription('Get the bot\'s ping'),
	/**
	 * @param {Client} client 
	 * @param {CommandInteraction} interaction 
	 */
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
            .setTitle('Ping!')
            .setDescription(`${client.ws.ping}ms`)
        await interaction.followUp({ embeds: [embed] })
	},
};