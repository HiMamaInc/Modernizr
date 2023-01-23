/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "caniuse": "css-background-offsets",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
/* DOC
Detects if you can use the shorthand method to define multiple parts of an
element's background-position simultaneously.

eg `background-position: right 10px bottom 10px`
*/
define(['Modernizr', 'setCss', 'createElement'], function(Modernizr, setCss, createElement) {
  Modernizr.addTest('bgpositionshorthand', function() {
    var elem = createElement('a');
    var val = 'right 10px bottom 10px';
    setCss(elem, 'background-position: ' + val + ';');
    return (elem.style.backgroundPosition === val);
  });
});
