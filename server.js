var express = required('express');
var path = required('path');
var fs=rquire('fs');
var app=express();

app.get('/',function(req,res){
res.sendfile(path.join(_dirname,"index.html"));
});
app.get('/profile-picture',function (req,res){
var img = fs.readFileSync('profile-1.jpg');
res.writeHead(200,{'Contet-Type':'image/jpg'});
res.end(img,'binary');
});

app.listen(3000, function(){
console.log("app listening on port 3000!");
});
