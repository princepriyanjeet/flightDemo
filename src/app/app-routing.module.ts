import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard,OktaAuthService } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export function onAuthRequired(oktaAuth: OktaAuthService, injector: Injector): void {
  const router = injector.get(Router);
  router.navigate(['/login']);
}

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'flights', loadChildren: () =>import('./features/flights/flights.module').then(m => m.FlightsModule)},
  { path: 'callback', component: OktaCallbackComponent,data: { onAuthRequired } },
  { path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
