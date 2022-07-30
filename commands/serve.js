const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serve')
		.setDescription('Check server status'),
	async execute(interaction) {
		await interaction.reply('Server info.');
	},
};