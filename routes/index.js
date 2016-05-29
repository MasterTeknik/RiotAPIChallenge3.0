var express = require('express');
var router = express.Router();

//league api call
var LolApi = require('leagueapi');
// League stuff here
LolApi.init('d56dc30e-a06e-4291-9f89-776379cf0452', 'na');


var summonerName = 'schman58';
var summonerID;

var championId;
var championName;

//champion stuff here


LolApi.Summoner.getByName(summonerName.toString())
.then(function (summoner) {
    console.log(summoner.schman58.id);
    //render stuff????
    summonerID = summoner.schman58.id;
});


LolApi.ChampionMastery.getChampions( '37039953', function(err, champs){

	// for (var i = 0; i < champs.length; i++) {
	// 	// console.log(champs[i].championId);

	// 	// var champName = getChampionName(champs[i].championId);
	// 	console.log('Champion:');
	// 	// getChampionName(champs[i].championId);
	// 	console.log(champs[i].championPoints);
		
	// };
	console.log(champs);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Riot API Challenge', 
  	summonerID: summonerID,

  });

});






//The wrapper also accepts promises:


function getSummonerID(){

	var ID = "JHBASDHGS"

	LolApi.Summoner.getByID(37039953)
	.then(function (summoner) {
	    console.log(summoner);
	    //render stuff????
	    summonerID = summoner;
	});

	return summonerID[0];
}





//router
module.exports = router;