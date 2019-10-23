#!/usr/bin/env node

var http = require('http')

var html = `
  <title>web-ready</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <form method="POST">
    <button style="width:200px;height:100px;" type="submit">ready</button>
  </form>
`

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  } else {
    process.exit(0)
  }
}).listen(5000)

