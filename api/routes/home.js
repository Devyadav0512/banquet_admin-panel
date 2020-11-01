const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({ 
    storage: storage
});

const Home = require('../models/home');

router.get('/getdata', (req, res, next) => {
    Home.find()
    .exec()
    .then(docs => {
        const response = {            
            hometext: docs[0].hometext,
            homebutton: docs[0].homebutton,
            homepic: docs[0].homepic
        };
        if(docs.length >0){
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'No entries found'
            });
        }        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

// router.post('/submitdata', upload.single('homepic'), (req, res, next) => {
//     const home = new Home({
//         _id: new mongoose.Types.ObjectId(),
//         hometext: req.body.hometext,
//         homebutton: req.body.homebutton,
//         homepic: req.file.path
//     });
//     home.save().then(result => {
//         res.status(201).json({
//             message: "Uploaded Successfully"
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({error: err});
//     });
// });

router.patch('/updatedata', upload.single('homepic'),  (req, res, next) => {
    const id = "5f97086bb7ca0aaacaa586e9";
    const updateOps = {};
    if(req.body.hometext){
        updateOps.hometext = req.body.hometext
    }
    if(req.body.homebutton){
        updateOps.homebutton = req.body.homebutton
    }
    if(req.file){
        updateOps.homepic = req.file.file.name
    }
    Home.update({_id: id}, {$set: updateOps}).exec()
    .then(
        res.status(200).json({
            message: "Updated Successfully"
        })
    )
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;