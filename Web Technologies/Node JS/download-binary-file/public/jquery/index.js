var downloadFileButton = document.getElementById("download-file-button");
downloadFileButton.addEventListener(
    "click", 
    function(event) {
        $.ajax({
            type: "GET",
            url: "/download-file",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/vnd.ms-excel"
            },
            dataType: 'binary',
            success: function (data, statusText, request) {
                var contentDisposition = request.getResponseHeader("Content-disposition");
                var fileName = contentDisposition.replace("attachment; filename=\"", "");
                fileName = fileName.replace("\"", "");
                data.arrayBuffer().then(function(buffer) {
                    try {
                        var blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                        if (navigator.msSaveBlob) {
                            // for Internet explorer
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
                }).catch(function(e) {
                    console.log(e)
                })
            },
            error: function(data, statusText, error){
                console.log(error)
            },
        });
    }
);

$.ajaxTransport("+binary", function (options, originalOptions, jqXHR) {
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob))))) {
        return {
            // create new XMLHttpRequest
            send: function (headers, callback) {
                // setup all variables
                var xhr = new XMLHttpRequest(),
                    url = options.url,
                    type = options.type,
                    async = options.async || true,
                    // blob or arraybuffer. Default is blob
                    dataType = options.responseType || "blob",
                    data = options.data || null,
                    username = options.username || null,
                    password = options.password || null;

                xhr.addEventListener('load', function () {
                    var data = {};
                    data[options.dataType] = xhr.response;
                    // make callback and send data
                    callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
                });

                xhr.open(type, url, async, username, password);

                // setup custom headers
                for (var i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }

                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function () {
                jqXHR.abort();
            }
        };
    }
});