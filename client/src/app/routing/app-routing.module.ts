import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../admin/dashboard/dashboard.component';
import {RegistrationComponent} from '../registration/registration.component';
import {LoginComponent} from '../login/login.component';
import {CorrectRegistrationComponent} from '../core/components/correct-registration/correct-registration.component';
import {RoleGuardService} from '../core/services/guards/role-guard.service';
import {ClientMenuComponent} from '../menu/client-menu/client-menu.component';
import {CheckoutComponent} from '../shopping/checkout/checkout.component';
import {ProductsManagmentComponent} from '../admin/products-managment/products-managment.component';
import {OrdersListComponent} from '../admin/orders-list/orders-list.component';
import {UserPanelComponent} from '../user-panel/user-panel.component';
import {CategoriesComponent} from '../admin/categories/categories.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'register', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'correctRegistration', component: CorrectRegistrationComponent},
      {path: 'menu', component: ClientMenuComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'userDashboard', component: UserPanelComponent}]},
  {path: 'admin', component: DashboardComponent,
    canActivate: [RoleGuardService],
    data: {roles: 'ROLE_ADMIN'},
    children: [
      {path: 'products', component: ProductsManagmentComponent},
      {path: 'orders', component: OrdersListComponent},
      {path: 'categories', component: CategoriesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule {
}
