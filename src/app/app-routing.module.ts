import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';

export const applicationRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'review', component: ReviewComponent},
    { path: 'quiz', component: QuizComponent}
]