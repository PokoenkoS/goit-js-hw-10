!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var t,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return s.Date.now()};function y(e){var t=void 0===e?"undefined":n(o)(e);return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(o)(e))||function(n){return!!n&&"object"==typeof n}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):r.test(e)?NaN:+e}t=function(n,e,t){var o,i,r,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(e){var t=o,r=i;return o=i=void 0,c=e,u=n.apply(r,t)}function h(n){return c=n,f=setTimeout(j,e),l?b(n):u}function T(n){var t=n-a;return void 0===a||t>=e||t<0||s&&n-c>=r}function j(){var n=m();if(T(n))return M(n);f=setTimeout(j,function(n){var t=e-(n-a);return s?p(t,r-(n-c)):t}(n))}function M(n){return f=void 0,d&&o?b(n):(o=i=void 0,u)}function O(){var n=m(),t=T(n);if(o=arguments,i=this,a=n,t){if(void 0===f)return h(a);if(s)return f=setTimeout(j,e),b(a)}return void 0===f&&(f=setTimeout(j,e)),u}return e=g(e)||0,y(t)&&(l=!!t.leading,r=(s="maxWait"in t)?v(g(t.maxWait)||0,e):r,d="trailing"in t?!!t.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:M(m())},O};var b=document.getElementById("search-box"),h=document.querySelector(".country-list"),T=document.querySelector(".country-info");function j(n){if(n.length>10)return b.innerHTML="",T.innerHTML="",alert("Too many matches found. Please enter a more specific name.");if(n.length>2&&n.length<10){var e=n.map((function(n){n.flags,n.name})).join("");h.innerHTML=e,T.innerHTML=""}if(1===n.length){var t=n.map((function(n){n.flags,n.name,n.capital,n.population,n.language})).join("");T.innerHTML=t,b.innerHTML=""}}b.addEventListener("input",n(t)((function(n){n.preventDefault();var e=n.target.value;e||clearForm();(t=e,o="https://restcountries.com/v3.1/name/".concat(t,"?fields=name,capital,population,flags,languages"),fetch(o).then((function(n){return n.json()})).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))).then(j);var t,o}),300))}();
//# sourceMappingURL=index.3e53c43f.js.map
