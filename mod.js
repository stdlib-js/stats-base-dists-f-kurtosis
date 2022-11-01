// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.floor;function n(r){return t(r)===r}function e(r){return n(r/2)}function o(r){return e(r>0?r-1:r+1)}var u=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;function a(r){return r===u||r===i}var f=Math.sqrt;function c(r){return Math.abs(r)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p,b="function"==typeof Symbol?Symbol.toStringTag:"";p=l&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return y.call(r);n=r[b],u=b,t=null!=(o=r)&&v.call(o,u);try{r[b]=void 0}catch(t){return y.call(r)}return e=y.call(r),t?r[b]=n:delete r[b],e}:function(r){return y.call(r)};var w=p,A="function"==typeof Uint32Array;var _="function"==typeof Uint32Array?Uint32Array:null;var m,s="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,t,n;if("function"!=typeof _)return!1;try{t=new _(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(A&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?s:function(){throw new Error("not implemented")};var d=m,U="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var j,g="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),n=t,r=(U&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var I=j,N="function"==typeof Uint8Array;var O="function"==typeof Uint8Array?Uint8Array:null;var S,E="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,256,257]),n=t,r=(N&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,P="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,65536,65537]),n=t,r=(H&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,V={uint16:G,uint8:F};(L=new V.uint16(1))[0]=4660;var W,M,k=52===new V.uint8(L.buffer)[0];!0===k?(W=1,M=0):(W=0,M=1);var x={HIGH:W,LOW:M},Y=new I(1),q=new d(Y.buffer),C=x.HIGH,z=x.LOW;function B(r,t){return Y[0]=t,r[0]=q[C],r[1]=q[z],r}function D(r,t){return 1===arguments.length?B([0,0],r):B(r,t)}var J=!0===k?0:1,K=new I(1),Q=new d(K.buffer);function R(r,t){return K[0]=r,Q[J]=t>>>0,K[0]}function X(r){return 0|r}var Z,$,rr=!0===k?1:0,tr=new I(1),nr=new d(tr.buffer);function er(r){return tr[0]=r,nr[rr]}!0===k?(Z=1,$=0):(Z=0,$=1);var or={HIGH:Z,LOW:$},ur=new I(1),ir=new d(ur.buffer),ar=or.HIGH,fr=or.LOW;function cr(r,t){return ir[ar]=r,ir[fr]=t,ur[0]}var lr=[0,0];function yr(r,t){var n,e;return D(lr,r),n=lr[0],n&=2147483647,e=er(t),cr(n|=e&=2147483648,lr[1])}var vr=!0===k?1:0,pr=new I(1),br=new d(pr.buffer);function wr(r,t){return pr[0]=r,br[vr]=t>>>0,pr[0]}var Ar=[1,1.5],_r=[0,.5849624872207642],mr=[0,1.350039202129749e-8];var sr="function"==typeof Object.defineProperty?Object.defineProperty:null;var dr,Ur=Object.defineProperty,hr=Object.prototype,jr=hr.toString,gr=hr.__defineGetter__,Ir=hr.__defineSetter__,Nr=hr.__lookupGetter__,Or=hr.__lookupSetter__;dr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?Ur:function(r,t,n){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===jr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===jr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(Nr.call(r,t)||Or.call(r,t)?(e=r.__proto__,r.__proto__=hr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),u="get"in n,i="set"in n,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&gr&&gr.call(r,t,n.get),i&&Ir&&Ir.call(r,t,n.set),r};function Sr(t,n,e,o){return r(t)||a(t)?(n[o]=t,n[o+e]=0,n):0!==t&&c(t)<22250738585072014e-324?(n[o]=4503599627370496*t,n[o+e]=-52,n):(n[o]=t,n[o+e]=0,n)}dr((function(r){return Sr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Sr});var Er=[0,0],Fr=[0,0];function Hr(t,n){var e,o;return 0===n||0===t||r(t)||a(t)?t:(Sr(t,Er,1,0),n+=Er[1],n+=function(r){var t=er(r);return(t=(2146435072&t)>>>20)-1023|0}(t=Er[0]),n<-1074?yr(0,t):n>1023?t<0?i:u:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,D(Fr,t),e=Fr[0],e&=2148532223,o*cr(e|=n+1023<<20,Fr[1])))}var Tr=1e300,Gr=1e-300,Pr=[0,0],Lr=[0,0];function Vr(t,e){var l,y,v,p,b,w,A,_,m,s,d,U,h,j;if(r(t)||r(e))return NaN;if(D(Pr,e),b=Pr[0],0===Pr[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return f(t);if(-.5===e)return 1/f(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(a(e))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===u)?0:u}(t,e)}if(D(Pr,t),p=Pr[0],0===Pr[1]){if(0===p)return function(r,t){return t===i?u:t===u?0:t>0?o(t)?r:0:o(t)?yr(u,r):u}(t,e);if(1===t)return 1;if(-1===t&&o(e))return-1;if(a(t))return t===i?Vr(-0,-e):e<0?0:u}if(t<0&&!1===n(e))return(t-t)/(t-t);if(v=c(t),l=2147483647&p|0,y=2147483647&b|0,A=b>>>31|0,w=(w=p>>>31|0)&&o(e)?-1:1,y>1105199104){if(y>1139802112)return function(r,t){return(2147483647&er(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(t,e);if(l<1072693247)return 1===A?w*Tr*Tr:w*Gr*Gr;if(l>1072693248)return 0===A?w*Tr*Tr:w*Gr*Gr;d=function(r,t){var n,e,o,u,i,a;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=R(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Lr,v)}else d=function(r,t,n){var e,o,u,i,a,f,c,l,y,v,p,b,w,A,_,m,s,d,U,h,j;return d=0,n<1048576&&(d-=53,n=er(t*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(U=1048575&n|0),U<=235662?h=0:U<767610?h=1:(h=0,d+=1,n-=1048576),i=R(o=(m=(t=wr(t,n))-(c=Ar[h]))*(s=1/(t+c)),0),e=524288+(n>>1|536870912),f=wr(0,e+=h<<18),_=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),f=R(f=3+(u=i*i)+(_+=(a=s*(m-i*f-i*(t-(f-c))))*(i+o)),0),w=(p=-7.028461650952758e-9*(y=R(y=(m=i*f)+(s=a*f+(_-(f-3-u))*o),0))+.9617966939259756*(s-(y-m))+mr[h])-((b=R(b=(v=.9617967009544373*y)+p+(l=_r[h])+(A=d),0))-A-l-v),r[0]=b,r[1]=w,r}(Lr,v,l);if(s=(e-(_=R(e,0)))*d[0]+e*d[1],m=_*d[0],D(Pr,U=s+m),h=X(Pr[0]),j=X(Pr[1]),h>=1083179008){if(0!=(h-1083179008|j))return w*Tr*Tr;if(s+8008566259537294e-32>U-m)return w*Tr*Tr}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|j))return w*Gr*Gr;if(s<=U-m)return w*Gr*Gr}return U=function(r,t,n){var e,o,u,i,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),t-=u=wr(0,e)),r=X(r=er(c=1-((c=(i=.6931471824645996*(u=R(u=n+t,0)))+(a=.6931471805599453*(n-(u-t))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-i))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Hr(c,l):wr(c,r)}(h,m,s),w*U}function Wr(r,t){return r<=0||t<=8?NaN:12*(r*(5*t-22)*(r+t-2)+(t-4)*Vr(t-2,2))/(r*(t-6)*(t-8)*(r+t-2))}export{Wr as default};
//# sourceMappingURL=mod.js.map
