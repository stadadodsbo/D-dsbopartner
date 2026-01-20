import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmptyingComponent } from './pages/services/emptying.component';
import { CleaningComponent } from './pages/services/cleaning.component';
import { SellingComponent } from './pages/services/selling.component';
import { RemediationComponent } from './pages/services/remediation.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/auth/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Service Routes
  { path: 'tjanster/tomning', component: EmptyingComponent },
  { path: 'tjanster/flyttstadning', component: CleaningComponent },
  { path: 'tjanster/salja-dodsbo', component: SellingComponent },
  { path: 'tjanster/sanering', component: RemediationComponent },
  
  // Pages
  { path: 'vanliga-fragor', component: FaqComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];