import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GlobalComponent } from './global/global.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from './service/authentification.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UtilisateurService } from './service/utilisateur.service';
import { UsersComponent } from './Admin/users/users.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { NgSelectModule } from '@ng-select/ng-select';
import { DepartementService } from './service/departement.service';
import { DetailUserComponent } from './Admin/detail-user/detail-user.component';
import { EditUserComponent } from './Admin/edit-user/edit-user.component';
import { ParametreComponent } from './Admin/parametre/parametre.component';
import { ServicesComponent } from './Admin/services/services.component';
import { AddServiceComponent } from './Admin/add-service/add-service.component';
import { EditServiceComponent } from './Admin/edit-service/edit-service.component';
import { PatientsComponent } from './Secretaire/patients/patients.component';
import { DetailPatientComponent } from './Secretaire/detail-patient/detail-patient.component';
import { AddPatientComponent } from './Secretaire/add-patient/add-patient.component';
import { EditPatientComponent } from './Secretaire/edit-patient/edit-patient.component';
import { HistoriquePrescriptionComponent } from './Secretaire/historique-prescription/historique-prescription.component';
import { ResidentServicePrescriptionComponent } from './Secretaire/resident-service-prescription/resident-service-prescription.component';
import { AddPrescriptionComponent } from './Secretaire/add-prescription/add-prescription.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'global', component: GlobalComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'header', component: LogoutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'detailUser/:id', component: DetailUserComponent },
  { path: 'editUser/:id', component: EditUserComponent },
  { path: 'parametre/:id', component: ParametreComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'addService', component: AddServiceComponent },
  { path: 'editService/:id', component: EditServiceComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'detailPatient/:id', component: DetailPatientComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'editPatient/:id', component: EditPatientComponent },
  { path: 'historiquePrescription/:id', component: HistoriquePrescriptionComponent },
  { path: 'currentResidentPrescription/:id', component: ResidentServicePrescriptionComponent },
  { path: 'addPrescription/:id', component: AddPrescriptionComponent },




  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GlobalComponent,
    MenuComponent,
    ForgetPasswordComponent,
    UsersComponent,
    AddUserComponent,
    DetailUserComponent,
    EditUserComponent,
    ParametreComponent,
    ServicesComponent,
    AddServiceComponent,
    EditServiceComponent,
    PatientsComponent,
    DetailPatientComponent,
    AddPatientComponent,
    EditPatientComponent,
    HistoriquePrescriptionComponent,
    ResidentServicePrescriptionComponent,
    AddPrescriptionComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule,
    ReactiveFormsModule, NgSelectModule
  ],
  providers: [
    AuthentificationService, UtilisateurService, DepartementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
