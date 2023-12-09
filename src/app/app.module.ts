import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { InformationComponent } from './components/information/information.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { DecorComponent } from './components/decor/decor.component';
import { LearnComponent } from './components/learn/learn.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FollowComponent } from './components/follow/follow.component';
import { SusinfoComponent } from './components/susinfo/susinfo.component';
import { PlanetComponent } from './components/planet/planet.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { WorkingComponent } from './components/working/working.component';
import { AboutinfoComponent } from './components/aboutinfo/aboutinfo.component';
import { BrandComponent } from './components/brand/brand.component';
import { LauraComponent } from './components/laura/laura.component';
import { ContactinfoComponent } from './components/contactinfo/contactinfo.component';
import { FormComponent } from './components/form/form.component';
import { ReturnComponent } from './components/return/return.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllComponent } from './pages/all/all.component';
import { NewComponent } from './pages/new/new.component';
import { AllinfoComponent } from './components/allinfo/allinfo.component';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { NewinfoComponent } from './components/newinfo/newinfo.component';
import { NewcollectionComponent } from './components/newcollection/newcollection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CartComponent,
    ShopComponent,
    SustainabilityComponent,
    InformationComponent,
    BestsellersComponent,
    DecorComponent,
    LearnComponent,
    NewsletterComponent,
    FollowComponent,
    SusinfoComponent,
    PlanetComponent,
    ReturnsComponent,
    PaymentsComponent,
    WorkingComponent,
    AboutinfoComponent,
    BrandComponent,
    LauraComponent,
    ContactinfoComponent,
    FormComponent,
    ReturnComponent,
    PaymentComponent,
    AllComponent,
    NewComponent,
    AllinfoComponent,
    AllproductComponent,
    NewinfoComponent,
    NewcollectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
