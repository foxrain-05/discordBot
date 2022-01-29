const config = require('./Config.json');
const Discord = require(`discord.js`);
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const {joinVoiceChannel, getVoiceConnection} = require('@discordjs/voice');

client.once('ready', () => {
  console.log("디스코드 봇이 준비되었습니다");
});

client.on('message', message => {
  if(message.content === '!들어와') {
      joinVoiceChannel({
          channelId: message.member.voice.channel.id,
          guildId: message.guild.id,
          adapterCreator: message.guild.voiceAdapterCreator
      })
  } if(message.content === '!나가') {
    const connection = getVoiceConnection(message.guild.id);
    connection.destroy();
  }
});


client.on('messageCreate', message => {

    if (message.author.bot) return;


    if(message.content.startsWith("!img")){
      message.channel.send(message.author.displayAvatarURL());
    }

    if(message.content.startsWith('!ping')){
        message.channel.send(client.ws.ping + ' ms');
    }

    if(message.content === '!hello'){
        message.channel.send(`hello! ${message.author.username}`);
    }

    if(message.content === "!경태"){
        message.channel.send('https://avatars.githubusercontent.com/u/89245391?v=4');
    }
});

client.login(config.token);

