<p align="center">
   <a href="https://www.npmjs.com/package/modernizr" rel="noopener" target="_blank"><img alt="Modernizr" src="./media/Modernizr-2-Logo-vertical-medium.png" width="250" /></a>
</p>

<div align="center">
  
##### மாடர்னிசர் என்பது ஜாவாஸ்கிரிப்ட் நூலகமாகும், இது பயனரின் உலாவியில் எச்டிஎம்எல்5 மற்றும் சிஎஸ்எஸ்3 அம்சங்களைக் கண்டறியும்.
  
[![npm version](https://badge.fury.io/js/modernizr.svg)](https://badge.fury.io/js/modernizr)
[![Build Status](https://github.com/Modernizr/Modernizr/workflows/Testing/badge.svg)](https://github.com/Modernizr/Modernizr/actions)
[![codecov](https://codecov.io/gh/Modernizr/Modernizr/branch/master/graph/badge.svg)](https://codecov.io/gh/Modernizr/Modernizr)
[![Inline docs](https://inch-ci.org/github/Modernizr/Modernizr.svg?branch=master)](https://inch-ci.org/github/Modernizr/Modernizr)

</div>

- இந்த கோப்பை போர்ச்சுகீஸ் மொழியில் படிக்கவும்-பி.ஆர் [இங்கே](/README.pt_br.md)
- இந்தக் கோப்பை இந்தோனேசிய மொழியில் படிக்கவும் [இங்கே](/README.id.md)
- இந்த கோப்பை ஸ்பானிஷ் மொழியில் [இங்கே](/README.sp.md)
- இந்த கோப்பை ஸ்வீடிஷ் மொழியில் படிக்கவும் [இங்கே](/README.sv.md)
- இந்த கோப்பை தமிழில் படிக்கவும் [இங்கே](/README.ta.md)

- எங்கள் இணையதளம் காலாவதியானது மற்றும் உடைந்துவிட்டது, தயவுசெய்து அதைப் பயன்படுத்த வேண்டாம் (https://modernizr.com) மாறாக உங்கள் நவீனமயமாக்கல் பதிப்பை npm இலிருந்து உருவாக்கவும்.
- [ஆவணப்படுத்தல்](https://modernizr.com/docs/)
- [இடையீடு சோதனைகள்](https://modernizr.github.io/Modernizr/test/integration.html)
- [அலகு சோதனைகள்](https://modernizr.github.io/Modernizr/test/unit.html)

மாடர்னிசர் தற்போதைய யுஏ இல் எந்த சொந்த சிஎஸ்எஸ்3 மற்றும் எச்டிஎம்எல்5 அம்சங்கள் உள்ளன என்பதைச் சோதித்து, முடிவுகளை இரண்டு வழிகளில் உங்களுக்குக் கிடைக்கச் செய்கிறது: உலகளாவிய `Modernizr` பொருளின் பண்புகளாகவும், `<html>` உறுப்புக்கான வகுப்புகளாகவும். இந்தத் தகவல், அனுபவத்தின் மீதான சிறு அளவிலான கட்டுப்பாட்டுடன் உங்கள் பக்கங்களை படிப்படியாக மேம்படுத்த அனுமதிக்கிறது.

## v4 உடன் மாற்றங்களை உடைக்கிறது

- முனை பதிப்புகளுக்கான ஆதரவு கைவிடப்பட்டது <= 10, தயவுசெய்து குறைந்தபட்சம் பதிப்பு 12 க்கு மேம்படுத்தவும்

- பின்வரும் சோதனைகள் மறுபெயரிடப்பட்டன:
  
  - `வகுப்பு` முதல் `es6class` வரை மீதமுள்ள es-சோதனைகளுக்கு ஏற்ப இருக்க வேண்டும்

- பின்வரும் சோதனைகள் துணை அடைவுகளில் நகர்த்தப்பட்டன:  

  - `cookies`, `indexeddb`, `indexedblob`, `quota-management-api`, `userdata` சேமிப்பக துணை அடைவுக்கு நகர்த்தப்பட்டது   
  - `audio` ஆடியோ துணை அடைவுக்கு நகர்த்தப்பட்டது
  - `battery` பேட்டரி துணை அடைவுக்கு நகர்த்தப்பட்டது
  - `canvas`, `canvastext` கேன்வாஸ் துணை அடைவுக்கு நகர்த்தப்பட்டது
  - `customevent`, `eventlistener`, `forcetouch`, `hashchange`, `pointerevents`, `proximity` நிகழ்வு துணை அடைவுக்கு நகர்த்தப்பட்டது
  - `exiforientation` படத்தின் துணை அடைவுக்கு நகர்த்தப்பட்டது
  - `capture`, `fileinput`, `fileinputdirectory`, `formatattribute`, `input`, `inputnumber-l10n`, `inputsearchevent`, `inputtypes`, `placeholder`, `requestautocomplete`, `validation` உள்ளீட்டிற்கு நகர்த்தப்பட்டது துணை அடைவு
  - `svg` எஸ்.வி.ஜி துணை அடைவுக்கு நகர்த்தப்பட்டது
  - `webgl` wவலைஜிஎல் துணை அடைவுக்கு நகர்த்தப்பட்டது
       
- பின்வரும் சோதனைகள் நீக்கப்பட்டன:
  
  - `தொடுதல் நிகழ்வுகள்`: [விவாதம்](https://github.com/Modernizr/Modernizr/pull/2432)
  - `யூனிகோட்`: [விவாதம்](https://github.com/Modernizr/Modernizr/issues/2468)
  - `வார்ப்புருக்கள்`: ஈஎஸ்6 கண்டறிதலின் நகல் `stringtemplate`
  - `கொண்டுள்ளது`: ஈஎஸ்6 கண்டறிதலின் நகல் `es6string`
  - `தரவு பட்டியல்`: Modernizr.input.list இன் போலி


## புதிய ஒத்திசைவற்ற நிகழ்வு கேட்போர்

ஒரு ஒத்திசைவற்ற சோதனை எப்போது செய்யப்படுகிறது என்பதை மக்கள் அடிக்கடி அறிய விரும்புகிறார்கள், அதனால் அவர்கள் தங்கள் விண்ணப்பத்தை அதற்கு எதிர்வினையாற்ற அனுமதிக்கலாம்.
கடந்த காலத்தில், பண்புகள் அல்லது `<html>` வகுப்புகளைப் பார்ப்பதில் நீங்கள் தங்கியிருக்க வேண்டியிருந்தது. **ஒத்திசைவற்ற** சோதனைகளில் நிகழ்வுகள் மட்டுமே
ஆதரித்தது. வேகத்தை மேம்படுத்தவும், நிலைத்தன்மையை பராமரிக்கவும் ஒத்திசைவான சோதனைகள் ஒத்திசைவாக கையாப்பட வேண்டும்.

புதிய ஏபிஈ API இது போல் தெரிகிறது

```js
// ஒரு சோதனையைக் கேளுங்கள், அதை மீண்டும் அழைக்கவும்  
Modernizr.on('testname', function( result ) {
  if (result) {
    console.log('The test passed!');
  }
  else {
    console.log('The test failed!');
  }
});
```
உங்கள் செயல்பாட்டை ஒருமுறை மட்டுமே செயல்படுத்துவோம் என்று நாங்கள் உத்தரவாதம் அளிக்கிறோம் (ஒரு முறை நீங்கள் `ஆன்` என்று அழைக்கும் போது). நாங்கள் தற்போது வெளிப்படுத்தவில்லை
`தூண்டுதல்` செயல்பாட்டை வெளிப்படுத்துவதற்கான ஒரு முறை. அதற்குப் பதிலாக, ஒத்திசைவு சோதனைகளின் மீது நீங்கள் கட்டுப்பாட்டைப் பெற விரும்பினால், இதைப் பயன்படுத்தவும்
`src/addTest` அம்சம் மற்றும் நீங்கள் அமைக்கும் எந்த சோதனையும் தானாகவே `ஆன்` செயல்பாட்டை வெளிப்படுத்தும் மற்றும் தூண்டும்.

## தொடங்குதல்

- களஞ்சியத்தை குளோன் செய்யவும் அல்லது பதிவிறக்கவும்
- `npm install` மூலம் திட்ட சார்புகளை நிறுவவும்

## கட்டிடம் நவீனமயமாக்கல்


### ஜாவாஸ்கிரிப்டில் இருந்து

மாடர்னிசர் ஐ npm வழியாக நிரல் ரீதியாகப் பயன்படுத்தலாம்:

```js
var modernizr = require("modernizr");
```

தனிப்பயன் மாடர்னிசர் பில்ட்களை உருவாக்குவதற்கான ஒரு `build` முறை வெளிப்படுகிறது. உதாரணமாக:

```javascript
var modernizr = require("modernizr");

modernizr.build({}, function (result) {
  console.log(result); // the build
});
```

முதல் அளவுருவானது JSON ஆப்ஜெக்ட் ஆப்ஜெக்ட் மற்றும் அம்சத்தைக் கண்டறிகிறது. கிடைக்கக்கூடிய அனைத்து விருப்பங்களுக்கும் [`lib/config-all.json`](lib/config-all.json) ஐப் பார்க்கவும்.

இரண்டாவது அளவுரு என்பது பணியை முடிக்கும் போது செயல்படுத்தப்படும் ஒரு செயல்பாடாகும்.

### கட்டளை வரியிலிருந்து

நவீனமயமாக்கலை உருவாக்குவதற்கான கட்டளை வரி இடைமுகத்தையும் நாங்கள் வழங்குகிறோம்.
கிடைக்கக்கூடிய அனைத்து விருப்பங்களையும் பார்க்க, இயக்கவும்:

```shell
./bin/modernizr
```

அல்லது 'config-all.json' இல் அனைத்தையும் உருவாக்க, இதை npm உடன் இயக்கவும்:

```shell
npm start
//outputs to ./dist/modernizr-build.js
```

## மாடர்னிசர் சோதனை

கன்சோல் இயக்கத்தில் mocha-headless-chrome ஐப் பயன்படுத்தி சோதனைகளைச் செயல்படுத்த:

```shell
npm test
```

இந்தக் கட்டளையைப் பயன்படுத்தி உங்களுக்கு விருப்பமான உலாவியில் சோதனைகளையும் இயக்கலாம்:

```shell
npm run serve-gh-pages
```

மற்றும் இந்த இரண்டு URLகளுக்கு செல்லவும்:

```shell
http://localhost:8080/test/unit.html
http://localhost:8080/test/integration.html
```

## நடத்தை விதிகள்

இந்த திட்டம் [ஓப்பன் கான்டக்ட் கோட்](https://github.com/Modernizr/Modernizr/blob/master/.github/CODE_OF_CONDUCT.md) இணங்குகிறது.
பங்கேற்பதன் மூலம், இந்த குறியீட்டை நீங்கள் மதிக்க வேண்டும் என்று எதிர்பார்க்கப்படுகிறது.

## உரிமம்

[எம்ஐடி உரிமம்](https://opensource.org/licenses/MIT)
