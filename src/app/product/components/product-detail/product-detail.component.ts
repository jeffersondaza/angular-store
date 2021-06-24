import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from '../../../product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // console.log(id);
      // this.product = this.productService.getProduct(id);
      // console.log(this.product);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      })
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg',
      price: 3000,
      description: 'Prro'
    };
    this.productService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      })
  }

  updateProduct(){
    const update: Partial<Product> = {
      title: 'perro desde angular',
      image: 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg',
      price: 999000,
      description: 'perro angular'
    };
    this.productService.updateProduct('222', update)
      .subscribe(product => {
        console.log(product);
      })
  }

  deleteProduct(){
    this.productService.deleteProduct('222')
      .subscribe(product => {
        console.log(product);
      })
  }
}
