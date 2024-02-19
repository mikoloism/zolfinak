// ---
// --- Core API
// ---
import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.string.replace.js';
import 'core-js/modules/esnext.string.replace-all.js';
import 'core-js/modules/web.dom-collections.iterator.js';

// ---
// --- Intl API
// ---

// Intl.getCanonicalLocales
import '@formatjs/intl-getcanonicallocales/polyfill';

// Intl.Locale
import '@formatjs/intl-locale/polyfill';

// Intl.ListFormat
import '@formatjs/intl-listformat/polyfill';
import '@formatjs/intl-listformat/locale-data/en';
import '@formatjs/intl-listformat/locale-data/fa';

// Intl.PluralRules
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/fa';

// Intl.DisplayNames
import '@formatjs/intl-displaynames/polyfill';
import '@formatjs/intl-displaynames/locale-data/en';
import '@formatjs/intl-displaynames/locale-data/fa';

// Intl.NumberFormat
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/en';
import '@formatjs/intl-numberformat/locale-data/fa';

// Intl.RelativeTimeFormat
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/fa';

// Intl.DateTimeFormat
import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/locale-data/en';
import '@formatjs/intl-datetimeformat/locale-data/fa';
import '@formatjs/intl-datetimeformat/add-all-tz';

// Intl.DurationFormat
import '@formatjs/intl-durationformat/polyfill';

// Intl.supportedValuesOf
import '@formatjs/intl-enumerator/polyfill';

// Intl.Segmenter
import '@formatjs/intl-segmenter/polyfill';
