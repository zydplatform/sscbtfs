import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import   {  NameEditorComponent } from './name-editor/name-editor.component';
import   {  ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'trader',
    component: NameEditorComponent,
    data: {
      title: 'Register Trader'
    }
  },
  {
    path: 'tradegroup',
    component: ProfileEditorComponent,
    data: {
      title: 'Register Trade Association'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
