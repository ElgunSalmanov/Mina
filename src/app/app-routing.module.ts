import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { AllComponent } from './pages/all/all.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'sustainability',
    component: SustainabilityComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'returns',
    component: ReturnsComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
