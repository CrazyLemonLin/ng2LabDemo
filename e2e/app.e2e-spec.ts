import { Demo812Page } from './app.po';

describe('demo812 App', function() {
  let page: Demo812Page;

  beforeEach(() => {
    page = new Demo812Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
