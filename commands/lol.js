const { SlashCommandBuilder } = require('@discordjs/builders');
const { lolapikey } = require('../Config.json');
var request = require('request');
const user = require('./user');

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
        console.log(encode_userUrl);
        request(encode_userUrl)
        .on("error", function(error){
            console.log(error)
        })
        .on("response", function(response){
            interaction.reply(String(response.statusCode));
        })
        .on("body", function(body){
        })
    }
}; 