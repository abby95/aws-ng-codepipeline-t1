import { Component } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  usersList: any = [];
  showError = false;
  constructor(private service: HttpService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(
      (res) => {
        this.showError = false;
        this.usersList = res;
        console.log("Users List: ", this.usersList)
      },
      (err) => {
        this.showError = true;
        this.usersList=[]
      }
    );
  }
}
