///<reference path="../../../../node_modules/@types/jasminewd2/index.d.ts"/>
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserCollapseComponent} from './user-collapse.component';
import {expect} from 'jasmine';

describe('UserCollapseComponent', () => {
  let component: UserCollapseComponent;
  let fixture: ComponentFixture<UserCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCollapseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
