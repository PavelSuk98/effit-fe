import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoPageResolver } from '@domains/identity/domain/resolver/sso-page.resolver';
import { HealthCheckPageComponent } from '@domains/identity/feature/pages/identity/health-check-page/health-check-page.component';
import { LoginPageComponent } from '@domains/identity/feature/pages/identity/login-page/login-page.component';
import { SsoPageComponent } from '@domains/identity/feature/pages/identity/sso-page/sso-page.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
    ],
  },
  {
    path: 'health',
    component: LayoutComponent,
    children: [{ path: '', component: HealthCheckPageComponent }],
  },
  {
    path: 'sso/redirect', component: SsoPageComponent,
    resolve: {
      sso: SsoPageResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRouting { }

