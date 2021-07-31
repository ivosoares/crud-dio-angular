import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent},
  { path: 'form', component: UserFormComponent},
  { path: 'form/:id', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
