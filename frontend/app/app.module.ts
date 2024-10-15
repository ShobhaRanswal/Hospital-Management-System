import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

import { AddingdoctorComponent } from './addingdoctor/addingdoctor.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApprovalstatusComponent } from './approvalstatus/approvalstatus.component';
import { ApprovedoctorsComponent } from './approvedoctors/approvedoctors.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { CheckslotsComponent } from './checkslots/checkslots.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { ScheduleslotsComponent } from './scheduleslots/scheduleslots.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    
        WelcomepageComponent,
             
              AddingdoctorComponent,
              LoginComponent,
              FooterComponent,
              HeaderComponent,
              RegistrationComponent,
              RegistrationsuccessComponent,
              AppointmentsComponent,
              AdmindashboardComponent,
              ApprovalstatusComponent,
              ApprovedoctorsComponent,
              BookappointmentComponent,
              CheckslotsComponent,
              DoctordashboardComponent,
              DoctorlistComponent,
              DoctorprofileComponent,
              PatientlistComponent,
              UserlistComponent,
              UserprofileComponent,
              AddprescriptionComponent,
              PrescriptionlistComponent,
              ScheduleslotsComponent,
              UserdashboardComponent,
        
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, RegistrationComponent]

  
})
export class AppModule { }
