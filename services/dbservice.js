var MongoClient=require('mongodb').MongoClient;
exports.createConnection =function(){
  MongoClient.connect("mongodb://hem147:hem147@ds111258.mlab.com:11258/projector").then(function(client){
    console.log("Db success");
    exports.database=client.db("projector");
    console.log("connected to projector");

  });


}
