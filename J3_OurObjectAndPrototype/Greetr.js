(function(global, $) { // immediately invoked function passed with global object and jquery
    
	// create a new object so that you don't have to use the keyword new all the time
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
	// create prototype empty object
    Greetr.prototype = {};
    
	// function constructor that builds the values
    Greetr.init = function(firstName, lastName, language) {
        
		// set up default values
		// assing self to this
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
	// pointing at the objects
    Greetr.init.prototype = Greetr.prototype;
    
	// expose greetr to the outside "world"
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery)); // invoked it and passed jquery object and global object