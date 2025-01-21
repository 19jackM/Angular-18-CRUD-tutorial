import { Component, isStandalone, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Models/product.models';


@Component({
selector: 'app-product-list',
standalone: true,
imports: [CommonModule, RouterModule],

})

export class ProductListComponent implements OnInit{
products: Product[] = [];
    productsService: any;

constructor(private productService: ProductService) {}

ngOnInit(): void {
    this.loadProducts();
}

loadProducts(): void {
    this.productsService.getAll().subscribe({
    next: (data) => {
    this.products = data;
},

error: (e) => console.error(e),
});
}

deleteProduct(id: number): void{
    if(confirm('Are you sure you want delete this item?')){
        this.productService.delete(id).subscribe({
        next: () =>{
            this.loadProducts();
        },
        
        error: (e) =>console.error(e),


    });
}
}
}