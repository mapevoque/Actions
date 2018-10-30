let VuePageObject = function() {

  elementsFromList = $$('.todo');
  edit = $$('.edit');  
  searchField = $('.new-todo');
  destroy = $$('.destroy');
  moveTo = $$('body > aside > footer > em > a');


  this.openStartPage = () =>{
	 browser.get('http://todomvc.com/examples/vue/');     	 
  };
  this.clickOnSearchField = () =>{
	 searchField.click();     	 
  };
  this.inputTextInField = () =>{
	browser.wait(ExpectedConditions.visibilityOf(searchField), 9000).then(() =>{
		 searchField.sendKeys('test item');  
	});	
  }; 
  this.clickOnEnterKey = () =>{
	 browser.actions().sendKeys(protractor.Key.ENTER).perform();     	 
  };
  this.doubleClick = () =>{
	 browser.actions().doubleClick((elementsFromList).get(0)).perform();     	 
  };
  this.editElementAndInputText = () =>{
	 edit.get(0).sendKeys(' - edited');     	 
  };
  this.clearLocalStorage = () =>{
	 browser.executeScript('window.localStorage.clear();');     	 
  };
  this.mouseMove = () =>{
	 browser.actions().mouseMove((elementsFromList).get(0)).perform();    	 
  };
  this.clickOnDestroy = () =>{
	 browser.actions().click((destroy).get(0)).perform();    	 
  };
  this.enterDataViaJs = () =>{
     browser.executeScript("document.querySelector('.new-todo').value = 'MAXIM';");   	 
  };
   this.clickViaJs = () =>{
     browser.executeScript("document.querySelector('.new-todo').click();");   	 
  };
};
module.exports = new VuePageObject();