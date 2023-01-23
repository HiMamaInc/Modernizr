/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
/* DOC
Method of allowing calculated values for length units. For example:

```css
//lem {
  width: calc(100% - 3em);
}
```
*/
define(['Modernizr', 'setCss', 'createElement', 'prefixes'], function(Modernizr, setCss, createElement, prefixes) {
  Modernizr.addTest('csscalc', function() {
    var prop = 'width:';
    var value = 'calc(10px);';
    var el = createElement('a');

    setCss(el, prop + prefixes.join(value + prop));

    return !!el.style.length;
  });
});
