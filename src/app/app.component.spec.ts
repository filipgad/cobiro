import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let domElement: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule]
        });

        fixture = TestBed.createComponent(AppComponent);
        domElement = fixture.nativeElement;
    });

    it('should create', () => {
        expect(domElement.querySelector('router-outlet')).toBeTruthy();
    });
});
