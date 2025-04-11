import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import Aura from '@primeng/themes/aura';
import { authInterceptor } from './app/core/interceptor/auth.interceptor';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgxPaginationModule, ButtonModule, StepsModule),
        provideHttpClient(withInterceptors([authInterceptor])), provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
})
    .catch(err => console.error(err));
