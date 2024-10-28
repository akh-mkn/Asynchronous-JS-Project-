require('dotenv').config();

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=NdXrQtkBulFxRff7CI9X8saQs68N97Te&q=moon&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)
