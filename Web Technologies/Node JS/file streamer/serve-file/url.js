const fs = require('fs')
var stream = require('stream')

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message)
})

module.exports = async (req, res) => {
    var url = req.url
    if(url == '/file-xhr'){
        //here the requestType should be array buffer
        const fileData = await new Promise((resolve, reject) => {
            //read the file in any encoding
            fs.readFile('excel.xlsx', 'base64', (err, data) => {
                if(err) reject(err)
                else resolve(data)
            })
        }).catch( (exception) => {
            return exception
        })

        res.writeHead(200)
        res.end(fileData, 'base64')
    }
    else if(url == '/file-non-xhr'){
        const fileData = await new Promise((resolve, reject) => {
            //read the file in any encoding
            fs.readFile('excel.xlsx', 'base64', (err, data) => {
                if(err) reject(err)
                else resolve(data)
            })
        }).catch( (exception) => {
            return exception
        })

        res.writeHead( 
            200, 
            {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
                'Content-disposition': 'attachment; filename=foo.xlsx'
            }
        )
        
        const fileDataBuffer = Buffer.from(fileData, "base64")
        const readStream = new stream.PassThrough()
        readStream.end(fileDataBuffer)
        readStream.pipe(res)
    }
    else if(url == '/client.js') {
        const fileData = await new Promise((resolve, reject) => {
            //read the file in any encoding
            fs.readFile('client.js', (err, data) => {
                if(err) reject(err)
                else resolve(data)
            })
        }).catch( (exception) => {
            return exception
        })
        res.writeHead(
            200, 
            {
                'Content-Type': 'application/ecmascript'
            }
        )
        res.end(fileData)
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(
            `
            <a href="/file-non-xhr">File Non XHR</a>
            <br>
            <button id="fileDownloader">File XHR</button>
            <script src="/client.js"></script>
            `
        )
        res.end()
    }
}