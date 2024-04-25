import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrl: './lista-paises.component.css'
})
export class ListaPaisesComponent implements OnInit{
  paises: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getPaises().subscribe((data) => {
      this.paises = data;
    });
  }
}
