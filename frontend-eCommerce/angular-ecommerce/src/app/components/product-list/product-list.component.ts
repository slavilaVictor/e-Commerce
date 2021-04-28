import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]
  currentCategoryId: number

  // ActivatedRoute -> the current active route that loaded the component
  // It helps me accessing route parameters
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( () => {
      this.listProducts()
    })
  }

  listProducts(): void{
    // check if "id" parameter is available
    // I use the activated route(route), snapshot gives me the current state of this route at a given moment in time
    // paramMap is the map of all paramters and I search for the "id" parameter
    // if the parameter "id" is available, it will return true; else returns false
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')
    if(hasCategoryId){
      // get the "id" parameter string and the convert it to a numbr using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')
    }else{
      // default category with id=1
      this.currentCategoryId = 1
    }
    // get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data
      }
    )
  }

}
