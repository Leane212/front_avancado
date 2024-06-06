
import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

interface TarefaState {
  tarefas: Tarefa[];
}

const initialState: TarefaState = {
  tarefas: [
    { id: '1', descricao: 'Aprender Angular com a residencia TIC18 do CEPEDI' },
    { id: '2', descricao: 'Aprender NgRx com a residencia TIC18 do CEPEDI' },
    { id: '3', descricao: 'Aprender Redux com a residencia TIC18 do CEPEDI' },
  ],
};

export const TarefaStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((state) => ({
    adicionarTarefa(tarefa: Tarefa) {
      patchState(state, { tarefas: [...state.tarefas(), tarefa] });
    },
    removerTarefa(id: string) {
      patchState(state, {
        tarefas: state.tarefas().filter((t: Tarefa) => t.id !== id),
      });
    },
    editarTarefa(tarefa: Tarefa) {
      patchState(state, {
        tarefas: state.tarefas().map((t: Tarefa) => (t.id === tarefa.id ? tarefa : t)),
      });
    },
  }))
);
