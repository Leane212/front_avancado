import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: Item = {} as Item;
  quantity = 1;  // Defina um valor inicial para a quantidade
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @Output() addItemEvent = new EventEmitter<Item>();

  addToCart() {
    const itemModified = { ...this.item, quant: this.quantity };
    this.addItemEvent.emit(itemModified);
    console.log('Item added to cart');
  }
}
