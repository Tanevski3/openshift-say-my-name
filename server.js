// content of index.js
const http = require("http");
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end(`
   ____                      _____ _     _  __ _   
  / __ \\                    / ____| |   (_)/ _| |  
 | |  | |_ __   ___ _ __   | (___ | |__  _| |_| |_ 
 | |  | | '_ \\ / _ \\ '_ \\   \\___ \\| '_ \\| |  _| __|
 | |__| | |_) |  __/ | | |  ____) | | | | | | | |_ 
  \\____/| .__/ \\___|_| |_| |_____/|_| |_|_|_|  \\__|
        | |                                        
        |_|                                        
 `);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
