/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"readable-stream";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import f from"debug";var v={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308},y=h,_=l,w=g.isPrimitive,x=c.isPrimitive,M=u.isPrimitive,O=j.isPrimitive,E=b.isPrimitive;var T=function(e,t){return y(t)?_(t,"sep")&&(e.sep=t.sep,!M(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):_(t,"objectMode")&&(e.objectMode=t.objectMode,!w(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):_(t,"encoding")&&(e.encoding=t.encoding,!M(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):_(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!x(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):_(t,"iter")&&(e.iter=t.iter,!E(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):_(t,"siter")&&(e.siter=t.siter,!O(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):(_(t,"prng")&&(e.prng=t.prng),_(t,"seed")&&(e.seed=t.seed),_(t,"state")&&(e.state=t.state),_(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")},k=f("random:streams:improved-ziggurat"),P=t.Readable,L=i,W=s,N=r,S=n,G=e,R=o,V=d,z=p.factory,C=a,J=m,A=v,F=T,I=k;function q(e){var t,i;if(!(this instanceof q))return arguments.length>0?new q(e):new q;if(t=W(A),arguments.length>0&&(i=F(t,e)))throw i;return I("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),P.call(this,t),S(this,"_destroyed",!1),G(this,"_objectMode",t.objectMode),G(this,"_sep",t.sep),G(this,"_iter",t.iter),G(this,"_siter",t.siter),S(this,"_i",0),G(this,"_prng",z(t)),G(this,"PRNG",this._prng.PRNG),this}N(q,P),R(q.prototype,"seed",(function(){return this._prng.seed})),R(q.prototype,"seedLength",(function(){return this._prng.seedLength})),V(q.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),R(q.prototype,"stateLength",(function(){return this._prng.stateLength})),R(q.prototype,"byteLength",(function(){return this._prng.byteLength})),G(q.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return I("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),I("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?C(t):C(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),G(q.prototype,"destroy",(function(e){var t;return this._destroyed?(I("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,J((function(){e&&(I("Stream was destroyed due to an error. Error: %s.",L(e)?e.message:JSON.stringify(e)),t.emit("error",e));I("Closing the stream..."),t.emit("close")})),this)}));var B=h,D=s,H=q;var K=s,Q=q;var U=e,X=q,Y=function(e){var t;return t=arguments.length>0?K(e,1):{},i;function i(){return new Q(t)}};U(X,"objectMode",(function(e){var t;if(arguments.length>0){if(!B(t=e))throw new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.");t=D(e,1)}else t={};return t.objectMode=!0,new H(t)})),U(X,"factory",Y);var Z=X;export{Z as default};
//# sourceMappingURL=index.mjs.map
