const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");

app.use(express.static("public"))

app.get("/download-file", (req, res) => {
    const fileData = fs.readFileSync("./redist/dowloadable-file.xlsx");
    res.writeHead(200, {
        "Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-disposition": "attachment; filename=\"dowloadable-file.xlsx\""
    });
    res.end(fileData, "binary");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));