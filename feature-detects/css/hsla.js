/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(['Modernizr', 'setCss', 'createElement', 'contains'], function(Modernizr, setCss, createElement, contains) {
  Modernizr.addTest('hsla', function() {
    var elem = createElement('a');
    setCss(elem, 'background-color:hsla(120,40%,100%,.5)');
    return contains(elem.style.backgroundColor, 'rgba') || contains(elem.style.backgroundColor, 'hsla');
  });
});
