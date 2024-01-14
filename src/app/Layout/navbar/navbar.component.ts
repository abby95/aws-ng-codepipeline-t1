import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  hideNavlinks=false

  constructor(private router:Router,private service:HttpService){

  }
ngOnInit(){
  // this.service.LoggedInSubject.subscribe(data=>{
  //   console.log(data)
  //   if(data===true){
  //     this.hideNavlinks=false
  //   }else{
  //     this.service.logout()
  //     this.router.navigate([""])
  //   }
  // })
}
logout(){
  this.service.logout()
  this.router.navigate([""])
  // this.hideNavlinks=true

}
}
