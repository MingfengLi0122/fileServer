const net = require("net");
const fs = require("fs");
const server = net.createServer();

server.on("connection", (client) => {
  //client.setEncoding('utf8');
  
  console.log("New client connected!!!");
  
  client.write('Hello there!');
  
  client.on('data', (data) => {
    fs.readFile('./image/image.jpeg' , (err, data) =>{
      if(!err){
        client.write(data);
        client.end("close", () =>{
         console.log("Image has been sent!");
        })
      }
      else {
        console.log('readfile error!');
      }
    });
  }); 
})

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
