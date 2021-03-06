import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StepComponent } from './step/step.component';
import { NGOComponent } from './ngo/ngo.component';
import { RegisterComponent } from './register/register.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { OrganisationComponent } from './ngo/organisation/organisation.component';
import { FundingnormsComponent } from './ngo/fundingnorms/fundingnorms.component';
import { RegisterngoComponent } from './ngo/registerngo/registerngo.component';
import { StatusngoComponent } from './ngo/statusngo/statusngo.component';
import { FaqngoComponent } from './ngo/faqngo/faqngo.component';
import { FormsModule } from '@angular/forms';
import { RegistrationstepComponent } from './step/registrationstep/registrationstep.component';
import { FaqstepComponent } from './step/faqstep/faqstep.component';
import { AdminDashboardComponent } from './adminhome/admin-dashboard/admin-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminPendingNgoComponent } from './adminhome/admin-pending-ngo/admin-pending-ngo.component'; 
import { AdminApprovedNgoComponent } from './adminhome/admin-approved-ngo/admin-approved-ngo.component'; 
import { AboutusstepComponent } from './step/aboutusstep/aboutusstep.component';
import { GuidelinestepComponent } from './step/guidelinestep/guidelinestep.component';
import { NgostepComponent } from './step/ngostep/ngostep.component';
import { TrainingsectorsstepComponent } from './step/trainingsectorsstep/trainingsectorsstep.component';
import { DashboardstepComponent } from './step/dashboardstep/dashboardstep.component';
import { AddcourseComponent } from './ngo/addcourse/addcourse.component';
import { ShowcoursesComponent } from './ngo/showcourses/showcourses.component';
import { ShowcourseComponent } from './ngo/showcourse/showcourse.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
import { AdminloginComponent } from './adminhome/adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AboutushomeComponent } from './home/aboutushome/aboutushome.component';
import { PolicyhomeComponent } from './home/policyhome/policyhome.component';
import { FaqhomeComponent } from './home/faqhome/faqhome.component';
import { StephomeComponent } from './stephome/stephome.component';



import { ChartsModule } from 'ng2-charts';
import { BasehomeComponent } from './basehome/basehome.component';
import { ContacthomeComponent } from './contacthome/contacthome.component';
import { NgologinComponent } from './ngo/ngologin/ngologin.component';
import { LogoutngoComponent } from './ngo/logoutngo/logoutngo.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepComponent,
    NGOComponent,
    RegisterComponent,
    CriteriaComponent,
    OrganisationComponent,
    FundingnormsComponent,
    RegisterngoComponent,
    StatusngoComponent,
    FaqngoComponent,
    FaqstepComponent,
    RegistrationstepComponent,
    AdminDashboardComponent,
    AdminPendingNgoComponent,
    AdminApprovedNgoComponent,
    AboutusstepComponent,
    GuidelinestepComponent,
    NgostepComponent,
    TrainingsectorsstepComponent,
    StephomeComponent,
    DashboardstepComponent,
    AddcourseComponent,
    ShowcourseComponent,
    ShowcoursesComponent,
    AdminhomeComponent,
    AdminloginComponent,
    NgohomeComponent,
    LoginComponent,
    AboutushomeComponent,
    PolicyhomeComponent,
    FaqhomeComponent,
    BasehomeComponent,
    ContacthomeComponent,
    StephomeComponent,
    NgologinComponent,
    LogoutngoComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
