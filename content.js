
window.addEventListener('load', () => {
      
    const globalFunctions = {
        qs: function (selector) {
            return document.querySelector(selector)
        },
        qsa: function (selector) {
            return document.querySelectorAll(selector)
        },
    };
  
    // Add global functions
    for(let key in globalFunctions) {
      if(globalFunctions.hasOwnProperty(key) && !globalThis[key]) {
        globalThis[key] = globalFunctions[key];
      }
    }



    const elementFunctions = {
        qs: function (selector) {
            return this.querySelector(selector)
        },
        qsa: function (selector) {
            return this.querySelectorAll(selector)
        },
    };

    // Add element functions
    for(let key in elementFunctions) {
        if(elementFunctions.hasOwnProperty(key) && !HTMLElement.prototype[key]) {
            HTMLElement.prototype[key] = elementFunctions[key];
        }
    }


});