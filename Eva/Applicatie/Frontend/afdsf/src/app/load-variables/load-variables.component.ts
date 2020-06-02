import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {NavigationEnd} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-load-variables',
  templateUrl: './load-variables.component.html',
  styleUrls: ['./load-variables.component.css']
})
export class LoadVariablesComponent implements OnInit {

  constructor(private service: ApiService) {
  }

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  file;

  ngOnInit() {
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      const firstFile = 0;
      this.file = fileUpload.files[firstFile];
      this.uploadFile();
    };
    fileUpload.click();
  }

  uploadFile() {
    const formData = new FormData();
    const header = 'file';
    formData.append(header, this.file);
    this.service.upload(formData).subscribe((event) => {
      if (event instanceof HttpResponse) {
        window.location.reload();
      }
    });
  }
}
