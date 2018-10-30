let Actions = require('./actions');
let ExecuteScript = require('./executeScript');

class VuePageObject {

constructor() {
        this.elementsFromList = element.all(by.css('.todo'));
        this.edit = element.all(by.css('.edit'));
		this.searchField = element(by.css('.new-todo'));
        this.destroy = element.all(by.css('.destroy'));
        this.moveTo = element.all(by.css('body > aside > footer > em > a'));
}

  openStartPage() {
	 browser.get('http://todomvc.com/examples/vue/');     	 
  };
  clickOnSearchField() {
	 this.searchField.click();     	 
  };
  inputTextInField() {
	browser.wait(ExpectedConditions.visibilityOf(this.searchField), 9000).then(() =>{
		 this.searchField.sendKeys('test item');  
	});	
  }; 
  clickOnEnterKey() {
     Actions.sendKeys(protractor.Key.ENTER);	 
  };
  doubleClick() {
    Actions.doubleClick(this.elementsFromList);	 
  };
  editElementAndInputText() {
	 this.edit.get(0).sendKeys(' - edited');     	 
  };
  clearLocalStorage() {
     ExecuteScript.clearLocalStorage();	 
  };
  mouseMove() {
   Actions.mouseMove(this.elementsFromList);	
  };
  clickOnDestroy() {
  Actions.click(this.destroy);	 
  };
  enterDataViaJs() {
  ExecuteScript.executeScript("document.querySelector('.new-todo').value = 'MAXIM';");
  };
  clickViaJs() {
  ExecuteScript.executeScript("document.querySelector('.new-todo').click();");   	 
  };
};
module.exports = new VuePageObject();