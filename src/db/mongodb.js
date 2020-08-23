const { MongoClient, ObjectID } = require("mongodb");
const connectionUrl = "mongodb://127.0.0.1:27017";

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log("Error connecting to the database");
  }
  //   client
  //     .db("task-manager")
  //     .collection("tasks")
  //     .findOne({ status: false }, (error, result) => {
  //         console.log(result)
  //     });

  //   client
  //     .db("task-manager")
  //     .collection("tasks")
  //     .find({ status: false })
  //     .toArray((error, data) => {
  //       console.log(data);
  //     });

  client
    .db("task-manager")
    .collection("tasks")
    .updateMany(
      {},
      {
        // $set: {
        //   Name: "anitha",
        // },
        // $inc: {
        //   Age: 20,
        // },
        $set: {
          status: true,
        },
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("Unable to update the data");
    });
});
