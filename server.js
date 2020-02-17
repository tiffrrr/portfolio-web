var express = require("express"),
    app = express(),
    port = 3080;


app.use('/funplay',express.static( __dirname )) //__dirname表示server.js所在的當前目錄

app.listen(port, function(err) {
    console.log("running server on from port:::::::" + port);
});