import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {DataService} from "../../../shared/services/data.service";
import {NgForm} from "@angular/forms";
import {ImageService} from "../../../images/services/image.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  @Input() data: any;
  imagesList: any[] = [];

  loadingImage: boolean = false;

  constructor(private imageService: ImageService,
              private modalService: NgbModal,
              private router: Router,
              private dataService: DataService,) {

  }

  getProductImagesList() {
    this.imageService.changeLoadingState(true)
    this.loadingImage = true;
    this.imageService.findImagesFromAwsInFolder(this?.data?.productFolderImages).subscribe(
      (response: any[]) => {
        if (response.length >= 1) {
          // Remove the first element
          response.shift();
        }
        this.imagesList = response;
      },
      (error: HttpErrorResponse) => {
        this.loadingImage = false;
      },
      () => {
        this.loadingImage = false;
      }
    );
  }

  OncloseModal(addForm?: NgForm) {
    this.modalService.dismissAll();
    if (addForm !== undefined) {
      addForm.reset()
    }
  }


  ngOnInit(): void {
    this.getProductImagesList()
  }

}
