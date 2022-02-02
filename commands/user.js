const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('사용자')
        .setDescription('사용자의 정보를 봅니다!'),
    async execute(interaction){
        await interaction.reply(`사용자 태그: ${interaction.user.tag}\n사용자 id: ${interaction.user.id}`);
    },
};