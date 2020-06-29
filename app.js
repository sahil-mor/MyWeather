var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var apiKey = "";//write your own apikey here


app.get("/",function(req,res){
    city = "Jind";
    url = "http://api.openweathermap.org/data/2.5/forecast?apikey=" + apiKey + "&q="
    url += city + "&mode=json";
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedCityDetails = JSON.parse(body);
            data = parsedCityDetails;
            res.render("index",{ data : parsedCityDetails})
        }
        else{
            console.log(error)
            res.render("404error")
        }
    })
})

app.post("/weather",function(req,res){
    city = req.body.city;
    url = "http://api.openweathermap.org/data/2.5/forecast?apikey=" + apiKey + "&q="
    url += city + "&mode=json";
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedCityDetails = JSON.parse(body);
            res.render("index",{ data : parsedCityDetails})
        }
        else{
            console.log(error)
            res.render("404error")
        }
    })
})

app.get("/*",(req,res) => {
    res.render("404error")
})

app.listen(3000,function(){
    console.log("Weather app server is started at 3000")
})