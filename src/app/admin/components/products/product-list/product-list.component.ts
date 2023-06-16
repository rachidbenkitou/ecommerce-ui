import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'quantity',
    'subCategory',
    'dateCreated',
    'dateUpdated',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getProducts()
  }

  constructor(
    private _dialog: MatDialog,
    private _productService: ProductService,
    private router: Router

  ) { }

  getProducts(): void {

    this._productService.getProducts().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: console.log

    });

  }

  deleteProduct(productId: number) {
    this._productService.deleteProductById(productId).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(product => product.id !== productId);
        alert('The product deleted successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openAddProductForm(): void {
    const dialogRef = this._dialog.open(ProductFormComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProducts();
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
