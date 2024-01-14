import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userDetails: any;
  userId: number = 0;
  constructor(
    private service: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    console.log('ID: ', this.userId);
    this.service.getUserById(this.userId).subscribe(
      (res) => (this.userDetails = res),
      (err) => {
        console.warn(err);
        this.userDetails = null;
      }
    );
  }
}
