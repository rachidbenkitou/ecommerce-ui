import {Component} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  customers: any[] = [
    {name: 'John Doe', country: 'USA', company: 'ABC Corp', representative: 'Jane Smith', inventoryStatus: 'INSTOCK'},
    {
      name: 'Alice Johnson',
      country: 'Canada',
      company: 'XYZ Inc',
      representative: 'Bob Williams',
      inventoryStatus: 'LOWSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Bob Smith',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },    {
      name: 'Rachid Benkitou',
      country: 'UK',
      company: 'DEF Ltd',
      representative: 'Alice Johnson',
      inventoryStatus: 'OUTOFSTOCK'
    },

























    // Add more customer objects as needed
  ];
  selectedCountry: any;
  activityValues: any;
  statuses: any;
  representatives: any;
  dt1: any;


  getSeverity(label: string | ArrayBufferView | ArrayBuffer  | null | undefined | HTMLLabelElement) {
    return undefined;
  }

  clear(dt1: any) {

  }

  prev() {

  }

  isFirstPage() {
    return undefined;
  }

  reset() {

  }

  next() {

  }

  isLastPage() {
    return undefined;
  }
}
