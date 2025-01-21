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
    
    getAll(): Observable<Product[]>{
        return this.Http.get<Product[]>(this.baseUrl);
    }

    get(id: number): Observable<Product>{
        return this.Http.get<Product>(`${this.baseUrl}/${id}`);
    }

    create(data: Product): Observable<Product>{

        return this.Http.post<Product>(this.baseUrl, data);
    }

    update(id: number, data: Product): Observable<Product>{

        return this.Http.put<Product>(`${this.baseUrl}/${id}`, data);
    }

    delete(id: number): Observable<any>{

        return this.Http.delete(`${this.baseUrl}/${id}`);
    }
}