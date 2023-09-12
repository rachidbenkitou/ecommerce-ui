import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Output() imageSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  checkImageDimensions(imageFile: File, width: number, height: number): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(imageFile);

      img.onload = () => {
        if (img.width === width && img.height === height) {
          resolve(true); // Image meets the size criteria
        } else {
          this.toastr.error(`Image should be ${width}x${height} pixels.`, 'Image Size Error');
          resolve(false); // Image does not meet the size criteria
        }
      };
      img.onerror = () => {
        this.toastr.error('Error loading image.', 'Image Loading Error');
        resolve(false); // Error loading image
      };
    });
  }
  async previewImage(event: Event): Promise<void> {
    const inputElement = event.target as HTMLInputElement;
    const imageFiles: FileList | null = inputElement.files;
    const fileArray = Array.from(imageFiles);

    for (const file of fileArray) {
      try {
        const isCorrect = await this.checkImageDimensions(file, 440, 320);
        if (!isCorrect) {
          return;
        }
      } catch (error) {
        console.error('Error checking image dimensions:', error);
        return;
      }
    }

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
