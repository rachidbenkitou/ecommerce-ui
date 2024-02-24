import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Product} from "../../../products/models/product";
import {CategoryService} from "../../services/category.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {

  @Output() loadingState: EventEmitter<any> = new EventEmitter();

  loading: boolean = true

  public isCollapsed1 = false;

  categoryForm!: UntypedFormGroup;

  categoryList: Product[] = [];


  visibilityList: any[] = [
    {id: 1, name: "visible"},
    {id: 2, name: "invisible"},
  ]

  constructor(
    private formBuilder: UntypedFormBuilder,
    private categoryService: CategoryService
  ) {
    categoryService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.categoryForm = this.formBuilder.group({
      id: [],
      name: [],
      visbility: [],
    });
  }

  public getCategories(id?: number, name?: string, visibility?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-category-form') as HTMLInputElement);
    submitButton.disabled = true
    this.categoryService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.categoryService.findCategories(id, name, visibility).subscribe(
      (response: any[]) => {
        this.categoryList = response;
        console.log(this.categoryList)
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        submitButton.disabled = false
        this.categoryService.changeLoadingState(false)
      },
      () => {
        submitButton.disabled = false
        this.loading = false
        this.categoryService.changeLoadingState(false)

      }
    );
  }

  reset(): void {
    this.categoryForm.reset()
    this.getCategories()
  }

  search(): void {
    this.getCategories(
      this?.categoryForm.value?.id,
      this?.categoryForm.value?.name,
      this?.categoryForm.value?.visbility)
  }

  ngOnInit(): void {
    this.initForm()
    this.getCategories()


  }

}
