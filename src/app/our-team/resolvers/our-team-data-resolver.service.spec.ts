import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {OurTeamDataResolve} from './our-team-data-resolve.service';
import {OurTeamService} from '../our-team.service';
import {dummyFormattedData} from '../../../tests/mocks/mock-our-team-data';

describe('OurTeamDataResolve', () => {
    let resolver: OurTeamDataResolve;
    let ourTeamServiceSpy: jasmine.SpyObj<OurTeamService>;

    beforeEach(() => {
        ourTeamServiceSpy = jasmine.createSpyObj('OurTeamService', ['getData']);
        ourTeamServiceSpy.getData.and.returnValue(of(dummyFormattedData));

        TestBed.configureTestingModule({
            providers: [
                OurTeamDataResolve,
                {provide: OurTeamService, useValue: ourTeamServiceSpy}
            ]
        });
        resolver = TestBed.inject(OurTeamDataResolve);
    });

    it('should get data from API', (done) => {
        resolver.resolve().subscribe((ret) => {
            expect(ret).toEqual(dummyFormattedData);
            done();
        });

        expect(ourTeamServiceSpy.getData).toHaveBeenCalled();
    });
});
