import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "user-detail/:id",
        component: UserDetailComponent
    },
    {
        path:"",
        redirectTo: "/home",
        pathMatch:"full"
    }
];
