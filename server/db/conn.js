// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let _db;

// module.exports = {
//   connectToServer: function (callback) {

//     try {
//       client.connect()
//     } catch (error) {
//       console.log(error);
//     }
//     _db = client.db("employees");
//     return (_db === undefined ? false : true);
//   },
//   getDb: function () {
//     return _db;
//   },
// };
