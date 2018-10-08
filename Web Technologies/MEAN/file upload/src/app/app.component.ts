import { Component } from '@angular/core';

import { appService } from './app.service';

import { Result } from './result.interface';

import { FileStremer } from './fileStreamer';

import { ApiDirectory } from './apiDirectory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  folders: Array<Result>;
  powers: Array<String>;
  images: Array<String> = [];
  errorObject = {};
  file:File;
  _apiDirectory = new ApiDirectory();
  form_folder_name:String = "";
  form_folder_powers:String = "";

  progress:String = "0%";

  constructor(private _appService: appService) {
    this.getRootFolders();
  }
  getRootFolders(){
    this._appService.asynchronousGet(this._apiDirectory.getApiDirectory("folders")).subscribe(
      res => this.folders = res,
      error => this.errorObject = error
    );
  }
  getFoldersByParent(parent){
    this._appService.asynchronousGet(this._apiDirectory.getApiDirectory("folders") + '/' + parent).subscribe(
      res => this.powers = res.powers,
      error => this.errorObject = error
    );
  }
  createFolder(){
    var formData = {
      name: this.form_folder_name,
      powers: this.form_folder_powers
    }
    this._appService.asynchronousPost(this._apiDirectory.getApiDirectory("folders"), formData).subscribe(
      res => this.folders = res,
      error => this.errorObject = error
    );
  }
  changeFileEvent($event){
    if($event.target.files[0]){
      this.file = $event.target.files[0];
    }
    else{
      console.log('please!');
    }
  }
  async uploadFile(){
    try{
      this.progress = "0%";
      const formData = {
        fileSize: this.file.size,
        fileName: this.file.name
      }
      const tokenId = await this._appService.synchronousPost(this._apiDirectory.getApiDirectory("fileDetails"), formData);
      
      const fileStreamer = new FileStremer(this.file);
      while(!fileStreamer.isEndOfFile()){
        const data = await fileStreamer.readBlockAsBinaryString();
        const formData = {
          tokenId: tokenId,
          fileContent: data["fileContent"],
          fileOffset: data["fileOffset"]
        }
        this._appService.asynchronousPost(this._apiDirectory.getApiDirectory("fileUpload"), formData).subscribe(
          res => {
            if(res["ok"] == 0){
              this.progress = res["percentComplete"] + "%"
            }
          },
          error => this.errorObject = error
        );
      } 
    }
    catch(e){
      console.log(e);
    }
  }
}