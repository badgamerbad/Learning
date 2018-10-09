export class FileStremer{
    file:File;
    offset;
    defaultChunkSize;
    constructor(file){
        this.file = file;
        this.offset = 0;
        this.defaultChunkSize = 64 * 1024; // bytes
        this.rewind();
    }
    rewind(){
        this.offset = 0;
    }
    isEndOfFile() {
        return this.offset >= this.getFileSize();
    }
    readBlockAsBinaryString(length = this.defaultChunkSize){
        const fileReader = new FileReader();
        const blob = this.file.slice(this.offset, this.offset + length);
        return new Promise((resolve, reject) => {
            fileReader.onloadend = (event) => {
                const target = (event.target);
                if(target["error"] == null){
                    const result = target["result"];
                    this.offset += result.length;
                    this.testEndOfFile();
                    const data = {
                        fileContent: result,
                        fileOffset: this.offset
                    }
                    resolve(data);
                }
                else{
                    reject(target["error"]);
                }
            };
            fileReader.readAsBinaryString(blob);
        })
    }
    testEndOfFile(){
        if(this.isEndOfFile()){
            console.log("Done reading file");
        }
    }
    getFileSize(){
        return this.file.size;
    }
}