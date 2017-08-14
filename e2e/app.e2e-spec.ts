import { MapBattlePage } from './app.po';

describe('map-battle App', function() {
  let page: MapBattlePage;

  beforeEach(() => {
    page = new MapBattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
