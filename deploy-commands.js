const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require("@discordjs/rest");
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./Config.json');

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('pong!'),
    new SlashCommandBuilder().setName('서버').setDescription('서버의 이름 보내기')
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9'}).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Successfully'))
    .catch(console.error);
