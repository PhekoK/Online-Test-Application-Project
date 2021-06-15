import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { applicationRoutes } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    QuizComponent,
    ReviewComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
