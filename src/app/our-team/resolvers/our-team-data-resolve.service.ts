import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {OurTeamService} from '../our-team.service';
import {IOurTeamData} from '../models/our-team-data';

@Injectable({
    providedIn: 'root'
})
export class OurTeamDataResolve implements Resolve<IOurTeamData> {
    constructor(private ourTeamService: OurTeamService) {
    }

    resolve(): Observable<IOurTeamData> {
        return this.ourTeamService.getData();
    }
}
