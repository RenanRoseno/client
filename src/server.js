const express = require("express");

const app = express();

app.use('/', express.static(''))
app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    return console.log(error);
  }
  return console.log("tudo ok");
});
