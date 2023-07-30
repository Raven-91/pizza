import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient) {
  }

  public products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productService.getProducts();

    // this.http.get<{ data: ProductType[] }>('http://testologiaa.site/pizzas?extraField=1')
    //   .pipe(
    //     tap((result) => {
    //       console.log(result);
    //     }),
    //     map((result) => (result.data)),
    //     catchError(error => {
    //       console.log(error);
    //       throw new Error('omg');
    //       // return of([]);
    //     }),
    //     retry(3)
    //   )
    //   .subscribe(
    //     {
    //       next: (data) => {
    //         this.products = data;
    //         console.log('text');
    //       },
    //       error: (error) => {
    //         console.log(error);
    //         this.router.navigate(['/'])
    //       }
    //     }
    //   )

    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
      {
        next: (data) => {
          this.products = data;
          console.log('text');
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/'])
        }
      }
    )
  }

  // public addToCart(title: string): void {
  //  this.cartService.product = title;
  //  // this.router.navigate(['/order']);// вариант с сервисом
  //  // this.router.navigate(['/order', {product: title}]); // вариант через URL № 1
  //  this.router.navigate(['/order'], {queryParams: {product: title}}); // вариант через URL № 2
  // }

}
