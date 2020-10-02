import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {OurTeamService} from './our-team.service';
import {IOurTeamData, OurTeamData} from './models/our-team-data';

describe('OurTeamService', () => {
    let service: OurTeamService;
    let httpMock: HttpTestingController;

    const dummyData = {
        data: [
            {
                attributes: {
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
                        }
                    }
                }
            }
        ]
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [OurTeamService]
        });
        service = TestBed.inject(OurTeamService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('#getData', () => {
        it('should get data from API', (done) => {
            const dummyFormattedData: IOurTeamData = new OurTeamData(dummyData.data[0].attributes);

            service.getData().subscribe((data) => {
                expect(data).toEqual(dummyFormattedData);
                done();
            });

            const req = httpMock.expectOne('/cobiro-api');
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
});
