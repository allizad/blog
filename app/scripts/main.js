(function(){

  // declare variables
  var categoryMenu = document.getElementById('category-list');
  var searchBtn = document.getElementById('search-button');
  var searchBox = document.getElementById('search-wrapper');
  var closeSearchIcon = document.getElementById('close-wrapper');

  // construct lightbox
  var $lightBox = $('<div></div>').addClass('lightbox');

  // add listener to category button
  $('#category').click(function(ev){
    // prevent default
    ev.preventDefault();

    classie.toggle(categoryMenu, 'open');
  });

  // add listener to search icon
  $(searchBtn).click(function(ev){
    // prevent default
    ev.preventDefault();

    // add lightbox
    $lightBox.prependTo($('body'));
    // slide search box down
    classie.add(searchBox, 'open');

    // add listener to lightbox
    $lightBox.click(function(ev){
      // prevent default
      ev.preventDefault();

      // close search box
      classie.remove(searchBox, 'open');
      // remove self
      $lightBox.remove();
    })
  });

  // add listener to close icon
  $(closeSearchIcon).click(function(ev){
    // prevent default
    ev.preventDefault();
    
    // slide search box up
    classie.remove(searchBox, 'open');
    // remove lightbox
    $lightBox.remove();
  });

})();
