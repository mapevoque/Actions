class Actions {	
	doubleClick(element){
	browser.actions().doubleClick((element).get(0)).perform();
	};
	click(element){
	browser.actions().click((element).get(0)).perform();
	};
	mouseMove(element){
	browser.actions().mouseMove((element).get(0)).perform();
	};
	sendKeys(value){
	browser.actions().sendKeys(value).perform();
	};
};

//module.exports = new Actions;
export default Actions;