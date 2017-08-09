import { TechPage } from './app.po';

describe('tech App', () => {
  let page: TechPage;

  beforeEach(() => {
    page = new TechPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
