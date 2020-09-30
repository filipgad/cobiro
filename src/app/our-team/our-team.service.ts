import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {IOurTeamData, OurTeamData} from './models/our-team-data';

@Injectable({
  providedIn: 'root'
})
export class OurTeamService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<IOurTeamData> {
    return this.http.get<any>(`/cobiro-api`).pipe(
      map((data) => {
        return new OurTeamData(data.data[0].attributes);
      })
    );
  }
}
