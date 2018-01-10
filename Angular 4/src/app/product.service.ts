//service is also a class
import { Product } from './product';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductsServices {
    
    productList:Array<Product>;
    constructor(){
        console.log("ProductsServices called");
        this.productList = new Array<Product>();
        let p1 = new Product(1,"MotoG4","Mobiles",24000,"images/1.jpg");
        let p2 = new Product(2,"SonyDSC","Camera",64000,"images/2.jpg");
        let p3 = new Product(3,"Lenovo110","Laptops",54000,"images/3.jpg");
        let p4 = new Product(4,"Xiomi55454545","Mobiles",14999,"images/4.jpg");
        let p5 = new Product(5,"Samsung Galaxy","Mobiles",44000,"images/5.jpg");
        this.productList.push(p1);
        this.productList.push(p2);
        this.productList.push(p3);
        this.productList.push(p4);
        this.productList.push(p5);
    }   
    getProducts():Array<Product>{
        return this.productList;
    };
}