import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.models';

Injectable({

providedIn: 'root'
})

export class ProductService{

private baseUrl = 'http://localhost:3000/api/products';

constructor(private http: HttpClient) { }

getAll(): Observable<Product>[]{
return this.http.get<Product[]>(this.baseUrl)
}

get(): Observable<Product> {
return this.http.get<Product>(`${this.baseUrl}/${id});
}

create(data: product): Observable<Product> {
return this.http.post<Product>(this.baseUrl, data);
}

update(id: number: Product): Observable<Product>{
return this.http.put<Product>(`${this.baseUrl}/${id}`, data);
}

delete(id: number:): Observable<any> {
return this.http.delete(`${this.baseUrl}/${id}`, data);
}

}