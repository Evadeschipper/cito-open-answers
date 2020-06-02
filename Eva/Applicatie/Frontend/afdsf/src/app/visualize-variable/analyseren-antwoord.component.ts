import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-analyseren-antwoord',
  templateUrl: './analyseren-antwoord.component.html',
  styleUrls: ['./analyseren-antwoord.component.scss']
})

export class AnalyserenAntwoordComponent implements OnInit {
  filteredLevels = [];

  constructor() {
  }

  ngOnInit() {
  }

  updateDesiredProperties($Event) {
    this.filteredLevels.push($Event);
  }

}
