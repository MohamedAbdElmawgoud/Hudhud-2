import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendLocationOnMapPage } from './send-location-on-map.page';

describe('SendLocationOnMapPage', () => {
  let component: SendLocationOnMapPage;
  let fixture: ComponentFixture<SendLocationOnMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLocationOnMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendLocationOnMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
