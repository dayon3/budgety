/*
// MODULE PATTERN
// Module that handles our budget data
// independent (standalone) module

var budgetController = (function() {
	var x = 23;

	var add = function(a) {
		return x + a;
	};

	return {
		publicTest: function(b) {
			return add(b);
		}
	};
})();

// Module that takes care of the UI
// independent (standalone) module

var UIController = (function() {
	// Some code
})();

// Module that acts as a link to the other modules

var controller = (function(budgetCtrl, UICtrl) {
	var z = budgetCtrl.publicTest(5);

	return {
		anotherPublic: function() {
			console.log(z);
		}
	};
})(budgetController, UIController);
*/
