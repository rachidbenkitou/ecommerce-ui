
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ListProductComponent implements OnInit {
  productDialog: boolean = false;

  products: Product[] = [
    {
      id: 'ID1',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID2',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID3',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID4',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'OUTOFSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID5',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'OUTOFSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID1',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID2',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID3',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID4',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'OUTOFSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    },
    {
      id: 'ID5',
      code: 'CODE1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      quantity: 5,
      inventoryStatus: 'OUTOFSTOCK',
      category: 'Sample Category',
      image: 'sample-image.jpg',
      rating: 4
    }
  ];

  product!: Product;

  selectedProducts!: Product[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(private productService: ProductService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  
}