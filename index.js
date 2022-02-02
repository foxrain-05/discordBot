const { Client, Intents } = require(`discord.js`);
const { token } = require('./Config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () =>{
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName == 'ping'){
      await interaction.reply(`${client.ws.ping}ms`);
    } else if(commandName == '서버'){
      await interaction.reply(`${interaction.guild.name}`);
    }
});

client.login(token);
