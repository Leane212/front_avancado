import { Component, EventEmitter, Input, Output, SimpleChanges, computed, signal } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  @Input() listaDeItens: Item[] = [];
  @Input() showCarrinho: boolean = false;
  @Output() closeCart = new EventEmitter<void>();
  signalItens = signal(this.listaDeItens.filter((item) => item.quant > 0));

  subtotal = computed(() => {
    return this.signalItens().reduce((acc: number, item: Item) => acc + item.preco * item.quant,0);
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listaDeItens']) {this.signalItens.set(this.listaDeItens.filter((item) => item.quant > 0));
    }}

  removeItem(item: Item) {
    this.listaDeItens = this.listaDeItens.map((i) => {if (i.id === item.id) {i.quant = 0;}
      return i;
    });
    this.signalItens.set(this.listaDeItens.filter((item) => item.quant > 0));
  }

  close() {
    this.closeCart.emit();
  }
  
}
