( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );

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
