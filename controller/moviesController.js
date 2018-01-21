var movies = require('./movieData');
var dbService=require('../services/dbservice');

 exports.getAllMovies = function(req,res){
 var db=dbService.database;
var moviescollection=db.collection("movies");
moviescollection.find().toArray().then(function(result){


var opjason={
  "isSuccess":true,
  "data":result
};
   return res.json(opjason);
 });}
 exports.addNewMovie = function(req,res,next){
   var db =dbService.database,
   movie= req.body,
   moviesCollection = db.collection("movies");


   moviesCollection.insert(movie).then(function(save_data){
     return res.json({
       "isSuccess":true
     });
   });
 }
