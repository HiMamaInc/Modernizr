/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-exclusions"
  }, {
    "name": "Example by Louie Rootfield",
    "href": "https://webdesign.tutsplus.com/tutorials/css-exclusions--cms-28087"
  }]
}
!*/
define(['Modernizr', 'setCss', 'prefixed', 'docElement', 'createElement', 'isSVG'], function(Modernizr, setCss, prefixed, docElement, createElement, isSVG) {
  Modernizr.addTest('wrapflow', function() {
    var prefixedProperty = prefixed('wrapFlow');
    if (!prefixedProperty || isSVG) {
      return false;
    }

    var wrapFlowProperty = prefixedProperty.replace(/([A-Z])/g, function(str, m1) { return '-' + m1.toLowerCase(); }).replace(/^ms-/, '-ms-');

    /* If the CSS parsing is there we need to determine if wrap-flow actually works to avoid false positive cases, e.g. the browser parses
       the property, but it hasn't got the implementation for the functionality yet. */
    var container = createElement('div');
    var exclusion = createElement('div');
    var content = createElement('span');

    /* First we create a div with two adjacent divs inside it. The first div will be the content, the second div will be the exclusion area.
       We use the "wrap-flow: end" property to test the actual behavior. (https://drafts.csswg.org/css-exclusions-1/#wrap-flow-property)
       The wrap-flow property is applied to the exclusion area what has a 50px left offset and a 100px width.
       If the wrap-flow property is working correctly then the content should start after the exclusion area, so the content's left offset should be 150px. */
    setCss(exclusion, 'position: absolute; left: 50px; width: 100px; height: 20px;' + wrapFlowProperty + ':end;');
    content.innerText = 'X';

    container.appendChild(exclusion);
    container.appendChild(content);
    docElement.appendChild(container);

    var leftOffset = content.offsetLeft;

    docElement.removeChild(container);
    exclusion = content = container = undefined;

    return (leftOffset === 150);
  });
});
