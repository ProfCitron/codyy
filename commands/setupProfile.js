const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Setup your Coding Profile'),

	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('student')
					.setLabel('Un.e étudiant.e')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('alumni')
					.setLabel('Un.e alumni.e')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('teacher')
					.setLabel('Un.e enseignant.e')
					.setStyle(ButtonStyle.Primary),
			)

		await interaction.reply(
			{
				content: 'Qui es-tu ?',
				components: [row],
				ephemeral: true,
			}
		);

		const filter = (btn) => {
			console.log(btn)
		}
	},
};