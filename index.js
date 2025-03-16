const http  = require("http")
const { stringify } = require("querystring")
let obj  = [
    {
      "id": 1,
      "first_name": "Lionel",
      "last_name": "Messi",
      "photo": "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1000&height=640&rnd=133210253587130000",
      "team": "Paris Saint-Germain",
      "position": "Forward",
      "nationality": "Argentina",
      "date_of_birth": "1987-06-24"
    },
    {
      "id": 2,
      "first_name": "Cristiano",
      "last_name": "Ronaldo",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
      "team": "Al-Nassr",
      "position": "Forward",
      "nationality": "Portugal",
      "date_of_birth": "1985-02-05"
    },
    {
      "id": 3,
      "first_name": "Kevin",
      "last_name": "De Bruyne",
      "photo": "https://www.telegraph.co.uk/content/dam/football/2024/12/05/TELEMMGLPICT000404109727_17333975322140_trans_NvBQzQNjv4BqQfxZo76boe3SUuBqiav7D3ZP3Bl0Q1Wmdwu46wJ5rrc.jpeg?imwidth=680",
      "team": "Manchester City",
      "position": "Midfielder",
      "nationality": "Belgium",
      "date_of_birth": "1991-06-28"
    },
    {
      "id": 4,
      "first_name": "Virgil",
      "last_name": "van Dijk",
      "photo": "https://preview.redd.it/kvlxujus7mb21.png?auto=webp&s=b0d9496d8d0772a7afde878f02a4389445c0a6c3",
      "team": "Liverpool",
      "position": "Defender",
      "nationality": "Netherlands",
      "date_of_birth": "1991-07-08"
    },
    {
      "id": 5,
      "first_name": "Manuel",
      "last_name": "Neuer",
      "photo": "https://cdn.vox-cdn.com/thumbor/G8rXIS_2NW4RnhMoQy-9io5jdzc=/0x0:3696x2464/1200x800/filters:focal(1936x344:2526x934)/cdn.vox-cdn.com/uploads/chorus_image/image/56747449/847957074.0.jpg",
      "team": "Bayern Munich",
      "position": "Goalkeeper",
      "nationality": "Germany",
      "date_of_birth": "1986-03-27"
    }
  ]
const server = http.createServer((req,res)=>{
    res.write(JSON.stringify(obj) )
    res.end("")
})

server.listen(2100,()=>{
    console.log("server running")
})