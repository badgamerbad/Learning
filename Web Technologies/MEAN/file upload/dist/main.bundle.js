webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiDirectory.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiDirectory = /** @class */ (function () {
    function ApiDirectory() {
        this.url = {
            fileSize: "api/fileSize",
            fileUpload: "api/fileUpload",
            folders: "api/folders"
        };
    }
    ApiDirectory.prototype.getApiDirectory = function (endpoint) {
        return this.url[endpoint];
    };
    return ApiDirectory;
}());
exports.ApiDirectory = ApiDirectory;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#progress_bar{\r\n    height: 10px;\r\n    margin-top: 20px;\r\n    width: 0%;\r\n    background: #3C989E;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngFor=\"let folder of folders\" (click)=\"getFoldersByParent(folder._id)\">{{folder.name}}</li>\r\n</ul>\r\n<li *ngFor=\"let power of powers\">{{power}}</li>\r\n<form #createFolderForm=\"ngForm\" (ngSubmit)=\"createFolder()\">\r\n  <label>Name</label>\r\n  <input type=\"text\" name=\"name\" placeholder=\"Hero Name\" [(ngModel)]=\"form_folder_name\">\r\n  <input type=\"text\" name=\"powers\" placeholder=\"Hero powers\" [(ngModel)]=\"form_folder_powers\">\r\n  <input type=\"submit\" value=\"Submit\">\r\n</form>\r\n<br>\r\n<input type=\"file\" name=\"file\" placeholder=\"Hero Files\" (change)=\"changeFileEvent($event)\">\r\n<input type=\"button\" value=\"Upload File\" (click)=\"uploadFile()\">\r\n<div id=\"progress_bar\" [ngStyle]=\"{'width': progress}\"></div>\r\n<p>Progress: {{progress}}</p>\r\n<div *ngIf=\"errorObject.status == 404\">\r\n  <ul>\r\n    <li>Status: {{errorObject.status}}</li>\r\n    <li>Message: {{errorObject.message}}</li>\r\n    <li>Status Text: {{errorObject.statusText}}</li>\r\n    <li>Url: {{errorObject.url}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var fileStreamer_1 = __webpack_require__("./src/app/fileStreamer.ts");
var apiDirectory_1 = __webpack_require__("./src/app/apiDirectory.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_appService) {
        this._appService = _appService;
        this.errorObject = {};
        this._apiDirectory = new apiDirectory_1.ApiDirectory();
        this.form_folder_name = "";
        this.form_folder_powers = "";
        this.progress = "0%";
        this.getRootFolders();
    }
    AppComponent.prototype.getRootFolders = function () {
        var _this = this;
        this._appService.asynchronousGet(this._apiDirectory.getApiDirectory("folders")).subscribe(function (res) { return _this.folders = res; }, function (error) { return _this.errorObject = error; });
    };
    AppComponent.prototype.getFoldersByParent = function (parent) {
        var _this = this;
        this._appService.asynchronousGet(this._apiDirectory.getApiDirectory("folders") + '/' + parent).subscribe(function (res) { return _this.powers = res.powers; }, function (error) { return _this.errorObject = error; });
    };
    AppComponent.prototype.createFolder = function () {
        var _this = this;
        var formData = {
            name: this.form_folder_name,
            powers: this.form_folder_powers
        };
        this._appService.asynchronousPost(this._apiDirectory.getApiDirectory("folders"), formData).subscribe(function (res) { return _this.folders = res; }, function (error) { return _this.errorObject = error; });
    };
    AppComponent.prototype.changeFileEvent = function ($event) {
        if ($event.target.files[0]) {
            this.file = $event.target.files[0];
        }
        else {
            console.log('please!');
        }
    };
    AppComponent.prototype.uploadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData, tokenId, fileStreamer, data, formData_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        this.progress = "0%";
                        formData = {
                            fileSize: this.file.size
                        };
                        return [4 /*yield*/, this._appService.synchronousPost(this._apiDirectory.getApiDirectory("fileSize"), formData)];
                    case 1:
                        tokenId = _a.sent();
                        fileStreamer = new fileStreamer_1.FileStremer(this.file);
                        _a.label = 2;
                    case 2:
                        if (!!fileStreamer.isEndOfFile()) return [3 /*break*/, 4];
                        return [4 /*yield*/, fileStreamer.readBlockAsBinaryString()];
                    case 3:
                        data = _a.sent();
                        formData_1 = {
                            tokenId: tokenId,
                            fileContent: data["fileContent"],
                            fileOffset: data["fileOffset"]
                        };
                        this._appService.asynchronousPost(this._apiDirectory.getApiDirectory("fileUpload"), formData_1).subscribe(function (res) {
                            if (res["ok"] == 0) {
                                _this.progress = res["percentComplete"] + "%";
                            }
                        }, function (error) { return _this.errorObject = error; });
                        return [3 /*break*/, 2];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_1.appService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [app_service_1.appService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var throw_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({})
};
var appService = /** @class */ (function () {
    function appService(_http) {
        this._http = _http;
    }
    appService.prototype.handleError = function (error) {
        if (error.error && error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return throw_1._throw({
            message: error.message,
            status: error.status,
            statusText: error.statusText,
            url: error.url
        });
    };
    appService.prototype.asynchronousGet = function (url) {
        return this._http.get(url).pipe(operators_1.catchError(this.handleError));
    };
    ;
    appService.prototype.synchronousGet = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(url).subscribe(function (res) { return resolve(res); }, function (error) { return reject(error); });
        });
    };
    appService.prototype.asynchronousPost = function (url, formData) {
        return this._http.post(url, formData).pipe(operators_1.catchError(this.handleError));
    };
    appService.prototype.synchronousPost = function (url, formData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(url, formData).subscribe(function (res) { return resolve(res); }, function (error) { return reject(error); });
        });
    };
    appService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], appService);
    return appService;
}());
exports.appService = appService;


/***/ }),

/***/ "./src/app/fileStreamer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileStremer = /** @class */ (function () {
    function FileStremer(file) {
        this.file = file;
        this.offset = 0;
        this.defaultChunkSize = 64 * 1024; // bytes
        this.rewind();
    }
    FileStremer.prototype.rewind = function () {
        this.offset = 0;
    };
    FileStremer.prototype.isEndOfFile = function () {
        return this.offset >= this.getFileSize();
    };
    FileStremer.prototype.readBlockAsBinaryString = function (length) {
        var _this = this;
        if (length === void 0) { length = this.defaultChunkSize; }
        var fileReader = new FileReader();
        var blob = this.file.slice(this.offset, this.offset + length);
        return new Promise(function (resolve, reject) {
            fileReader.onloadend = function (event) {
                var target = (event.target);
                if (target["error"] == null) {
                    var result = target["result"];
                    _this.offset += result.length;
                    _this.testEndOfFile();
                    var data = {
                        fileContent: result,
                        fileOffset: _this.offset
                    };
                    resolve(data);
                }
                else {
                    reject(target["error"]);
                }
            };
            fileReader.readAsBinaryString(blob);
        });
    };
    FileStremer.prototype.testEndOfFile = function () {
        if (this.isEndOfFile()) {
            console.log("Done reading file");
        }
    };
    FileStremer.prototype.getFileSize = function () {
        return this.file.size;
    };
    return FileStremer;
}());
exports.FileStremer = FileStremer;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map