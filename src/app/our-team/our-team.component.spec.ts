import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {OurTeamComponent} from './our-team.component';
import {OurTeamService} from './our-team.service';
import {IOurTeamData, OurTeamData} from './models/our-team-data';
import {TeamMemberComponent} from './team-member/team-member.component';

describe('OurTeamComponent', () => {
    let component: OurTeamComponent;
    let fixture: ComponentFixture<OurTeamComponent>;
    let ourTeamServiceSpy: jasmine.SpyObj<OurTeamService>;

    const dummyData = {
        title: 'dummyTitle',
        memberCards: {
            first: {
                imageUrl: {
                    w200: 'w200',
                    w400: 'w400',
                    w1080: 'w1080',
                    w1920: 'w1920',
                    w2560: 'w2560'
                },
                block: {
                    title: 'Serenity Wood',
                    description: 'Digital Strategist',
                    link: 'serenity@company.com',
                    text: '+1 456 789 123'
                }
            },
            second: {
                imageUrl: {
                    w200: 'w200',
                    w400: 'w400',
                    w1080: 'w1080',
                    w1920: 'w1920',
                    w2560: 'w2560'
                },
                block: {
                    title: 'Roy Moreno',
                    description: 'Consultant',
                    link: 'roy@company.com',
                    text: '+1 234 567 891'
                }
            },
        }
    };
    const dummyFormattedData: IOurTeamData = new OurTeamData(dummyData);

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
