import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { RegisterUpdateComponent } from './register-update/register-update.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { RulesComponent } from './rules/rules.component';
import { AuthGuard } from './services/auth.guard';

export const applicationRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'review', component: ReviewComponent},
    { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
    { path: 'about', component: AboutComponent},
    { path: 'quizhome', component: QuizhomeComponent, canActivate: [AuthGuard]},
    { path: 'rules', component: RulesComponent},
    { path: 'register-update', component: RegisterUpdateComponent, canActivate: [AuthGuard]},
    { path: '**', component: PageNotFoundComponent}
    
]