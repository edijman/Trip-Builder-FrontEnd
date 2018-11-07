import { NgxModule } from './ngx.module';

describe('NgxModule', () => {
  let ngxModule: NgxModule;

  beforeEach(() => {
    ngxModule = new NgxModule();
  });

  it('should create an instance', () => {
    expect(ngxModule).toBeTruthy();
  });
});
