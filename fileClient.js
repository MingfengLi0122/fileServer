const net = require("net");
const fs = require("fs");

const conn = net.createConnection({
  host: "2.tcp.ngrok.io",
  port: 16526
});

conn.on('connect', () => {
  console.log("connect from client");
  conn.write('Hello from client!');
});
let dataArr = [];

conn.on('data', (data) => {
  console.log("data", data);
  dataArr.push(data);

});

conn.on("close", ()=> {
  console.log("trans end!");
  console.log("dataArr.length:", dataArr.length);
  const buffer = Buffer.concat(dataArr);

  fs.writeFile("./image/pikaqu.jpeg", buffer, "binary", (error) => {
    if (!error) {
      console.log("Image has been stored!");
    } else {
      console.log("writeFile error!")
    }
  })
});
