const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('경태')
        .setDescription('경변'),
    async execute(interaction){
        await interaction.reply(`https://avatars.githubusercontent.com/u/89245391?v=4`);
    },
};