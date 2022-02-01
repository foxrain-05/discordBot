const { Client, Intents, Interaction } = require(`discord.js`);
const { token } = require('./Config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () =>{
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName == 'ping'){
      await interaction.reply("hello world");
    } else if(commandName == '경태'){
      await interaction.reply('.');
    }
});

client.login(token);
