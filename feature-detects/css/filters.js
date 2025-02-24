/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
define(['Modernizr', 'setCss', 'createElement', 'prefixes', 'testAllProps', 'test/css/supports'], function(Modernizr, setCss, createElement, prefixes, testAllProps) {
  Modernizr.addTest('cssfilters', function() {
    if (Modernizr.supports) {
      return testAllProps('filter', 'blur(2px)');
    } else {
      var el = createElement('a');
      setCss(el, prefixes.join('filter:blur(2px); '));
      // https://github.com/Modernizr/Modernizr/issues/615
      // documentMode is needed for false positives in oldIE, please see issue above
      return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
    }
  });

});
