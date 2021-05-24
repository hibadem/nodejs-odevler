const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url;
    switch (url) {
        case '/':
            res.writeHead('200',{"Content-Type":"text/html"})
            res.write('<h2>Index Sayfasi</h2>')
            break;
        case '/hakkimda':
            res.writeHead('200',{"Content-Type":"text/html"})
            res.write('<h2>Hakkimda Sayfasi</h2>')
            break;
        case '/iletisim':
            res.writeHead('200',{"Content-Type":"text/html"})
            res.write('<h2>İletisim Sayfasi</h2>')
            break;
        default:
            res.writeHead('404',{"Content-Type":"text/html"})
            res.write('<h2>404 Not Found Sayfasi</h2>')
            break;
    }
    res.end();
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Sunucu port ${PORT} de başlatıldı.`)
})