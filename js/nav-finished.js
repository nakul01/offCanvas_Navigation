(function() {

  window.NAV = {
    // NAV object with a set of DOM selections & functions 
    // 1. Define some key/value pairs for selectors
    // 2. clear: opem menu class from sub-menu 
    // 3. toggle: main menu-open class 
    // 4. toggleSubNav: open and close sub nav
    // 5. toggleAnimations: Make sure at small screens you can call the CSS3 animation class "enableAnimations"
    // 6: bindEvents: 2 events to trigger a) Slide in the mainNav on small screens & slideDown subNav 
    // 7. init: Initialise everything and kick them off 

    $clickOverlay: $("<div class='clickOverlay js-togglesOffCanvas'></div>"),
    $body: $("body"),
    $subMenus: $(".subMenu"),
    
    clear: function() {
      NAV.$body.removeClass("mainMenu-is-open");
      NAV.$subMenus.removeAttr("style");
      //remove any inline js style="" attributes injected by JS that my linger 
    },
    
    toggle: function(e) {
      e.preventDefault();
      NAV.$body.toggleClass("mainMenu-is-open");
    },
    
    toggleSubNav: function(e) {
      e.preventDefault();
      if ( APP.getState() === "small" ) {
         $(this).siblings("ul").stop().slideToggle("slow");
         //stop any previous animations and slide the sunMenu - 
         //I don't know what $(this) refers to in this object
      }
    },
    
    toggleAnimations: function() {
      if ( APP.getState() === "small" ) {
        NAV.$body.addClass("enableAnimations");
      } else {
        NAV.$body.removeClass("enableAnimations");
      }
    },
    
    bindEvents: function() {
      $(".js-togglesOffCanvas").on("click", NAV.toggle);
      //call the NAV toggle: method to swap "mainMenu-is-open" class

      $(".mainNav").on("click", ".js-togglesSubMenu", NAV.toggleSubNav);
    },
    
    init: function() {
      NAV.$clickOverlay.appendTo("body");
      NAV.bindEvents();
      
      mediaCheck({
        media: "(min-width: 30em)",
        entry: function() {
          NAV.clear();
          NAV.toggleAnimations();
        },
        exit: function() {
          NAV.toggleAnimations();
        }
      });
    }
  }
})();




NAV.init();