const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then((data) => {
  console.log(`connection to database is successfull ${data.connection.host}`);
});
