import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.component.html',
  styleUrl: './carrinho-item.component.css'
})
export class CarrinhoItemComponent {
  @Input() item: any;
  @Output() removeFromCartEvent = new EventEmitter<Item>();
  

  removeItem() {
    this.item.quant = 0;
    this.removeFromCartEvent.emit(this.item);
  }
  
}
