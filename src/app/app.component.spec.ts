import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Testing AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // console.log(compiled.querySelector('.content span').textContent);
    expect(compiled.querySelector('.content span').textContent).toContain('test app is running!');
  });

  it('should render resources', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log(compiled.querySelector('h2').textContent)
    expect(compiled.querySelector('h2').textContent).toContain('Resources');
  });

  it('testing add method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(6,4)).toEqual(10);
  })

  it('#clicked() should toggle #isOn', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isOn).toBe(false, 'off at first');
    app.clicked();
    expect(app.isOn).toBe(true, 'on at first');
    app.clicked();
    expect(app.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"' ,() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.message).toMatch(/is off/i, 'off at first');
    app.clicked();
    expect(app.message).toMatch(/is on/i, 'on after clicked');
  });
});
