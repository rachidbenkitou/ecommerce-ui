import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  products: any[] = [
    { code: 'P001', name: 'Product 1', category: 'Category A', quantity: 10 },
    { code: 'P002', name: 'Product 2', category: 'Category B', quantity: 20 },
    { code: 'P003', name: 'Product 3', category: 'Category A', quantity: 15 },
    { code: 'P004', name: 'Product 4', category: 'Category C', quantity: 5 },
    { code: 'P005', name: 'Product 5', category: 'Category A', quantity: 8 },
    { code: 'P006', name: 'Product 6', category: 'Category B', quantity: 12 },
    { code: 'P007', name: 'Product 7', category: 'Category C', quantity: 3 },
    { code: 'P008', name: 'Product 8', category: 'Category A', quantity: 18 },
    { code: 'P009', name: 'Product 9', category: 'Category B', quantity: 7 },
    { code: 'P010', name: 'Product 10', category: 'Category C', quantity: 9 }
  ];
  constructor() { }

  ngOnInit() {

  }

}
