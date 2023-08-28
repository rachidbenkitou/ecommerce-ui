import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {UserPictureService} from "../../services/userPicture/user-picture.service";
import {StructureLogoService} from "../../services/structureLogo/structure-logo.service";

@Component({
  selector: 'app-edit-view-profile-picture',
  templateUrl: './edit-view-profile-picture.component.html',
  styleUrls: ['./edit-view-profile-picture.component.scss']
})
export class EditViewProfilePictureComponent implements OnInit {


  @Input() data : any
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddEdit = new EventEmitter<any>();

  image : any;
  picture : any
  object : any
  objectType : string = ''

  sppinerDeleteDisplaying : boolean = false


  constructor(public modal: NgbActiveModal,
              private userPictureService : UserPictureService,
              private structureLogoService : StructureLogoService,
              private toastr: ToastrService,
              private dataService : DataService,) { }

  submitButton : any
  addEditPicture(){
    this.submitButton = (document.getElementById('submitPicture') as HTMLInputElement);
    this.submitButton.disabled = true
    // if the user/structure has a picture/logo donc on va modifier la photo
    if(this.data?.objectPicture !== null){
      if(this.objectType === 'USR_USER'){
        this.editUserPicture()
      }else if(this.objectType === 'STR_STRUCTURE'){
        this.editStructureLogo()
      }
    }else{
      if(this.objectType === 'USR_USER'){
        this.addUserPicture()
      }else if(this.objectType === 'STR_STRUCTURE'){
        this.addStructureLogo()
      }
    }
  }

  public addUserPicture(): void {
    this.sppinerDeleteDisplaying = true
    const photo : any={}
    photo.content = this.image
    photo.userId = this.object.id
    this.userPictureService.persistUserPicture(photo).subscribe(
      (response: any) => {
        this.picture = response
      },
      (error: HttpErrorResponse) => {
        //alert(error)
        this.toastr.error('Problème lors de modification', 'Oops!');
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
      },
      () => {
        this.sppinerDeleteDisplaying = false
        this.dataService.userDataPicture = this.picture
        this.toastr.success('Modifié avec succès', 'Succès!');
        this.modal.dismiss('Cross click')
        this.onAddEdit.emit(this.picture)
      }
    );
  }

  public editUserPicture(): void {
    this.sppinerDeleteDisplaying = true
    const photo : any={}
    photo.content = this.image
    photo.id = this.data.objectPicture.id
    photo.userId = this.object.id
    this.userPictureService.updateUserPicture(this.data.objectPicture.id,photo).subscribe(
      (response: any) => {
        this.picture = response
        //console.log("response image edit ",response)
      },
      (error: HttpErrorResponse) => {
        // alert(error)
        this.toastr.error('Problème lors de modification', 'Oops!');
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
      },
      () => {
        this.dataService.userDataPicture = this.picture
        this.sppinerDeleteDisplaying = false
        this.toastr.success('Modifié avec succès', 'Succès!');
        this.modal.dismiss('Cross click')
        this.onAddEdit.emit(this.picture)
      }
    );
  }

  public addStructureLogo(): void {
    this.sppinerDeleteDisplaying = true
    const photo : any={}
    photo.content = this.image
    photo.structureId = this.object.id
    this.structureLogoService.persistStructureLogo(photo).subscribe(
      (response: any) => {
        this.picture = response
        //console.log("response image add ",response)
      },
      (error: HttpErrorResponse) => {
        //alert(error)
        this.toastr.error('Problème lors de modification', 'Oops!');
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
      },
      () => {
        //this.dataService.structureDataPicture = this.picture
        this.onAddEdit.emit(this.picture)
        this.sppinerDeleteDisplaying = false
        this.toastr.success('Modifié avec succès', 'Succès!');
        this.modal.dismiss('Cross click')

      }
    );
  }

  public editStructureLogo(): void {
    this.sppinerDeleteDisplaying = true
    const photo : any={}
    photo.content = this.image
    photo.id = this.data.objectPicture.id
    photo.structureId = this.object.id
    this.structureLogoService.updateStructureLogo(this.data.objectPicture.id,photo).subscribe(
      (response: any) => {
        this.picture = response
        //console.log("response image edit ",response)
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problème lors de modification', 'Oops!');
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
      },
      () => {
        //this.dataService.structureDataPicture = this.picture
        this.onAddEdit.emit(this.picture)
        this.sppinerDeleteDisplaying = false
        this.toastr.success('Modifié avec succès', 'Succès!');
        this.modal.dismiss('Cross click')
      }
    );
  }

  changeListener($event : any) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file:File = inputValue.files[0];
    const myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }


  ngOnInit(): void {
    this.object = this.data.object
    this.objectType = this.data.objectType
    this.image = this.data.picture
    //console.log("this.objectType ",this.objectType)

  }

}
