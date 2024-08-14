var express = require('express')
var mongodb = require('mongodb')
var objectId=mongodb.ObjectId;
var router = express.Router();
var getDB = require('../common/dbConn')
//To update the data in DB use the post methode
router.post("/register", async function (req, res, next) {// req received
    try {
        const data = req.body.data;
        const db = await getDB();
        const collection = db.collection('students')
        const result = await collection.insertOne(data)
        res.send(result)

    } catch (ex) {
        res.send(ex.message);
    }
})
//To retrive the data from the DB use the get methode
router.get('/get-std', async function (req, res, next) {
    try {
        const db = await getDB();
        const collection = db.collection('students');
        const result = await collection.find().toArray()
        res.send(result);

    } catch (ex) {
        res.send(ex.message);
    }
})
//To update any document or id in DB through put methode
router.put('/update-std', async function(req,res,next){
   try{ var id=req.query.id;
    var data=req.body.data;
    var db= await getDB()
    var collection=db.collection('students')
    var result=await collection.updateOne({_id: objectId.createFromHexString(id)},{$set:data})
    res.send(result)
   }catch(ex){
    console.error(ex)
    res.send(ex)
   }

})
//To delete the data in the DB using the delete methode
router.delete('/delete-std/:id',async function(req,res,next){
try{
    var id=req.params.id;
    var db= await getDB()
    var collection=db.collection("students")
    var result=await collection.deleteOne({_id:objectId.createFromHexString(id)})
    res.send(result)

}catch(ex){
    console.error(ex);
    res.send(ex)
}

})
module.exports = router;