(function(global, $) { // immediately invoked function passed with global object and jquery
    
	// create a new object so that you don't have to use the keyword new all the time
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
	// set up safe data so others outside can't change these without modifying the source code
	// create array supportedLangs
    var supportedLangs = ['en', 'es'];
    
	// create greeting object with pairs (reference by the name value pair)
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
	// create formalGreetings object with pairs (reference by the name value pair)
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
	// create logMessages object with pairs (reference by the name value pair)
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
	// methods
    Greetr.prototype = {
        
		// fullName property  to return firstname and lastname
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
		// validate if the language is supported, if not supported throw error
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
		// get the proper greeting
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
		// get the formal greeting
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
		// make the greeting chainable
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }
			
            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
		// if console object available then log the message (for developers) and make it chainable
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
        
		// validate language
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this; // this makes it chainable
        },
        
		// functioh HTMLGreeting
        HTMLGreeting: function(selector, formal) {
			
			// if jquery is not found
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
			// if no selector
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
			// determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
			// pass the selector to jquery object
            $(selector).html(msg);
            
			// this makes it chainable
            return this;
        }
        
    };
    
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
    
	// expose greetr to outside "world"
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery)); // invoked it and passed jquery object and global object