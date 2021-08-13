import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { StatusstepComponent } from './step/statusstep/statusstep.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminPendingNgoComponent } from './admin/admin-pending-ngo/admin-pending-ngo.component';
import { AdminApprovedNgoComponent } from './admin/admin-approved-ngo/admin-approved-ngo.component';
import { AboutusstepComponent } from './step/aboutusstep/aboutusstep.component';
import { GuidelinestepComponent } from './step/guidelinestep/guidelinestep.component';
import { NgostepComponent } from './step/ngostep/ngostep.component';
import { TrainingsectorsstepComponent } from './step/trainingsectorsstep/trainingsectorsstep.component';
import { NgologinComponent } from './ngo/ngologin/ngologin.component';
import { DashboardstepComponent } from './step/dashboardstep/dashboardstep.component';
import { NgoAddCourseComponent } from './ngo-add-course/ngo-add-course.component';
import { NgoShowCourseComponent } from './ngo-show-course/ngo-show-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    StatusstepComponent,
    RegistrationstepComponent,
    AdminDashboardComponent,
    AdminPendingNgoComponent,
    AdminApprovedNgoComponent,
    AboutusstepComponent,
    GuidelinestepComponent,
    NgostepComponent,
    TrainingsectorsstepComponent,
    NgologinComponent,
    DashboardstepComponent,
    NgoAddCourseComponent,
    NgoShowCourseComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }