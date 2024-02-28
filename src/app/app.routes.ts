import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: AppComponent
    }, {
        path: "user-detail/:id",
        component: UserDetailComponent
    }
];
