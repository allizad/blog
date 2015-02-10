// declare variables
var categoryMenu = document.getElementById('category-list');
var searchBtn = document.getElementById('search-button');
var searchBox = document.getElementById('search-wrapper');
var closeSearchIcon = document.getElementById('close-wrapper');

// construct lightbox
var $lightBox = $('<div></div>').addClass('lightbox');

// add event listeners
$lightBox.click(function(){
  // close search box
  classie.remove(searchBox, 'open');
  // remove self
  $lightBox.remove();
})

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
