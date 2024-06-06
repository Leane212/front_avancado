import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

import { provideAnimations } from '@angular/platform-browser/animations';
import { TarefaStore } from './store/tarefa.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    TarefaStore,
    provideAnimations(),   
]
};


