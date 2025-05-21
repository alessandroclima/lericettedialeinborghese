import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { authInterceptor } from './app/core/interceptor/auth.interceptor';
import { errorInterceptor } from './app/core/interceptor/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            BrowserAnimationsModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            NgxPaginationModule,
            ButtonModule,
            StepsModule,
            ToastrModule.forRoot({
                positionClass: 'toast-center',
                timeOut: 4000,
                closeButton: true,
                progressBar: true
            })
        ),
        provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    ]
})
    .catch(err => console.error(err));
