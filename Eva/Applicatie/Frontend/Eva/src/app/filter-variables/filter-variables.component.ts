import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Level} from '../objects/level';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-filter-variables',
  templateUrl: './filter-variables.component.html',
  styleUrls: ['./filter-variables.component.css']
})
export class FilterVariablesComponent implements OnInit {
  filter: Level[] = new Array();

  columns = [];
  rows = [];
  levels: Level[] = [];
  @Output() update = new EventEmitter<any[]>();
  constructor(private service: ApiService) {
    this.setCriteria();
  }

  ngOnInit() {
  }

  filterOnChange(name: string, variable: string, checked: boolean) {
    if (checked) {
      this.addToFilter(name, variable);
    } else {
      this.removeFromFilter(name, variable);
    }

    this.service.filter(this.filter).subscribe(result => {
      this.columns = this.getColumnsFromResult(result);
      this.getRowsFromResult(result);
      this.addLevelsToFiltered(this.columns, this.rows);
    });
  }

  private getRowsFromResult(result) {
    this.rows = [];
    this.rows.pop();
    for (let i = 2; i < result.length; i++) {
      this.rows.push(result[i]);
    }
  }

  private getColumnsFromResult(result) {
    this.columns = [];
    this.columns.pop();
    for (let i = 0; i < result[1].length; i++) {
      this.columns.push(result[1][i]);
    }
    return this.columns;
  }

  private removeFromFilter(name: string, variable: string) {
    for (let i = 0; i < this.filter.length; i++) {
      const filterNiveau = this.filter[i];
      const variables = filterNiveau.variables;
      const numberOfItemsToDelete = 1;
      if (filterNiveau.name === name) {
        const index = variables.indexOf(variable);
        variables.splice(index, numberOfItemsToDelete);
      }
      const empty = 0;
      if (variables.length === empty) {
        const index = this.filter.indexOf(filterNiveau);
        this.filter.splice(index, numberOfItemsToDelete);
      }
    }
  }

  private addToFilter(name: string, variable: string) {
    for (let i = 0; i < this.filter.length; i++) {
      const filterNiveau = this.filter[i];
      if (filterNiveau.name === name) {
        filterNiveau.variables.push(variable);
        return;
      }
    }
    const variables: string[] = [];
    variables.push(variable);
    const niveau: Level = {name, variables};
    this.filter.push(niveau);
  }

  private addLevelsToFiltered(columns: any[], rows: any[]) {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowSize = row[i].length;
      const filteredRowSet = [];
      for (let j = 0; j < rowSize; j++) {
        const level: Level = {name: columns[j], variables: row[i][j]};
        filteredRowSet.push(level);
      }
      this.update.emit(filteredRowSet);

    }
  }

  private setCriteria() {
    this.service.getCriteria().subscribe((data: string[]) => {
      const keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        const variables: string[] = data[keys[i]];
        const niveau: Level = {name: keys[i], variables};
        this.levels[i] = (niveau);
      }
    });
  }
}
