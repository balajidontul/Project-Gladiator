import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { FundingnormsComponent } from './ngo/fundingnorms/fundingnorms.component';
import { NGOComponent } from './ngo/ngo.component';
import { OrganisationComponent } from './ngo/organisation/organisation.component';
import { StepComponent } from './step/step.component';

const routes: Routes = [
  {path:'steppath', component:StepComponent },
  {path:'', component:HomeComponent },
  {path:'ngopath', component:NGOComponent },
  {path:'adminpath', component:AdminComponent },
  {path:'criteria', component:CriteriaComponent },
  {path:'organisation', component:OrganisationComponent },
  {path:'fundingnorms', component:FundingnormsComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
