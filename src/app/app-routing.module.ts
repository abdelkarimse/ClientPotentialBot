import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./pages/landing/landing.component";
import { FormulaireComponent } from './pages/form/form.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AnalyzeComponent } from './pages/analyze/analyse.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingComponent },
  { path: "form", component: FormulaireComponent },
  { path: "loading", component: LoadingComponent },
  { path: 'analyze', component: AnalyzeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
