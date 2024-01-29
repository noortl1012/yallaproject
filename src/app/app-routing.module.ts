import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';

import { FormComponent } from './form/form.component';
import { EventComponent } from './event/event.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'reserver',component:ReservationComponent},
  {path:'payer',component:PaiementComponent},
  { path: 'events', component: EventComponent },
{ path: 'form', component: FormComponent },
{ path: '', redirectTo: '/events', pathMatch: 'full' }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
