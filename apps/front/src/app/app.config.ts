import { ApplicationConfig, InjectionToken, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';


export const API_BASE = new InjectionToken<string>('URL base do backend');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes,
      withComponentInputBinding(),), provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    {
      provide: API_BASE,
      useValue: 'http://localhost:3333/api'
    }
  ],
};
