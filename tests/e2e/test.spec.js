// Describe a feature
describe('This should detect $ionicLoading dialogs', function(){

  browser.get('http://localhost:8100');

  it('should only test when ionicLoading appears', function() {
      browser.wait(function(){
        return element(by.css('.loading-container.visible.active')).isPresent();
      }, 10000);
      var ionicLoadingText = element(by.css('.loading-container.visible.active')).getText();
      expect(ionicLoadingText).toEqual('Async IonicLoading');
    })

    it('should only test once ionicLoading disappears', function() {
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

    //Attempt 1
    // browser.wait(function() {
    //   var deferred = protractor.promise.defer();
    //   var q = element(by.css('.loading-container.visible.active')).isPresent()
    //   q.then( function (isPresent) {
    //       deferred.fulfill(isPresent);
    //   });
    //   return deferred.promise;
    // }, 10000);

    //With q_wait the promise given by browser.wait, this statement never gets resolved.
    // q_wait.then( function() {
    //
    //   console.log('Arrived here');
    //   var ionicLoadingText = element(by.css('.loading-container.visible.active')).getText();
    //   expect(ionicLoadingText).toEqual('Async IonicLoading');
    // })

    //Attempt 2
    // var EC = protractor.ExpectedConditions;
    // browser.wait(EC.alertIsPresent(), 10000);
    // expect(element(by.css('.loading-container.visible.active'))).toBe('Async ionicLoading');

    //Attempt3
    // var elementToFind = element(by.css('.loading-container.visible.active'));
    // browser.driver.isElementPresent(elementToFind).then(function(isPresent){
    //     expect(elementToFind.getText()).toBe('Async ionicLoading');
    // });
    // // error: invalid locator

    //Attempt 4
    // var waitLoading = by.css('.loading-container.visible.active');
    //
    //  browser.driver.wait(function() {
    //      return waitLoading.isPresent();
    //  }, 8000);
    //
    //  var waitLoadingText = element(waitLoadingText).getText();
    //  expect(waitLoadingText).ToEqual('Async ionicLoading');

  //   var q_wait = browser.wait(function() {
  //     var deferred = protractor.promise.defer();
  //     var q = element(by.css('.loading-container.visible.active')).isPresent();
  //     q.then( function (isPresent) {
  //         str = str + '.';
  //         console.log(isPresent);
  //         console.log(str);
  //         if (isPresent == true) {
  //           console.log('Fulfilling promise');
  //           deferred.fulfill();
  //         } else {
  //           console.log('Pausing promise still')
  //           deferred.fulfill(false);
  //         }
  //     });
  //     console.log('So past q.then')
  //     return deferred.promise;
  //   }, 10000);
  //   console.log('Past wait');
  //   q_wait.then(function() {
  //     console.log('Q_wait successful');
  //   })
  //   var ionicLoadingText = element(by.css('.loading-container.visible.active')).getText();
  //   expect(ionicLoadingText).teEqual('Async IonicLoading');
  //
  // })
  //
  // xit('should only test once $ionicLoading disappears', function() {
  //   browser.wait(function() {
  //     var deferred = protractor.promise.defer();
  //     var elementToFind = by.linkText('Start'); //what element we are looking for
  //     browser.driver.isElementPresent(elementToFind)
  //     return deferred.promise;
  //   }, 10000);
  //   expect(1).toEqual(1);
  // })

  //Webdriver wait on a condition


  //Webdriver wait on a promise
  // var started = startTestServer();
  // driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
  // driver.get(getServerUrl());

  //Attempt 5
  // var EC = protractor.ExpectedConditions;
  // var visCondition = EC.visibilityOf(By.css('.loading-container.visible.active'));
  // var ionicLoading = browser.driver.wait(browser.driver.until.visCondition, 10000);
  // expect(ionicLoading.getText()).toEqual('Async IonicLoading');



});
