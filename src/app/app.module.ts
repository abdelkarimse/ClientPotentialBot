import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormulaireComponent } from "./pages/form/form.component";
import { FormService } from './pages/form/form.service';
import { AnalyzeComponent } from './pages/analyze/analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormulaireComponent,
    NavbarComponent,
    FooterComponent,
    AnalyzeComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule
  ],
  providers: [FormService], // Add the service to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
