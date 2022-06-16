const mongoose = require("mongoose");
const connection = mongoose
  .connect(
    "mongodb+srv://modesensproj:projmodesens@cluster0.xcwtnsl.mongodb.net/?retryWrites=true&w=majority"
    //   {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //   }
  )
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => console.log("no connection"));
module.exports = connection;
