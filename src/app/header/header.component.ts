import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { UtilisateurService } from '../service/utilisateur.service';
import { User } from '../model/user';
import { CareFileService } from '../service/care-file.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input() id: number;
  user: User = new User();
  email: string;
  files: any;
  curentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  constructor(public authService: AuthentificationService, public userService: UtilisateurService,
    private router: Router, private fileService: CareFileService) { }


  ngOnInit() {
    this.email = sessionStorage.getItem('email');
    console.log("email: " + this.email)
    this.userService.searchUserByEmail(this.email)
      .subscribe(data => {
        this.user = data;
        if (this.user.role == "infirmier") {
          this.fileNotCompleted(this.user.id)
        }

      });


  }
  onLogout() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

  profileUser(id: number) {

    this.router.navigate(["/detailUser", id]);
  }

  settingUser(id: number) {

    this.router.navigate(["/parametre", id]);
  }


  fileNotCompleted(id: number) {
    this.fileService.fileNotCompleted(id, this.curentPage, this.size)
      .subscribe(data => {
        this.files = data;
        this.pages = new Array(this.files.totalPages)


      }, err => {

        console.log(err)
      })

  }






  gotoFile(id: number) {
    this.router.navigate(["/ActifFilesCare", id]);
  }
  fileNotCompletted() {
    this.router.navigate(["/fileNotCompleted"]);
  }

}
