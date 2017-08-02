import { Angular2FirstAppPage } from './app.po';

describe('angular2-first-app App', () => {
  let page: Angular2FirstAppPage;

  beforeEach(() => {
    page = new Angular2FirstAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
