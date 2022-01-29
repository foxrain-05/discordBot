const config = require('./Config.json');
const Discord = require(`discord.js`);


const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () => {
  console.log("디스코드 봇이 준비되었습니다");
});

client.on('message', message => {
    if(message.content === '!hello'){
        message.channel.send(`hello! ${message.author.username}`);
    }
});

client.on('message', message => {
    if(message.content.startsWith('!ping')) {

      message.channel.send(client.ws.ping + ' ms');

      console.log(client.ws.ping);
    }
  });

client.login(config.token);