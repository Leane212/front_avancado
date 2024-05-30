import { Component, signal } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrinho';
  showCarrinho = false;

  itens: Item[] = [
    {
      id: 1,
      nome: 'Reator CSTR',
      descricao: 'Reator Zhanghua CSTR Fabricante 30L-32000L Reator Jaquetado de Aço Inoxidável para Vaso de Pressão',
      preco: 50.000,
      quant: 0,
      imgURL:
        'https://imgbd.weyesimg.com/prod/moving/img/f0ac0be867b71cd596ef3f7038e2af99/2917020c6c0ab5b1dc910ce20b8da6b2.jpg?x-oss-process=image/resize,m_lfit,w_768/format,webp/quality,80',
    },
    {
      id: 2,
      nome: 'Reator Batelada',
      descricao: 'Reator Autoclave de Alta Pressão com Agitação - 100ml e 250ml',
      preco: 20.000,
      quant: 0,
      imgURL:
        'https://cdn.tennessine.com.br/image/cache/catalog/Departamentos/Reatores%20e%20Autoclaves/Reatores%20em%20Batelada/Reator%20Autoclave%20de%20Alta%20Press%C3%A3o%20com%20Agita%C3%A7%C3%A3o%20(1)-600x400.jpg',
    },
    {
      id: 3,
      nome: 'Reator PFR',
      descricao: ' 50L até 20.000L (modelos superiores sob consulta)',
      preco: 5.000,
      quant: 0,
      imgURL:
        'https://www.stamixco-usa.com/Images/products/enlarge/P-13.0)%20Plug-Flow-Reactor-Static-Mixer.jpg',
    },
    
  ];

  signalItens = signal(this.itens);

  onAddToCart(item: Item) {
    const newItens = this.itens.map((i) => {
      if (i.id === item.id) {
        return {...i, quant: i.quant ,};
      }
      return i;
    });
    this.itens = newItens;
    this.signalItens.set(this.itens);
  }

  toggleCart() {
    this.showCarrinho = !this.showCarrinho;
  }
  closeCart() {
    this.showCarrinho = false;
  }
  
}
