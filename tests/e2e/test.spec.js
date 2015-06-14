// Describe a feature
describe('This should detect $ionicLoading dialogs', function(){

  browser.get('http://localhost:8100');

  it('should only test when $ionicLoading appears', function() {
        browser.wait(function(){
          return element(by.css('.loading-container.visible.active')).isPresent();
        }, 10000);
        expect(1).toEqual(1);
  })

  it('should only test once $ionicLoading disappears', function() {
    browser.wait(function() {
      var deferred = protractor.promise.defer();
      var q = element(by.css('.loading-container.visible.active')).isPresent()
      q.then( function (isPresent) {
          deferred.fulfill(!isPresent);
      });
      return deferred.promise;
    });
    expect(1).toEqual(1);
  })

});
