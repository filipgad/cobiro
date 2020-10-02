import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {OurTeamService} from './our-team.service';
import {dummyData, dummyFormattedData} from '../../tests/mocks/mock-our-team-data';

describe('OurTeamService', () => {
    let service: OurTeamService;
    let httpMock: HttpTestingController;

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
