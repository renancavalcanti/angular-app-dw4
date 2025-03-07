import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard]}
];
