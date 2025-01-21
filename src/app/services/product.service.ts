import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.models';

@Injectable({

providedIn: 'root'
})

export class ProductService{

    private baseUrl = 'http://localhost:3000/api/products';

    constructor(private Http: HttpClient){ }

    



}