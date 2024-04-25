import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  camposDoForm: any[] = [];
  valoresDosCampos: any = {};

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getFirstRecord().subscribe((data: any[]) => {
      const primeiroRegistro = data[5];
      this.camposDoForm = Object.keys(primeiroRegistro).map(chave => ({
        tipo: 'text',
        nome: chave,
        rotulo: chave
      }));
      this.valoresDosCampos = primeiroRegistro;
    });
  }
}
