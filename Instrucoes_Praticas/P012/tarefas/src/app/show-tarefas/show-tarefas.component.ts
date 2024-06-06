import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../tarefa.model';
import { FormsModule } from '@angular/forms';
import { TarefaStore } from '../store/tarefa.store';


@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent {
  editandoId: string | null = null;
  descricaoEditando: string = '';
  tarefas: Tarefa[] = [];

  readonly TarefaStore = inject(TarefaStore);
  

  constructor() {
    this.tarefas = this.TarefaStore.tarefas();
  }

  removeTarefa(id: string) {
    this.TarefaStore.removerTarefa(id);
  }

  iniciarEdicao(tarefa: Tarefa) {
    this.editandoId = tarefa.id;
    this.descricaoEditando = tarefa.descricao;
  }

  salvarEdicao(tarefa: Tarefa) {
    this.TarefaStore.editarTarefa({ ...tarefa, descricao: this.descricaoEditando });
    this.editandoId = null;
  }

  cancelarEdicao() {
    this.editandoId = null;
  }
}
