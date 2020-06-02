import {Component, Input, OnInit} from '@angular/core';
import {PropertyExtractionScript} from '../objects/propertyExtractionScript';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-execute-script',
  templateUrl: './execute-script.component.html',
  styleUrls: ['./execute-script.component.css']
})
export class ExecuteScriptComponent implements OnInit {

  constructor(private service: ApiService) {
  }

  properties: PropertyExtractionScript[] = [];
  desiredProperties = [];
  @Input() filteredLevels = [];

  ngOnInit() {
    this.getProperties();

  }

  getProperties() {
    this.service.getProperties().subscribe((properties: string[]) => {
      this.properties = [];
      this.properties.pop();
      for (let i = 0; i < properties.length; i++) {
        const script: PropertyExtractionScript = {PropertyExtractionScript: properties[i]};
        this.properties.push(script);
      }
    });
  }

  desiredPropertyOnChange(property: PropertyExtractionScript, checked: boolean) {
    if (checked) {
      const notFound = -1;
      if (this.desiredProperties.indexOf(property) === notFound) {
        this.desiredProperties.push(property);
      }
    } else {
      const deleteNumberOfItems = 1;
      this.desiredProperties.splice(this.desiredProperties.indexOf(property), deleteNumberOfItems);
    }
  }

  executeScripts() {
    this.service.execute(this.filteredLevels, this.desiredProperties).subscribe(data => {
      console.log(data);
    });
  }
}
