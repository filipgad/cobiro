import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IOurTeamData} from './models/our-team-data';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  ourTeamData: IOurTeamData;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ourTeamData = this.activatedRoute.snapshot.data.ourTeamData;
  }

}
