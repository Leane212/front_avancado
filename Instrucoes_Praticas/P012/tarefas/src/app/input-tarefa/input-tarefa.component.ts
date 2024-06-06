import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefaStore } from '../store/tarefa.store';
import { Tarefa } from '../tarefa.model';


@Component({
  selector: 'app-input-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-tarefa.component.html',
  styleUrls: ['./input-tarefa.component.css']
})
export class InputTarefaComponent {
  newTask = '';

  readonly tarefaStore = inject(TarefaStore);
  constructor() {}

  addTask() {
    const newTarefa: Tarefa = {
      id: this.generateId(),
      descricao: this.newTask,
    };

    this.tarefaStore.adicionarTarefa(newTarefa);
    this.newTask = '';
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
