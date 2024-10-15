import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AddingdoctorComponent } from './addingdoctor/addingdoctor.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ApprovalstatusComponent } from './approvalstatus/approvalstatus.component';
import { ApprovedoctorsComponent } from './approvedoctors/approvedoctors.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { LoginComponent } from './login/login.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { RouterGuard } from './guards/router.guard';
import { AdminGuard } from './guards/admin.guard';
import { DoctorGuard } from './guards/doctor.guard';
import { UserGuard } from './guards/user.guard';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { CheckslotsComponent } from './checkslots/checkslots.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { ScheduleslotsComponent } from './scheduleslots/scheduleslots.component';
import { UserprofileComponent } from './userprofile/userprofile.component';




const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registrationsuccess',component:RegistrationsuccessComponent},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[RouterGuard]},
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[RouterGuard]},
  {path:'doctordashboard',component:DoctordashboardComponent,canActivate:[RouterGuard]},
  {path:'addDoctor',component:AddingdoctorComponent,canActivate:[AdminGuard]},
  {path:'doctorlist',component:DoctorlistComponent,canActivate:[RouterGuard]},
  {path:'userlist',component:UserlistComponent,canActivate:[RouterGuard]},
  {path:'patientlist',component:PatientlistComponent,canActivate:[RouterGuard]},
  {path:'appointments',component:AppointmentsComponent,canActivate:[DoctorGuard]},
  {path:'approvedoctors',component:ApprovedoctorsComponent,canActivate:[AdminGuard]},
  {path:'approvalstatus',component:ApprovalstatusComponent,canActivate:[RouterGuard]},
  {path:'bookappointment',component:BookappointmentComponent,canActivate:[UserGuard]},
  {path:'scheduleslots',component:ScheduleslotsComponent,canActivate:[DoctorGuard]},
  {path:'checkslots',component:CheckslotsComponent,canActivate:[UserGuard]},
  {path:'addprescription',component:AddprescriptionComponent,canActivate:[DoctorGuard]},
  {path:'prescriptionlist',component:PrescriptionlistComponent,canActivate:[UserGuard]},
  {path:'edituserprofile',component:UserprofileComponent,canActivate:[UserGuard]},
  {path:'editdoctorprofile',component:DoctorprofileComponent,canActivate:[DoctorGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
