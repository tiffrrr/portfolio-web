var http = require('http');  
http.createServer(function(req,res){   
    if(req.url == "/"){ 
        //res 送出回應
        res.writeHead(200,{'Content-Type':'text/html'});  
        res.write("nodeJS hello world");
        res.end()
    } else if(req.url=='/test'){   //輸入http://localhost:8080/test看到的
        res.writeHead(200,{'Content-Type':'text/html'});  
        res.end('nodeJS test page ')
    }
}).listen(8080);  
console.log('Server running ');  
