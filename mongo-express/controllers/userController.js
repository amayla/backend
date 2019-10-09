let MongoClient = require('mongodb').MongoClient
let Mongo = require('mongodb')
let {url} = require('../database/index')

module.exports = {
    getAllUsers : (req,res) => {
        //mirip seperti mysql create connection yang di export ke db. yang manggilnya db.query
        MongoClient.connect(url,(err,client) => {
            let collection = client.db('latihan_mongo_jc10').collection('users')
            collection.find({}).toArray((err, result) => {
                if (err) throw err
                res.send(result)
                console.log(result)
            })
        })
    },

    getUserById : (req,res) => {
        MongoClient.connect(url,(err,client) => {
            let collection = client.db('latihan_mongo_jc10').collection('users')
            collection.findOne({_id : Mongo.ObjectID('5d9c1353481c7548ad2132c8')},(err, result) => {
                if (err) throw err
                res.send(result)
                console.log(result)
            })
        })
    },
    insertData : (req,res) => {
        let data = {
            username : req.body.username,
            pwd : req.body.password
        }
        MongoClient.connect(url,(err,client) => {
            let collection = client.db('latihan_mongo_jc10').collection('users')
            collection.insertOne(data,(err, result) => {
                if (err) throw err
                res.send(result)
                console.log(result)
            })
        })
    }
}