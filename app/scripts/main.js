// declar variables
var categoryMenu = document.getElementById('category-list');
    searchBtn = document.getElementById('search-button');
    searchBox = document.getElementById('search-wrapper');
    closeSearchIcon = document.getElementById('close-wrapper');

// construct lightbox
var $lightBox = $('<div></div>').addClass('lightbox');

$('#category').click(function(){
  classie.toggle(categoryMenu, 'open');
});

$(searchBtn).click(function(){
  // add lightbos
  $lightBox.prependTo($('body'));
  // slide search box down
  classie.add(searchBox, 'open');
});

$(closeSearchIcon).click(function(){
  // slide search box up
  classie.remove(searchBox, 'open');
  // remove lightbox
  $lightBox.remove();
});
