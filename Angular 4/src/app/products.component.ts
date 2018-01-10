import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsServices } from './product.service';

@Component({
    selector: 'product',
    template: `
        <h2>List of Products</h2>
        Search: <input type="text" #search (keyup)="validate(search.value)">{{search.value}}
        <br>
        <table border=1>
            <tr *ngFor="let product of productList; let i=index;">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td *ngIf="isAdmin"><button (click)="remove(i)">Delete</button></td>
                <td><img [src]="product.imgPath></td>   
                <td><button [disabled]="!isAdmin">Edit</button></td> 
            </tr>
        </table>
    `,
    styles: [
        `img {
            height: 100px;
            width: 200px;
        }`
    ],
    providers: [ProductsServices]
})
 
export class ProductsComponent{
    //model for the data
    isAdmin:boolean=false; //Ideally set by loginComponent
    productList:Array<Product>;
    //private makes it local varable and auto adds as reference
    constructor(private productService: ProductsServices){
        console.log("ProductsComponent called");
        this.productList = productService.getProducts();
        //this.productService = productService;
    }
    remove(index:number):void{
        //delete the items from array
        this.productList.splice(index, 1); 
    }
    validate(searchKey:string){
        console.log("searchKey : " + searchKey); 
    }
    ngOnInit(){
        //invoked after constructor is called
        this.productList = this.productService.getProducts();
    }
}