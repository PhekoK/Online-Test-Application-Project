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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { HttpClientModule } from '@angular/common/http';
import { RulesComponent } from './rules/rules.component';
import { RegisterUpdateComponent } from './register-update/register-update.component';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    QuizComponent,
    ReviewComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    QuizhomeComponent,
    RulesComponent,
    RegisterUpdateComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes), 
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [MainComponent]
})
export class AppModule { }
