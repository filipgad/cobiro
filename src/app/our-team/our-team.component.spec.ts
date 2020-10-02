import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {OurTeamComponent} from './our-team.component';
import {OurTeamService} from './our-team.service';
import {TeamMemberComponent} from './team-member/team-member.component';
import {dummyFormattedData} from '../../tests/mocks/mock-our-team-data';

describe('OurTeamComponent', () => {
    let component: OurTeamComponent;
    let fixture: ComponentFixture<OurTeamComponent>;
    let ourTeamServiceSpy: jasmine.SpyObj<OurTeamService>;

    beforeEach(() => {
        ourTeamServiceSpy = jasmine.createSpyObj('OurTeamService', ['getData']);
        ourTeamServiceSpy.getData.and.returnValue(of(dummyFormattedData));

        TestBed.configureTestingModule({
            declarations: [
                OurTeamComponent,
                TeamMemberComponent
            ],
            providers: [{provide: OurTeamService, useValue: ourTeamServiceSpy}]
        });

        fixture = TestBed.createComponent(OurTeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should get data from API', (done) => {
        ourTeamServiceSpy.getData().subscribe((ret) => {
            expect(ret).toEqual(dummyFormattedData);
            done();
        });

        expect(ourTeamServiceSpy.getData).toHaveBeenCalled();
    });
});
