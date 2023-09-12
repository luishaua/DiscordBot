const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('check')
        .setDescription('responde se o bot ta funcionando'),

    async execute(interaction) {
        await interaction.reply('Tudo em ordem!')
    }
}