import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaState } from '../store/tarefa.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectorSelecionaTarefa } from '../store/tarefa.seletors';
import { Tarefa } from '../tarefa.model';
import { removerTarefa, editarTarefa } from '../store/tarefa.actions';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent {
  tarefas: Tarefa[] = [{ id: '1', descricao: 'Descrição 1' }];
  tasks$!: Observable<TarefaState>;
  editandoId: string | null = null;
  descricaoEditando: string = '';

  constructor(private store:Store<{tarefas: TarefaState}>) { }

  ngOnInit() {
    this.tasks$ = this.store.select(selectorSelecionaTarefa);
    this.tasks$.subscribe((t) => {  
      this.tarefas = t.tarefas;
    });
  }

  removeTarefa(id: string) {
    this.store.dispatch(removerTarefa({id: id}));
  }
  
  iniciarEdicao(tarefa: Tarefa) {
    this.editandoId = tarefa.id;
    this.descricaoEditando = tarefa.descricao;
  }

  salvarEdicao(tarefa: Tarefa) {
    this.store.dispatch(editarTarefa({ tarefa: { ...tarefa, descricao: this.descricaoEditando } }));
    this.editandoId = null;
  }

  cancelarEdicao() {
    this.editandoId = null;
  }
}
