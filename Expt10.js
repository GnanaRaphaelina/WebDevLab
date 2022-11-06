const http=require('http');
const fs=require('fs');
const server = http.createServer(function(req,res){
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream('Megaplay.html').pipe(res);

    }
    else if(req.url === '/megaplay' && req.method == 'POST'){
        var rawData = '';
        req.on('data',function(data){
            rawData+=data;
        })
        req.on('end',function(){
            var inputdata = new URLSearchParams(rawData);
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write('<h1>Data entered by the user</h1><hr>')
            res.write('Name: '+inputdata.get('nm')+'<br>')
            res.write('Register Number: '+inputdata.get('reg')+'<br>')
            res.write('Year of Study: '+inputdata.get('year')+'<br>')
            res.write('Department: '+inputdata.get('dept')+'<br>')
            res.write('Type of Event: '+inputdata.get('eve[]'))
            res.write('<hr>')
            res.end();
        });

    }
});
server.listen(2000,function(){
    console.log('listening at 2000')
})
