import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulefilterPage } from './schedulefilter.page';

describe('SchedulefilterPage', () => {
  let component: SchedulefilterPage;
  let fixture: ComponentFixture<SchedulefilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulefilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulefilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
