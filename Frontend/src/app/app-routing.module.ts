import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApprovedNgoComponent } from './adminhome/admin-approved-ngo/admin-approved-ngo.component';
import { AdminDashboardComponent } from './adminhome/admin-dashboard/admin-dashboard.component';
import { AdminPendingNgoComponent } from './adminhome/admin-pending-ngo/admin-pending-ngo.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminhome/adminlogin/adminlogin.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddcourseComponent } from './ngo/addcourse/addcourse.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { FaqngoComponent } from './ngo/faqngo/faqngo.component';
import { FundingnormsComponent } from './ngo/fundingnorms/fundingnorms.component';
import { NGOComponent } from './ngo/ngo.component';
import { NgologinComponent } from './ngo/ngologin/ngologin.component';

import { OrganisationComponent } from './ngo/organisation/organisation.component';
import { RegisterngoComponent } from './ngo/registerngo/registerngo.component';
import { ShowcourseComponent } from './ngo/showcourse/showcourse.component';
import { StatusngoComponent } from './ngo/statusngo/statusngo.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
import { RegisterComponent } from './register/register.component';
import { AboutusstepComponent } from './step/aboutusstep/aboutusstep.component';
import { DashboardstepComponent } from './step/dashboardstep/dashboardstep.component';
import { FaqstepComponent } from './step/faqstep/faqstep.component';
import { GuidelinestepComponent } from './step/guidelinestep/guidelinestep.component';
import { NgostepComponent } from './step/ngostep/ngostep.component';
import { RegistrationstepComponent } from './step/registrationstep/registrationstep.component';
import { StepComponent } from './step/step.component';
import { StephomeComponent } from './stephome/stephome.component'; 
import { TrainingsectorsstepComponent } from './step/trainingsectorsstep/trainingsectorsstep.component';
import { BasehomeComponent } from './basehome/basehome.component';
import { AboutushomeComponent } from './home/aboutushome/aboutushome.component';
import { PolicyhomeComponent } from './home/policyhome/policyhome.component';
import { LogoutngoComponent } from './ngo/logoutngo/logoutngo.component';
import { FaqhomeComponent } from './home/faqhome/faqhome.component';
import { ContacthomeComponent } from './contacthome/contacthome.component';

const routes: Routes = [
  {path:'steppath', component:StepComponent, children: [
    {path: 'stepaboutus', component: AboutusstepComponent, outlet: 'stepsub'},
    {path: 'stepfaq', component: FaqstepComponent, outlet: 'stepsub'},
    {path: 'stepguideline', component: GuidelinestepComponent, outlet: 'stepsub'},
    {path: 'stepngo', component: NgostepComponent, outlet: 'stepsub'},
    {path: 'stepregister', component: RegistrationstepComponent, outlet: 'stepsub'},
    {path: 'steptrainingsectors', component: TrainingsectorsstepComponent, outlet: 'stepsub'},
    {path: 'stepdashboard', component: DashboardstepComponent, outlet: 'stepsub'}
  ] },


  {path:'', component:BasehomeComponent },

  {path:'basehome',component:HomeComponent, children :[
    {path : 'homeaboutus', component :AboutushomeComponent, outlet: 'homesub'},
    {path :'policy', component :PolicyhomeComponent,outlet:'homesub'},
    {path :'faqhome', component :FaqhomeComponent,outlet:'homesub'},
    {path :'contactushome', component :ContacthomeComponent,outlet:'homesub'}
  ] },
  



  // NGO ROUTING DONT DELETE



  { path: 'ngohome', component: NgohomeComponent},
  { path: 'ngoregister', component: RegisterngoComponent},
  {path: 'show-ngo-course', component: ShowcourseComponent},
  {path:'ngologin',component:NgologinComponent},
  { path: 'logoutngo', component: LogoutngoComponent},
{ path: 'ngopath', component: NGOComponent, children: [
    { path: 'ngoorganisation', component: OrganisationComponent, outlet: 'ngosub' },
    { path: 'ngocriteria', component: CriteriaComponent, outlet: 'ngosub' },
    { path: 'ngofunding', component: FundingnormsComponent, outlet: 'ngosub' },
    { path: 'ngoregister', component: RegisterngoComponent, outlet: 'ngosub' },
    { path: 'ngostatus', component: StatusngoComponent, outlet: 'ngosub' },
    { path: 'ngofaq', component: FaqngoComponent, outlet: 'ngosub' },
    { path: 'ngoaddcourse', component: AddcourseComponent, outlet:'ngosub'},
    { path: 'ngoshowcourse', component: ShowcourseComponent, outlet:'ngosub'}
   
  ] },
//NGO ROUTING DONT
 
  {path: 'adminlogin', component:AdminloginComponent},
  { path: 'adminhome', component: AdminhomeComponent, children: [
  {path : 'admindashboard', component : AdminDashboardComponent, outlet: 'adminsub'},
  {path : 'adminapproved', component : AdminApprovedNgoComponent, outlet: 'adminsub'},
  {path : 'adminpending', component : AdminPendingNgoComponent, outlet: 'adminsub'}

]},


{path: 'userlogin', component:LoginComponent},
{path: 'userregister', component:RegisterComponent},
{path: 'stephome',component:StephomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
