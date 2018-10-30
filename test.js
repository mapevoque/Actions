let VuePageObject = require('./VuePageObject');
describe('actions, expected conditions', () => {

  it('edit task', () => {
   VuePageObject.openStartPage();   
   VuePageObject.clickOnSearchField();	
   VuePageObject.inputTextInField();
   VuePageObject.clickOnEnterKey();
   VuePageObject.doubleClick();
   VuePageObject.editElementAndInputText();
   VuePageObject.clickOnEnterKey();
   VuePageObject.clearLocalStorage();
  });

  it('delete a task', () => {
   VuePageObject.openStartPage();
   VuePageObject.clickOnSearchField();
   VuePageObject.inputTextInField();
   VuePageObject.clickOnEnterKey();
   VuePageObject.mouseMove();
   VuePageObject.clickOnDestroy();
   VuePageObject.clearLocalStorage();
  });
  
   it('enter value via js', () => {
   VuePageObject.openStartPage();
   VuePageObject.clickViaJs();   
   VuePageObject.enterDataViaJs();
  });


});