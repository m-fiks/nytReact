// const db = require("../models");

// module.exports = {
//     findAll: function(req,res) {
//         db.Art
//         .find({}).limit(10)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err))
//     },


//     create: function(req, res) {
//         db.Art
//         .create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422))
//     },

//     delete: function(req,res) {
//         db.Art.findByIdAndRemove({_id: req.params.id}, (err, todo) => {
//             if(err){
//               res.status(422).send(err)
//             } else{
//               res.sendStatus(200);
//             }
//           })
//     }
// }