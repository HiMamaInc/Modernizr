/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href": "https://bugs.chromium.org/p/chromium/issues/detail?id=322972"
  }],
  "warnings": ["using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+"]
}
!*/
define(['Modernizr', 'setCss', 'createElement', 'prefixes'], function(Modernizr, setCss, createElement, prefixes) {
  // Sticky positioning - constrains an element to be positioned inside the
  // intersection of its container box, and the viewport.
  Modernizr.addTest('csspositionsticky', function() {
    var prop = 'position:';
    var value = 'sticky';
    var elem = createElement('a');

    setCss(elem, prop + prefixes.join(value + ';' + prop).slice(0, -prop.length));

    return elem.style.position.indexOf(value) !== -1;
  });
});
