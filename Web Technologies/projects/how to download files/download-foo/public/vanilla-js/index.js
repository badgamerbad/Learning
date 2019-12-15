var downloadFileButton = document.getElementById("download-file-button");
downloadFileButton.addEventListener(
    "click", 
    function(event) {
        fetch(
            "/download-file",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/vnd.ms-excel"
                },
            }
        ).then(function (response) {
            var contentDisposition = response.headers.get("Content-disposition");
            var fileName = contentDisposition.replace("attachment; filename=", "");
            fileName = fileName.replace(/"/g, "");
            response.arrayBuffer().then(function (buffer) {
                try {
                    var blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                    if (navigator.msSaveBlob) {
                        //for Internet explorer
                        window.navigator.msSaveBlob(blob, fileName);
                    }
                    else {
                        var a = document.createElement("a");
                        document.body.appendChild(a);
                        a.style = "display: none";
                        var url = window.URL.createObjectURL(blob);
                        a.href = url;
                        a.download = fileName;
                        a.click();
                        a.remove();
                    }
                }
                catch (e) {
                    console.log(e);
                }
            });
        })
        .catch(function(e) {
            console.log(e)
        })
    }
);