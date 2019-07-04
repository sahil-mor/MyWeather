var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var apiKey = "";//write your own apikey here

app.get("/",function(req,res){
    res.render("home.ejs")
})

app.post("/locationAPI",function(req,res){
    city = req.body.city;
    console.log("City - " + city)
    url = "http://api.apixu.com/v1/forecast.json?key=" + apiKey + "&q="
    url += city;
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedCityDetails = JSON.parse(body);
            res.render("WeatherData.ejs",{Data : parsedCityDetails})
        }
        else
            res.send("error");
    })
})

app.listen(1000,function(){
    console.log("Weather app server is started")
})
