import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrl: './lista-itens.component.css'
})
export class ListaItensComponent {
  @Input() itens: Item[] = [];
  @Output() addToCartEvent = new EventEmitter<Item>();

  addToCart(item: Item) {
    this.addToCartEvent.emit(item);
    console.log('Item added to cart');
  }
}
