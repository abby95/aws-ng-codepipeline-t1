import { Component } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  isLoading = true;
  productsList: any = [];
  constructor(private service: HttpService) {}
  ngOnInit() {
    this.getProdutsList()
  }

  getProdutsList() {
    this.productsList = [];
    this.isLoading = true;
    this.service.getProduts().subscribe((res) => {
      this.isLoading = false;
      this.productsList = res;
    },err=>{
      this.isLoading=false
      this.productsList=[]
    });
  }
}
