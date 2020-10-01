import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IOurTeamData} from './models/our-team-data';
import {OurTeamService} from './our-team.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  ourTeamData$: Observable<IOurTeamData>;

  constructor(private activatedRoute: ActivatedRoute,
              private ourTeamService: OurTeamService) {
  }

  ngOnInit(): void {
    // this.ourTeamData = this.activatedRoute.snapshot.data.ourTeamData;
    this.ourTeamData$ = this.ourTeamService.getData();
  }

}
