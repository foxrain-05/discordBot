const { SlashCommandBuilder } = require('@discordjs/builders');
const { lolapikey } = require('../Config.json');
var request = require('request');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('롤')
        .setDescription('소환사 정보를 검색합니다.')
        .addStringOption(option => 
            option.setName('소환사명')
            .setDescription('소환사명을 입력해주세요.')
            .setRequired(true)),

    async execute(interaction){


        const summoner = interaction.options.getString('소환사명');
        const userUrl = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${lolapikey}`;
        const encode_userUrl = encodeURI(userUrl);

        request(encode_userUrl, function(error, response, body){
            if(error){
                console.log(error)
            }
            if(String(response.statusCode) != "200"){
                interaction.reply(`${String(response.statusCode)} Error!`);
            }
            const user_json = JSON.parse(body);
            const uId = user_json.id;
            const gameUrl = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${uId}?api_key=${lolapikey}`;
            request(gameUrl, function(error, response, body){
                if(error){
                    console.log(error)
                }
                if(String(response.statusCode) != "200"){
                    interaction.reply(`${String(response.statusCode)} Error!`);
                }
                const game_json = JSON.parse(body);


            }) 
        })
    }
}; 