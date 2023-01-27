const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is out home page")
    }

    if(req.url === '/chaitanya'){
        res.end("Chaitanya ki chaala anyayam jarigindhi")
    }

    res.end(
        `
        <h1>Oops, Cannot find it</h1>
        <p>It's not u it's us!</p>
        <a href="/">Click here to go back</a>
        `

    )
})


server.listen(5000)

