import {Component, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-upload-multi-images',
    templateUrl: './upload-multi-images.component.html',
    styleUrls: ['./upload-multi-images.component.scss']
})
export class UploadMultiImagesComponent implements OnInit {
    @Output() selectedImages: EventEmitter<any> = new EventEmitter<any>();


    constructor(private renderer: Renderer2, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.initializeFileDrop();
    }

    initializeFileDrop() {
        const dropBox = document.getElementById('dropBox');

        // Modify all of the event types needed for the script so that the browser
        // doesn't open the image in the browser tab (default behavior)
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
            dropBox.addEventListener(evt, this.prevDefault, false);
        });

        // Remove and add the hover class, depending on whether something is being
        // actively dragged over the box area
        ['dragenter', 'dragover'].forEach(evt => {
            dropBox.addEventListener(evt, this.hover, false);
        });

        ['dragleave', 'drop'].forEach(evt => {
            dropBox.addEventListener(evt, this.unhover, false);
        });

        // The DataTransfer object holds the data being dragged. It's accessible
        // from the dataTransfer property of drag events. The files property has
        // a list of all the files being dragged. Put it into the filesManager function
        dropBox.addEventListener('drop', this.mngDrop.bind(this), false);

    }

    prevDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    hover(e) {
        const dropBox = e.target as HTMLElement;
        dropBox.classList.add('hover');
    }

    unhover(e) {
        const dropBox = e.target as HTMLElement;
        dropBox.classList.remove('hover');
    }

    mngDrop(e: DragEvent) {
        const dataTrans = e.dataTransfer;
        const files = dataTrans.files;
        this.filesManager(files);
    }


    upFile(file) {
        // Only allow images to be dropped
        const imageType = /image.*/;
        if (file.type.match(imageType)) {
            this.checkImageDimensions(file, 300, 300)
            this.previewFile(file);
        } else {
            console.error('Only images are allowed!', file);
        }
    }

    previewFile(file) {
        // Only allow images to be dropped
        const imageType = /image.*/;
        if (file.type.match(imageType)) {
            const fReader = new FileReader();
            const gallery = document.getElementById('gallery');

            // Create elements using Renderer2
            const wrap = this.renderer.createElement('div');
            const img = this.renderer.createElement('img');
            const imgCapt = this.renderer.createElement('p');

            // Reads the contents of the specified Blob. The result attribute of this
            // with hold a data: URL representing the file's data
            fReader.readAsDataURL(file);

            // Handler for the loadend event, triggered when the reading operation is
            // completed (whether success or failure)
            fReader.onloadend = () => {
                // Set the img src attribute to the file's contents (from read operation)
                this.renderer.setAttribute(img, 'src', fReader.result as string);

                // The name prop of the file contains the file name, and the size prop
                // the file size. Convert bytes to KB for the file size
                const fSize = (file.size / 1000) + ' KB';

                imgCapt.innerHTML = `<span class="fName">${file.name}</span><span class="fSize">${fSize}</span><span class="fType">${file.type}</span>`;

                // Append elements to the gallery using Renderer2
                this.renderer.appendChild(wrap, img);
                this.renderer.appendChild(wrap, imgCapt);
                this.renderer.appendChild(gallery, wrap);
            };
        } else {
            console.error('Only images are allowed!', file);
        }
    }

    filesManager(files: FileList) {
        const gallery = document.getElementById('gallery');

        // Clear the gallery by removing all child nodes
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }

        // Convert the FileList to an array using Array.from
        const fileArray = Array.from(files);

        // Now, you can iterate over the fileArray and perform your operations
        fileArray.forEach((file: File) => {
            //this.upFile(file);
            this.previewFile(file);
        });
    }


    isSizeRespected: boolean = true

    async handleFileInput(event: any) {
        const files: FileList = event.target.files;
        const fileArray = Array.from(files);

        for (const file of fileArray) {
            try {
                const isCorrect = await this.checkImageDimensions(file, 440, 320);
                console.log(isCorrect)
                if (!isCorrect) {
                    this.isSizeRespected = false;
                    return;
                }
            } catch (error) {
                console.error('Error checking image dimensions:', error);
                this.isSizeRespected = false;
                return;
            }
        }


        this.filesManager(files);


        const data = {
            selectedImages: event,
            isSizeRespected: this.isSizeRespected
        };

        this.selectedImages.emit(data);
    }


    checkImageDimensions(imageFile: File, width: number, height: number): Promise<boolean> {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(imageFile);

            img.onload = () => {
                if (img.width === width && img.height === height) {
                    this.isSizeRespected = true
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


}
