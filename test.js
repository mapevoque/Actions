let VuePageObject = require('./VuePageObject');
describe('actions, expected conditions', function() {

  it('edit task', function() {
   VuePageObject.openStartPage();   
   VuePageObject.clickOnSearchField();	
   VuePageObject.inputTextInField();
   VuePageObject.clickOnEnterKey();
   VuePageObject.doubleClick();
   VuePageObject.editElementAndInputText();
   VuePageObject.clickOnEnterKey();
   VuePageObject.clearLocalStorage();
  });

  it('delete a task', function() {
   VuePageObject.openStartPage();
   VuePageObject.clickOnSearchField();
   VuePageObject.inputTextInField();
   VuePageObject.clickOnEnterKey();
   VuePageObject.mouseMove();
   VuePageObject.clickOnDestroy();
   VuePageObject.clearLocalStorage();
  });
  
   it('enter value via js', function() {
   VuePageObject.openStartPage();
   VuePageObject.clickViaJs();   
   VuePageObject.enterDataViaJs();
  });


});