import { HereForBeerPage } from './app.po';

describe('here-for-beer App', function() {
  let page: HereForBeerPage;

  beforeEach(() => {
    page = new HereForBeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
