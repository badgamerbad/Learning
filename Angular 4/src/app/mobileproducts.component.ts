import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsServices } from './product.service';

@Component({
    selector: 'mobile',
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
export class MobileProductsComponent implements OnInit {
    productList:Array<Product>;
    constructor(productService: ProductsServices) { 
        console.log("MobileProductsComponent called");
        this.productList = productService.getProducts();
    }
    ngOnInit() { }
    login():void{
        
    }
}