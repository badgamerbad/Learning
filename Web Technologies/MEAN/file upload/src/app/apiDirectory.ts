export class ApiDirectory {
    url;
    constructor(){
        this.url = {
            fileDetails: "api/fileDetails",
            fileUpload: "api/fileUpload",
            folders: "api/folders",
            fooUpload: "api/fooUpload"
        }
    }
    getApiDirectory(endpoint){
        return this.url[endpoint];
    }
}