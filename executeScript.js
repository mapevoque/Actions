class ExecuteScript {	
	executeScript(value){
	browser.executeScript(value);
	};
	clearLocalStorage(){
	browser.executeScript('window.localStorage.clear();');
	};
};

module.exports = new ExecuteScript;