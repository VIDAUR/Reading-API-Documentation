/*
  API #2 - TV Maze API
          https://www.tvmaze.com/api
*/


//========================================================================
//  (1) What is the *score* for the show Narcos?
//     - hint: you will need to use the 'Show Search'


const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

request.get('http://api.tvmaze.com/search/shows?q=Narcos')
  .then(function(serverRes){
    const apiData = serverRes.body

    // console.log(apiData[0].score)
    var scoreNarcos = apiData[0].score
    

    // note, put your answer on the dom element for this porblem
    answerElement_tvmaze_1.innerHTML = scoreNarcos
  })


//========================================================================
//  (2) How many episodes have been made for 'The Simpsons'?
//    - hint: you will need to use the 'Show search' to query
//           and find the id for the show the-simpsons,
//           Nextyou will need to query the api's endpoint for 'Show episode list'


const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

request.get('http://api.tvmaze.com/shows/83/episodes')
  .then(function(serverRes){
    const apiData = serverRes.body

    // console.log(apiData.length)
    var numEpisodes = apiData.length
    
    // note, put your answer on the dom element for this porblem
   answerElement_tvmaze_2.innerHTML = numEpisodes
  })


//========================================================================
//  (3) When was the premiere date for the 9th season of Friends?
//    - hint: you will need to use the 'Show search' to query
//           and find the id for the show Friends,
//           Nextyou will need to query the api's endpoint for 'Show seasons'


const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request.get('http://api.tvmaze.com/shows/431/seasons')
  .then(function(serverRes){
    const apiData = serverRes.body

    // console.log(apiData[8].premiereDate)
    var date = apiData[8].premiereDate
    
    // note, put your answer on the dom element for this porblem
   answerElement_tvmaze_3.innerHTML = date
  })

//========================================================================
//  (4) How many shows has actor Andrew Lincoln (of the Walking Dead) appeared in?
//       - hint: you will need to get the id of the actor with a 'People Search'
//               in the query parameter, you will need to format the space with a dash ('andrew-lincoln')
//               next you will need to search the Cast Credits endpoint

const answerElement_tvmaze_4 = document.getElementById('tvmaze-4')

request.get('http://api.tvmaze.com/people/10257/castcredits')
  .then(function(serverRes){
    const apiData = serverRes.body

    // console.log(apiData.length)
    var shows = apiData.length
    
    // note, put your answer on the dom element for this porblem
   answerElement_tvmaze_4.innerHTML = shows
  })