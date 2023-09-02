import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Output() imageSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  previewImage(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const imageFiles: FileList | null = inputElement.files;

    if (imageFiles && imageFiles.length > 0) {
      const imageSrc: string = URL.createObjectURL(imageFiles[0]);
      const imagePreviewElement: HTMLImageElement | null = document.querySelector("#preview-selected-image");

      if (imagePreviewElement) {
        imagePreviewElement.src = imageSrc;
        imagePreviewElement.style.display = "block";
      }
    }

    // Emit the image source to the parent component
    this.imageSelected.emit(event);
  }
}
