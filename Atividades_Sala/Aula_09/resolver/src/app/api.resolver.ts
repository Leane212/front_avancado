import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from './api.service';

export const apiResolver: ResolveFn<boolean> = (route, state) => {
  let service = inject(ApiService);
  
  return service.getPaises();
};
