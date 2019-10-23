var http = require('http')

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<meta name="viewport" content="width=device-width,initial-scale=1">')
    res.end('<form method="POST"><button style="width:200px;height:100px;" type="submit">ready</button></form>')
  } else {
    process.exit(0)
  }
}).listen(5000)

