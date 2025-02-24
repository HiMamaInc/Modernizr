/*!
{
  "name": "CSS Pointer Events",
  "caniuse": "pointer-events",
  "property": "csspointerevents",
  "authors": ["ausi"],
  "tags": ["css"],
  "builderAliases": ["css_pointerevents"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
  }, {
    "name": "Test Project Page",
    "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
  }, {
    "name": "Test Project Wiki",
    "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
  }, {
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/80"
  }]
}
!*/
define(['Modernizr', 'setCss', 'createElement'], function(Modernizr, setCss, createElement) {
  Modernizr.addTest('csspointerevents', function() {
    var elem = createElement('a');
    setCss(elem, 'pointer-events:auto');
    return elem.style.pointerEvents === 'auto';
  });
});
