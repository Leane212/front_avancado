import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { apiResolver } from './api.resolver';

const routes: Routes = [
  {path: "ListarPaises", component: ListaPaisesComponent,
title: "Api Lista de Paises", 
resolve:{paises:apiResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 

}
