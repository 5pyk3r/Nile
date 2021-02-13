import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarNavComponent } from './admin/side-bar-nav/side-bar-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuManagementComponent } from './menu/menu-managment/menu-management.component';
import {MatChipsModule} from '@angular/material/chips';
import { ClientMenuComponent } from './menu/client-menu/client-menu.component';
import {FlexModule} from '@angular/flex-layout';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { CartButtonComponent } from './shopping/cart-button/cart-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { CartDialogComponent } from './shopping/cart-dialog/cart-dialog.component';
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import { MatTableModule} from '@angular/material/table';
import { ProductsManagmentComponent } from './admin/products-managment/products-managment.component';
import { ProductDialogComponent } from './admin/product-dialog/product-dialog.component';
import { OrdersListComponent } from './admin/orders-list/orders-list.component';
import { OrderAcceptationStatusDialogComponent } from './admin/order-acceptation-status-dialog/order-acceptation-status-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { UserPanelComponent } from './user-panel/user-panel.component';
import {CoreModule} from './core/core.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { CategoriesComponent } from './admin/categories/categories.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarNavComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    MenuManagementComponent,
    ClientMenuComponent,
    ShoppingCartComponent,
    CartButtonComponent,
    CartDialogComponent,
    CheckoutComponent,
    ProductsManagmentComponent,
    ProductDialogComponent,
    OrdersListComponent,
    OrderAcceptationStatusDialogComponent,
    UserPanelComponent,
    CategoriesComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatChipsModule,
    FlexModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatMenuModule,
    CoreModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
