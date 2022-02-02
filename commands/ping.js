const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('서버의 ping을 확인합니다!'),
    async execute(interaction){
        await interaction.reply("ms");
    },
};
