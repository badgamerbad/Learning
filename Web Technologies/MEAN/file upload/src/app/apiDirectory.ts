export class ApiDirectory {
    url;
    constructor(){
        this.url = {
            fileSize: "api/fileSize",
            fileUpload: "api/fileUpload",
            folders: "api/folders"
        }
    }
    getApiDirectory(endpoint){
        return this.url[endpoint];
    }
}