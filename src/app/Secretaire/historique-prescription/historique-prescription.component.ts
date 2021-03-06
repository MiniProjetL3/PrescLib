import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { PrescriptionServiceService } from 'src/app/service/prescription-service.service';
import { Prescription } from 'src/app/model/prescription';

@Component({
  selector: 'app-historique-prescription',
  templateUrl: './historique-prescription.component.html',
  styleUrls: ['./historique-prescription.component.css']
})
export class HistoriquePrescriptionComponent implements OnInit {
  //Historique_Hospitalisation
  email: string;
  ownerAccount: any;
  hPrescription: any;
  id: number;
  curentPage: number = 0;
  size: number = 3;
  pages: Array<number>;
  Hpatient: any;
  constructor(private route: ActivatedRoute, private userService: UtilisateurService, private router: Router, public patService: PatientService, private prescService: PrescriptionServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doSearch();
    this.getOneHist();


    this.email = sessionStorage.getItem('email');
    this.userService.searchUserByEmail(this.email)
      .subscribe(data => this.ownerAccount = data);

  }

  doSearch() {
    this.patService.allHPrescriptionPpatientsByService(this.id, this.curentPage, this.size)
      .subscribe(data => {
        this.hPrescription = data;
        this.pages = new Array(this.hPrescription.totalPages)

      });
  }

  getOneHist() {
    this.patService.getOneH(this.id)
      .subscribe(data => {
        this.Hpatient = data;

      });
  }

  archivePresc(c: Prescription) {
    if (confirm("Vouliez vous stoper la prescription de type: " + c.type)) {
      this.prescService.archivePresc(c.id)
        .subscribe(data => {


        }
          , err => {


          })
    }
  }

  gotoPage(i: number) {
    this.curentPage = i;
    this.doSearch();
    this.getOneHist();
  }
  editPatient(id: number) {
    this.router.navigate(["/detailPatient", id]);
  }
  detailPrescM(id: number) {

    this.router.navigate(["/detailMedicalPrescription", id]);
  }
  detailSoinPrescription(id: number) {

    this.router.navigate(["/detailSoinPrescription", id]);
  }

  detailSuiviPrescription(id: number) {

    this.router.navigate(["/detailSuiviPrescription", id]);
  }
  detailAlimentPrescription(id: number) {

    this.router.navigate(["/detailAlimentPrescription", id]);
  }
  editMedicalPrescription(id: number) {

    this.router.navigate(["/editMedicalPrescription", id]);
  }
  editSuiviPrescription(id: number) {

    this.router.navigate(["/editSuiviPrescription", id]);
  }
  editSoinPrescription(id: number) {

    this.router.navigate(["/editSoinPrescription", id]);
  }
  editAlimentPrescription(id: number) {

    this.router.navigate(["/editAlimentPrescription", id]);
  }

  goToFileCareByPresc(id: number) {
    this.router.navigate(["/fileCareByPresc", id]);
  }

  goToHome() {
    this.router.navigate(["/global"]);
  }
}
