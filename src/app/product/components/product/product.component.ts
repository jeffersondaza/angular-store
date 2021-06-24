import { Component,
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    OnInit, DoCheck, 
    OnDestroy } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent{
    // product: Product={
    //     id: "1",
    //     image: 'assets/images/perro.jpg',
    //     title: 'Perro fiel',
    //     price: 450,
    //     description: 'Buen perro'
    // };

    @Input() product!: Product;
    @Output() productoClicked: EventEmitter<any> = new EventEmitter;

    today = new Date();

    constructor() {
        console.log("constructor")
    }

    //ver el estado anterior y el estado actual del producto
    ngOnChange(changes: SimpleChange) {
        console.log('OnChanges');
        console.log(changes);
    };
    //se ejecuta al inicializar y es cuanto el componente ya esta en pantalla
    // ngOnInit() {
    //     console.log('ngOnInit');
    // };
    // //se ejecuta al inicializar 
    // ngDoCheck() {
    //     console.log('ngDoCheck');
    // };
    // //se ejecuta al inicializar 
    // ngOnDestroy() {
    //     console.log('ngOnDestroy');
    // };
    addCart() {
        console.log("Añadido al carrito");
        this.productoClicked.emit(this.product.id);
    };

    
}