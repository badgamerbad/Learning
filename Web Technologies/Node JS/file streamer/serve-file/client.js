const fileDownloader = document.querySelector('#fileDownloader')
fileDownloader.addEventListener('click', () => {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var fileName = 'foo.xlsx'
            var blob = new Blob([xhttp.response], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})
            if(navigator.msSaveBlob){
                //for Internet explorer
                window.navigator.msSaveBlob(blob, fileName);
            }
            else {
                var a = document.createElement("a")
                document.body.appendChild(a)
                a.style = "display: none"
                var url = window.URL.createObjectURL(blob)
                a.href = url
                a.download = fileName
                a.click()
                window.URL.revokeObjectURL(url)
            }
        }
    }
    xhttp.responseType = "arraybuffer"
    xhttp.open("GET", "/file-xhr", true)
    xhttp.send()
})