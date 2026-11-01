"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=a(function(p,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist');function v(e,r){var i,t;return u(e)||e<=0||u(r)||r<=8?NaN:(t=e*(5*r-22)*(e+r-2)+(r-4)*o(r-2,2),i=e*(r-6)*(r-8)*(e+r-2),12*t/i)}n.exports=v
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
