import {Component} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: any[] = [
    {code: 'P001', name: 'Product 1', category: 'Category A', quantity: 50},
    {code: 'P002', name: 'Product 2', category: 'Category B', quantity: 30},
    {code: 'P003', name: 'Product 3', category: 'Category C', quantity: 20},
    {code: 'P004', name: 'Product 4', category: 'Category A', quantity: 10},
    {code: 'P005', name: 'Product 5', category: 'Category B', quantity: 5},
    {code: 'P006', name: 'Product 6', category: 'Category C', quantity: 40},
    {code: 'P007', name: 'Product 7', category: 'Category A', quantity: 15},
    {code: 'P008', name: 'Product 8', category: 'Category B', quantity: 25},
    {code: 'P009', name: 'Product 9', category: 'Category C', quantity: 35},
    {code: 'P010', name: 'Product 10', category: 'Category A', quantity: 45}
  ];

  selectedProducts!: any;

  constructor() {
  }

  ngOnInit() {

  }
}
