import { Injectable } from '@angular/core';
import { createFeatureStore } from '@ngrx/signal-store';
import { Tarefa } from '../tarefa.model';
import { withMethods } from '@ngrx/signals';

export interface TarefaState {
  tarefas: Tarefa[];
}

const initialState: TarefaState = {
  tarefas: [
    { id: '1', descricao: 'Aprender Angular com a residencia TIC18 do CEPEDI' },
    { id: '2', descricao: 'Aprender NgRx com a residencia TIC18 do CEPEDI' },
    { id: '3', descricao: 'Aprender Redux com a residencia TIC18 do CEPEDI' },
  ],
};

@Injectable({ providedIn: 'root' })
export class TarefaStore {
  private store = createFeatureStore({
    name: 'tarefa',
    initialState,
    features: withMethods(({ setState, getState }) => ({
      adicionarTarefa(tarefa: Tarefa) {
        const state = getState();
        setState({
          ...state,
          tarefas: [...state.tarefas, tarefa]
        });
      },
      removerTarefa(id: string) {
        const state = getState();
        setState({
          ...state,
          tarefas: state.tarefas.filter(tarefa => tarefa.id !== id)
        });
      },
      editarTarefa(tarefaEditada: Tarefa) {
        const state = getState();
        setState({
          ...state,
          tarefas: state.tarefas.map(tarefa =>
            tarefa.id === tarefaEditada.id ? tarefaEditada : tarefa
          )
        });
      }
    }))
  });

  readonly tarefas$ = this.store.select((state: { tarefas: any; }) => state.tarefas);
  
  adicionarTarefa(tarefa: Tarefa) {
    this.store.adicionarTarefa(tarefa);
  }

  removerTarefa(id: string) {
    this.store.removerTarefa(id);
  }

  editarTarefa(tarefa: Tarefa) {
    this.store.editarTarefa(tarefa);
  }
}
