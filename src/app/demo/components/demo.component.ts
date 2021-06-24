import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  ngOnInit(){
    
  }

  title = 'platzi-store';
  items = ["Prro", "Gato", "Tortuga"];
  addItem(item: string) {
    this.items.push(item);
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  power = 10;
}
