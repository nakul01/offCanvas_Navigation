(function() {

  /**
   The APP object houses methods that are common to the entire application
  */
  window.APP = {

    /** 
     ## getState
     Determine the current context, based on mediaqueries,
     that the application is currently running in
     
     @return string
    */
    getState: function() {
      var state,
          sizes = {
            "10px": "small",
            "20px": "medium",
            "30px": "large"
          };

      if (window.getComputedStyle) {
        sizeTest = document.createElement("div");
        sizeTest.id = "sizeTest";
        document.body.appendChild(sizeTest);
        state = sizes[window.getComputedStyle(sizeTest).getPropertyValue("font-size")];
        document.body.removeChild(sizeTest);
      } else {
        state = sizes["30px"];
      }
      return state;
    }
  };
})();