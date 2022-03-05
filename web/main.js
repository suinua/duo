(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.hL(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.hM(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dI(b)
return new s(c,this)}:function(){if(s===null)s=A.dI(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dI(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={dr:function dr(){},
dH(a,b,c){return a},
fd(){return new A.am("No element")},
fe(){return new A.am("Too many elements")},
fs(a,b,c){A.bL(a,0,J.ay(a)-1,b,c)},
bL(a,b,c,d,e){if(c-b<=32)A.fr(a,b,c,d,e)
else A.fq(a,b,c,d,e)},
fr(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.bj(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.A()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.j(a,n))
p=n}r.k(a,p,q)}},
fq(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.al(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.al(a4+a5,2),f=g-j,e=g+j,d=J.bj(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.A()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.j(a3,a4))
d.k(a3,e,d.j(a3,a5))
r=a4+1
q=a5-1
if(J.ax(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.j(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.k(a3,p,d.j(a3,r))
d.k(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.j(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.k(a3,p,d.j(a3,r))
l=r+1
d.k(a3,r,d.j(a3,q))
d.k(a3,q,o)
q=m
r=l
break}else{d.k(a3,p,d.j(a3,q))
d.k(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.k(a3,p,d.j(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.j(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.k(a3,p,d.j(a3,r))
l=r+1
d.k(a3,r,d.j(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.j(a3,q))
d.k(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.k(a3,a4,d.j(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.j(a3,a2))
d.k(a3,a2,a0)
A.bL(a3,a4,r-2,a6,a7)
A.bL(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.ax(a6.$2(d.j(a3,r),b),0);)++r
for(;J.ax(a6.$2(d.j(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.k(a3,p,d.j(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.j(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.k(a3,p,d.j(a3,r))
l=r+1
d.k(a3,r,d.j(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.j(a3,q))
d.k(a3,q,o)}q=m
break}}A.bL(a3,r,q,a6,a7)}else A.bL(a3,r,q,a6,a7)},
bF:function bF(a){this.a=a},
aE:function aE(){},
a_:function a_(){},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
hB(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bo(a)
return s},
bI(a){var s,r,q=$.e3
if(q==null){s=Symbol("identityHashCode")
q=$.e3=s}r=a[q]
if(r==null){r=Math.random()*0x3fffffff|0
a[q]=r}return r},
fj(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.u(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
cw(a){return A.fi(a)},
fi(a){var s,r,q,p,o
if(a instanceof A.m)return A.J(A.af(a),null)
s=J.av(a)
if(s===B.A||s===B.C||t.cr.b(a)){r=B.j(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.J(A.af(a),null)},
u(a,b){if(a==null)J.ay(a)
throw A.h(A.cg(a,b))},
cg(a,b){var s,r="index"
if(!A.eu(b))return new A.T(!0,b,r,null)
s=A.d8(J.ay(a))
if(b<0||b>=s)return A.dp(b,a,r,null,s)
return A.fk(b,r)},
h(a){var s,r
if(a==null)a=new A.bG()
s=new Error()
s.dartException=a
r=A.hN
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
hN(){return J.bo(this.dartException)},
bn(a){throw A.h(a)},
dN(a){throw A.h(A.a6(a))},
V(a){var s,r,q,p,o,n
a=A.hH(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cK(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eb(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ds(a,b){var s=b==null,r=s?null:b.method
return new A.bE(a,r,s?null:b.receiver)},
aw(a){if(a==null)return new A.cu(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ag(a,a.dartException)
return A.hk(a)},
ag(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.aN(r,16)&8191)===10)switch(q){case 438:return A.ag(a,A.ds(A.n(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.n(s)+" (Error "+q+")"
return A.ag(a,new A.aR(p,e))}}if(a instanceof TypeError){o=$.eJ()
n=$.eK()
m=$.eL()
l=$.eM()
k=$.eP()
j=$.eQ()
i=$.eO()
$.eN()
h=$.eS()
g=$.eR()
f=o.w(s)
if(f!=null)return A.ag(a,A.ds(A.t(s),f))
else{f=n.w(s)
if(f!=null){f.method="call"
return A.ag(a,A.ds(A.t(s),f))}else{f=m.w(s)
if(f==null){f=l.w(s)
if(f==null){f=k.w(s)
if(f==null){f=j.w(s)
if(f==null){f=i.w(s)
if(f==null){f=l.w(s)
if(f==null){f=h.w(s)
if(f==null){f=g.w(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.t(s)
return A.ag(a,new A.aR(s,f==null?e:f.method))}}}return A.ag(a,new A.bU(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aW()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.ag(a,new A.T(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aW()
return a},
bk(a){var s
if(a==null)return new A.b9(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.b9(a)},
hG(a){if(a==null||typeof a!="object")return J.dk(a)
else return A.bI(a)},
hA(a,b,c,d,e,f){t.Z.a(a)
switch(A.d8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.h(new A.cR("Unsupported number of arguments for wrapped closure"))},
cf(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hA)
a.$identity=s
return s},
f8(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bN().constructor.prototype):Object.create(new A.aj(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dY(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f4(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dY(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f4(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f2)}throw A.h("Error in functionType of tearoff")},
f5(a,b,c,d){var s=A.dX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dY(a,b,c,d){var s,r
if(c)return A.f7(a,b,d)
s=b.length
r=A.f5(s,d,a,b)
return r},
f6(a,b,c,d){var s=A.dX,r=A.f3
switch(b?-1:a){case 0:throw A.h(new A.bJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
f7(a,b,c){var s,r,q,p=$.dV
p==null?$.dV=A.dU("interceptor"):p
s=$.dW
s==null?$.dW=A.dU("receiver"):s
r=b.length
q=A.f6(r,c,a,b)
return q},
dI(a){return A.f8(a)},
f2(a,b){return A.d5(v.typeUniverse,A.af(a.a),b)},
dX(a){return a.a},
f3(a){return a.b},
dU(a){var s,r,q,p=new A.aj("receiver","interceptor"),o=J.ff(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.h(A.ci("Field name "+a+" not found.",null))},
dG(a){if(a==null)A.hm("boolean expression must not be null")
return a},
hm(a){throw A.h(new A.bW(a))},
hL(a){throw A.h(new A.bt(a))},
ht(a){return v.getIsolateTag(a)},
iq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hD(a){var s,r,q,p,o,n=A.t($.eC.$1(a)),m=$.dc[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ep($.ez.$2(a,n))
if(q!=null){m=$.dc[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dj(s)
$.dc[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dh[n]=s
return s}if(p==="-"){o=A.dj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eF(a,s)
if(p==="*")throw A.h(A.ec(n))
if(v.leafTags[n]===true){o=A.dj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eF(a,s)},
eF(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dj(a){return J.dM(a,!1,null,!!a.$ibD)},
hF(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dj(s)
else return J.dM(s,c,null,null)},
hy(){if(!0===$.dL)return
$.dL=!0
A.hz()},
hz(){var s,r,q,p,o,n,m,l
$.dc=Object.create(null)
$.dh=Object.create(null)
A.hx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eG.$1(o)
if(n!=null){m=A.hF(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hx(){var s,r,q,p,o,n,m=B.q()
m=A.au(B.r,A.au(B.t,A.au(B.k,A.au(B.k,A.au(B.u,A.au(B.v,A.au(B.w(B.j),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eC=new A.de(p)
$.ez=new A.df(o)
$.eG=new A.dg(n)},
au(a,b){return a(b)||b},
e1(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.h(A.e0("Illegal RegExp pattern ("+String(n)+")",a))},
hs(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hI(a,b,c,d){var s=b.af(a,d)
if(s==null)return a
return A.hK(a,s.b.index,s.gap(),c)},
hH(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hJ(a,b,c,d){return d===0?a.replace(b.b,A.hs(c)):A.hI(a,b,c,d)},
hK(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
aC:function aC(){},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aR:function aR(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a){this.a=a},
cu:function cu(a){this.a=a},
b9:function b9(a){this.a=a
this.b=null},
a5:function a5(){},
bq:function bq(){},
br:function br(){},
bS:function bS(){},
bN:function bN(){},
aj:function aj(a,b){this.a=a
this.b=b},
bJ:function bJ(a){this.a=a},
bW:function bW(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aK:function aK(a,b){this.a=a
this.$ti=b},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
bC:function bC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function c6(a){this.b=a},
cL:function cL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
e7(a,b){var s=b.c
return s==null?b.c=A.dB(a,b.z,!0):s},
e6(a,b){var s=b.c
return s==null?b.c=A.bb(a,"aF",[b.z]):s},
e8(a){var s=a.y
if(s===6||s===7||s===8)return A.e8(a.z)
return s===11||s===12},
fm(a){return a.cy},
dJ(a){return A.dC(v.typeUniverse,a,!1)},
a3(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.a3(a,s,a0,a1)
if(r===s)return b
return A.em(a,r,!0)
case 7:s=b.z
r=A.a3(a,s,a0,a1)
if(r===s)return b
return A.dB(a,r,!0)
case 8:s=b.z
r=A.a3(a,s,a0,a1)
if(r===s)return b
return A.el(a,r,!0)
case 9:q=b.Q
p=A.bi(a,q,a0,a1)
if(p===q)return b
return A.bb(a,b.z,p)
case 10:o=b.z
n=A.a3(a,o,a0,a1)
m=b.Q
l=A.bi(a,m,a0,a1)
if(n===o&&l===m)return b
return A.dz(a,n,l)
case 11:k=b.z
j=A.a3(a,k,a0,a1)
i=b.Q
h=A.hh(a,i,a0,a1)
if(j===k&&h===i)return b
return A.ek(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.bi(a,g,a0,a1)
o=b.z
n=A.a3(a,o,a0,a1)
if(f===g&&n===o)return b
return A.dA(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.h(A.cj("Attempted to substitute unexpected RTI kind "+c))}},
bi(a,b,c,d){var s,r,q,p,o=b.length,n=A.d6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hi(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hh(a,b,c,d){var s,r=b.a,q=A.bi(a,r,c,d),p=b.b,o=A.bi(a,p,c,d),n=b.c,m=A.hi(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c3()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
hq(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hu(s)
return a.$S()}return null},
eD(a,b){var s
if(A.e8(b))if(a instanceof A.a5){s=A.hq(a)
if(s!=null)return s}return A.af(a)},
af(a){var s
if(a instanceof A.m){s=a.$ti
return s!=null?s:A.dD(a)}if(Array.isArray(a))return A.O(a)
return A.dD(J.av(a))},
O(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.dD(a)},
dD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.h2(a,s)},
h2(a,b){var s=a instanceof A.a5?a.__proto__.__proto__.constructor:b,r=A.fR(v.typeUniverse,s.name)
b.$ccache=r
return r},
hu(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dC(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
h1(a){var s,r,q,p,o=this
if(o===t.K)return A.as(o,a,A.h6)
if(!A.Y(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.as(o,a,A.h9)
s=o.y
r=s===6?o.z:o
if(r===t.bL)q=A.eu
else if(r===t.cb||r===t.cY)q=A.h5
else if(r===t.N)q=A.h7
else q=r===t.v?A.es:null
if(q!=null)return A.as(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.hC)){o.r="$i"+p
if(p==="R")return A.as(o,a,A.h4)
return A.as(o,a,A.h8)}}else if(s===7)return A.as(o,a,A.h_)
return A.as(o,a,A.fY)},
as(a,b,c){a.b=c
return a.b(b)},
h0(a){var s,r=this,q=A.fX
if(!A.Y(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.fW
else if(r===t.K)q=A.fV
else{s=A.bl(r)
if(s)q=A.fZ}r.a=q
return r.a(a)},
d9(a){var s,r=a.y
if(!A.Y(a))if(!(a===t._))if(!(a===t.G))if(r!==7)s=r===8&&A.d9(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
fY(a){var s=this
if(a==null)return A.d9(s)
return A.p(v.typeUniverse,A.eD(a,s),null,s,null)},
h_(a){if(a==null)return!0
return this.z.b(a)},
h8(a){var s,r=this
if(a==null)return A.d9(r)
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.av(a)[s]},
h4(a){var s,r=this
if(a==null)return A.d9(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.av(a)[s]},
fX(a){var s,r=this
if(a==null){s=A.bl(r)
if(s)return a}else if(r.b(a))return a
A.eq(a,r)},
fZ(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eq(a,s)},
eq(a,b){throw A.h(A.fH(A.ee(a,A.eD(a,b),A.J(b,null))))},
ee(a,b,c){var s=A.bv(a),r=A.J(b==null?A.af(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
fH(a){return new A.ba("TypeError: "+a)},
B(a,b){return new A.ba("TypeError: "+A.ee(a,null,b))},
h6(a){return a!=null},
fV(a){if(a!=null)return a
throw A.h(A.B(a,"Object"))},
h9(a){return!0},
fW(a){return a},
es(a){return!0===a||!1===a},
fT(a){if(!0===a)return!0
if(!1===a)return!1
throw A.h(A.B(a,"bool"))},
ig(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.h(A.B(a,"bool"))},
ie(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.h(A.B(a,"bool?"))},
ih(a){if(typeof a=="number")return a
throw A.h(A.B(a,"double"))},
ij(a){if(typeof a=="number")return a
if(a==null)return a
throw A.h(A.B(a,"double"))},
ii(a){if(typeof a=="number")return a
if(a==null)return a
throw A.h(A.B(a,"double?"))},
eu(a){return typeof a=="number"&&Math.floor(a)===a},
d8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.h(A.B(a,"int"))},
il(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.h(A.B(a,"int"))},
ik(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.h(A.B(a,"int?"))},
h5(a){return typeof a=="number"},
fU(a){if(typeof a=="number")return a
throw A.h(A.B(a,"num"))},
io(a){if(typeof a=="number")return a
if(a==null)return a
throw A.h(A.B(a,"num"))},
im(a){if(typeof a=="number")return a
if(a==null)return a
throw A.h(A.B(a,"num?"))},
h7(a){return typeof a=="string"},
t(a){if(typeof a=="string")return a
throw A.h(A.B(a,"String"))},
ip(a){if(typeof a=="string")return a
if(a==null)return a
throw A.h(A.B(a,"String"))},
ep(a){if(typeof a=="string")return a
if(a==null)return a
throw A.h(A.B(a,"String?"))},
he(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.J(a[q],b)
return s},
er(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.f([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.b.m(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.u(a5,j)
m=B.e.av(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.J(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.J(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.J(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.J(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.J(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
J(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.J(a.z,b)
return s}if(l===7){r=a.z
s=A.J(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.J(a.z,b)+">"
if(l===9){p=A.hj(a.z)
o=a.Q
return o.length>0?p+("<"+A.he(o,b)+">"):p}if(l===11)return A.er(a,b,null)
if(l===12)return A.er(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.u(b,n)
return b[n]}return"?"},
hj(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
fS(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dC(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bc(a,5,"#")
q=A.d6(s)
for(p=0;p<s;++p)q[p]=r
o=A.bb(a,b,q)
n[b]=o
return o}else return m},
fP(a,b){return A.en(a.tR,b)},
fO(a,b){return A.en(a.eT,b)},
dC(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ei(A.eg(a,null,b,c))
r.set(b,s)
return s},
d5(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ei(A.eg(a,b,c,!0))
q.set(c,r)
return r},
fQ(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.dz(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
a2(a,b){b.a=A.h0
b.b=A.h1
return b},
bc(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.L(null,null)
s.y=b
s.cy=c
r=A.a2(a,s)
a.eC.set(c,r)
return r},
em(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fM(a,b,r,c)
a.eC.set(r,s)
return s},
fM(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.Y(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.L(null,null)
q.y=6
q.z=b
q.cy=c
return A.a2(a,q)},
dB(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fL(a,b,r,c)
a.eC.set(r,s)
return s},
fL(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.Y(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bl(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.bl(q.z))return q
else return A.e7(a,b)}}p=new A.L(null,null)
p.y=7
p.z=b
p.cy=c
return A.a2(a,p)},
el(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fJ(a,b,r,c)
a.eC.set(r,s)
return s},
fJ(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.Y(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.bb(a,"aF",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.L(null,null)
q.y=8
q.z=b
q.cy=c
return A.a2(a,q)},
fN(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.L(null,null)
s.y=13
s.z=b
s.cy=q
r=A.a2(a,s)
a.eC.set(q,r)
return r},
cc(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
fI(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
bb(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.L(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.a2(a,r)
a.eC.set(p,q)
return q},
dz(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.cc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.L(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.a2(a,o)
a.eC.set(q,n)
return n},
ek(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cc(m)
if(j>0){s=l>0?",":""
r=A.cc(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.fI(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.L(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.a2(a,o)
a.eC.set(q,r)
return r},
dA(a,b,c,d){var s,r=b.cy+("<"+A.cc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fK(a,b,c,r,d)
a.eC.set(r,s)
return s},
fK(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.a3(a,b,r,0)
m=A.bi(a,c,r,0)
return A.dA(a,n,m,c!==m)}}l=new A.L(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.a2(a,l)},
eg(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ei(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.fC(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.eh(a,r,h,g,!1)
else if(q===46)r=A.eh(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.a1(a.u,a.e,g.pop()))
break
case 94:g.push(A.fN(a.u,g.pop()))
break
case 35:g.push(A.bc(a.u,5,"#"))
break
case 64:g.push(A.bc(a.u,2,"@"))
break
case 126:g.push(A.bc(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.dy(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.bb(p,n,o))
else{m=A.a1(p,a.e,n)
switch(m.y){case 11:g.push(A.dA(p,m,o,a.n))
break
default:g.push(A.dz(p,m,o))
break}}break
case 38:A.fD(a,g)
break
case 42:p=a.u
g.push(A.em(p,A.a1(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.dB(p,A.a1(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.el(p,A.a1(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.c3()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.dy(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.ek(p,A.a1(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.dy(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.fF(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.a1(a.u,a.e,i)},
fC(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eh(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.fS(s,o.z)[p]
if(n==null)A.bn('No "'+p+'" in "'+A.fm(o)+'"')
d.push(A.d5(s,o,n))}else d.push(p)
return m},
fD(a,b){var s=b.pop()
if(0===s){b.push(A.bc(a.u,1,"0&"))
return}if(1===s){b.push(A.bc(a.u,4,"1&"))
return}throw A.h(A.cj("Unexpected extended operation "+A.n(s)))},
a1(a,b,c){if(typeof c=="string")return A.bb(a,c,a.sEA)
else if(typeof c=="number")return A.fE(a,b,c)
else return c},
dy(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a1(a,b,c[s])},
fF(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a1(a,b,c[s])},
fE(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.h(A.cj("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.h(A.cj("Bad index "+c+" for "+b.i(0)))},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.Y(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.Y(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.p(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.p(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.p(a,b.z,c,d,e)
if(r===6)return A.p(a,b.z,c,d,e)
return r!==7}if(r===6)return A.p(a,b.z,c,d,e)
if(p===6){s=A.e7(a,d)
return A.p(a,b,c,s,e)}if(r===8){if(!A.p(a,b.z,c,d,e))return!1
return A.p(a,A.e6(a,b),c,d,e)}if(r===7){s=A.p(a,t.P,c,d,e)
return s&&A.p(a,b.z,c,d,e)}if(p===8){if(A.p(a,b,c,d.z,e))return!0
return A.p(a,b,c,A.e6(a,d),e)}if(p===7){s=A.p(a,b,c,t.P,e)
return s||A.p(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.p(a,k,c,j,e)||!A.p(a,j,e,k,c))return!1}return A.et(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.et(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.h3(a,b,c,d,e)}return!1},
et(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.p(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.p(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.p(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.p(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.p(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
h3(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.d5(a,b,r[o])
return A.eo(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.eo(a,n,null,c,m,e)},
eo(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.p(a,r,d,q,f))return!1}return!0},
bl(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.Y(a))if(r!==7)if(!(r===6&&A.bl(a.z)))s=r===8&&A.bl(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
hC(a){var s
if(!A.Y(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
Y(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
en(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d6(a){return a>0?new Array(a):v.typeUniverse.sEA},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
c3:function c3(){this.c=this.b=this.a=null},
c1:function c1(){},
ba:function ba(a){this.a=a},
fu(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hn()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.cf(new A.cN(q),1)).observe(s,{childList:true})
return new A.cM(q,s,r)}else if(self.setImmediate!=null)return A.ho()
return A.hp()},
fv(a){self.scheduleImmediate(A.cf(new A.cO(t.M.a(a)),0))},
fw(a){self.setImmediate(A.cf(new A.cP(t.M.a(a)),0))},
fx(a){t.M.a(a)
A.fG(0,a)},
fG(a,b){var s=new A.d3()
s.aB(a,b)
return s},
dl(a,b){var s=A.dH(a,"error",t.K)
return new A.aB(s,b==null?A.f1(a):b)},
f1(a){var s
if(t.R.b(a)){s=a.gN()
if(s!=null)return s}return B.x},
fz(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ak()
b.R(a)
A.c4(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.aj(q)}},
c4(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.da(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c4(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.da(i.a,i.b)
return}f=$.r
if(f!==g)$.r=g
else f=null
b=b.c
if((b&15)===8)new A.cW(p,c,m).$0()
else if(n){if((b&1)!==0)new A.cV(p,i).$0()}else if((b&2)!==0)new A.cU(c,p).$0()
if(f!=null)$.r=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("aF<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.M(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.fz(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.M(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
hc(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.h(A.dT(a,"onError",u.c))},
hb(){var s,r
for(s=$.at;s!=null;s=$.at){$.bh=null
r=s.b
$.at=r
if(r==null)$.bg=null
s.a.$0()}},
hg(){$.dE=!0
try{A.hb()}finally{$.bh=null
$.dE=!1
if($.at!=null)$.dO().$1(A.eA())}},
ey(a){var s=new A.bX(a),r=$.bg
if(r==null){$.at=$.bg=s
if(!$.dE)$.dO().$1(A.eA())}else $.bg=r.b=s},
hf(a){var s,r,q,p=$.at
if(p==null){A.ey(a)
$.bh=$.bg
return}s=new A.bX(a)
r=$.bh
if(r==null){s.b=p
$.at=$.bh=s}else{q=r.b
s.b=q
$.bh=r.b=s
if(q==null)$.bg=s}},
da(a,b){A.hf(new A.db(a,b))},
ev(a,b,c,d,e){var s,r=$.r
if(r===c)return d.$0()
$.r=c
s=r
try{r=d.$0()
return r}finally{$.r=s}},
ew(a,b,c,d,e,f,g){var s,r=$.r
if(r===c)return d.$1(e)
$.r=c
s=r
try{r=d.$1(e)
return r}finally{$.r=s}},
hd(a,b,c,d,e,f,g,h,i){var s,r=$.r
if(r===c)return d.$2(e,f)
$.r=c
s=r
try{r=d.$2(e,f)
return r}finally{$.r=s}},
ex(a,b,c,d){t.M.a(d)
if(B.c!==c)d=c.aS(d)
A.ey(d)},
cN:function cN(a){this.a=a},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
d3:function d3(){},
d4:function d4(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
b0:function b0(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
N:function N(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cS:function cS(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
bX:function bX(a){this.a=a
this.b=null},
aX:function aX(){},
cH:function cH(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
bO:function bO(){},
be:function be(){},
db:function db(a,b){this.a=a
this.b=b},
c9:function c9(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
fg(a,b){return new A.aJ(a.h("@<0>").E(b).h("aJ<1,2>"))},
al(a){return new A.b2(a.h("b2<0>"))},
dx(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fc(a,b,c){var s,r
if(A.dF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.b.m($.G,a)
try{A.ha(a,s)}finally{if(0>=$.G.length)return A.u($.G,-1)
$.G.pop()}r=A.ea(b,t.k.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
dq(a,b,c){var s,r
if(A.dF(a))return b+"..."+c
s=new A.bP(b)
B.b.m($.G,a)
try{r=s
r.a=A.ea(r.a,a,", ")}finally{if(0>=$.G.length)return A.u($.G,-1)
$.G.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
dF(a){var s,r
for(s=$.G.length,r=0;r<s;++r)if(a===$.G[r])return!0
return!1},
ha(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.n(l.gp())
B.b.m(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.u(b,-1)
r=b.pop()
if(0>=b.length)return A.u(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.n()){if(j<=4){B.b.m(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.u(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.n();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.u(b,-1)
k-=b.pop().length+2;--j}B.b.m(b,"...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.u(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.m(b,m)
B.b.m(b,q)
B.b.m(b,r)},
e2(a,b){var s,r,q=A.al(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dN)(a),++r)q.m(0,b.a(a[r]))
return q},
dt(a){var s,r={}
if(A.dF(a))return"{...}"
s=new A.bP("")
try{B.b.m($.G,a)
s.a+="{"
r.a=!0
a.B(0,new A.cq(r,s))
s.a+="}"}finally{if(0>=$.G.length)return A.u($.G,-1)
$.G.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
b2:function b2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c5:function c5(a){this.a=a
this.b=null},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aM:function aM(){},
y:function y(){},
aO:function aO(){},
cq:function cq(a,b){this.a=a
this.b=b},
z:function z(){},
aV:function aV(){},
b7:function b7(){},
b4:function b4(){},
bf:function bf(){},
eE(a){var s=A.fj(a,null)
if(s!=null)return s
throw A.h(A.e0(a,null))},
fa(a){if(a instanceof A.a5)return a.i(0)
return"Instance of '"+A.cw(a)+"'"},
fb(a,b){a=t.K.a(A.h(a))
a.stack=b.i(0)
throw a
throw A.h("unreachable")},
e5(a){return new A.bC(a,A.e1(a,!1,!0,!1,!1,!1))},
ea(a,b,c){var s=J.ch(b)
if(!s.n())return a
if(c.length===0){do a+=A.n(s.gp())
while(s.n())}else{a+=A.n(s.gp())
for(;s.n();)a=a+c+A.n(s.gp())}return a},
bv(a){if(typeof a=="number"||A.es(a)||a==null)return J.bo(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fa(a)},
cj(a){return new A.aA(a)},
ci(a,b){return new A.T(!1,null,b,a)},
dT(a,b,c){return new A.T(!0,a,b,c)},
fk(a,b){return new A.aS(null,null,!0,a,b,"Value not in range")},
e4(a,b,c,d,e){return new A.aS(b,c,!0,a,d,"Invalid value")},
fl(a,b,c){if(0>a||a>c)throw A.h(A.e4(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.h(A.e4(b,a,c,"end",null))
return b}return c},
dp(a,b,c,d,e){var s=A.d8(e==null?J.ay(b):e)
return new A.bx(s,!0,a,c,"Index out of range")},
ap(a){return new A.bV(a)},
ec(a){return new A.bT(a)},
dv(a){return new A.am(a)},
a6(a){return new A.bs(a)},
e0(a,b){return new A.cn(a,b)},
k:function k(){},
aA:function aA(a){this.a=a},
a0:function a0(){},
bG:function bG(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bx:function bx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bV:function bV(a){this.a=a},
bT:function bT(a){this.a=a},
am:function am(a){this.a=a},
bs:function bs(a){this.a=a},
aW:function aW(){},
bt:function bt(a){this.a=a},
cR:function cR(a){this.a=a},
cn:function cn(a,b){this.a=a
this.b=b},
j:function j(){},
v:function v(){},
K:function K(){},
m:function m(){},
ca:function ca(){},
bP:function bP(a){this.a=a},
dS(){var s=document.createElement("a")
return s},
f9(a,b,c){var s,r=document.body
r.toString
s=t.ba
s=new A.W(new A.A(B.i.t(r,a,b,c)),s.h("w(y.E)").a(new A.cm()),s.h("W<y.E>"))
return t.h.a(s.gH(s))},
ak(a){var s,r,q="element tag unavailable"
try{s=J.ae(a)
s.gat(a)
q=s.gat(a)}catch(r){}return q},
dw(a,b,c,d,e){var s=A.hl(new A.cQ(c),t.B),r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.eV(a,b,s,!1)}return new A.c2(a,b,s,!1,e.h("c2<0>"))},
ef(a){var s=A.dS(),r=t.i.a(window.location)
s=new A.ad(new A.b6(s,r))
s.aA(a)
return s},
fA(a,b,c,d){t.h.a(a)
A.t(b)
A.t(c)
t.f.a(d)
return!0},
fB(a,b,c,d){t.h.a(a)
A.t(b)
A.t(c)
return t.f.a(d).a.Z(c)},
fy(a,b,c,d,e,f){var s=t.N
s=new A.c_(!1,!0,A.al(s),A.al(s),A.al(s),a)
s.a6(a,c,b,d)
return s},
ej(){var s=t.N,r=A.e2(B.m,s),q=A.f(["TEMPLATE"],t.s),p=t.bm.a(new A.d2())
s=new A.cb(r,A.al(s),A.al(s),A.al(s),null)
s.a6(null,new A.H(B.m,p,t.cw),q,null)
return s},
hl(a,b){var s=$.r
if(s===B.c)return a
return s.aT(a,b)},
e:function e(){},
ah:function ah(){},
bp:function bp(){},
ai:function ai(){},
a4:function a4(){},
P:function P(){},
aD:function aD(){},
ck:function ck(){},
a7:function a7(){},
cl:function cl(){},
bu:function bu(){},
o:function o(){},
cm:function cm(){},
b:function b(){},
l:function l(){},
bw:function bw(){},
aG:function aG(){},
aN:function aN(){},
D:function D(){},
A:function A(a){this.a=a},
i:function i(){},
aP:function aP(){},
bK:function bK(){},
aY:function aY(){},
bQ:function bQ(){},
bR:function bR(){},
an:function an(){},
M:function M(){},
aq:function aq(){},
b5:function b5(){},
bY:function bY(){},
c0:function c0(a){this.a=a},
dn:function dn(a){this.$ti=a},
b_:function b_(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c2:function c2(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cQ:function cQ(a){this.a=a},
ad:function ad(a){this.a=a},
Q:function Q(){},
aQ:function aQ(a){this.a=a},
cr:function cr(a){this.a=a},
ct:function ct(a){this.a=a},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(){},
d0:function d0(){},
d1:function d1(){},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cb:function cb(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
d2:function d2(){},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
b6:function b6(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=a
this.b=0},
d7:function d7(a){this.a=a},
bZ:function bZ(){},
c7:function c7(){},
c8:function c8(){},
cd:function cd(){},
ce:function ce(){},
c:function c(){},
hE(){var s,r,q
A.fp()
s=document.querySelector(".open-section-menu")
s.toString
s=J.dP(s)
r=s.$ti
q=r.h("~(1)?").a(new A.di())
t.Y.a(null)
A.dw(s.a,s.b,q,!1,r.c)},
di:function di(){},
I:function I(a,b,c){this.a=a
this.b=b
this.d=c},
aT:function aT(a){this.a=a},
cy:function cy(a){this.a=a},
cx:function cx(a,b){this.a=a
this.b=b},
cz:function cz(){},
E:function E(a,b){this.a=a
this.b=b},
cG:function cG(){},
fp(){var s,r,q,p="#section-1",o=$.aU
if(o==null){o=new A.aT(A.f([],t.E))
o.U()
$.aU=o}s=A.fn(o.a)
o=A.f([],t.Q)
r=new A.aQ(o)
B.b.m(o,A.ef(null))
B.b.m(o,A.ej())
o=t.U
r.aQ("span",o.a(A.f(["uk-icon"],t.s)),o.a(null),null)
o=document
q=o.querySelector(".section-menu-container")
q.toString
J.f_(q,s,r)
q=o.querySelector(p).style
q.display="block"
q=o.querySelector(p).style
q.height="100%"
o=o.querySelector(p).style
o.minHeight="100%"
o=$.aU
if(o==null){o=new A.aT(A.f([],t.E))
o.U()
$.aU=o}B.b.B(o.a,new A.cF())},
fn(a){var s=A.O(a),r=s.h("d(1)")
s=s.h("H<1,d>")
return'<ul class="section-menu">\n  <li class="section-number-list">\n      '+new A.H(a,r.a(new A.cA()),s).a0(0)+"\n  </li>\n  "+new A.H(a,r.a(new A.cB()),s).a0(0)+"\n</ul>\n    "},
fo(a){var s=a.b,r=A.O(s),q=new A.H(s,r.h("d(1)").a(new A.cC()),r.h("H<1,d>")).a0(0)
return'<ul class="section-items uk-list uk-list-divider" id="section-'+a.a+'">\n  '+q+"\n</ul>\n    "},
cF:function cF(){},
cE:function cE(a){this.a=a},
cD:function cD(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
hM(a){return A.bn(new A.bF("Field '"+a+"' has been assigned during initialization."))}},J={
dM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dd(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dL==null){A.hy()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.h(A.ec("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cY
if(o==null)o=$.cY=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hD(a)
if(p!=null)return p
if(typeof a=="function")return B.B
s=Object.getPrototypeOf(a)
if(s==null)return B.n
if(s===Object.prototype)return B.n
if(typeof q=="function"){o=$.cY
if(o==null)o=$.cY=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
ff(a,b){a.fixed$length=Array
return a},
av(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aI.prototype
return J.bA.prototype}if(typeof a=="string")return J.aa.prototype
if(a==null)return J.bz.prototype
if(typeof a=="boolean")return J.by.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.m)return a
return J.dd(a)},
bj(a){if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.m)return a
return J.dd(a)},
dK(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.m)return a
return J.dd(a)},
eB(a){if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.ao.prototype
return a},
ae(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.m)return a
return J.dd(a)},
ax(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.av(a).J(a,b)},
eU(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.hB(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bj(a).j(a,b)},
eV(a,b,c,d){return J.ae(a).aD(a,b,c,d)},
eW(a){return J.ae(a).aE(a)},
eX(a,b){return J.dK(a).F(a,b)},
eY(a){return J.ae(a).gaR(a)},
dk(a){return J.av(a).gu(a)},
ch(a){return J.dK(a).gv(a)},
ay(a){return J.bj(a).gl(a)},
dP(a){return J.ae(a).gas(a)},
dQ(a){return J.ae(a).b3(a)},
dR(a,b,c){return J.eB(a).b4(a,b,c)},
eZ(a,b){return J.ae(a).saH(a,b)},
f_(a,b,c){return J.ae(a).a3(a,b,c)},
f0(a){return J.eB(a).bb(a)},
bo(a){return J.av(a).i(a)},
aH:function aH(){},
by:function by(){},
bz:function bz(){},
C:function C(){},
ab:function ab(){},
bH:function bH(){},
ao:function ao(){},
U:function U(){},
x:function x(a){this.$ti=a},
co:function co(a){this.$ti=a},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
aI:function aI(){},
bA:function bA(){},
aa:function aa(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.dr.prototype={}
J.aH.prototype={
J(a,b){return a===b},
gu(a){return A.bI(a)},
i(a){return"Instance of '"+A.cw(a)+"'"}}
J.by.prototype={
i(a){return String(a)},
gu(a){return a?519018:218159},
$iw:1}
J.bz.prototype={
J(a,b){return null==b},
i(a){return"null"},
gu(a){return 0}}
J.C.prototype={}
J.ab.prototype={
gu(a){return 0},
i(a){return String(a)}}
J.bH.prototype={}
J.ao.prototype={}
J.U.prototype={
i(a){var s=a[$.eI()]
if(s==null)return this.az(a)
return"JavaScript function for "+J.bo(s)},
$ia9:1}
J.x.prototype={
m(a,b){A.O(a).c.a(b)
if(!!a.fixed$length)A.bn(A.ap("add"))
a.push(b)},
L(a,b){var s=A.O(a)
return new A.W(a,s.h("w(1)").a(b),s.h("W<1>"))},
B(a,b){var s,r
A.O(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.h(A.a6(a))}},
F(a,b){if(!(b<a.length))return A.u(a,b)
return a[b]},
am(a,b){var s,r
A.O(a).h("w(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.dG(b.$1(a[r])))return!0
if(a.length!==s)throw A.h(A.a6(a))}return!1},
a4(a,b){var s=A.O(a)
s.h("X(1,1)?").a(b)
if(!!a.immutable$list)A.bn(A.ap("sort"))
A.fs(a,b,s.c)},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.ax(a[s],b))return!0
return!1},
i(a){return A.dq(a,"[","]")},
gv(a){return new J.az(a,a.length,A.O(a).h("az<1>"))},
gu(a){return A.bI(a)},
gl(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.h(A.cg(a,b))
return a[b]},
k(a,b,c){A.O(a).c.a(c)
if(!!a.immutable$list)A.bn(A.ap("indexed set"))
if(!(b>=0&&b<a.length))throw A.h(A.cg(a,b))
a[b]=c},
$ij:1,
$iR:1}
J.co.prototype={}
J.az.prototype={
gp(){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.h(A.dN(q))
s=r.c
if(s>=p){r.sae(null)
return!1}r.sae(q[s]);++r.c
return!0},
sae(a){this.d=this.$ti.h("1?").a(a)},
$iv:1}
J.bB.prototype={
ao(a,b){var s
A.fU(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga_(b)
if(this.ga_(a)===s)return 0
if(this.ga_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga_(a){return a===0?1/a<0:a<0},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
al(a,b){return(a|0)===a?a/b|0:this.aP(a,b)},
aP(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.h(A.ap("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
aN(a,b){var s
if(a>0)s=this.aM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aM(a,b){return b>31?0:a>>>b},
$ibm:1}
J.aI.prototype={$iX:1}
J.bA.prototype={}
J.aa.prototype={
an(a,b){if(b<0)throw A.h(A.cg(a,b))
if(b>=a.length)A.bn(A.cg(a,b))
return a.charCodeAt(b)},
av(a,b){return a+b},
b4(a,b,c){return A.hJ(a,b,c,0)},
aw(a,b,c){return a.substring(b,A.fl(b,c,a.length))},
bb(a){return a.toLowerCase()},
i(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return a.length},
$icv:1,
$id:1}
A.bF.prototype={
i(a){var s="LateInitializationError: "+this.a
return s}}
A.aE.prototype={}
A.a_.prototype={
gv(a){var s=this
return new A.ac(s,s.gl(s),s.$ti.h("ac<a_.E>"))},
a0(a){var s,r,q,p=this.a,o=J.bj(p),n=o.gl(p)
for(s=this.b,r=0,q="";r<n;++r){q+=A.n(s.$1(o.F(p,r)))
if(n!==o.gl(p))throw A.h(A.a6(this))}return q.charCodeAt(0)==0?q:q},
L(a,b){return this.ay(0,this.$ti.h("w(a_.E)").a(b))}}
A.ac.prototype={
gp(){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.bj(q),o=p.gl(q)
if(r.b!==o)throw A.h(A.a6(q))
s=r.c
if(s>=o){r.sa7(null)
return!1}r.sa7(p.F(q,s));++r.c
return!0},
sa7(a){this.d=this.$ti.h("1?").a(a)},
$iv:1}
A.H.prototype={
gl(a){return J.ay(this.a)},
F(a,b){return this.b.$1(J.eX(this.a,b))}}
A.W.prototype={
gv(a){return new A.aZ(J.ch(this.a),this.b,this.$ti.h("aZ<1>"))}}
A.aZ.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.dG(r.$1(s.gp())))return!0
return!1},
gp(){return this.a.gp()}}
A.aC.prototype={
i(a){return A.dt(this)},
$iq:1}
A.a.prototype={
gl(a){return this.a},
aV(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j(a,b){if(!this.aV(b))return null
return this.b[b]},
B(a,b){var s,r,q,p,o,n=this.$ti
n.h("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=A.t(s[p])
b.$2(o,n.a(q[o]))}}}
A.cJ.prototype={
w(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aR.prototype={
i(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.bE.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bU.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cu.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.b9.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibM:1}
A.a5.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eH(r==null?"unknown":r)+"'"},
$ia9:1,
gbc(){return this},
$C:"$1",
$R:1,
$D:null}
A.bq.prototype={$C:"$0",$R:0}
A.br.prototype={$C:"$2",$R:2}
A.bS.prototype={}
A.bN.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eH(s)+"'"}}
A.aj.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aj))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.hG(this.a)^A.bI(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cw(t.K.a(this.a))+"'")}}
A.bJ.prototype={
i(a){return"RuntimeError: "+this.a}}
A.bW.prototype={
i(a){return"Assertion failed: "+A.bv(this.a)}}
A.aJ.prototype={
gl(a){return this.a},
gb1(a){return this.a===0},
gG(){return new A.aK(this,A.F(this).h("aK<1>"))},
j(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.V(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.V(p,b)
q=r==null?n:r.b
return q}else return o.b_(b)},
b_(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.ah(p,q.aq(a))
r=q.ar(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.F(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.a8(s==null?q.b=q.W():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.a8(r==null?q.c=q.W():r,b,c)}else q.b0(b,c)},
b0(a,b){var s,r,q,p,o=this,n=A.F(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.W()
r=o.aq(a)
q=o.ah(s,r)
if(q==null)o.Y(s,r,[o.P(a,b)])
else{p=o.ar(q,a)
if(p>=0)q[p].b=b
else q.push(o.P(a,b))}},
B(a,b){var s,r,q=this
A.F(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.h(A.a6(q))
s=s.c}},
a8(a,b,c){var s,r=this,q=A.F(r)
q.c.a(b)
q.Q[1].a(c)
s=r.V(a,b)
if(s==null)r.Y(a,b,r.P(b,c))
else s.b=c},
aI(){this.r=this.r+1&67108863},
P(a,b){var s=this,r=A.F(s),q=new A.cp(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.aI()
return q},
aq(a){return J.dk(a)&0x3ffffff},
ar(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1},
i(a){return A.dt(this)},
V(a,b){return a[b]},
ah(a,b){return a[b]},
Y(a,b,c){a[b]=c},
aG(a,b){delete a[b]},
W(){var s="<non-identifier-key>",r=Object.create(null)
this.Y(r,s,r)
this.aG(r,s)
return r}}
A.cp.prototype={}
A.aK.prototype={
gl(a){return this.a.a},
gv(a){var s=this.a,r=new A.aL(s,s.r,this.$ti.h("aL<1>"))
r.c=s.e
return r}}
A.aL.prototype={
gp(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.a6(q))
s=r.c
if(s==null){r.sa9(null)
return!1}else{r.sa9(s.a)
r.c=s.c
return!0}},
sa9(a){this.d=this.$ti.h("1?").a(a)},
$iv:1}
A.de.prototype={
$1(a){return this.a(a)},
$S:10}
A.df.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dg.prototype={
$1(a){return this.a(A.t(a))},
$S:12}
A.bC.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gaJ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.e1(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
af(a,b){var s,r=t.K.a(this.gaJ())
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.c6(s)},
$icv:1}
A.c6.prototype={
gap(){var s=this.b
return s.index+s[0].length},
$idu:1}
A.cL.prototype={
gp(){return t.a0.a(this.d)},
n(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.af(m,s)
if(p!=null){n.d=p
o=p.gap()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=B.e.an(m,s)
if(s>=55296&&s<=56319){s=B.e.an(m,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1},
$iv:1}
A.L.prototype={
h(a){return A.d5(v.typeUniverse,this,a)},
E(a){return A.fQ(v.typeUniverse,this,a)}}
A.c3.prototype={}
A.c1.prototype={
i(a){return this.a}}
A.ba.prototype={$ia0:1}
A.cN.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.cM.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.cO.prototype={
$0(){this.a.$0()},
$S:2}
A.cP.prototype={
$0(){this.a.$0()},
$S:2}
A.d3.prototype={
aB(a,b){if(self.setTimeout!=null)self.setTimeout(A.cf(new A.d4(this,b),0),a)
else throw A.h(A.ap("`setTimeout()` not found."))}}
A.d4.prototype={
$0(){this.b.$0()},
$S:0}
A.aB.prototype={
i(a){return A.n(this.a)},
$ik:1,
gN(){return this.b}}
A.b0.prototype={
b2(a){if((this.c&15)!==6)return!0
return this.b.b.a1(t.m.a(this.d),a.a,t.v,t.K)},
aY(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.b6(q,m,a.b,o,n,t.l)
else p=l.a1(t.y.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.aw(s))){if((r.c&1)!==0)throw A.h(A.ci("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.h(A.ci("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.N.prototype={
ba(a,b,c){var s,r,q,p=this.$ti
p.E(c).h("1/(2)").a(a)
s=$.r
if(s===B.c){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.h(A.dT(b,"onError",u.c))}else{c.h("@<0/>").E(p.c).h("1(2)").a(a)
if(b!=null)b=A.hc(b,s)}r=new A.N(s,c.h("N<0>"))
q=b==null?1:3
this.ab(new A.b0(r,q,a,b,p.h("@<1>").E(c).h("b0<1,2>")))
return r},
b9(a,b){return this.ba(a,null,b)},
R(a){this.a=a.a&30|this.a&1
this.c=a.c},
ab(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.ab(a)
return}r.R(s)}A.ex(null,null,r.b,t.M.a(new A.cS(r,a)))}},
aj(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aj(a)
return}m.R(n)}l.a=m.M(a)
A.ex(null,null,m.b,t.M.a(new A.cT(l,m)))}},
ak(){var s=t.F.a(this.c)
this.c=null
return this.M(s)},
M(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
$iaF:1}
A.cS.prototype={
$0(){A.c4(this.a,this.b)},
$S:0}
A.cT.prototype={
$0(){A.c4(this.b,this.a.a)},
$S:0}
A.cW.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.b5(t.O.a(q.d),t.z)}catch(p){s=A.aw(p)
r=A.bk(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.dl(s,r)
o.b=!0
return}if(l instanceof A.N&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.b9(new A.cX(n),t.z)
q.b=!1}},
$S:0}
A.cX.prototype={
$1(a){return this.a},
$S:15}
A.cV.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.a1(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aw(l)
r=A.bk(l)
q=this.a
q.c=A.dl(s,r)
q.b=!0}},
$S:0}
A.cU.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.b2(s)&&p.a.e!=null){p.c=p.a.aY(s)
p.b=!1}}catch(o){r=A.aw(o)
q=A.bk(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.dl(r,q)
n.b=!0}},
$S:0}
A.bX.prototype={}
A.aX.prototype={
gl(a){var s,r,q=this,p={},o=new A.N($.r,t.a)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.cH(p,q))
t.Y.a(new A.cI(p,o))
A.dw(q.a,q.b,r,!1,s.c)
return o}}
A.cH.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.cI.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.ak()
r.c.a(q)
s.a=8
s.c=q
A.c4(s,p)},
$S:0}
A.bO.prototype={}
A.be.prototype={$ied:1}
A.db.prototype={
$0(){var s=this.a,r=this.b
A.dH(s,"error",t.K)
A.dH(r,"stackTrace",t.l)
A.fb(s,r)},
$S:0}
A.c9.prototype={
b7(a){var s,r,q
t.M.a(a)
try{if(B.c===$.r){a.$0()
return}A.ev(null,null,this,a,t.H)}catch(q){s=A.aw(q)
r=A.bk(q)
A.da(t.K.a(s),t.l.a(r))}},
b8(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.c===$.r){a.$1(b)
return}A.ew(null,null,this,a,b,t.H,c)}catch(q){s=A.aw(q)
r=A.bk(q)
A.da(t.K.a(s),t.l.a(r))}},
aS(a){return new A.cZ(this,t.M.a(a))},
aT(a,b){return new A.d_(this,b.h("~(0)").a(a),b)},
b5(a,b){b.h("0()").a(a)
if($.r===B.c)return a.$0()
return A.ev(null,null,this,a,b)},
a1(a,b,c,d){c.h("@<0>").E(d).h("1(2)").a(a)
d.a(b)
if($.r===B.c)return a.$1(b)
return A.ew(null,null,this,a,b,c,d)},
b6(a,b,c,d,e,f){d.h("@<0>").E(e).E(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.r===B.c)return a.$2(b,c)
return A.hd(null,null,this,a,b,c,d,e,f)}}
A.cZ.prototype={
$0(){return this.a.b7(this.b)},
$S:0}
A.d_.prototype={
$1(a){var s=this.c
return this.a.b8(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.b2.prototype={
gv(a){var s=this,r=new A.b3(s,s.r,A.F(s).h("b3<1>"))
r.c=s.e
return r},
gl(a){return this.a},
q(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.L.a(s[b])!=null}else{r=this.aF(b)
return r}},
aF(a){var s=this.d
if(s==null)return!1
return this.ag(s[this.ad(a)],a)>=0},
m(a,b){var s,r,q=this
A.F(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aa(s==null?q.b=A.dx():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aa(r==null?q.c=A.dx():r,b)}else return q.aC(b)},
aC(a){var s,r,q,p=this
A.F(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.dx()
r=p.ad(a)
q=s[r]
if(q==null)s[r]=[p.X(a)]
else{if(p.ag(q,a)>=0)return!1
q.push(p.X(a))}return!0},
aa(a,b){A.F(this).c.a(b)
if(t.L.a(a[b])!=null)return!1
a[b]=this.X(b)
return!0},
X(a){var s=this,r=new A.c5(A.F(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
ad(a){return J.dk(a)&1073741823},
ag(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1}}
A.c5.prototype={}
A.b3.prototype={
gp(){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.h(A.a6(q))
else if(r==null){s.sac(null)
return!1}else{s.sac(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sac(a){this.d=this.$ti.h("1?").a(a)},
$iv:1}
A.aM.prototype={$ij:1,$iR:1}
A.y.prototype={
gv(a){return new A.ac(a,this.gl(a),A.af(a).h("ac<y.E>"))},
F(a,b){return this.j(a,b)},
i(a){return A.dq(a,"[","]")}}
A.aO.prototype={}
A.cq.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.n(a)
r.a=s+": "
r.a+=A.n(b)},
$S:16}
A.z.prototype={
B(a,b){var s,r,q=A.F(this)
q.h("~(z.K,z.V)").a(b)
for(s=J.ch(this.gG()),q=q.h("z.V");s.n();){r=s.gp()
b.$2(r,q.a(this.j(0,r)))}},
gl(a){return J.ay(this.gG())},
i(a){return A.dt(this)},
$iq:1}
A.aV.prototype={
C(a,b){var s
for(s=J.ch(A.F(this).h("j<1>").a(b));s.n();)this.m(0,s.gp())},
i(a){return A.dq(this,"{","}")}}
A.b7.prototype={$ij:1,$ie9:1}
A.b4.prototype={}
A.bf.prototype={}
A.k.prototype={
gN(){return A.bk(this.$thrownJsError)}}
A.aA.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bv(s)
return"Assertion failed"}}
A.a0.prototype={}
A.bG.prototype={
i(a){return"Throw of null."}}
A.T.prototype={
gT(){return"Invalid argument"+(!this.a?"(s)":"")},
gS(){return""},
i(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gT()+o+m
if(!q.a)return l
s=q.gS()
r=A.bv(q.b)
return l+s+": "+r}}
A.aS.prototype={
gT(){return"RangeError"},
gS(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bx.prototype={
gT(){return"RangeError"},
gS(){if(A.d8(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.bV.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bT.prototype={
i(a){var s="UnimplementedError: "+this.a
return s}}
A.am.prototype={
i(a){return"Bad state: "+this.a}}
A.bs.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bv(s)+"."}}
A.aW.prototype={
i(a){return"Stack Overflow"},
gN(){return null},
$ik:1}
A.bt.prototype={
i(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.cR.prototype={
i(a){return"Exception: "+this.a}}
A.cn.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.e.aw(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.j.prototype={
L(a,b){var s=A.F(this)
return new A.W(this,s.h("w(j.E)").a(b),s.h("W<j.E>"))},
gl(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
gH(a){var s,r=this.gv(this)
if(!r.n())throw A.h(A.fd())
s=r.gp()
if(r.n())throw A.h(A.fe())
return s},
i(a){return A.fc(this,"(",")")}}
A.v.prototype={}
A.K.prototype={
gu(a){return A.m.prototype.gu.call(this,this)},
i(a){return"null"}}
A.m.prototype={$im:1,
J(a,b){return this===b},
gu(a){return A.bI(this)},
i(a){return"Instance of '"+A.cw(this)+"'"},
toString(){return this.i(this)}}
A.ca.prototype={
i(a){return""},
$ibM:1}
A.bP.prototype={
gl(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.e.prototype={}
A.ah.prototype={
saZ(a,b){a.href=b},
i(a){return String(a)},
$iah:1}
A.bp.prototype={
i(a){return String(a)}}
A.ai.prototype={$iai:1}
A.a4.prototype={$ia4:1}
A.P.prototype={
gl(a){return a.length}}
A.aD.prototype={
gl(a){return a.length}}
A.ck.prototype={}
A.a7.prototype={}
A.cl.prototype={
i(a){return String(a)}}
A.bu.prototype={
aX(a,b){return a.createHTMLDocument(b)}}
A.o.prototype={
gaR(a){return new A.c0(a)},
i(a){return a.localName},
t(a,b,c,d){var s,r,q,p
if(c==null){if(d==null){s=$.e_
if(s==null){s=A.f([],t.Q)
r=new A.aQ(s)
B.b.m(s,A.ef(null))
B.b.m(s,A.ej())
$.e_=r
d=r}else d=s}s=$.dZ
if(s==null){s=new A.bd(d)
$.dZ=s
c=s}else{s.a=d
c=s}}else if(d!=null)throw A.h(A.ci("validator can only be passed if treeSanitizer is null",null))
if($.Z==null){s=document
r=s.implementation
r.toString
r=B.y.aX(r,"")
$.Z=r
$.dm=r.createRange()
r=$.Z.createElement("base")
t.D.a(r)
s=s.baseURI
s.toString
r.href=s
$.Z.head.appendChild(r)}s=$.Z
if(s.body==null){r=s.createElement("body")
B.z.saU(s,t.t.a(r))}s=$.Z
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.Z.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!B.b.q(B.a4,a.tagName)){$.dm.selectNodeContents(q)
s=$.dm
p=s.createContextualFragment(b)}else{J.eZ(q,b)
p=$.Z.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.Z.body)J.dQ(q)
c.a2(p)
document.adoptNode(p)
return p},
aW(a,b,c){return this.t(a,b,c,null)},
a3(a,b,c){this.sau(a,null)
a.appendChild(this.t(a,b,null,c))},
saH(a,b){a.innerHTML=b},
gat(a){return a.tagName},
gas(a){return new A.ar(a,"click",!1,t.W)},
$io:1}
A.cm.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:17}
A.b.prototype={$ib:1}
A.l.prototype={
aD(a,b,c,d){return a.addEventListener(b,A.cf(t.o.a(c),1),!1)},
$il:1}
A.bw.prototype={
gl(a){return a.length}}
A.aG.prototype={
saU(a,b){a.body=b}}
A.aN.prototype={
i(a){return String(a)},
$iaN:1}
A.D.prototype={$iD:1}
A.A.prototype={
gH(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.h(A.dv("No elements"))
if(r>1)throw A.h(A.dv("More than one element"))
s=s.firstChild
s.toString
return s},
C(a,b){var s,r,q,p,o
t.J.a(b)
s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o)}return},
k(a,b,c){var s,r
t.A.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.u(r,b)
s.replaceChild(c,r[b])},
gv(a){var s=this.a.childNodes
return new A.a8(s,s.length,A.af(s).h("a8<Q.E>"))},
gl(a){return this.a.childNodes.length},
j(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.u(s,b)
return s[b]}}
A.i.prototype={
b3(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
aE(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
i(a){var s=a.nodeValue
return s==null?this.ax(a):s},
sau(a,b){a.textContent=b},
$ii:1}
A.aP.prototype={
gl(a){return a.length},
j(a,b){if(b>>>0!==b||b>=a.length)throw A.h(A.dp(b,a,null,null,null))
return a[b]},
k(a,b,c){t.A.a(c)
throw A.h(A.ap("Cannot assign element of immutable List."))},
F(a,b){if(!(b<a.length))return A.u(a,b)
return a[b]},
$ibD:1,
$ij:1,
$iR:1}
A.bK.prototype={
gl(a){return a.length}}
A.aY.prototype={
t(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.O(a,b,c,d)
s=A.f9("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
new A.A(r).C(0,new A.A(s))
return r}}
A.bQ.prototype={
t(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.O(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.A(B.o.t(s.createElement("table"),b,c,d))
s=new A.A(s.gH(s))
new A.A(r).C(0,new A.A(s.gH(s)))
return r}}
A.bR.prototype={
t(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.O(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=new A.A(B.o.t(s.createElement("table"),b,c,d))
new A.A(r).C(0,new A.A(s.gH(s)))
return r}}
A.an.prototype={
a3(a,b,c){var s,r
this.sau(a,null)
s=a.content
s.toString
J.eW(s)
r=this.t(a,b,null,c)
a.content.appendChild(r)},
$ian:1}
A.M.prototype={}
A.aq.prototype={$iaq:1}
A.b5.prototype={
gl(a){return a.length},
j(a,b){if(b>>>0!==b||b>=a.length)throw A.h(A.dp(b,a,null,null,null))
return a[b]},
k(a,b,c){t.A.a(c)
throw A.h(A.ap("Cannot assign element of immutable List."))},
F(a,b){if(!(b<a.length))return A.u(a,b)
return a[b]},
$ibD:1,
$ij:1,
$iR:1}
A.bY.prototype={
B(a,b){var s,r,q,p,o
t.aa.a(b)
for(s=this.gG(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.dN)(s),++p){o=s[p]
b.$2(o,A.t(q.getAttribute(o)))}},
gG(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.f([],t.s)
for(r=m.length,q=t.x,p=0;p<r;++p){if(!(p<m.length))return A.u(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.b.m(s,n)}}return s}}
A.c0.prototype={
j(a,b){return this.a.getAttribute(A.t(b))},
gl(a){return this.gG().length}}
A.dn.prototype={}
A.b_.prototype={}
A.ar.prototype={}
A.c2.prototype={}
A.cQ.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:18}
A.ad.prototype={
aA(a){var s
if($.b1.gb1($.b1)){for(s=0;s<262;++s)$.b1.k(0,B.G[s],A.hv())
for(s=0;s<12;++s)$.b1.k(0,B.f[s],A.hw())}},
I(a){return $.eT().q(0,A.ak(a))},
D(a,b,c){var s=$.b1.j(0,A.ak(a)+"::"+b)
if(s==null)s=$.b1.j(0,"*::"+b)
if(s==null)return!1
return A.fT(s.$4(a,b,c,this))},
$iS:1}
A.Q.prototype={
gv(a){return new A.a8(a,this.gl(a),A.af(a).h("a8<Q.E>"))}}
A.aQ.prototype={
aQ(a,b,c,d){var s,r,q,p,o=t.U
o.a(b)
o.a(c)
s=a.toUpperCase()
o=A.O(b)
r=o.h("d(1)").a(new A.cr(s))
q=A.dS()
p=t.i.a(window.location)
B.b.m(this.a,A.fy(new A.b6(q,p),A.f([s],t.s),new A.H(b,r,o.h("H<1,d>")),null,!1,!0))},
I(a){return B.b.am(this.a,new A.ct(a))},
D(a,b,c){return B.b.am(this.a,new A.cs(a,b,c))},
$iS:1}
A.cr.prototype={
$1(a){A.t(a)
return this.a+"::"+a.toLowerCase()},
$S:3}
A.ct.prototype={
$1(a){return t.e.a(a).I(this.a)},
$S:4}
A.cs.prototype={
$1(a){return t.e.a(a).D(this.a,this.b,this.c)},
$S:4}
A.b8.prototype={
a6(a,b,c,d){var s,r,q
this.a.C(0,c)
if(b==null)b=B.l
s=J.dK(b)
r=s.L(b,new A.d0())
q=s.L(b,new A.d1())
this.b.C(0,r)
s=this.c
s.C(0,B.l)
s.C(0,q)},
I(a){return this.a.q(0,A.ak(a))},
D(a,b,c){var s=this,r=A.ak(a),q=s.c
if(q.q(0,r+"::"+b))return s.d.Z(c)
else if(q.q(0,"*::"+b))return s.d.Z(c)
else{q=s.b
if(q.q(0,r+"::"+b))return!0
else if(q.q(0,"*::"+b))return!0
else if(q.q(0,r+"::*"))return!0
else if(q.q(0,"*::*"))return!0}return!1},
$iS:1}
A.d0.prototype={
$1(a){return!B.b.q(B.f,A.t(a))},
$S:5}
A.d1.prototype={
$1(a){return B.b.q(B.f,A.t(a))},
$S:5}
A.c_.prototype={
I(a){var s,r,q=this
if(q.e){s=a.getAttribute("is")
if(s!=null){r=q.a
return r.q(0,s.toUpperCase())&&r.q(0,A.ak(a))}}return q.f&&q.a.q(0,A.ak(a))},
D(a,b,c){var s=this
if(s.I(a)){if(s.e&&b==="is"&&s.a.q(0,c.toUpperCase()))return!0
return s.a5(a,b,c)}return!1}}
A.cb.prototype={
D(a,b,c){if(this.a5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.q(0,b)
return!1}}
A.d2.prototype={
$1(a){return"TEMPLATE::"+A.t(a)},
$S:3}
A.a8.prototype={
n(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sai(J.eU(s.a,r))
s.c=r
return!0}s.sai(null)
s.c=q
return!1},
gp(){return this.$ti.c.a(this.d)},
sai(a){this.d=this.$ti.h("1?").a(a)},
$iv:1}
A.b6.prototype={
Z(a){var s,r,q=this.a
B.p.saZ(q,a)
s=q.hostname
r=this.b
if(!(s==r.hostname&&q.port===r.port&&q.protocol===r.protocol))if(s==="")if(q.port===""){q=q.protocol
q=q===":"||q===""}else q=!1
else q=!1
else q=!0
return q},
$ift:1}
A.bd.prototype={
a2(a){var s,r=new A.d7(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
K(a,b){++this.b
if(b==null||b!==a.parentNode)J.dQ(a)
else b.removeChild(a)},
aL(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.eY(a)
l=m.a.getAttribute("is")
t.h.a(a)
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=="lastChild"||c.name=="lastChild"||c.id=="previousSibling"||c.name=="previousSibling"||c.id=="children"||c.name=="children")return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=="attributes"||h.name=="attributes"||h.id=="lastChild"||h.name=="lastChild"||h.id=="previousSibling"||h.name=="previousSibling"||h.id=="children"||h.name=="children")return true}return false}(a)
n=A.dG(s)?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){}r="element unprintable"
try{r=J.bo(a)}catch(p){}try{q=A.ak(a)
this.aK(t.h.a(a),b,n,r,q,t.r.a(m),A.ep(l))}catch(p){if(A.aw(p) instanceof A.T)throw p
else{this.K(a,b)
window
o="Removing corrupted element "+A.n(r)
if(typeof console!="undefined")window.console.warn(o)}}},
aK(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.K(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.I(a)){m.K(a,b)
window
s="Removing disallowed element <"+e+"> from "+A.n(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.D(a,"is",g)){m.K(a,b)
window
s="Removing disallowed type extension <"+e+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gG()
r=A.f(s.slice(0),A.O(s))
for(q=f.gG().length-1,s=f.a;q>=0;--q){if(!(q<r.length))return A.u(r,q)
p=r[q]
o=m.a
n=J.f0(p)
A.t(p)
if(!o.D(a,n,A.t(s.getAttribute(p)))){window
o="Removing disallowed attribute <"+e+" "+p+'="'+A.n(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.bg.b(a)){s=a.content
s.toString
m.a2(s)}},
$ifh:1}
A.d7.prototype={
$2(a,b){var s,r,q,p,o,n,m=this.a
switch(a.nodeType){case 1:m.aL(a,b)
break
case 8:case 11:case 3:case 4:break
default:m.K(a,b)}s=a.lastChild
for(q=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){p=r.nextSibling
o=s
o=p==null?o!=null:p!==o
p=o}else p=!1
if(p){p=A.dv("Corrupt HTML")
throw A.h(p)}}catch(n){p=q.a(s);++m.b
o=p.parentNode
if(a!==o){if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:19}
A.bZ.prototype={}
A.c7.prototype={}
A.c8.prototype={}
A.cd.prototype={}
A.ce.prototype={}
A.c.prototype={
t(a,b,c,d){var s,r,q,p,o,n
c=new A.bd(d)
s='<svg version="1.1">'+b+"</svg>"
r=document
q=r.body
q.toString
p=B.i.aW(q,s,c)
o=r.createDocumentFragment()
r=new A.A(p)
n=r.gH(r)
for(;r=n.firstChild,r!=null;)o.appendChild(r)
return o},
gas(a){return new A.ar(a,"click",!1,t.W)}}
A.di.prototype={
$1(a){var s,r,q,p=".section-menu-container",o=".content-box"
t.V.a(a)
s=document
r=s.querySelector(".section-menu")
q=r.style
if(q.display==="none"){q.display="block"
q=r.style
q.height="100%"
q=s.querySelector(p).style
q.height="40%"
s=s.querySelector(o).style
s.height="50%"}else{q.display="none"
q=r.style
q.height="0"
q=s.querySelector(p).style
q.height="0"
s=s.querySelector(o).style
s.height="90%"}},
$S:6}
A.I.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(b instanceof A.I)return b.b===this.b
else return!1}}
A.aT.prototype={
U(){B.l_.B(0,new A.cy(this))
B.b.a4(this.a,new A.cz())}}
A.cy.prototype={
$2(a,b){var s,r
A.t(a)
t.cW.a(b)
s=A.eE(a)
r=new A.E(s,A.f([],t.b))
B.b.m(this.a.a,r)
b.B(0,new A.cx(r,s))},
$S:20}
A.cx.prototype={
$2(a,b){var s,r,q,p="^[0-9]* *"
A.t(a)
t.I.a(b)
s=A.eE(a)
r=b.j(0,"jp")
r.toString
J.dR(r,A.e5(p),"")
r=b.j(0,"en")
r.toString
q=this.a
B.b.m(q.b,new A.I(this.b,s,J.dR(r,A.e5(p),"")))
q.aO()},
$S:21}
A.cz.prototype={
$2(a,b){var s=t.u
return B.d.ao(s.a(a).a,s.a(b).a)},
$S:22}
A.E.prototype={
aO(){B.b.a4(this.b,new A.cG())}}
A.cG.prototype={
$2(a,b){var s=t.S
return B.d.ao(s.a(a).b,s.a(b).b)},
$S:23}
A.cF.prototype={
$1(a){var s,r,q
t.u.a(a)
s="#select-section-"+a.a
s=document.querySelector(s)
s.toString
s=J.dP(s)
r=s.$ti
q=r.h("~(1)?").a(new A.cE(a))
t.Y.a(null)
A.dw(s.a,s.b,q,!1,r.c)},
$S:7}
A.cE.prototype={
$1(a){var s,r,q
t.V.a(a)
s=$.aU
if(s==null){s=new A.aT(A.f([],t.E))
s.U()
$.aU=s}B.b.B(s.a,new A.cD())
s=this.a.a
r="#section-"+s
q=document
r=q.querySelector(r).style
r.display="block"
r=q.querySelector("#section-"+s).style
r.height="100%"
s=q.querySelector("#section-"+s).style
s.minHeight="100%"},
$S:6}
A.cD.prototype={
$1(a){var s=t.u.a(a).a,r="#section-"+s,q=document
r=q.querySelector(r).style
r.display="none"
r=q.querySelector("#section-"+s).style
r.height="0"
s=q.querySelector("#section-"+s).style
s.minHeight="0"},
$S:7}
A.cA.prototype={
$1(a){var s=t.u.a(a).a
return'<a class="uk-link-reset" id="select-section-'+s+'">'+s+"</a>\n"},
$S:8}
A.cB.prototype={
$1(a){return A.fo(t.u.a(a))},
$S:8}
A.cC.prototype={
$1(a){return'<li>\n    <span uk-icon="icon: play; ratio: 1.5"></span>\n    <p>'+t.S.a(a).d+"</p>\n</li>"},
$S:24};(function aliases(){var s=J.aH.prototype
s.ax=s.i
s=J.ab.prototype
s.az=s.i
s=A.j.prototype
s.ay=s.L
s=A.o.prototype
s.O=s.t
s=A.b8.prototype
s.a5=s.D})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff
s(A,"hn","fv",1)
s(A,"ho","fw",1)
s(A,"hp","fx",1)
r(A,"eA","hg",0)
q(A,"hv",4,null,["$4"],["fA"],9,0)
q(A,"hw",4,null,["$4"],["fB"],9,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.m,null)
q(A.m,[A.dr,J.aH,J.az,A.k,A.j,A.ac,A.v,A.aC,A.cJ,A.cu,A.b9,A.a5,A.z,A.cp,A.aL,A.bC,A.c6,A.cL,A.L,A.c3,A.d3,A.aB,A.b0,A.N,A.bX,A.aX,A.bO,A.be,A.bf,A.c5,A.b3,A.b4,A.y,A.aV,A.aW,A.cR,A.cn,A.K,A.ca,A.bP,A.ck,A.dn,A.ad,A.Q,A.aQ,A.b8,A.a8,A.b6,A.bd,A.I,A.aT,A.E])
q(J.aH,[J.by,J.bz,J.C,J.x,J.bB,J.aa])
q(J.C,[J.ab,A.l,A.bZ,A.cl,A.bu,A.b,A.aN,A.c7,A.cd])
q(J.ab,[J.bH,J.ao,J.U])
r(J.co,J.x)
q(J.bB,[J.aI,J.bA])
q(A.k,[A.bF,A.a0,A.bE,A.bU,A.bJ,A.aA,A.c1,A.bG,A.T,A.bV,A.bT,A.am,A.bs,A.bt])
q(A.j,[A.aE,A.W])
q(A.aE,[A.a_,A.aK])
r(A.H,A.a_)
r(A.aZ,A.v)
r(A.a,A.aC)
r(A.aR,A.a0)
q(A.a5,[A.bq,A.br,A.bS,A.de,A.dg,A.cN,A.cM,A.cX,A.cH,A.d_,A.cm,A.cQ,A.cr,A.ct,A.cs,A.d0,A.d1,A.d2,A.di,A.cF,A.cE,A.cD,A.cA,A.cB,A.cC])
q(A.bS,[A.bN,A.aj])
r(A.bW,A.aA)
r(A.aO,A.z)
q(A.aO,[A.aJ,A.bY])
q(A.br,[A.df,A.cq,A.d7,A.cy,A.cx,A.cz,A.cG])
r(A.ba,A.c1)
q(A.bq,[A.cO,A.cP,A.d4,A.cS,A.cT,A.cW,A.cV,A.cU,A.cI,A.db,A.cZ])
r(A.c9,A.be)
r(A.b7,A.bf)
r(A.b2,A.b7)
r(A.aM,A.b4)
q(A.T,[A.aS,A.bx])
r(A.i,A.l)
q(A.i,[A.o,A.P,A.a7,A.aq])
q(A.o,[A.e,A.c])
q(A.e,[A.ah,A.bp,A.ai,A.a4,A.bw,A.bK,A.aY,A.bQ,A.bR,A.an])
r(A.aD,A.bZ)
r(A.aG,A.a7)
r(A.M,A.b)
r(A.D,A.M)
r(A.A,A.aM)
r(A.c8,A.c7)
r(A.aP,A.c8)
r(A.ce,A.cd)
r(A.b5,A.ce)
r(A.c0,A.bY)
r(A.b_,A.aX)
r(A.ar,A.b_)
r(A.c2,A.bO)
q(A.b8,[A.c_,A.cb])
s(A.b4,A.y)
s(A.bf,A.aV)
s(A.bZ,A.ck)
s(A.c7,A.y)
s(A.c8,A.Q)
s(A.cd,A.y)
s(A.ce,A.Q)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{X:"int",hr:"double",bm:"num",d:"String",w:"bool",K:"Null",R:"List"},mangledNames:{},types:["~()","~(~())","K()","d(d)","w(S)","w(d)","~(D)","~(E)","d(E)","w(o,d,d,ad)","@(@)","@(@,d)","@(d)","K(@)","K(~())","N<@>(@)","~(m?,m?)","w(i)","~(b)","~(i,i?)","~(d,q<d,q<d,d>>)","~(d,q<d,d>)","X(E,E)","X(I,I)","d(I)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.fP(v.typeUniverse,JSON.parse('{"bH":"ab","ao":"ab","U":"ab","hP":"b","hV":"b","hO":"c","hW":"c","hQ":"e","hX":"e","hZ":"i","hU":"i","ib":"a7","ia":"l","hY":"D","hS":"M","hR":"P","i_":"P","by":{"w":[]},"x":{"R":["1"],"j":["1"]},"co":{"x":["1"],"R":["1"],"j":["1"]},"az":{"v":["1"]},"bB":{"bm":[]},"aI":{"X":[],"bm":[]},"bA":{"bm":[]},"aa":{"d":[],"cv":[]},"bF":{"k":[]},"aE":{"j":["1"]},"a_":{"j":["1"]},"ac":{"v":["1"]},"H":{"a_":["2"],"j":["2"],"a_.E":"2","j.E":"2"},"W":{"j":["1"],"j.E":"1"},"aZ":{"v":["1"]},"aC":{"q":["1","2"]},"a":{"aC":["1","2"],"q":["1","2"]},"aR":{"a0":[],"k":[]},"bE":{"k":[]},"bU":{"k":[]},"b9":{"bM":[]},"a5":{"a9":[]},"bq":{"a9":[]},"br":{"a9":[]},"bS":{"a9":[]},"bN":{"a9":[]},"aj":{"a9":[]},"bJ":{"k":[]},"bW":{"k":[]},"aJ":{"z":["1","2"],"q":["1","2"],"z.K":"1","z.V":"2"},"aK":{"j":["1"],"j.E":"1"},"aL":{"v":["1"]},"bC":{"cv":[]},"c6":{"du":[]},"cL":{"v":["du"]},"c1":{"k":[]},"ba":{"a0":[],"k":[]},"N":{"aF":["1"]},"aB":{"k":[]},"be":{"ed":[]},"c9":{"be":[],"ed":[]},"b2":{"aV":["1"],"e9":["1"],"j":["1"]},"b3":{"v":["1"]},"aM":{"y":["1"],"R":["1"],"j":["1"]},"aO":{"z":["1","2"],"q":["1","2"]},"z":{"q":["1","2"]},"b7":{"aV":["1"],"e9":["1"],"j":["1"]},"X":{"bm":[]},"d":{"cv":[]},"aA":{"k":[]},"a0":{"k":[]},"bG":{"k":[]},"T":{"k":[]},"aS":{"k":[]},"bx":{"k":[]},"bV":{"k":[]},"bT":{"k":[]},"am":{"k":[]},"bs":{"k":[]},"aW":{"k":[]},"bt":{"k":[]},"ca":{"bM":[]},"o":{"i":[],"l":[]},"D":{"b":[]},"i":{"l":[]},"ad":{"S":[]},"e":{"o":[],"i":[],"l":[]},"ah":{"o":[],"i":[],"l":[]},"bp":{"o":[],"i":[],"l":[]},"ai":{"o":[],"i":[],"l":[]},"a4":{"o":[],"i":[],"l":[]},"P":{"i":[],"l":[]},"a7":{"i":[],"l":[]},"bw":{"o":[],"i":[],"l":[]},"aG":{"i":[],"l":[]},"A":{"y":["i"],"R":["i"],"j":["i"],"y.E":"i"},"aP":{"y":["i"],"Q":["i"],"R":["i"],"bD":["i"],"j":["i"],"y.E":"i","Q.E":"i"},"bK":{"o":[],"i":[],"l":[]},"aY":{"o":[],"i":[],"l":[]},"bQ":{"o":[],"i":[],"l":[]},"bR":{"o":[],"i":[],"l":[]},"an":{"o":[],"i":[],"l":[]},"M":{"b":[]},"aq":{"i":[],"l":[]},"b5":{"y":["i"],"Q":["i"],"R":["i"],"bD":["i"],"j":["i"],"y.E":"i","Q.E":"i"},"bY":{"z":["d","d"],"q":["d","d"]},"c0":{"z":["d","d"],"q":["d","d"],"z.K":"d","z.V":"d"},"b_":{"aX":["1"]},"ar":{"b_":["1"],"aX":["1"]},"aQ":{"S":[]},"b8":{"S":[]},"c_":{"S":[]},"cb":{"S":[]},"a8":{"v":["1"]},"b6":{"ft":[]},"bd":{"fh":[]},"c":{"o":[],"i":[],"l":[]}}'))
A.fO(v.typeUniverse,JSON.parse('{"aE":1,"bO":1,"aM":1,"aO":2,"b7":1,"b4":1,"bf":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dJ
return{n:s("aB"),D:s("ai"),t:s("a4"),w:s("a<d,d>"),j:s("a<d,q<d,d>>"),h:s("o"),R:s("k"),B:s("b"),Z:s("a9"),d:s("aF<@>"),J:s("j<i>"),k:s("j<@>"),Q:s("x<S>"),b:s("x<I>"),E:s("x<E>"),s:s("x<d>"),q:s("x<@>"),T:s("bz"),g:s("U"),p:s("bD<@>"),i:s("aN"),I:s("q<d,d>"),r:s("q<@,@>"),cW:s("q<d,q<d,d>>"),cw:s("H<d,d>"),V:s("D"),A:s("i"),e:s("S"),P:s("K"),K:s("m"),S:s("I"),a0:s("du"),u:s("E"),l:s("bM"),N:s("d"),bm:s("d(d)"),bg:s("an"),b7:s("a0"),cr:s("ao"),x:s("aq"),ba:s("A"),W:s("ar<D>"),c:s("N<@>"),a:s("N<X>"),f:s("ad"),v:s("w"),m:s("w(m)"),cb:s("hr"),z:s("@"),O:s("@()"),y:s("@(m)"),C:s("@(m,bM)"),bL:s("X"),G:s("0&*"),_:s("m*"),bc:s("aF<K>?"),U:s("j<d>?"),X:s("m?"),F:s("b0<@,@>?"),L:s("c5?"),o:s("@(b)?"),Y:s("~()?"),cY:s("bm"),H:s("~"),M:s("~()"),aa:s("~(d,d)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.p=A.ah.prototype
B.i=A.a4.prototype
B.y=A.bu.prototype
B.z=A.aG.prototype
B.A=J.aH.prototype
B.b=J.x.prototype
B.d=J.aI.prototype
B.e=J.aa.prototype
B.B=J.U.prototype
B.C=J.C.prototype
B.n=J.bH.prototype
B.o=A.aY.prototype
B.h=J.ao.prototype
B.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.q=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.w=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.t=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.v=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.k=function(hooks) { return hooks; }

B.c=new A.c9()
B.x=new A.ca()
B.G=A.f(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
B.a4=A.f(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
B.l=A.f(s([]),t.s)
B.m=A.f(s(["bind","if","ref","repeat","syntax"]),t.s)
B.f=A.f(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
B.al=A.f(s(["1","10","5","2","3","9","7","4","6","11","8","14","15","12","16","13","22","21","27","18","19","17","20","28","24","30","25","23","33","29","31","26","35","34","36","39","32","43","38","41","40","37","42","44","45"]),t.s)
B.D=A.f(s(["1","2","3","4","5","6","7","8","9"]),t.s)
B.a=A.f(s(["jp","en"]),t.s)
B.bc=new A.a(2,{jp:"1 \u500b\u4eba\u306e\u610f\u5fd7\u306f\u5c0a\u91cd\u3057\u306a\u3051\u308c\u3070\u3044\u3051\u306a\u3044\u3002",en:"1 We must respect the will of the individual."},B.a,t.w)
B.ki=new A.a(2,{jp:"2 \u6c17\u697d\u306b\u3044\u3051\u3088\u3002\u5927\u4e08\u592b\u3001\u3059\u3079\u3066\u3046\u307e\u304f\u3044\u304f\u3055\u3002",en:"2 Take it easy. I can assure you that everything will turn out fine."},B.a,t.w)
B.b2=new A.a(2,{jp:"3 \u60b2\u89b3\u7684\u306a\u4eba\u751f\u89b3\u3092\u6368\u3066\u3066\u3001\u524d\u5411\u304d\u306a\u614b\u5ea6\u3092\u5e38\u306b\u6301\u3061\u7d9a\u3051\u3088\u3046\u3002",en:"3 Let go of your negative outlook on life. Always maintain a positive attitude."},B.a,t.w)
B.jQ=new A.a(2,{jp:"4 \u751f\u307e\u308c\u305f\u56fd\u3001\u6027\u5225\u3001\u4fe1\u6761\u306b\u95a2\u4fc2\u306a\u304f\u3001\u8ab0\u306b\u5bfe\u3057\u3066\u3082\u516c\u5e73\u3067\u306a\u304f\u3066\u306f\u306a\u3089\u306a\u3044",en:"4 You should be fair to everyone regardless of national origin, gender, or creed."},B.a,t.w)
B.e3=new A.a(2,{jp:"5 \u5e73\u7b49\u306f\u61b2\u6cd5\u3067\u5b88\u3089\u308c\u3066\u3044\u308b\u3002",en:"5 Equality is guaranteed by the Constitution."},B.a,t.w)
B.ji=new A.a(2,{jp:"6 \u5f7c\u306f\u67f1\u306b\u5bc4\u308a\u304b\u304b\u3063\u3066\u3001\u81ea\u7531\u306e\u5973\u795e\u50cf\u3092\u3058\u3063\u3068\u307f\u3064\u3081\u305f",en:"6 He leaned against the pillar and gazed at the Statue of Liberty."},B.a,t.w)
B.ke=new A.a(2,{jp:"7 \u9999\u6c34\u306e\u307b\u306e\u304b\u306a\u9999\u308a\u3092\u6f02\u308f\u305b\u306a\u304c\u3089\u3001\u4e00\u4eba\u306e\u5973\u6027\u304c\u50d5\u306e\u524d\u3092\u901a\u308a\u904e\u304e\u305f\u3002\u524d\u306e\u5f7c\u5973\u306e\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u3057\u307e\u3063\u305f\u3002",en:"7 A woman passed by me giving off a subtle scent of perfume. It reminded me of my ex-girlfriend."},B.a,t.w)
B.j1=new A.a(2,{jp:"8 \u7d0d\u8c46\u306f\u81ed\u3044\u306f\u3072\u3069\u3044\u3051\u308c\u3069\u5473\u306f\u6700\u9ad8\u3002",en:"8 Natto smells awful but tastes terrific."},B.a,t.w)
B.ek=new A.a(2,{jp:"9 \u300c\u6c57\u3067\u3073\u3057\u3087\u306c\u308c\u3060\u3088\u3002\u300d\u300c\u6765\u306a\u3044\u3067\uff01\u81ed\u3044\u308f\u3002\u30b7\u30e3\u30ef\u30fc\u3092\u6d74\u3073\u3066\u3002\u300d",en:'9 "I\'m soaked with sweat." "Stand back! You stink. Take a shower."'},B.a,t.w)
B.ao=new A.a(9,{"1":B.bc,"2":B.ki,"3":B.b2,"4":B.jQ,"5":B.e3,"6":B.ji,"7":B.ke,"8":B.j1,"9":B.ek},B.D,t.j)
B.aa=A.f(s(["114","115","116","117","118","119","120","121","122","123","124","125"]),t.s)
B.eq=new A.a(2,{jp:"114 \u3053\u3053\u306b\u3042\u308b\u7269\u3092\u7247\u4ed8\u3051\u306a\u3055\u3044\u3002\u90aa\u9b54\u3088\u3002",en:"114 Put this stuff away! It's in the way."},B.a,t.w)
B.fO=new A.a(2,{jp:"115 \u5b50\u4f9b\u305f\u3061\u304c\u6050\u7adc\u3054\u3063\u3053\u3092\u3057\u3066\u3044\u305f\u3089\u3001\u304a\u6bcd\u3055\u3093\u306b\u53f1\u3089\u308c\u305f\u3002",en:"115 When the kids made believe they were dinosaurs, they were scolded by their mother."},B.a,t.w)
B.kr=new A.a(2,{jp:"116 \u5f7c\u304c\u68da\u306b\u3076\u3064\u304b\u308a\u3001\u3068\u3066\u3082\u9ad8\u4fa1\u306a\u9676\u78c1\u5668\u304c\u843d\u3061\u3066\u7c89\u3005\u306b\u5272\u308c\u3066\u3057\u307e\u3063\u305f\u3002",en:"116 After he bumped into the shelf, the priceless china fell and shattered into fragments."},B.a,t.w)
B.h9=new A.a(2,{jp:"117 \u300c\u3046\u3061\u306e\u5b50\u305f\u3061\u3092\u3061\u3087\u3063\u3068\u898b\u3066\u3066\u3082\u3089\u3048\u308b\uff1f\u30b1\u30f3\u3092\u8fce\u3048\u306b\u884c\u304b\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u306e\uff61\u300d\u300c\u3044\u3044\u3088\uff61\u300d",en:'117 "Can you keep an eye on my kids for a while? I need to pick up Ken. No problem."'},B.a,t.w)
B.ht=new A.a(2,{jp:"118 \u96a3\u306e\u5bb6\u306e\u4eba\u304c\u5ead\u3092\u3081\u3061\u3083\u304f\u3061\u3083\u306b\u3055\u308c\u305f\u3068\u3001\u79c1\u305f\u3061\u306b\u304c\u307f\u304c\u307f\u8aac\u6559\u3057\u305f\u3002",en:"118 Our neighbor told us off for making a mess in his yard."},B.a,t.w)
B.ia=new A.a(2,{jp:"119 \u30c9\u30ea\u30fc\u306f\u3042\u3089\u3086\u308b\u9762\u3067\u304a\u59c9\u3055\u3093\u306b\u305d\u3063\u304f\u308a\u3060\u3002\u4e8c\u4eba\u3092\u898b\u5206\u3051\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3088\u3002",en:"119 Dolly resembles her big sister in every way. You can't tell them apart."},B.a,t.w)
B.eQ=new A.a(2,{jp:"120 \u6168\u3057\u3066\u3001\u53cc\u5b50\u306b\u306f\u4f3c\u305f\u3068\u3053\u308d\u304c\u591a\u3044\u3002",en:"120 As a rule, twins have a lot in common."},B.a,t.w)
B.i1=new A.a(2,{jp:"121 \u76bf\u6d17\u3044\u3068\u304b\u6d17\u6fef\u3068\u304b\u3001\u305d\u3046\u3044\u3046\u3053\u3068\u306b\u306f\u3082\u3046\u3046\u3093\u3056\u308a\uff01",en:"121 I'm tired of doing the dishes, doing the laundry, and so on!"},B.a,t.w)
B.by=new A.a(2,{jp:"122 \u6642\u9593\u304c\u3042\u3044\u305f\u3068\u304d\u306e\u4e00\u756a\u306e\u697d\u3057\u307f\u306f\u6d5c\u8fba\u306e\u6563\u6b69\u3067\u3059\u3002\u6c17\u6301\u3061\u3044\u3044\u3067\u3059\u3088\u3002",en:"122 My favorite pastime is strolling along the shore. It's pleasant."},B.a,t.w)
B.ja=new A.a(2,{jp:"123 \u300c\u79c1\u3001\u3082\u3046\u304f\u305f\u304f\u305f\u3002\u65e5\u9670\u3067\u4f11\u61a9\u3057\u307e\u3057\u3087\u3046\uff61\u300d\u300c\u305d\u3046\u3060\u306d\uff61\u300d",en:'123 "I\'m exhausted! Let\'s take a break in the shade." "Why not?"'},B.a,t.w)
B.d0=new A.a(2,{jp:"124 \u300c\u30dc\u30d6\u3001\u3053\u306e\u81ea\u52d5\u8ca9\u58f2\u6a5f\u3001\u6545\u969c\u3057\u3066\u308b\u308f\uff61\u300d\u300c\u4f55\u3060\u3063\u3066\uff01\u5589\u304c\u4e7e\u3044\u3066\u6b7b\u306b\u305d\u3046\u3060\u3088\uff01\u300d",en:'124 "Bob, this vending machine is out of order." "Oh no! I\'m dying of thirst!"'},B.a,t.w)
B.dH=new A.a(2,{jp:"125 \u5f7c\u306f\u7a7a\u8179\u3068\u75b2\u52b4\u3067\u6c17\u3092\u5931\u3063\u305f\u304c\u3001\u3057\u3070\u3089\u304f\u3057\u3066\u610f\u8b58\u3092\u53d6\u308a\u623b\u3057\u305f\u3002",en:"125 He fainted with hunger and fatigue, but came to after a while."},B.a,t.w)
B.kQ=new A.a(12,{"114":B.eq,"115":B.fO,"116":B.kr,"117":B.h9,"118":B.ht,"119":B.ia,"120":B.eQ,"121":B.i1,"122":B.by,"123":B.ja,"124":B.d0,"125":B.dH},B.aa,t.j)
B.Y=A.f(s(["46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62"]),t.s)
B.ec=new A.a(2,{jp:"46 \u5f7c\u3089\u306b\u306f\u3001\u3051\u304c\u306b\u5bfe\u3059\u308b\u88dc\u511f\u3092\u53d7\u3051\u308b\u6a29\u5229\u304c\u3042\u308b\u3002",en:"46 They are entitled to be compensated for their injuries."},B.a,t.w)
B.f_=new A.a(2,{jp:"47 \u30a4\u30f3\u30d5\u30eb\u30a8\u30f3\u30b6\u306e\u6d41\u884c\u3067\u3001\u73fe\u5728\u307e\u3067\u306b200\u4eba\u3082\u306e\u4eba\u304c\u4ea1\u304f\u306a\u3063\u3066\u3044\u308b\u3002",en:"47 So far, no less than 200 people have died of the flu epidemic."},B.a,t.w)
B.i6=new A.a(2,{jp:"48 \u305d\u308c\u3089\u306e\u9320\u5264\u306e\u52b9\u679c\u306f\u5f37\u70c8\u3060\u304c\u6301\u7d9a\u6027\u306f\u306a\u3044\u3002",en:"48 The effect of those pills is intense but brief."},B.a,t.w)
B.hx=new A.a(2,{jp:"49 \u5f7c\u306f\u722a\u3092\u565b\u3080\u7656\u304c\u3042\u308b\u3002\u3042\u308c\u306b\u306f\u672c\u5f53\u306b\u305e\u3063\u3068\u3059\u308b\u3088\u3002",en:"49 He has a habit of biting his nails. It's absolutely disgusting."},B.a,t.w)
B.bo=new A.a(2,{jp:"50 \u3046\u3061\u306e\u606f\u5b50\u3092\u62b1\u3053\u3046\u3068\u3057\u3066\u304b\u304c\u3093\u3060\u3068\u304d\u306b\u3001\u304a\u3070\u3042\u3061\u3083\u3093\u306f\u8170\u3092\u75db\u3081\u305f\u3002",en:"50 My grandma strained her back when she bent down to hug my son."},B.a,t.w)
B.hX=new A.a(2,{jp:"51 \u80a9\u304c\u51dd\u308b\u306a\u3089\u3001\u85ac\u8349\u6cbb\u7642\u3092\u8a66\u3057\u3066\u3054\u3089\u3093\u3088\u3002",en:"51 If you have a stiff neck, try an herbal remedy."},B.a,t.w)
B.f5=new A.a(2,{jp:"52 \u533b\u5b66\u306e\u98db\u8e8d\u7684\u767a\u5c55\u306f\u4eba\u985e\u5168\u4f53\u306b\u591a\u5927\u306a\u6069\u6075\u3092\u3082\u305f\u3089\u3057\u3066\u304d\u305f\u3002",en:"52 Medical breakthroughs have brought about great benefits for humanity as a whole."},B.a,t.w)
B.dm=new A.a(2,{jp:"53 \u30af\u30ed\u30fc\u30f3\u6280\u8853\u306f\u4eba\u9593\u306b\u306f\u3082\u3061\u308d\u3093\uff64\u725b\u306b\u3082\u5fdc\u7528\u3057\u3066\u306f\u3044\u3051\u306a\u3044\u3002 \u7d76\u5bfe\u306b\u3057\u3066\u306f\u306a\u3089\u306a\u3044\u3053\u3068\u3060\u3002",en:"53 We can't apply cloning techniques to cattle, let alone human beings. It's forbidden."},B.a,t.w)
B.cz=new A.a(2,{jp:"54 \u9be8\u306f\u54fa\u4e73\u52d5\u7269\u306b\u5206\u985e\u3055\u308c\u308b\u3002",en:"54 Whales are classified as mammals."},B.a,t.w)
B.iW=new A.a(2,{jp:"55 \u9032\u5316\u8ad6\u306f\u79c1\u306e\u60f3\u50cf\u529b\u306e\u7bc4\u56f2\u3092\u8d85\u3048\u3066\u3044\u308b\u3002",en:"55 The theory of evolution is beyond the reach of my imagination."},B.a,t.w)
B.ju=new A.a(2,{jp:"56 \u305d\u306e\u751f\u7269\u5b66\u8005\u306f\u81ea\u5206\u306e\u6b74\u53f2\u7684\u767a\u898b\u306b\u8a87\u308a\u3092\u3082\u3063\u3066\u304a\u308a\u3001\u305d\u306e\u3053\u3068\u3092\u81c6\u3059\u308b\u3053\u3068\u306a\u304f\u53e3\u306b\u51fa\u3059\u3002",en:"56 The biologist is proud of his historic discovery and doesn't mind boasting about it."},B.a,t.w)
B.j7=new A.a(2,{jp:"57 \u502b\u7406\u7684\u306a\u7406\u7531\u304b\u3089\u3001\u5f7c\u3089\u306f\u3044\u308f\u3086\u308b\u907a\u4f1d\u5b50\u6cbb\u7642\u306b\u53cd\u5bfe\u3057\u3066\u3044\u308b\u3002",en:"57 On ethical grounds, they are opposed to so-called gene therapy."},B.a,t.w)
B.b6=new A.a(2,{jp:"58 \u305d\u306e\u75c5\u6c17\u306e\u521d\u671f\u75c7\u72b6\u306f\u9ad8\u71b1\u3068\u5589\u306e\u75db\u307f\u3067\u3059\u3002",en:"58 The initial symptoms of the disease are fever and a sore throat."},B.a,t.w)
B.ba=new A.a(2,{jp:"59 \u8133\u306e\u69cb\u9020\u306f\u8907\u96d1\u3060\u3002",en:"59 The structure of the brain is complex."},B.a,t.w)
B.e8=new A.a(2,{jp:"60 \u75c5\u6c17\u306e\u305f\u3081\u306b\u5e74\u6b21\u4f1a\u8b70\u3092\u6b20\u5e2d\u3057\u305f\u4ee3\u8868\u8005\u3082\u3044\u305f\u3002",en:"60 Owing to illness, some representatives were absent from the annual conference."},B.a,t.w)
B.io=new A.a(2,{jp:"61 \u79c1\u306e\u5a18\u5a7f\u306f\u5f90\u3005\u306b\u80c3\u764c\u3092\u514b\u670d\u3057\u3064\u3064\u3042\u308a\u3001\u4eca\u306f\u660e\u308b\u304f\u5143\u6c17\u3060\u3002",en:"61 Little by little, my son-in-law is recovering from stomach cancer, and now he is in good spirits."},B.a,t.w)
B.hr=new A.a(2,{jp:"62 \u300c\u3053\u308c\u3063\u3066\u507d\u7269\u3060\u308d\u3046\uff1f\u300d \u300c\u4f55\u8a00\u3063\u3066\u308b\u306e\u3002\u672c\u7269\u306e\u9aa8\u84ee\u54c1\u3088\u3002\u300d \u300c\u307e\u3055\u304b\uff01\u300d",en:'62 "This is fake, isn\'t it?" "Hey, it\'s a genuine antique." "No way!"'},B.a,t.w)
B.aI=new A.a(17,{"46":B.ec,"47":B.f_,"48":B.i6,"49":B.hx,"50":B.bo,"51":B.hX,"52":B.f5,"53":B.dm,"54":B.cz,"55":B.iW,"56":B.ju,"57":B.j7,"58":B.b6,"59":B.ba,"60":B.e8,"61":B.io,"62":B.hr},B.Y,t.j)
B.E=A.f(s(["10","11","12","13","14","15","16","17","18","19","20","21"]),t.s)
B.b7=new A.a(2,{jp:"10 \u30dc\u30d6\u306f\u3072\u3069\u304f\u53d6\u308a\u4e71\u3057\u3066\u3044\u3066\u3001\u73fe\u5b9f\u3068\u865a\u69cb\u306e\u533a\u5225\u304c\u307b\u3068\u3093\u3069\u3067\u304d\u306a\u304b\u3063\u305f\u3002",en:"10 Bob was so beside himself that he could scarcely tell fact from fiction."},B.a,t.w)
B.bW=new A.a(2,{jp:"11 \u307e\u3082\u306a\u304f\u51fa\u7248\u306b\u306a\u308b\u5f7c\u306e\u5c0f\u8aac\u306f\u3001\u6563\u6587\u306b\u5f7c\u306e\u8a69\u306e\u624d\u80fd\u3092\u878d\u5408\u3055\u305b\u305f\u3082\u306e\u3060\u3002",en:"11 His new novel, which combines prose with his gift for poetry, is going to be published."},B.a,t.w)
B.ci=new A.a(2,{jp:"12 \u6765\u6708\u3001\u305d\u306e\u767e\u79d1\u4e8b\u5178\u306e\u6700\u65b0\u7248\u304c\u51fa\u308b\u3002",en:"12 An up-to-date edition of the encyclopedia will come out next month."},B.a,t.w)
B.kv=new A.a(2,{jp:"13 \u5c71\u7530\u3055\u3093\u304c\u305d\u306e\u5fc3\u3072\u304b\u308c\u308b\u304a\u3068\u304e\u8a71\u3092\u3084\u3055\u3057\u3044\u65e5\u672c\u8a9e\u306b\u7ffb\u8a33 \u3057\u305f\u3002",en:"13 Ms. Yamada translated the fascinating fairy tale into plain Japanese."},B.a,t.w)
B.jb=new A.a(2,{jp:"14 \u4ee5\u4e0b\u306e\u4e00\u8aac\u306f\u6709\u540d\u306a\u5bd3\u8a71\u304b\u3089\u306e\u5f15\u7528\u3067\u3059\u3002",en:"14 The following passage is quoted from a well-known fable."},B.a,t.w)
B.dN=new A.a(2,{jp:"15 \u300c\u73fe\u4ee3\u6587\u5b66\u306b\u8a73\u3057\u3044\u3067\u3059\u304c\uff1f\u300d \u300c\u307b\u3068\u3093\u3069\u77e5\u308a\u307e\u305b\u3093\u3002\u300d",en:'15 "Are you familiar with contemporary literature?" "I know next to nothing about it."'},B.a,t.w)
B.fo=new A.a(2,{jp:'16 \u6642\u3005\u3001"curve"\u3068"carve"\u3092\u6df7\u540c\u3057\u3066\u3057\u307e\u3046',en:'16 At times I confuse "curve" with "carve."'},B.a,t.w)
B.i2=new A.a(2,{jp:"17 \u6065\u305a\u304b\u3057\u304c\u3089\u306a\u3044\u3067\u3002\u3042\u306a\u305f\u306e\u767a\u97f3\u306f\u3060\u3044\u305f\u3044\u5408\u3063\u3066\u3044\u307e\u3059\u3002",en:"17 Don't be shy. Your pronunciation is more or less correct."},B.a,t.w)
B.aZ=new A.a(2,{jp:"18 \u3053\u306e\u8a18\u4e8b\u306b\u306f\u8a9e\u5f59\u3092\u672c\u6c17\u3067\u5897\u3084\u3057\u305f\u3044\u3068\u601d\u3046\u4eba\u3005\u306b\u5f79\u7acb\u3064\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",en:"18 This article contains tips for those who are eager to increase their vocabulary."},B.a,t.w)
B.bs=new A.a(2,{jp:"19 \u5f7c\u306e\u6700\u65b0\u306e\u4f5c\u54c1\u304c\u5e02\u5e81\u820e\u3067\u5c55\u793a\u3055\u308c\u3066\u3044\u308b\u306e\uff61\u8a00\u8449\u306b\u3067\u304d\u306a\u3044\u307b\u3069\u7d20\u6575\u3088\u3002",en:"19 His latest works are on display at the city hall. They are fabulous beyond description."},B.a,t.w)
B.b0=new A.a(2,{jp:"20 \u300c\u5c11\u3057\u8a70\u3081\u3066\u3044\u305f\u3060\u3051\u307e\u305b\u3093\u304b\uff1f\u300d\u300c\u3042\u3001\u3054\u3081\u3093\u306a\u3055\u3044\u3002\u3053\u3093\u306a\u306b \u5834\u6240\u3092\u53d6\u3063\u3066\u3044\u305f\u306a\u3093\u3066\u6c17\u4ed8\u304d\u307e\u305b\u3093\u3067\u3057\u305f\uff61\u300d",en:'20 "Could you move over a little?" "Oh, sorry. I didn\'t realize I was taking up so much space."'},B.a,t.w)
B.kE=new A.a(2,{jp:"21 \u300c\u3053\u306e\u4e0d\u683c\u597d\u306a\u7269\u4f53\u306f\u4f55\uff1f\u300d \u300c\u3053\u308c\u306f\u62bd\u8c61\u82b8\u8853\u306e\u4f5c\u54c1\u3060\u3088\uff01\u300d",en:'21 "What\'s this ugly object?" "This is a piece of abstract art!"'},B.a,t.w)
B.ap=new A.a(12,{"10":B.b7,"11":B.bW,"12":B.ci,"13":B.kv,"14":B.jb,"15":B.dN,"16":B.fo,"17":B.i2,"18":B.aZ,"19":B.bs,"20":B.b0,"21":B.kE},B.E,t.j)
B.U=A.f(s(["22","23","24","25","26","27","28","29","30","31","32","33","34","35"]),t.s)
B.fl=new A.a(2,{jp:"22 100\u30c9\u30eb\u8cb8\u3057\u3066\u304f\u308c\u3068\u30ea\u30c3\u30c1\u30fc\u306b\u983c\u3093\u3060\u3089\u3001\u5f7c\u306f\u300c\u4ffa\u3082\u304a\u91d1\u304c\u306a\u3044\u3093\u3060\u3088\uff01\u300d\u3068\u8a00\u3063\u3066\u9996\u3092\u6a2a\u306b\u632f\u3063\u305f\u3002",en:'22 I begged Richie to lend me a hundred bucks, but he shook his head, saying, "I\'m broke, too."'},B.a,t.w)
B.kB=new A.a(2,{jp:"23 \u300c\u5b89\u58f2\u308a\u3092\u3057\u3066\u3044\u308b\u3068\u3044\u3064\u3082\u885d\u52d5\u8cb7\u3044\u3057\u3066\u3057\u307e\u3046\u305f\u3061\u3067\u3059\u3002\u300d \u300c\u79c1\u3082\u3002\u300d",en:'23 "I\'m apt to buy things on impulse whenever something is on sale." "So am I."'},B.a,t.w)
B.jz=new A.a(2,{jp:"24 \u5b9f\u969b\u306e\u3068\u3053\u308d\u3001\u666e\u901a\u306e\u4eba\u3005\u306b\u306f\u305d\u3093\u306a\u8d05\u6ca2\u54c1\u3092\u8cfc\u5165\u3059\u308b\u4f59\u88d5\u306f\u306a\u3044\u3002",en:"24 As it is, ordinary people cannot afford to purchase such luxuries."},B.a,t.w)
B.bt=new A.a(2,{jp:"25 \u4e88\u671f\u3057\u3066\u3044\u305f\u3068\u304a\u308a\u3001\u5931\u696d\u7387\u306f3\u56db\u534a\u671f\u9023\u7d9a\u3067\u4e0a\u6607\u3057\u305f\u3002",en:"25 As we anticipated, the unemployment rate has risen three quarters in a row."},B.a,t.w)
B.fn=new A.a(2,{jp:"26 \u51fa\u8cbb\u3092\u5207\u308a\u8a70\u3081\u306a\u3044\u3068\u3002\u3060\u304b\u3089\u3001\u3053\u308c\u304b\u3089\u306f\u4f7f\u3063\u305f\u304a\u91d1\u306f\u4e00\u65e5\u5358\u4f4d\u3067\u8a18\u9332\u3057\u3066\u3044\u304f\u3064\u3082\u308a\u3060\u3002",en:"26 I have to cut down on my expenses, so from now on, I'm going to keep track of them on a daily basis."},B.a,t.w)
B.j4=new A.a(2,{jp:"27 \u3044\u305a\u308c\u306b\u305b\u3088\u3001\u7d44\u5408\u5074\u306f\u3042\u308b\u7a0b\u5ea6\u59a5\u5354\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044",en:"27 In any case, the union has to compromise to a certain extent."},B.a,t.w)
B.k2=new A.a(2,{jp:"28 \u6709\u80fd\u306a\u6574\u5099\u58eb\u306f\u5f15\u3063\u5f35\u308a\u3060\u3053\u3060\u304b\u3089\u3001\u306a\u304b\u306a\u304b\u306e\u8cc3\u91d1\u3092\u7a3c\u3052\u308b\u3002",en:"28 Competent mechanics are in great demand, so they earn decent wages."},B.a,t.w)
B.jT=new A.a(2,{jp:"29 \u5927\u7d71\u9818\u306f\u798f\u7949\u6539\u9769\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u5177\u4f53\u7684\u306a\u8a08\u753b\u3092\u767a\u8868\u3057\u305f\u3002",en:"29 The president announced a concrete plan to carry out welfare reform."},B.a,t.w)
B.fZ=new A.a(2,{jp:"30 \u5f7c\u306e\u653f\u7b56\u306f\u304d\u3063\u3068\u6697\u3044\u7d50\u679c\u3092\u62db\u304f\u3060\u308d\u3046\u3002\u5fb9\u5e95\u7684\u306a\u898b\u76f4\u3057\u304c\u5fc5\u8981\u3060\u3002",en:"30 His policy will no doubt lead to dismal consequences. It needs a thorough review."},B.a,t.w)
B.el=new A.a(2,{jp:"31 \u793e\u4f1a\u306e\u9ad8\u9f62\u5316\u304c\u907f\u3051\u3089\u308c\u306a\u3044\u3053\u3068\u306f\u8a00\u3046\u307e\u3067\u3082\u306a\u3044\u3002",en:"31 It goes without saying that the aging of society is inevitable."},B.a,t.w)
B.cg=new A.a(2,{jp:"32 \u3053\u306e\u8868\u3092\u3054\u89a7\u306b\u306a\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u5c11\u5e74\u975e\u884c\u304c\u6df1\u523b\u306a\u5272\u5408\u3067\u5897\u52a0\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002",en:"32 Please take a look at this chart. It indicates that juvenile delinquency is on the increase at an alarming rate."},B.a,t.w)
B.hV=new A.a(2,{jp:"33 \u591a\u304f\u306e\u5546\u696d\u5730\u533a\u3067\u306f\u3001\u6570\u5e74\u9593\u58f2\u308a\u306b\u51fa\u3055\u308c\u3066\u3044\u308b\u7a7a\u304d\u5730\u304c\u305f\u304f\u3055\u3093\u3042\u308b\u3002",en:"33 In many business districts, there are a lot of vacant lots which have been for sale for years."},B.a,t.w)
B.h5=new A.a(2,{jp:"34 \u5927\u90fd\u5e02\u306e\u4eba\u53e3\u5bc6\u5ea6\u304c\u5f90\u3005\u306b\u4f4e\u4e0b\u3057\u3066\u3044\u308b\u3002",en:"34 The population density in the metropolis is gradually decreasing."},B.a,t.w)
B.cT=new A.a(2,{jp:"35 \u307b\u307c\u9593\u9055\u3044\u306a\u304f\u3053\u306e\u5148\u6570\u5e74\u3001\u51fa\u751f\u7387\u306f\u6e1b\u5c11\u306e\u4e00\u9014\u3092\u305f\u3069\u308b\u3060\u308d\u3046\u3002",en:"35 In all likelihood, the birthrate will continue to decline steadily for years to come."},B.a,t.w)
B.aE=new A.a(14,{"22":B.fl,"23":B.kB,"24":B.jz,"25":B.bt,"26":B.fn,"27":B.j4,"28":B.k2,"29":B.jT,"30":B.fZ,"31":B.el,"32":B.cg,"33":B.hV,"34":B.h5,"35":B.cT},B.U,t.j)
B.R=A.f(s(["101","102","103","104","105","106","107","108","109","110","111","112","113"]),t.s)
B.aX=new A.a(2,{jp:"101 \u3046\u3061\u306e\u5149\u71b1\u8cbb\u304c\u305d\u3093\u306a\u984d\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3092\u77e5\u3063\u3066\u3073\u3063\u304f\u308a\u3057\u305f\u3002",en:"101 I was amazed to see that our utility bills came to so much"},B.a,t.w)
B.ha=new A.a(2,{jp:"102 \uff62\u6c34\u9053\u306e\u6813\u3092\u9589\u3081\u306a\u3055\u3044\uff01\uff63\u3068\u304a\u6bcd\u3055\u3093\u304c\u304b\u3093\u304b\u3093\u306b\u306a\u3063\u3066\u53eb\u3093\u3060\u3002",en:'102 "Turn the faucet off!" mom yelled in a rage.'},B.a,t.w)
B.fy=new A.a(2,{jp:"103 \u98df\u3079\u7269\u304c\u8150\u3089\u306a\u3044\u69d8\u306b\u3075\u305f\u3092\u3057\u3063\u304b\u308a\u9589\u3081\u306a\u3055\u3044\u3002",en:"103 Tighten the lid so the food doesn't go bad."},B.a,t.w)
B.i8=new A.a(2,{jp:"104 \uff62\u30cf\u30b5\u30df\u3092\u8cb8\u3057\u3066\u3082\u3089\u3048\u308b\uff1f\u300d\u300c\u3082\u3061\u308d\u3093\u3002\u306f\u3044\u3069\u3046\u305e\uff61\u300d",en:'104 "Can I borrow your scissors?" "Sure, here you are."'},B.a,t.w)
B.ck=new A.a(2,{jp:"105 \u91dd\u3068\u7cf8\u306e\u4ee3\u308f\u308a\u306b\u900f\u660e\u306a\u63a5\u7740\u5264\u3092\u4f7f\u3063\u3066\u3082\u7d50\u69cb\u3067\u3059\uff61",en:"105 You can substitute some transparent glue for a needle and thread."},B.a,t.w)
B.kf=new A.a(2,{jp:"106 \u3053\u306e\u7e54\u7269\u3092\u67d3\u3081\u305f\u3089\u7e2e\u3093\u3067\u3057\u307e\u3063\u305f\u3002",en:"106 I dyed this fabric and it shrank"},B.a,t.w)
B.jF=new A.a(2,{jp:"107 \u3053\u306e\u9769\u306e\u30b8\u30e3\u30b1\u30c3\u30c8\u306f\u51e6\u5206\u3059\u308b\u3088\u3002\u4e21\u8098\u306e\u90e8\u5206\u304c\u3059\u308a\u6e1b\u3063\u3066\u7a74\u304c\u3042\u3044\u3066\u3044\u308b\u304b\u3089\u3002",en:"107 I'm getting rid of this leather jacket because it's worn out at the elbows."},B.a,t.w)
B.eb=new A.a(2,{jp:"108 \u305d\u306e\u6df7\u305c\u5408\u308f\u305b\u305f\u3082\u306e\u306b\u5c0f\u9ea6\u7c89\u3092\u52a0\u3048\u3066\u3001\u3068\u308d\u307f\u304c\u3064\u304f\u307e\u3067\u304b\u304d\u6df7\u305c\u307e\u3057\u3087\u3046\u3002",en:"108 Add some flour to the mixture and stir it until it becomes thick."},B.a,t.w)
B.jy=new A.a(2,{jp:"109 \u300c\u6b8b\u308a\u7269\u3092\u3069\u3046\u3057\u3088\u3046\uff1f\u300d \u300c\u3068\u308a\u3042\u3048\u305a\u51b7\u8535\u5eab\u306b\u5165\u308c\u3066\u304a\u3044\u3066\u3002 \u5f8c\u3067\u96fb\u5b50\u30ec\u30f3\u30b8\u3067\u6e29\u3081\u76f4\u3059\u3088\u3002\u300d",en:'109 "What should we do with the leftovers?" "Keep them in the fridge for now. I\'ll heat them in the microwave later."'},B.a,t.w)
B.i4=new A.a(2,{jp:"110 \u65b0\u3057\u3044\u30d1\u30bd\u30b3\u30f3\u306b\u5168\u984d\u3064\u304e\u8fbc\u3080\u3053\u3068\u3082\u3067\u304d\u305f\u304c\u3001\u8003\u3048\u76f4\u3057\u3066\u3001\u307e\u3055\u304b\u306e\u6642\u306e\u305f\u3081\u306b\u591a\u5c11\u306f\u6b8b\u3057\u3066\u304a\u304f\u3053\u3068\u306b\u3057\u305f\u3002",en:"110 I could have laid out all that money on a new PC, but on second thought I decided to put some aside for a rainy day."},B.a,t.w)
B.ei=new A.a(2,{jp:"111 \u643a\u5e2f\u96fb\u8a71\u306f\u3061\u3087\u3063\u3068\u3057\u305f\u5fc5\u9700\u54c1\u306b\u306a\u3063\u305f\u3053\u3068\u3060\u3057\u3001\u305d\u308c\u306a\u3057\u3067\u306f\u3084\u3063\u3066\u3044\u3051\u306a\u3044\u3002",en:"111 A cell phone has become something of a necessity, and I can't do without one."},B.a,t.w)
B.en=new A.a(2,{jp:"112 \u30a4\u30b9\u306b\u3086\u3063\u305f\u308a\u5ea7\u3063\u3066\u304f\u3064\u308d\u3044\u3060\u9014\u7aef\u3001\u59bb\u306b\u96d1\u7528\u3092\u983c\u307e\u308c\u305f\u3002",en:"112 No sooner had I sat back and relaxed than my wife asked me to do the chores."},B.a,t.w)
B.kx=new A.a(2,{jp:"113 \u5f7c\u5973\u306f\u8d64\u3061\u3083\u3093\u3092\u5bdd\u304b\u305b\u3066\u81ea\u5206\u3082\u96a3\u306b\u6a2a\u306b\u306a\u3063\u305f\u3002",en:"113 She laid the baby down and lay down beside him."},B.a,t.w)
B.aB=new A.a(13,{"101":B.aX,"102":B.ha,"103":B.fy,"104":B.i8,"105":B.ck,"106":B.kf,"107":B.jF,"108":B.eb,"109":B.jy,"110":B.i4,"111":B.ei,"112":B.en,"113":B.kx},B.R,t.j)
B.Z=A.f(s(["76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91"]),t.s)
B.kG=new A.a(2,{jp:"76 \u8b70\u9577\u306f\u79c1\u306e\u8a71\u3092\u906e\u3063\u3066\u3001\u300c\u8a71\u3057\u5408\u3044\u306f\u3053\u3053\u307e\u3067\u306b\u3057\u3066\u6c7a\u3092\u63a1\u308a\u307e\u3057\u3087\u3046\u3002\u300d\u3068\u8a00\u3063\u305f\u3002",en:'76 The chairman cut me off, saying, "Time to wind things up. Let\'s take a vote."'},B.a,t.w)
B.hG=new A.a(2,{jp:"77 \u6211\u3005\u306f\u4f1a\u8b70\u3067\u7387\u76f4\u306a\u610f\u898b\u3092\u4ea4\u308f\u3057\u305f\u304c\u3001\u3053\u306e\u4ef6\u306b\u95a2\u3057\u3066\u306f\u307e\u3060\u5168\u4f53\u306e\u610f\u898b\u304c\u307e\u3068\u307e\u3089\u306a\u3044\u3002",en:"77 We exchanged frank opinions in the meeting, but consensus is yet to be reached regarding this matter."},B.a,t.w)
B.bD=new A.a(2,{jp:"78 \u300c\u3042\u306a\u305f\u306f\u5f7c\u3068\u540c\u3058\u610f\u898b\uff1f \u305d\u308c\u3068\u3082\u9055\u3046\u306e\uff1f\u300d\u300c\u5f7c\u306e\u307b\u3046\u3092\u652f\u6301\u3059\u308b\u3088\u3002\u300d",en:'78 "Do you agree or disagree with him?" "I\'m on his side."'},B.a,t.w)
B.dC=new A.a(2,{jp:"79 \u53b3\u5bc6\u306b\u8a00\u3048\u3070\u3001\u5f7c\u306e\u898b\u89e3\u306f\u79c1\u306e\u3082\u306e\u3068\u306f\u3044\u304f\u3089\u304b\u7570\u306a\u308b\u3002",en:"79 Strictly speaking, his view differs somewhat from mine."},B.a,t.w)
B.jP=new A.a(2,{jp:"80 \u3082\u3046\u4e00\u5ea6\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u3044\u305f\u3060\u3051\u307e\u305b\u3093\u304b\uff1f \u304a\u8a71\u306e\u610f\u56f3\u304c\u308f\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002",en:"80 Could you go over it again? I couldn't make out what you were getting at."},B.a,t.w)
B.cv=new A.a(2,{jp:"81 \u50d5\u306e\u6848\u3092\u652f\u6301\u3057\u3066\u304f\u308c\u308b\u4eba\u306f\u6700\u521d\u306f\u8ab0\u3082\u3044\u306a\u304b\u3063\u305f\u3051\u308c\u3069\u3001\u6700\u5f8c\u306b\u306f\u307f\u3093\u306a\u3092\u8aac\u5f97\u3057\u3066\u8cdb\u540c\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u304c\u3067\u304d\u305f\u3002",en:"81 No one backed me up at first, but eventually I talked everyone into going along with my plan."},B.a,t.w)
B.ft=new A.a(2,{jp:"82 \u541b\u306e\u4e0d\u5c48\u306e\u52aa\u529b\u3001\u52c7\u6c17\u3001\u305d\u3057\u3066\u77e5\u6075\u306b\u306f\u611f\u5fc3\u3059\u308b\u3088\u3002\u300d\u300c\u304a\u4e16\u8f9e\u3067\u3082\u3046\u308c\u3057\u3044\u308f\uff01\u300d",en:'82 "I admire your perseverance, courage and wisdom." "You flatter me!"'},B.a,t.w)
B.ca=new A.a(2,{jp:"83 \u3069\u3046\u3059\u308b\u304b\u3092\u6c7a\u3081\u308b\u3068\u304d\u3001\u50d5\u306f\u8ad6\u7406\u3067\u306f\u306a\u304f\u672c\u80fd\u3092\u5f53\u3066\u306b\u3059\u308b\u3002",en:"83 In making a decision, I rely not on logic but on instinct."},B.a,t.w)
B.c8=new A.a(2,{jp:"84 \u5f7c\u306f\u72ec\u5275\u7684\u304b\u3064\u8ce2\u660e\u306a\u89e3\u6c7a\u7b56\u3092\u8003\u3048\u51fa\u3057\u3001\u76f4\u3061\u306b\u305d\u308c\u3092\u5b9f\u884c\u306b\u79fb\u3057\u305f\u3002",en:"84 He came up with an ingenious, sensible solution and immediately put it into practice."},B.a,t.w)
B.fQ=new A.a(2,{jp:"85 \u5ba2\u89b3\u7684\u306b\u898b\u308c\u3070\u3001\u524d\u8005\u306f\u5f8c\u8005\u3088\u308a\u3082\u52a3\u3063\u3066\u3044\u308b\u3002",en:"85 From an objective viewpoint, the former is inferior to the latter."},B.a,t.w)
B.db=new A.a(2,{jp:"86 \u3042\u306a\u305f\u306e\u8003\u3048\u306f\u7406\u8ad6\u4e0a\u306f\u3059\u3070\u3089\u3057\u305d\u3046\u3060\u3051\u308c\u3069\u3082\u3001\u5b9f\u969b\u306b\u306f\u6a5f\u80fd\u3057\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002",en:"86 Your idea sounds marvelous in theory, yet I don't think it will work in practice."},B.a,t.w)
B.fU=new A.a(2,{jp:"87 \u79c1\u305f\u3061\u306f\u5f7c\u304c\u76f8\u624b\u306b\u52dd\u3064\u3053\u3068\u3092\u671f\u5f85\u3057\u305f\u304c\u3001\u5f7c\u306f\u305d\u306e\u671f\u5f85\u306b\u5fdc\u3048\u3089\u308c\u306a\u304b\u3063\u305f\u3002",en:"87 We expected him to defeat his opponent, but he failed to live up to our expectations."},B.a,t.w)
B.kq=new A.a(2,{jp:"88 \u76ae\u8089\u306a\u3053\u3068\u3060\u304c\u3001\u5f7c\u3089\u306e\u6700\u5584\u306e\u52aa\u529b\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u4efb\u52d9\u306f\u5b8c\u5168\u306a\u5931\u6557\u306b\u7d42\u308f\u3063\u305f\u3002",en:"88 Ironically, despite their best endeavors, their mission resulted in complete failure."},B.a,t.w)
B.aP=new A.a(2,{jp:"89 \u5b9f\u5730\u7d4c\u9a13\u306e\u4e0d\u8db3\u306f\u5f7c\u5973\u306e\u5929\u8ce6\u306e\u624d\u80fd\u3067\u88dc\u3048\u308b\u3002",en:"89 Her genius makes up for her lack of firsthand experience."},B.a,t.w)
B.h6=new A.a(2,{jp:"90 \u5f7c\u5973\u306b\u306f\u3069\u3093\u306a\u969c\u5bb3\u3092\u3082\u514b\u670d\u3067\u304d\u308b\u3059\u3070\u3089\u3057\u3044\u80fd\u529b\u304c\u3042\u308b\u3002",en:"90 She possesses a great capacity for overcoming any obstacle."},B.a,t.w)
B.cA=new A.a(2,{jp:"91 \u3042\u306a\u305f\u306e\u5f37\u56fa\u306a\u652f\u63f4\u304c\u306a\u304b\u3063\u305f\u3089\u3001\u305d\u306e\u53d6\u5f15\u306f\u6210\u7acb\u3057\u306a\u304b\u3063\u305f\u3067\u3057\u3087\u3046\u3002\u611f\u8b1d\u3057\u3066\u3044\u307e\u3059\u3002",en:"91 Without your solid support, the deal would have fallen through. I'm grateful to you."},B.a,t.w)
B.aJ=new A.a(16,{"76":B.kG,"77":B.hG,"78":B.bD,"79":B.dC,"80":B.jP,"81":B.cv,"82":B.ft,"83":B.ca,"84":B.c8,"85":B.fQ,"86":B.db,"87":B.fU,"88":B.kq,"89":B.aP,"90":B.h6,"91":B.cA},B.Z,t.j)
B.J=A.f(s(["36","37","38","39","40","41","42","43","44","45"]),t.s)
B.aN=new A.a(2,{jp:"36 \u305d\u306e\u767a\u96fb\u6240\u306f\u9060\u304f\u96e2\u308c\u305f\u90e1\u306b\u96fb\u6c17\u3092\u4f9b\u7d66\u3057\u3066\u3044\u308b\u3002",en:"36 The power plant supplies the remote county with electricity."},B.a,t.w)
B.bd=new A.a(2,{jp:"37 \u8a31\u53ef\u306a\u304f\u3053\u306e\u88c5\u7f6e\u3092\u64cd\u4f5c\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",en:"37 You are not allowed to operate this device without permission."},B.a,t.w)
B.id=new A.a(2,{jp:"38 \u5b9f\u306f\u3001\u4f4f\u6c11\u305f\u3061\u306f\u653e\u5c04\u80fd\u306b\u3055\u3089\u3055\u305b\u3066\u304d\u305f\u3002",en:"38 In fact, the inhabitants have been exposed to radiation."},B.a,t.w)
B.hS=new A.a(2,{jp:"39 \u6838\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u6f5c\u5728\u7684\u306a\u5371\u967a\u6027\u306f\uff64\u3044\u304f\u3089\u5f37\u8abf\u3057\u3066\u3082\u3057\u904e\u304e\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u306a\u3044\u3002",en:"39 One cannot emphasize too much the potential danger of nuclear energy."},B.a,t.w)
B.hu=new A.a(2,{jp:"40 \u904e\u53bb\u6570\u5e74\u9593\u305d\u306e\u554f\u984c\u3092\u898b\u904e\u3054\u3057\u3066\u3044\u305f\u5831\u9053\u6a5f\u95a2\u304c\uff64\u4eca\u3067\u306f\u3069\u3061\u3089\u304b\u3068\u8a00\u3048\u3070\u305d\u306e\u3053\u3068\u3092\u91cd\u8996\u3057\u904e\u304e\u3066\u3044\u308b\u3002",en:"40 For years the press overlooked the problem. But now, if anything, they are making too much of it."},B.a,t.w)
B.jd=new A.a(2,{jp:"41 \u7a40\u7269\u3092\u683d\u57f9\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u305d\u306e\u8fb2\u696d\u7d4c\u55b6\u8005\u306f\u98df\u6599\u96d1\u8ca8\u5e97\u3082\u7d4c\u55b6\u3057\u3066\u3044\u308b\u3002",en:"41 As well as cultivating grain, the farmer runs a grocery store."},B.a,t.w)
B.d6=new A.a(2,{jp:"42 \u305d\u306e\u7814\u7a76\u6240\u306f1960\u5e74\u4ee3\u5f8c\u534a\u306b\u8a2d\u7acb\u3055\u308c\u305f\u3002",en:"42 The research institute was established in the late 1960s."},B.a,t.w)
B.c_=new A.a(2,{jp:"43 \u30b9\u30bf\u30fc\u3055\u3093\u306b\u76f4\u63a5\u76f8\u8ac7\u3057\u305f\u3089\u3069\u3046\u3067\u3059\u304b\uff1f \u3053\u306e\u8fba\u308a\u3067\u306f\u6587\u53e5\u306a\u3057\u3067\u3044\u3061\u3070\u3093\u6709\u540d\u306a\u5f01\u8b77\u58eb\u3067\u3059\u3088\u3002",en:"43 Why don't you consult Starr in person? He's by far the most prominent attorney around here."},B.a,t.w)
B.iq=new A.a(2,{jp:"44 \u5ff5\u306e\u305f\u3081\u30e1\u30e2\u3057\u3066\u304a\u304d\u307e\u3059\u3002\u8a18\u61b6\u529b\u304c\u60aa\u3044\u304b\u3089\u3002",en:"44 I'll write it down just in case, because I have a bad memory."},B.a,t.w)
B.fD=new A.a(2,{jp:"45 \u5f01\u8b77\u58eb\u306f\u4f9d\u983c\u4eba\u306b\u3001\u4fdd\u967a\u4f1a\u793e\u306b\u5bfe\u3057\u3066\u6cd5\u7684\u624b\u6bb5\u3092\u53d6\u308b\u4e8b\u3092\u52e7\u3081\u305f\u3002",en:"45 The lawyer recommended that his client take legal action against the insurance company."},B.a,t.w)
B.at=new A.a(10,{"36":B.aN,"37":B.bd,"38":B.id,"39":B.hS,"40":B.hu,"41":B.jd,"42":B.d6,"43":B.c_,"44":B.iq,"45":B.fD},B.J,t.j)
B.ag=A.f(s(["63","64","65","66","67","68","69","70","71","72","73","74","75"]),t.s)
B.dE=new A.a(2,{jp:"63 \u300c\u307b\u304b\u306b\u3054\u6ce8\u6587\u306f?\u300d\u300c\u3053\u3061\u3089\u3067\u304a\u53ec\u3057\u4e0a\u304c\u308a\u3067\u3059\u304b\uff1f\u300d\u300c\u6301\u3061\u5e30\u308a\u307e\u3059\u3002\u300d",en:'63 "Anything else?" "That\'s it." "For here or to go?" "To go."'},B.a,t.w)
B.ew=new A.a(2,{jp:"64 \u300c\u3053\u306e\u6577\u7269\u306f\u304a\u3044\u304f\u3089\u3067\u3059\u304b?\u300d\u300c\u7a0e\u8fbc\u307f\u3067100\u30c9\u30eb\u3067\u3059\u300d\u300c\u3058\u3083\u3042\u3001\u3053\u308c\u306b\u3057\u307e\u3059\u3002\u300d",en:'64 "How much is this rug? "$100 including tax." "OK, I\'ll take it."'},B.a,t.w)
B.kn=new A.a(2,{jp:"65 \u305d\u306e\u30d1\u30f3\u30c4\u306f\u3042\u306a\u305f\u306b\u306f\u4f3c\u5408\u308f\u306a\u3044\u3068\u601d\u3046\u3002\u3053\u3063\u3061\u3092\u306f\u3044\u3066\u307f\u3066\u3002\u4eca\u3059\u3054\u304f\u6d41\u884c\u3063\u3066\u3044\u308b\u306e\u3088\u3002",en:"65 I don't think those pants look good on you. Try these on. They're really in now!"},B.a,t.w)
B.bw=new A.a(2,{jp:"66 \u5f7c\u306f\u300c\u304a\u3064\u308a\u306f\u3044\u3044\u3067\u3059\u300d\u3068\u8a00\u3063\u3066\u3001\u6025\u3044\u3067\u30bf\u30af\u30b7\u30fc\u3092\u964d\u308a\u305f\u3002",en:'66 He got out of the cab in haste, saying, "Keep the change."'},B.a,t.w)
B.cS=new A.a(2,{jp:"67 \u5f53\u5e97\u306e\u304a\u5ba2\u69d8\u306f\uff64\u308f\u305a\u304b\u306a\u8ffd\u52a0\u6599\u91d1\u3067\u914d\u9054\u30b5\u30fc\u30d3\u30b9\u3092\u3054\u5229\u7528\u3067\u304d\u307e\u3059\u3002",en:"67 Delivery service is available to our customers for a slight extra charge."},B.a,t.w)
B.d3=new A.a(2,{jp:"68 \u300c\u3053\u308c\u306f\u50d5\u306e\u304a\u3054\u308a\u3002\u300d \u300c\u3060\u3081\u3088\u3002\u5916\u98df\u306e\u3068\u304d\u306f\u3044\u3064\u3082\u304a\u3054\u3063\u3066\u3082\u3089\u3063\u3066\u3044\u308b\u3057\u3002\u300d \u300c\u3046\u30fc\u3093\u3001\u308f\u304b\u3063\u305f\u3002\u3058\u3083\u3042\u5272\u308a\u52d8\u306b\u3057\u3088\u3046\u3002\u300d",en:'68 "It\'s on me." "No. You treat me every time we eat out." "Well, okay. Let\'s split the check then."'},B.a,t.w)
B.ih=new A.a(2,{jp:"69 \u30b7\u30e7\u30c3\u30d4\u30f3\u30b0\u30bb\u30f3\u30bf\u30fc\u3092\u3076\u3089\u3076\u3089\u3057\u3066\u3044\u305f\u3089\u3001\u5076\u7136\u30b1\u30f3\u306b\u4f1a\u3063\u305f\u3002",en:"69 While I was hanging out at the mall, I ran into Ken."},B.a,t.w)
B.fY=new A.a(2,{jp:"70 \u73fe\u91d1\u304c\u8db3\u308a\u306a\u304b\u3063\u305f\u306e\u3067\u3001\u5148\u9031\u53e3\u5ea7\u306b\u5165\u308c\u305f1000\u30c9\u30eb\u3092\u5f15\u304d\u51fa\u3057\u305f\u3002",en:"70 I was short of cash, so I withdrew the $100 that I had deposited in my bank account last week."},B.a,t.w)
B.e0=new A.a(2,{jp:"71 \u5f7c\u5973\u306f\u5e30\u5b85\u9014\u4e2d\u306b\u30cf\u30f3\u30c9\u30d0\u30c3\u30b0\u3092\u76d7\u307e\u308c\u305f\u3002",en:"71 On her way home she was robbed of her purse."},B.a,t.w)
B.cO=new A.a(2,{jp:"72 \u300c\u305d\u308c\u306f\u5909\u3060\u308f\u3002\u3069\u3046\u3057\u3066\u305d\u3093\u306a\u3053\u3068\u304c\u8d77\u304d\u305f\u306e\u304b\u6559\u3048\u3066\u3002\u300d \u300c\u5f8c\u3067\u8aac\u660e\u3059\u308b\u3088\u3002\u300d",en:'72 "That\'s odd! Tell me how it happened." "I\'ll explain it to you later."'},B.a,t.w)
B.cc=new A.a(2,{jp:"73 \u79c1\u304c\u7d04\u675f\u3092\u7834\u3063\u305f\u306e\u3067\u3001\u7f70\u3068\u3057\u3066\u4e21\u89aa\u306b\u9580\u9650\u3092\uff16\u6642\u306b\u3055\u308c\u305f\u3002",en:"73 My parents gave me a 6 pm curfew as a punishment because I broke my promise."},B.a,t.w)
B.d1=new A.a(2,{jp:"74 \u8afa\u306b\u3042\u308b\u901a\u308a\u3001\u300c\u5618\u3082\u65b9\u4fbf \uff08\u76ee\u7684\u304c\u624b\u6bb5\u3092\u6b63\u5f53\u5316\u3059\u308b\uff09\u300d\u3002",en:'74 As the proverb goes, "The end justifies the means."'},B.a,t.w)
B.bF=new A.a(2,{jp:"75 \u8ab0\u3082\u983c\u308c\u308b\u4eba\u304c\u3044\u306a\u3044\u3068\u308f\u304b\u3063\u305f\u306e\u3060\u304b\u3089\u3001\u81ea\u5206\u306e\u529b\u3067\u3084\u3063\u3066\u3044\u304f\u3057\u304b\u306a\u3044\u3002",en:"75 Now that I've found that there's no one to turn to, I'll have to stand on my own two feet."},B.a,t.w)
B.kW=new A.a(13,{"63":B.dE,"64":B.ew,"65":B.kn,"66":B.bw,"67":B.cS,"68":B.d3,"69":B.ih,"70":B.fY,"71":B.e0,"72":B.cO,"73":B.cc,"74":B.d1,"75":B.bF},B.ag,t.j)
B.W=A.f(s(["126","127","128","129","130","131","132","133","134","135","136"]),t.s)
B.eI=new A.a(2,{jp:"126 \u305f\u3063\u305f\u4e00\u3064\u306e\u5bb6\u5177\u3092\u9664\u3051\u3070\u3001\u8b1b\u5802\u306f\u304c\u3089\u3093\u3069\u3046\u3060\u3063\u305f\u3002",en:"126 The auditorium was empty except for a single piece of furniture."},B.a,t.w)
B.ea=new A.a(2,{jp:"127 \u5bb6\u8cc3\u304c\u5b89\u3051\u308c\u3070\u3001\u3069\u3093\u306a\u30de\u30f3\u30b7\u30e7\u30f3\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002\u3053\u3060\u308f\u308a\u306f\u3042\u308a\u307e\u305b\u3093\u304b\u3089\u3002",en:"127 Any apartment will do as long as the rent is low. I'm not particular about it."},B.a,t.w)
B.d_=new A.a(2,{jp:"128 \u5f7c\u306e60\u6b73\u306e\u3044\u3068\u3053\u304c\u6e56\u7554\u306e\u4e0d\u52d5\u7523\u3092\u76f8\u7d9a\u3057\u305f\u3002",en:"128 His sixty-year-old cousin inherited a piece of real estate by a lake."},B.a,t.w)
B.e4=new A.a(2,{jp:"129 \u96d1\u8ac7\u306f\u3053\u306e\u8fba\u306b\u3057\u3066\u3001\u672c\u984c\u306b\u5165\u308a\u307e\u3057\u3087\u3046\u3002",en:"129 So much for small talk. Let's get down to business."},B.a,t.w)
B.ch=new A.a(2,{jp:"130 \u30eb\u30fc\u30b7\u30fc\u306f\u3001\u5951\u7d04\u66f8\u306b\u30b5\u30a4\u30f3\u3055\u305b\u3088\u3046\u3068\u3059\u308b\u5f37\u5f15\u306a\u8ca9\u58f2\u54e1\u306b\u8179\u3092\u7acb\u3066\u305f\u3002",en:"130 Lucy resented the aggressive salesman trying to make her sign the contract."},B.a,t.w)
B.hU=new A.a(2,{jp:"131 \u79c1\u305f\u3061\u306e\u682a\u5f0f\u6295\u8cc7\u3078\u306e\u610f\u6b32\u3092\u305d\u3050\u3088\u3046\u306a\u8981\u56e0\u304c\u304b\u306a\u308a\u3042\u308b\u3002",en:"131 There are a number of factors discouraging us from investing in stocks."},B.a,t.w)
B.hs=new A.a(2,{jp:"132 \u65e5\u672c\u306f\u69d8\u3005\u306a\u539f\u6599\u3092\u8f38\u5165\u3057\u3001\u5de5\u696d\u88fd\u54c1\u3092\u8f38\u51fa\u3057\u3066\u3044\u308b\u3002",en:"132 Japan imports various raw materials and exports manufactured goods."},B.a,t.w)
B.fN=new A.a(2,{jp:"133 \u7d4c\u6e08\u767a\u5c55\u306e\u904e\u7a0b\u3067\u3001\u65e5\u672c\u306f\u305d\u306e\u4f1d\u7d71\u7684\u4fa1\u5024\u89b3\u3092\u6368\u3066\u3066\u304d\u305f\u3002",en:"133 In the course of its economic development, Japan has abandoned its traditional values."},B.a,t.w)
B.ee=new A.a(2,{jp:"134 \u4e16\u754c\u306f\u304b\u3064\u3066\u306a\u3044\u5371\u6a5f\u306b\u76f4\u9762\u3057\u3066\u3044\u308b\u3002",en:"134 The world is faced with an unprecedented crisis."},B.a,t.w)
B.hJ=new A.a(2,{jp:"135 \u8981\u3059\u308b\u306b\u3001\u305d\u306e\u898f\u5236\u306e\u76ee\u7684\u306f\u56fd\u5185\u7523\u696d\u306e\u4fdd\u8b77\u3060\u3002",en:"135 In short, the purpose of the regulations is to protect domestic industries."},B.a,t.w)
B.bR=new A.a(2,{jp:"136 \u4e16\u754c\u3067\u306e\u7af6\u4e89\u529b\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u65e5\u672c\u306f\u5927\u5e45\u306a\u898f\u5236\u7de9\u548c\u306b\u771f\u5263\u306b\u7740\u624b\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002",en:"136 In order to keep up its competitiveness in the world, Japan must undertake sweeping deregulation in earnest."},B.a,t.w)
B.aG=new A.a(11,{"126":B.eI,"127":B.ea,"128":B.d_,"129":B.e4,"130":B.ch,"131":B.hU,"132":B.hs,"133":B.fN,"134":B.ee,"135":B.hJ,"136":B.bR},B.W,t.j)
B.a3=A.f(s(["92","93","94","95","96","97","98","99","100"]),t.s)
B.bA=new A.a(2,{jp:"92 \u6a5f\u5185\u3078\u306e\u53ef\u71c3\u7269\u306e\u6301\u3061\u8fbc\u307f\u306f\u7981\u6b62\u3055\u308c\u3066\u3044\u307e\u3059\u3002",en:"92 Bringing flammable items into the cabin is prohibited."},B.a,t.w)
B.dq=new A.a(2,{jp:"93 \u3061\u3087\u3063\u3068\u3057\u305f\u4e8b\u6545\u304c\u539f\u56e0\u3067\u3001\u79c1\u305f\u3061\u306e\u30a6\u30a3\u30fc\u30f3\u884c\u304d\u306e\u4fbf\u306b\u9045\u308c\u304c\u51fa\u305f\u3002",en:"93 Our flight to Vienna was delayed on account of a minor accident."},B.a,t.w)
B.fH=new A.a(2,{jp:"94 \u98db\u884c\u6a5f\u304c\u7206\u767a\u3057\u3066\u6d77\u306b\u589c\u843d\u3057\u3001\u4e57\u3063\u3066\u3044\u305f\u5168\u54e1\u304c\u6b7b\u4ea1\u3057\u305f\u3002",en:"94 The plane blew up and plunged into the ocean, killing all the people on board."},B.a,t.w)
B.ix=new A.a(2,{jp:"95 \u5f7c\u3089\u306f\u663c\u591c\u4f11\u3080\u3053\u3068\u306a\u304f\u3001\u305d\u306e\u589c\u843d\u4e8b\u6545\u306e\u539f\u56e0\u3092\u8abf\u67fb\u3057\u3066\u3044\u308b\u3002",en:"95 They are working around the clock looking into the cause of the crash."},B.a,t.w)
B.e2=new A.a(2,{jp:"96 \u4e0d\u5e78\u306b\u3082\u3001\u305d\u306e\u5927\u60e8\u4e8b\u3067\u751f\u304d\u6b8b\u3063\u305f\u4e57\u5ba2\u306f\u307b\u3068\u3093\u3069\u3044\u306a\u304b\u3063\u305f\u3002",en:"96 Unfortunately, few passengers survived the catastrophe."},B.a,t.w)
B.ib=new A.a(2,{jp:"97 \u822a\u7a7a\u8a55\u8ad6\u5bb6\u304c\u7d71\u8a08\u3092\u8a73\u7d30\u306b\u5206\u6790\u3057\u305f\u3002",en:"97 The aviation expert analyzed the statistics in detail."},B.a,t.w)
B.eC=new A.a(2,{jp:"98 \u5168\u5f93\u696d\u54e1\u3092\u4ee3\u8868\u3044\u305f\u3057\u307e\u3057\u3066\u3001\u72a0\u7272\u8005\u306e\u65b9\u3005\u306b\u5bfe\u3057\u3066\u304a\u6094\u3084\u307f\u3092\u7533\u3057\u4e0a\u3052\u305f\u3044\u3068\u5b58\u3058\u307e\u3059\u3002",en:"98 On behalf of all the staff, I'd like to express our sympathy for the victims."},B.a,t.w)
B.kI=new A.a(2,{jp:"99 \u3042\u308b\u610f\u5473\u3001\u305d\u306e\u60e8\u4e8b\u306e\u8cac\u4efb\u306f\u5f7c\u306b\u3042\u308b\u3002",en:"99 In a sense, he is to blame for the disaster."},B.a,t.w)
B.dI=new A.a(2,{jp:"100 \u8eca\u4e21\u306f\u6b20\u9665\u304c\u306a\u3044\u304b3\u30b1\u6708\u306b1\u5ea6\u691c\u67fb\u3055\u308c\u308b\u3002",en:"100 The vehicles are inspected for defects every three months."},B.a,t.w)
B.kK=new A.a(9,{"92":B.bA,"93":B.dq,"94":B.fH,"95":B.ix,"96":B.e2,"97":B.ib,"98":B.eC,"99":B.kI,"100":B.dI},B.a3,t.j)
B.af=A.f(s(["156","157","158","159","160","161","162","163","164","165"]),t.s)
B.fg=new A.a(2,{jp:"156 \u8ab2\u984c\u306f\u96fb\u5b50\u30e1\u30fc\u30eb\u30676\u670810\u65e5\u306e\u5348\u5f8c5\u6642\u307e\u3067\u306b\u63d0\u51fa\u3057\u3066\u4e0b\u3055\u3044\u3002",en:"156 Please hand in your assignment via e-mail no later than 5:00 PM on June 10."},B.a,t.w)
B.aT=new A.a(2,{jp:"157 \u30b8\u30e7\u30fc\u304c\u52e4\u52c9\u306a\u3093\u3066\u3068\u3093\u3067\u3082\u306a\u3044\u3002\u3060\u304b\u3089\u307e\u305f\u6570\u5b66\u3092\u843d\u3068\u3057\u305f\u3093\u3060\u3002",en:"157 Joe is anything but diligent. That's why he flunked math again."},B.a,t.w)
B.it=new A.a(2,{jp:"158 \u5f7c\u306e\u8ad6\u6587\u306f\u610f\u5473\u4e0d\u660e\u3002\u7b2c\u4e00\u3001\u4e3b\u984c\u304c\u66d6\u6627\u3060\u3002",en:"158 His thesis doesn't make sense. To begin with, its theme is obscure."},B.a,t.w)
B.iy=new A.a(2,{jp:"159 \u5f7c\u306e\u5c0f\u8ad6\u6587\u306f\u7c21\u6f54\u3067\u8981\u9818\u3092\u5f97\u3066\u3044\u305f\u3002",en:"159 His essay was concise and to the point."},B.a,t.w)
B.j2=new A.a(2,{jp:"160 \u300c\u3053\u306e\u8907\u96d1\u306a\u554f\u984c\u3092\u3069\u3046\u51e6\u7406\u3059\u308b\u3064\u3082\u308a\uff1f\uff63 \uff62\u4efb\u305b\u3068\u3051\u3063\u3066\u3002\u671d\u98ef\u524d\u3055\u3002\u300d",en:'160 "How are you going to deal with this complicated problem?" "Leave it to me! It\'s a piece of cake."'},B.a,t.w)
B.jM=new A.a(2,{jp:"161 \u300c\u30cb\u30c3\u30af\u3001\u3053\u308c\u3092\u63d0\u51fa\u3059\u308b\u524d\u306b\u3056\u3063\u3068\u76ee\u3092\u901a\u3057\u3066\u6b32\u3057\u3044\u306e\u3002\u300d \u300c\u3054\u3081\u3093\u3001\u4eca\u3001\u624b\u304c\u96e2\u305b\u306a\u3044\u3093\u3060\u3002\u300d",en:'161 "Nick, I want you to look this over before I turn it in." "Sorry, but I have my hands full right now."'},B.a,t.w)
B.jE=new A.a(2,{jp:"162 \u300c\u7de0\u3081\u5207\u308a\u306b\u9593\u306b\u5408\u308f\u306a\u304b\u3063\u305f\u3089\u3069\u3046\u306a\u308b\uff1f\u300d \u300c\u304d\u3063\u3068\u5f7c\u306b\u6012\u3089\u308c\u308b\u305e\uff01\u300d",en:'162 "What if I don\'t meet the deadline?" "I bet he\'ll get mad at you!"'},B.a,t.w)
B.hc=new A.a(2,{jp:"163 \u5b57\u304c\u6c5a\u3044\u3053\u3068\u3092\u5225\u306b\u3059\u308c\u3070\u3001\u541b\u306e\u8981\u7d04\u306f\u5b8c\u74a7\u3060\u3002",en:"163 Your summary leaves nothing to be desired apart from the terrible handwriting."},B.a,t.w)
B.ef=new A.a(2,{jp:"164 \u305d\u306e\u524d\u63d0\u304c\u59a5\u5f53\u304b\u3069\u3046\u304b\u3088\u304f\u8003\u3048\u308b\u3079\u304d\u3060\u3002",en:"164 You ought to think over whether the premise is valid or not."},B.a,t.w)
B.hv=new A.a(2,{jp:"165 \u3068\u308a\u308f\u3051\u3001\u79d1\u5b66\u7528\u8a9e\u306b\u306f\u53b3\u5bc6\u306a\u5b9a\u7fa9\u304c\u8981\u6c42\u3055\u308c\u308b\u3002",en:"165 Above all, scientific terms call for precise definitions"},B.a,t.w)
B.kV=new A.a(10,{"156":B.fg,"157":B.aT,"158":B.it,"159":B.iy,"160":B.j2,"161":B.jM,"162":B.jE,"163":B.hc,"164":B.ef,"165":B.hv},B.af,t.j)
B.F=A.f(s(["166","167","168","169","170","171","172","173","174","175","176"]),t.s)
B.aS=new A.a(2,{jp:"166 \u4f55\u3088\u308a\u3082\u307e\u305a\u3001\u516c\u5f0f\u3092\u6697\u8a18\u3057\u306a\u3055\u3044\u3002",en:"166 First of all, learn the formula by heart."},B.a,t.w)
B.bv=new A.a(2,{jp:"167 \u4f53\u7a4d\u3092\u8a08\u7b97\u3059\u308b\u5834\u5408\u306f\u3001\u7e26\u3068\u6a2a\u3068\u6df1\u3055\u3092\u639b\u3051\u307e\u3059\u3002",en:"167 To calculate the volume, multiply the length by the width by the depth."},B.a,t.w)
B.jR=new A.a(2,{jp:"168 \u6a3d\u306e\u5e95\u306b\u3068\u3066\u3082\u5c0f\u3055\u306a\u3072\u3073\u304c\u3042\u308b\u306e\u3092\u898b\u3064\u3051\u305f\u3002",en:"168 Tiny cracks were found in the bottom of the barrel."},B.a,t.w)
B.ez=new A.a(2,{jp:"169 \u3053\u306e\u7ae0\u3067\u306f\u5e7e\u4f55\u5b66\u306e\u6982\u5ff5\u306b\u7126\u70b9\u3092\u3042\u3066\u307e\u3059\u3002",en:"169 This chapter will focus on the concepts of geometry."},B.a,t.w)
B.hA=new A.a(2,{jp:"170 \u30d5\u30a3\u30eb\u306f\u5b9f\u7528\u7684\u306a\u6280\u80fd\u3088\u308a\u3082\u5b66\u554f\u7684\u306a\u30c6\u30fc\u30de\u306e\u307b\u3046\u306b\u8208\u5473\u304c\u3042\u308b\u3002",en:"170 Phil is much more interested in academic subjects than in practical skills."},B.a,t.w)
B.cK=new A.a(2,{jp:"171 \uff62\u3053\u306e\u9855\u5fae\u93e1\u3001\u3069\u3053\u304b\u304a\u304b\u3057\u304f\u306a\u3063\u3061\u3083\u3063\u305f\u3002\u4fee\u7406\u3057\u3066\u3082\u3089\u308f\u306a\u3044\u3068\u3002\u300d \u300c\u898b\u305b\u3066\u3002\u50d5\u304c\u76f4\u305b\u308b\u304b\u3082\u3002\u300d",en:'171 "Something\'s gone wrong with this microscope. I need to have it repaired." "Let me see it. Maybe I can fix it."'},B.a,t.w)
B.he=new A.a(2,{jp:"172 \u300c\u30a4\u30f3\u30b9\u30c8\u30a5\u30eb\u30e1\u30f3\u30c8\u3063\u3066\u4f55\u3067\u3059\u304b\uff1f\u300d\u300c\u4f8b\u3048\u3070\u3001\u6e29\u5ea6\u8a08\u3084\u6c17\u5727\u8a08\u3068\u304b\u306e\u8a08\u5668\u304c\u305d\u3046\u3067\u3059\u3002\u300d",en:'172 "What is \'an instrument?" "For instance, a gauge, such as a thermometer or a barometer."'},B.a,t.w)
B.f4=new A.a(2,{jp:"173 \u305d\u306e\u5fae\u7c92\u5b50\u306f\u8089\u773c\u3067\u3082\u304b\u308d\u3046\u3058\u3066\u898b\u3048\u308b\u3002",en:"173 The minute particles are barely visible to the naked eye."},B.a,t.w)
B.f1=new A.a(2,{jp:"174 \u7b4b\u8089\u7d44\u7e54\u306f\u304a\u3073\u305f\u3060\u3057\u3044\u6570\u306e\u7d30\u80de\u304b\u3089\u6210\u3063\u3066\u3044\u308b\u3002",en:"174 Muscle tissue consists of a vast number of cells."},B.a,t.w)
B.eK=new A.a(2,{jp:"175 \u3053\u306e\u7269\u8cea\u306f\u4e3b\u306b\u6c34\u7d20\u3068\u9178\u7d20\u3067\u3067\u304d\u3066\u3044\u308b\u3002",en:"175 This substance is mostly composed of hydrogen and oxygen."},B.a,t.w)
B.ie=new A.a(2,{jp:"176 \u6b63\u78ba\u306a\u6c17\u6e29\u306f\u30bb\u6c0f22.68\u5ea6\u3067\u3059\u3002",en:"176 The exact temperature is 22.68 degrees Celsius."},B.a,t.w)
B.aq=new A.a(11,{"166":B.aS,"167":B.bv,"168":B.jR,"169":B.ez,"170":B.hA,"171":B.cK,"172":B.he,"173":B.f4,"174":B.f1,"175":B.eK,"176":B.ie},B.F,t.j)
B.ae=A.f(s(["137","138","139","140","141","142","143","144","145"]),t.s)
B.is=new A.a(2,{jp:"137 \u5371\u6a5f\u306b\u3055\u3089\u3055\u308c\u3001\u308f\u3089\u306b\u3082\u3059\u304c\u308b\u601d\u3044\u3067\u3044\u308b\u4eba\u3005\u3092\u3001\u79c1\u305f\u3061\u306f\u653e\u3063\u3066\u304a\u3051\u306a\u3044\u3002",en:"137 We cannot turn our backs on desperate people who are at risk."},B.a,t.w)
B.cL=new A.a(2,{jp:"138 \u8b70\u4f1a\u306f\u767a\u5c55\u9014\u4e0a\u56fd\u306b\u8ca1\u653f\u63f4\u52a9\u3092\u884c\u3046\u3053\u3068\u3092\u6c7a\u8b70\u3057\u305f\u3002",en:"138 The parliament decided to provide developing countries with financial aid."},B.a,t.w)
B.cD=new A.a(2,{jp:"139 \u82f1\u56fd\u306e\u541b\u4e3b\u5236\u306f\u5ec3\u6b62\u3055\u308c\u308b\u3079\u304d\u3060\u3068\u8a00\u3046\u4eba\u3082\u3044\u308b\u3051\u3069\u3001\u3042\u306a\u305f\u306f\u3069\u3046\u601d\u3046\uff1f",en:'139 Some say the British monarchy should be abolished. What do you think?"'},B.a,t.w)
B.fB=new A.a(2,{jp:"140 \u5f7c\u3089\u306f\u653b\u6483\u3092\u9003\u308c\u308b\u5b89\u5168\u306a\u5834\u6240\u3092\u63a2\u3057\u305f\u304c\u3001\u96a0\u308c\u308b\u5834\u6240\u306f\u3069\u3053\u306b\u3082\u306a\u304b\u3063\u305f\u3002",en:"140 They sought shelter from the attack but found no place to hide."},B.a,t.w)
B.dU=new A.a(2,{jp:"141 \u8ecd\u7e2e\u306b\u304a\u3044\u3066\u3001\u4e21\u56fd\u304c\u5927\u304d\u306a\u9032\u5c55\u3092\u9042\u3052\u308b\u898b\u8fbc\u307f\u306f\u307b\u3068\u3093\u3069\u306a\u3044\u3002",en:"141 There's little prospect that the two countries will make significant progress in disarmament."},B.a,t.w)
B.im=new A.a(2,{jp:"142 \u4ea4\u6e09\u306f\u9032\u884c\u4e2d\u3060\u3002\u305d\u308d\u305d\u308d\u6b63\u5ff5\u5834\u3092\u8fce\u3048\u308b\u3060\u308d\u3046\u3002",en:"142 The negotiations are under way. Before long, they will enter a crucial phase."},B.a,t.w)
B.iQ=new A.a(2,{jp:"143 \u5974\u96b7\u305f\u3061\u306f\u81ea\u5206\u305f\u3061\u306e\u904b\u547d\u3092\u5909\u3048\u305f\u3044\u3068\u5207\u671b\u3057\u3066\u3044\u305f\u3002",en:"143 The slaves were anxious to alter their destinies."},B.a,t.w)
B.er=new A.a(2,{jp:"144 \u8cb4\u65cf\u305f\u3061\u306f\u601d\u3046\u304c\u307e\u307e\u306b\u7279\u6a29\u3092\u4e71\u7528\u3057\u305f\u3002",en:"144 The aristocrats abused their privileges to their hearts' content."},B.a,t.w)
B.aY=new A.a(2,{jp:"145 \u7d50\u5c40\u3001\u9769\u547d\u305d\u308c\u81ea\u4f53\u306f\u4f55\u306e\u6210\u679c\u3082\u3082\u305f\u3089\u3055\u306a\u304b\u3063\u305f\u3002",en:"145 The revolution in itself, bore no fruit, after all."},B.a,t.w)
B.kU=new A.a(9,{"137":B.is,"138":B.cL,"139":B.cD,"140":B.fB,"141":B.dU,"142":B.im,"143":B.iQ,"144":B.er,"145":B.aY},B.ae,t.j)
B.I=A.f(s(["177","178","179","180","181","182","183","184","185"]),t.s)
B.dK=new A.a(2,{jp:"177 \u300c\u30ca\u30aa\u30df\u306f\u81ea\u5206\u306e\u5b8c\u74a7\u306a\u30b9\u30bf\u30a4\u30eb\u3092\u3072\u3051\u3089\u304b\u3057\u305f\u304c\u308b\u3002\u79c1\u3082\u5f7c\u5973\u307f\u305f\u3044\u306b\u75e9\u305b\u3066\u3044\u308c\u3070\u306a\u3042\u3002\u5f7c\u5973\u304c\u7fa8\u307e\u3057\u3044\u308f\u3002\uff63 \uff62\u30c0\u30a4\u30a8\u30c3\u30c8\u3059\u308c\u3070\u3002\u300d",en:'177 "Naomi likes to show off her perfect figure. I wish I were thin like her. I envy her." "You could go on a diet."'},B.a,t.w)
B.fv=new A.a(2,{jp:"178 \u30ca\u30aa\u30df\u306b\u4e00\u76ee\u60da\u308c\u3057\u305f\u3002\uff13\u30b1\u6708\u5f8c\u3001\u601d\u3044\u5207\u3063\u3066\u5f7c\u5973\u306b\u30d7\u30ed\u30dd\u30fc\u30ba\u3057\u3066\u307f\u305f\u304c\u632f\u3089\u308c\u3066\u3057\u307e\u3063\u305f\u3002",en:"178 I fell in love with Naomi at first sight. Three months later, I took a chance and proposed to her, but she turned me down."},B.a,t.w)
B.hB=new A.a(2,{jp:"179 \u5076\u7136\u305d\u306e\u4eba\u306b\u51fa\u4f1a\u3063\u305f\u306e\u3002\u512a\u3057\u304f\u3066\u982d\u3082\u3044\u3044\u306e\u3002\u304a\u307e\u3051\u306b\u72ec\u8eab\uff01",en:"179 I met the man by chance. He's gentle and smart. What's more, he's single!"},B.a,t.w)
B.j6=new A.a(2,{jp:"180 \u5f7c\u306e\u7525\u306f\u3001\u8b19\u865a\u3067\u601d\u3044\u3084\u308a\u306e\u3042\u308b\u4eba\u306b\u306a\u308b\u3088\u3046\u306b\u80b2\u3066\u3089\u308c\u305f\u3002",en:"180 His nephew was brought up to be modest and considerate."},B.a,t.w)
B.bO=new A.a(2,{jp:"181 \u79c1\u306e\u4e21\u89aa\u306b\u30dc\u30d6\u3092\u7d39\u4ecb\u3057\u305f\u3089\u3001\u4e8c\u4eba\u3068\u3082\u3059\u3050\u306b\u5f7c\u306e\u3053\u3068\u304c\u597d\u304d\u306b\u306a\u3063\u305f\u3002",en:"181 I introduced Bob to my folks, and they took to him at once."},B.a,t.w)
B.ik=new A.a(2,{jp:"182 \u4eba\u306f\u5916\u898b\u3067\u306f\u306a\u304f\u3001\u3080\u3057\u308d\u4e2d\u8eab\u3067\u5224\u65ad\u3055\u308c\u308b\u3079\u304d\u3060\u3002",en:"182 People should be judged not so much by how they look as by who they are."},B.a,t.w)
B.eD=new A.a(2,{jp:"183 \u300c\u5927\u5207\u306a\u306e\u306f\u80a9\u66f8\u304d\u306a\u3093\u304b\u3058\u3083\u306a\u3044\u3002\u7d76\u5bfe\u305d\u3046\u3060\uff01\u300d\u3068\u3001\u30dc\u30d6\u306f\u8a9e\u6c17\u3092\u5f37\u3081\u3066\u8a00\u3063\u305f\u3002",en:"183 \"It's not your title that counts. That's for sure!\" exclaimed Bob."},B.a,t.w)
B.be=new A.a(2,{jp:"184 \u81ea\u5206\u306e\u529b\u3067\u6210\u529f\u3092\u3064\u304b\u3093\u3060\u4eba\u304c\u8a00\u3063\u305f\u3088\u3046\u306b\u3001\u300c\u5148\u898b\u306e\u660e\u306e\u3042\u308b\u4eba\u306f\u6700\u5f8c\u306b\u306f\u6210\u529f\u3059\u308b\u300d\u3002",en:'184 As a self-made man put it, "A man of vision will make good in the end."'},B.a,t.w)
B.bZ=new A.a(2,{jp:"185 \u82e5\u3055\u304c\u6c38\u9060\u306e\u3082\u306e\u3067\u306f\u306a\u3044\u3053\u3068\u3092\u5fd8\u308c\u3066\u306f\u3044\u3051\u306a\u3044\u3002",en:"185 Keep in mind that youth is not eternal"},B.a,t.w)
B.as=new A.a(9,{"177":B.dK,"178":B.fv,"179":B.hB,"180":B.j6,"181":B.bO,"182":B.ik,"183":B.eD,"184":B.be,"185":B.bZ},B.I,t.j)
B.X=A.f(s(["146","147","148","149","150","151","152","153","154","155"]),t.s)
B.cn=new A.a(2,{jp:"146 \u30dc\u30d6\u304c\u300c\u305d\u308c\u306b\u306f\u53cd\u5bfe\u3060\uff01\u300d\u3068\u8a00\u3063\u3066\u4f1a\u8a71\u306b\u5272\u308a\u8fbc\u3093\u3067\u304d\u305f\u3002\u3051\u308c\u3069\u3082\u3001\u8ab0\u3082\u8033\u3092\u8cb8\u3055\u306a\u304b\u3063\u305f\u3002",en:'146 Bob cut in on our conversation, saying, "I\'m against it!" But everybody ignored him.'},B.a,t.w)
B.di=new A.a(2,{jp:"147 \u79c1\u305f\u3061\u306f\u5f7c\u306e\u9806\u756a\u3092\u308f\u3056\u3068\u98db\u3070\u3057\u305f\u3002",en:"147 We skipped his turn on purpose."},B.a,t.w)
B.eR=new A.a(2,{jp:"148 \u8ab0\u304b\u304c\u3044\u3058\u3081\u3089\u308c\u3066\u3044\u308b\u306e\u3092\u898b\u305f\u306e\u306b\u3001\u5f7c\u306f\u898b\u306a\u3044\u3075\u308a\u3092\u3057\u305f\u3002",en:"148 He saw someone being bullied, but he turned a blind eye."},B.a,t.w)
B.bb=new A.a(2,{jp:"149 \u30cb\u30c3\u30af\u3068\u50d5\u304c\u30c6\u30b9\u30c8\u3067\u30ab\u30f3\u30cb\u30f3\u30b0\u3057\u305f\u3068\u304d\u3001\u50d5\u306f\u505c\u5b66\u51e6\u5206\u3002\u30cb\u30c3\u30af\u306e\u65b9\u306f\u307e\u3093\u307e\u3068\u9003\u308c\u305f\u3002",en:"149 When Nick and I cheated on an exam, I was suspended from school. As for Nick, he got away with it."},B.a,t.w)
B.eA=new A.a(2,{jp:"150 \u5f7c\u3089\u306f\u30ea\u30c1\u30e3\u30fc\u30c9\u306e\u5bcc\u3068\u5730\u4f4d\u306b\u5bfe\u3059\u308b\u5ac9\u59ac\u304b\u3089\u3001\u5f7c\u306b\u6575\u610f\u3092\u62b1\u3044\u3066\u3044\u308b\u3002",en:"150 They are hostile to Richard because they are jealous of his wealth and status."},B.a,t.w)
B.eZ=new A.a(2,{jp:"151 \u5f7c\u306e\u3053\u3068\u306f\u5927\u5acc\u3044\u3002\u307e\u308b\u3067\u81ea\u5206\u304c\u5927\u7269\u3067\u3042\u308b\u304b\u306e\u3088\u3046\u306b\u632f\u308b\u821e\u3046\u306e\u3088\u3002",en:"151 I hate him! He behaves as if he were somebody."},B.a,t.w)
B.c0=new A.a(2,{jp:"152 \u50d5\u305f\u3061\u304c\u307b\u3081\u8a00\u8449\u3092\u304b\u3051\u305f\u306e\u306b\u3001\u5f7c\u306f\u9854\u3092\u3057\u304b\u3081\u3066\u305d\u3063\u307d\u3092\u5411\u3044\u305f\u3002\u5931\u793c\u3060\uff01",en:"152 In spite of our compliments, he frowned and turned away. He was so rude!"},B.a,t.w)
B.cF=new A.a(2,{jp:"153 \u305d\u306e\u83ab\u5927\u306a\u8ca1\u7523\u306f\u81ea\u5206\u304c\u81ea\u7531\u306b\u3067\u304d\u308b\u3082\u306e\u3060\u3001\u3068\u5f7c\u306f\u4e3b\u5f35\u3057\u305f\u3002",en:"153 He claimed that the enormous property was at his disposal."},B.a,t.w)
B.jn=new A.a(2,{jp:"154 \u9811\u56fa\u306b\u306a\u308c\u3070\u306a\u308b\u307b\u3069\u5b64\u7acb\u3059\u308b\u3088\u3002",en:"154 The more stubborn you are, the more isolated you become."},B.a,t.w)
B.aW=new A.a(2,{jp:"155 \u300c\u9060\u56de\u3057\u306a\u8a00\u3044\u65b9\u306f\u3084\u3081\u3066\u304f\u308c\uff01\u50d5\u306b\u3069\u3046\u3057\u308d\u3063\u3066\u8a00\u3046\u3093\u3060\uff1f\u300d \u300c\u614c\u3066\u305a\u306b\u5f85\u3064\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002\u6642\u304c\u7d4c\u3066\u3070\u308f\u304b\u308a\u307e\u3059\u3002\u300d",en:'155 "Don\'t beat around the bush! What am I supposed to do?" "Just wait and see. Time will tell."'},B.a,t.w)
B.aH=new A.a(10,{"146":B.cn,"147":B.di,"148":B.eR,"149":B.bb,"150":B.eA,"151":B.eZ,"152":B.c0,"153":B.cF,"154":B.jn,"155":B.aW},B.X,t.j)
B.S=A.f(s(["256","257","258","259","260","261","262","263","264","265","266","267","268","269","270","271","272"]),t.s)
B.bu=new A.a(2,{jp:"256 \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u8fd1\u4ee3\u5316\u306f\u897f\u6b27\u5316\u3068\u540c\u4e00\u306e\u3053\u3068\u3068\u898b\u306a\u3055\u308c\u308b\u3002",en:"256 For the most part, modernization is identified with westernization."},B.a,t.w)
B.jl=new A.a(2,{jp:"257 \u90fd\u4f1a\u306e\u6587\u5316\u306f\u591a\u304f\u306e\u4eba\u3005\u306e\u76ee\u306b\u306f\u9b45\u529b\u7684\u306b\u6620\u308b\u3002\u3068\u308a\u308f\u3051\u3001\u82e5\u8005\u306b\u3068\u3063\u3066\u306f\u3002",en:"257 Urban culture appears to be attractive to many people, in particular, to younger people."},B.a,t.w)
B.cH=new A.a(2,{jp:"258 AI\u306f\u4eba\u5de5\u77e5\u80fd\u306e\u7565\u3067\u3059\u3002",en:'258 "AI stands for "artificial intelligence."'},B.a,t.w)
B.kk=new A.a(2,{jp:"259 \u5bb6\u5ead\u7528\u306e\u96fb\u5316\u88fd\u54c1\u306f\u65e5\u306b\u65e5\u306b\u4fbf\u5229\u306b\u306a\u3063\u3066\u3044\u308b\u3002",en:"259 Household appliances are becoming more convenient day by day."},B.a,t.w)
B.iR=new A.a(2,{jp:"260 \u79c1\u306e\u53ce\u5165\u306f\u56db\u4eba\u5bb6\u65cf\u3092\u990a\u3046\u306b\u306f\u5341\u5206\u3067\u306a\u3044\u3051\u308c\u3069\u3082\u3001\u305d\u308c\u3067\u4f55\u3068\u304b\u3084\u3063\u3066\u3044\u304f\u3057\u304b\u306a\u3044\u3002",en:"260 My income is not adequate to provide for my family of four, but we have to make the best of it."},B.a,t.w)
B.bB=new A.a(2,{jp:"261 \u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306e\u4eba\u6c17\u306f\u5185\u5bb9\u6b21\u7b2c\u3002",en:"261 The popularity of a website depends on its content."},B.a,t.w)
B.iN=new A.a(2,{jp:"262 \u9045\u308c\u305a\u306b\u3064\u3044\u3066\u3044\u304b\u306a\u304f\u3061\u3083\u3002\u4e00\u5ea6\u9045\u308c\u3092\u3068\u3063\u305f\u3089\u8ffd\u3044\u4ed8\u304f\u306e\u306f\u5927\u5909\u3060\u3088\u3002",en:"262 You've got to keep up with it. Once you fall behind, it's hard to catch up."},B.a,t.w)
B.cd=new A.a(2,{jp:"263 \u6280\u8853\u306f\u6025\u901f\u306b\u9032\u6b69\u3059\u308b\u306e\u3067\u3001\u9045\u308c\u3092\u53d6\u3089\u305a\u306b\u3064\u3044\u3066\u3044\u304f\u306e\u306f\u5927\u5909\u3060\u3002",en:"263 As technology rapidly advances, it's tough to keep pace with it."},B.a,t.w)
B.fK=new A.a(2,{jp:"264 \u307e\u3059\u307e\u3059\u591a\u304f\u306e\u4eba\u3005\u304c\u3001\u305d\u306e\u5a92\u4f53\u306e\u53cc\u65b9\u5411\u7684\u306a\u6027\u8cea\u3092\u5229\u7528\u3057\u3088\u3046\u3068\u8e8d\u8d77\u306b\u306a\u3063\u3066\u3044\u308b\u3002",en:"264 More and more people are rushing to make use of the interactive nature of the medium."},B.a,t.w)
B.dM=new A.a(2,{jp:"265 \u9769\u65b0\u7684\u306a\u3082\u306e\u3092\u751f\u307f\u51fa\u3059\u3053\u3068\u3001\u305d\u308c\u306f\u5909\u308f\u3063\u305f\u73fe\u8c61\u3092\u898b\u9003\u3055\u306a\u3044\u80fd\u529b\u3068\u4f55\u3089\u304b\u306e\u95a2\u4fc2\u304c\u3042\u308b\u3002",en:"265 Innovation has something to do with the ability to notice unusual phenomena."},B.a,t.w)
B.bX=new A.a(2,{jp:"266 \u591a\u304f\u306e\u4ed6\u793e\u304c\u6211\u3005\u306e\u512a\u308c\u305f\u65b9\u6cd5\u3092\u771f\u4f3c\u3057\u3066\u3044\u308b\u3002",en:"266 A bunch of other companies are imitating our excellent methods."},B.a,t.w)
B.dX=new A.a(2,{jp:"267 \u304b\u3064\u3066\u306e\u8352\u6dbc\u3068\u3057\u305f\u76c6\u5730\u304c\u3001\u7e41\u6804\u3092\u8b33\u6b4c\u3059\u308b\u30cf\u30a4\u30c6\u30af\u30d3\u30b8\u30cd\u30b9\u306e\u4e2d\u5fc3\u5730\u306b\u5909\u307c\u3046\u3057\u305f\u3002",en:"267 The once desolate valley was transformed into a thriving hub of hi-tech business."},B.a,t.w)
B.hh=new A.a(2,{jp:"268 \u307e\u3060\u6539\u5584\u306e\u4f59\u5730\u306f\u305f\u304f\u3055\u3093\u3042\u308b\u3051\u308c\u3069\u3082\u3001\u5f7c\u306e\u767a\u660e\u54c1\u306f\u3042\u3089\u3086\u308b\u70b9\u3067\u5f93\u6765\u306e\u6a5f\u5668\u3088\u308a\u3082\u512a\u308c\u3066\u3044\u308b\u3002",en:"268 Although there's still plenty of room for improvement, his invention is superior to conventional equipment in every respect."},B.a,t.w)
B.bY=new A.a(2,{jp:"269 \u305d\u306e\u4f1a\u793e\u306e\u5f37\u3055\u306f\u3001\u4ed6\u793e\u306b\u306a\u3044\u672a\u6765\u5fd7\u5411\u306e\u6226\u7565\u306b\u3088\u3063\u3066\u751f\u307f\u51fa\u3055\u308c\u3066\u3044\u308b\u3002",en:"269 The strength of the firm is attributed to its unique and future-oriented strategies."},B.a,t.w)
B.dx=new A.a(2,{jp:"270 \u30bd\u30cb\u30fc\u306f\u3053\u306e\u30b9\u30b4\u30a4\u6a5f\u5668\u306b\u591a\u5c90\u306b\u308f\u305f\u308b\u6a5f\u80fd\u3092\u7d71\u5408\u3055\u305b\u305f\u3002\u5168\u7c73\u3067\u8a55\u5224\u306b\u306a\u308a\u59cb\u3081\u3066\u3044\u308b\u5546\u54c1\u3060\u3002",en:"270 SONY has integrated a wide range of functions into this cool gadget. It's catching on from coast to coast."},B.a,t.w)
B.aO=new A.a(2,{jp:"271 \u3053\u306e\u9053\u5177\u306f\u4f55\u304b\u3068\u4fbf\u5229\u3060\u304b\u3089\u3001\u3044\u3064\u3082\u624b\u5143\u306b\u7f6e\u3044\u3066\u3044\u307e\u3059\u3002",en:"271 This tool comes in handy, so I always keep it close at hand."},B.a,t.w)
B.jV=new A.a(2,{jp:"272 \u300c\u4e00\u822c\u7684\u306b\u3001\u6d88\u8cbb\u8005\u306f\u8cea\u3088\u308a\u3082\u91cf\u3092\u9078\u3073\u307e\u3059\u3002\u300d \u300c\u4eca\u306f\u5168\u304f\u9006\u3067\u3059\u3002\u300d",en:'272 "In general, consumers prefer quantity to quality." "It\'s the other way around today."'},B.a,t.w)
B.aC=new A.a(17,{"256":B.bu,"257":B.jl,"258":B.cH,"259":B.kk,"260":B.iR,"261":B.bB,"262":B.iN,"263":B.cd,"264":B.fK,"265":B.dM,"266":B.bX,"267":B.dX,"268":B.hh,"269":B.bY,"270":B.dx,"271":B.aO,"272":B.jV},B.S,t.j)
B.T=A.f(s(["241","242","243","244","245","246","247","248","249","250","251","252","253","254","255"]),t.s)
B.b8=new A.a(2,{jp:"241 \u77f3\u6cb9\u306f\u5929\u306e\u6075\u307f\u3067\u3042\u308b\u3068\u540c\u6642\u306b\u707d\u3044\u306e\u3082\u3068\u3067\u3042\u308b\u3068\u3001\u305d\u306e\u751f\u614b\u5b66\u8005\u306f\u6211\u3005\u306b\u7e70\u308a\u8fd4\u3057\u8b66\u544a\u3057\u3066\u304d\u305f\u3002",en:"241 The ecologist has warned us time and again that petroleum is not only a blessing but also a curse."},B.a,t.w)
B.bV=new A.a(2,{jp:"242 \u305d\u306e\u5927\u9678\u306f\u5316\u77f3\u71c3\u6599\u304c\u8c4a\u5bcc\u3060\u3002",en:"242 The continent is abundant in fossil fuels."},B.a,t.w)
B.bi=new A.a(2,{jp:"243 \u305d\u306e\u5730\u57df\u306f\u9271\u7269\u8cc7\u6e90\u304c\u6bd4\u8f03\u7684\u8c4a\u304b\u3060\u3002",en:"243 The region is relatively rich in mineral resources."},B.a,t.w)
B.i7=new A.a(2,{jp:"244 \u5c0f\u9ea6\u306f\u3053\u306e\u5730\u57df\u306e\u8fb2\u696d\u751f\u7523\u9ad8\u306e\u304a\u3088\u305d3\u5206\u306e2\u3092\u5360\u3081\u3066\u3044\u308b\u3002",en:"244 Wheat accounts for approximately two-thirds of agricultural production in the area."},B.a,t.w)
B.k5=new A.a(2,{jp:"245 \u826f\u3044\u53ce\u7a6b\u3092\u5f97\u308b\u305f\u3081\u306b\u306f\u3001\u80a5\u6c83\u306a\u571f\u58cc\u304c\u4e0d\u53ef\u6b20\u3060\u3002",en:"245 Fertile soil is indispensable for a good harvest."},B.a,t.w)
B.dw=new A.a(2,{jp:"246 \u6e7f\u6c17\u306e\u591a\u3044\u6c17\u5019\u306f\u305d\u306e\u534a\u5cf6\u306e\u7279\u8272\u3067\u3059\u3002",en:"246 A humid climate is characteristic of the peninsula."},B.a,t.w)
B.fG=new A.a(2,{jp:"247 \u305d\u306e\u6d3b\u706b\u5c71\u306f\u5468\u671f\u7684\u306b\u5674\u706b\u3059\u308b\u3002",en:"247 The active volcano erupts at regular intervals."},B.a,t.w)
B.ds=new A.a(2,{jp:"248 \u30d1\u30ca\u30de\u904b\u6cb3\u306f\u5927\u897f\u6d0b\u3068\u592a\u5e73\u6d0b\u3092\u3064\u306a\u3044\u3067\u3044\u308b\u3002",en:"248 The Panama Canal connects the Atlantic with the Pacific."},B.a,t.w)
B.cN=new A.a(2,{jp:"249 \u3053\u3053\u306e\u5730\u7406\u7684\u7279\u5fb4\u306f\u3001\u79c1\u305f\u3061\u306e\u770c\u306e\u305d\u308c\u3068\u4f3c\u3066\u3044\u308b\u3002",en:"249 The geographical features here are similar to those of our prefecture."},B.a,t.w)
B.hk=new A.a(2,{jp:"250 \u305f\u3044\u3066\u3044\u3001\u98e2\u9949\u306b\u306a\u308b\u3068\u75ab\u75c5\u3082\u767a\u751f\u3059\u308b\u3002",en:"250 More often than not, famine is accompanied by plague."},B.a,t.w)
B.dS=new A.a(2,{jp:"251 \u58ca\u6ec5\u7684\u898f\u6a21\u306e\u5730\u9707\u304c\u5dde\u90fd\u3092\u8972\u3044\u3001\u6570\u4e07\u4eba\u306e\u4f4f\u6c11\u304c\u5bb6\u3092\u5931\u3063\u305f\u3002",en:"251 A devastating earthquake hit the state capital, leaving tens of thousands of residents homeless."},B.a,t.w)
B.j_=new A.a(2,{jp:"252 \u300c\u6c17\u3092\u3064\u3051\u308d\u3063\uff01\u5929\u4e95\u304c\u5d29\u308c\u304b\u3051\u3066\u308b\u305e\uff01\u300d",en:'252 "Watch out! The ceiling is giving way!"'},B.a,t.w)
B.eG=new A.a(2,{jp:"253 \u53f0\u98a8\u306f\u901f\u5ea6\u3092\u4e0a\u3052\u3066\u6cbf\u5cb8\u306b\u63a5\u8fd1\u3057\u305d\u3046\u3060\u3068\u5929\u6c17\u4e88\u5831\u3067\u306f\u8a00\u3063\u3066\u3044\u308b\u3002",en:"253 The weather forecast says the typhoon is likely to accelerate and approach the coast."},B.a,t.w)
B.dj=new A.a(2,{jp:"254 \u300c\u8a66\u5408\u304c\u4e2d\u6b62\u306b\u306a\u308b\u304b\u3069\u3046\u304b\u3001\u307e\u3060\u6c7a\u307e\u3089\u306a\u3044\u3093\u3060\u3002\u300d \u300c\u305d\u308c\u304c\u3069\u3046\u3057\u305f\u306e\uff1f\u79c1\u306b\u3068\u3063\u3066\u306f\u3069\u3046\u3067\u3082\u3044\u3044\u3053\u3068\u3060\u308f\u3002\u300d",en:'254 "It\'s still up in the air whether the game will be called off or not." "So what? It makes no difference to me."'},B.a,t.w)
B.fT=new A.a(2,{jp:"255 \u300c\u9727\u304c\u6fc3\u3044\u306d\u3002\u300d \u300c\u672c\u5f53\u306d\u3002\u3067\u3082\u3001\u305f\u3076\u3093\u3053\u306e\u3042\u3068\u306f\u6674\u308c\u308b\u308f\u3002\u300d",en:'255 "It\'s foggy, isn\'t it?" "It sure is. But chances are it\'ll clear up later on."'},B.a,t.w)
B.aD=new A.a(15,{"241":B.b8,"242":B.bV,"243":B.bi,"244":B.i7,"245":B.k5,"246":B.dw,"247":B.fG,"248":B.ds,"249":B.cN,"250":B.hk,"251":B.dS,"252":B.j_,"253":B.eG,"254":B.dj,"255":B.fT},B.T,t.j)
B.H=A.f(s(["314","315","316","317","318","319","320","321","322","323","324","325","326","327","328"]),t.s)
B.fI=new A.a(2,{jp:"314 \u6d77\u5916\u306b\u884c\u304f\u3068\u5fc5\u305a\u3001\u6642\u5dee\u30dc\u30b1\u3068\u4e0b\u75e2\u306b\u60a9\u307e\u3055\u308c\u308b\u3002",en:"314 Whenever I go abroad, I suffer from jet lag and diarrhea."},B.a,t.w)
B.ka=new A.a(2,{jp:"315 \u300c\u4f55\u3060\u304b\u76ee\u307e\u3044\u3068\u5410\u304d\u6c17\u304c\u3059\u308b\u3088\u3002\u300d \u300c\u9854\u304c\u771f\u3063\u9752\u3088\u3002\u300d",en:'315 "I feel sort of dizzy and I feel like throwing up." "You look pale!"'},B.a,t.w)
B.bj=new A.a(2,{jp:"316 \u93ae\u75db\u5264\u3092\u98f2\u3081\u3070\u3001\u3059\u3050\u306b\u982d\u75db\u306f\u6cbb\u307e\u308a\u307e\u3059\u3002",en:"316 Take some aspirin. It will cure you of your headache in no time."},B.a,t.w)
B.fa=new A.a(2,{jp:"317 \u300c\u4f55\u3060\u304b\u4f53\u8abf\u304c\u60aa\u3044\u306a\u3042\u3002\u300d \u300c\u4e00\u65e5\u4f11\u307f\u3092\u53d6\u3063\u305f\u65b9\u304c\u3044\u3044\u308f\u3088\u3002\u300d",en:'317 "I\'m afraid I\'m coming down with something." "You should take a day off."'},B.a,t.w)
B.fV=new A.a(2,{jp:"318 \u3053\u306e\u98f2\u6599\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u6210\u5206\u306b\u306f\u6709\u5bb3\u306a\u3082\u306e\u3082\u3042\u308b\u3002\u3068\u308a\u308f\u3051\u3001\u598a\u5a20\u4e2d\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3002",en:"318 Some of the ingredients in this beverage are harmful, especially if you are pregnant."},B.a,t.w)
B.fr=new A.a(2,{jp:"319 \u5341\u5206\u306a\u6804\u990a\u6442\u53d6\u306f\u5e7c\u5150\u306e\u767a\u80b2\u306b\u3068\u3063\u3066\u6975\u3081\u3066\u91cd\u8981\u3067\u3059\u3002",en:"319 Good nutrition is vital for an infant's growth."},B.a,t.w)
B.eL=new A.a(2,{jp:"320 \u9069\u5ea6\u306a\u904b\u52d5\u306f\u8840\u884c\u3092\u3088\u304f\u3059\u308b\u3002",en:"320 Moderate exercise stimulates the circulation of the blood."},B.a,t.w)
B.hd=new A.a(2,{jp:"321 \u5f53\u5206\u306e\u9593\u306f\u9152\u3092\u63a7\u3048\u308b\u3088\u3046\u306b\u3068\u3001\u533b\u8005\u306b\u5fe0\u544a\u3055\u308c\u305f\u3002",en:"321 My physician advised me to refrain from alcohol for the time being."},B.a,t.w)
B.eJ=new A.a(2,{jp:"322 \u672c\u5f53\u306b\u4f53\u8abf\u3092\u826f\u304f\u3057\u305f\u3044\u3057\u3001\u6e1b\u91cf\u3082\u3057\u305f\u3044\u304b\u3089\u3001\u6bce\u671d\u6cf3\u304e\u306b\u884c\u3063\u3066\u3044\u307e\u3059\u3002",en:"322 I do want to get into shape and lose some weight, so I go swimming every morning."},B.a,t.w)
B.hL=new A.a(2,{jp:"323 \u6628\u65e5\u306e\u591c\u66f4\u304b\u3057\u304c\u305f\u305f\u3063\u3066\u3001\u5f7c\u306f\u3072\u3069\u3044\u98a8\u90aa\u3092\u3072\u3044\u305f\u3002",en:"323 He caught a nasty cold because he stayed up late last night."},B.a,t.w)
B.aU=new A.a(2,{jp:"324 \u5916\u79d1\u533b\u306b\u8aac\u5f97\u3055\u308c\u3066\u3001\u5f7c\u306f\u81d3\u5668\u79fb\u690d\u624b\u8853\u3092\u53d7\u3051\u308b\u3053\u3068\u306b\u3057\u305f\u3002",en:"324 The surgeon persuaded him to undergo an organ transplant."},B.a,t.w)
B.d2=new A.a(2,{jp:"325 \u7236\u304c\u5bdd\u305f\u304d\u308a\u306a\u306e\u3067\u79c1\u305f\u3061\u304c\u4ea4\u4ee3\u3067\u9762\u5012\u3092\u898b\u3066\u3044\u307e\u3059\u3002",en:"325 Since our father is bedridden, we take turns looking after him."},B.a,t.w)
B.il=new A.a(2,{jp:"326 \u30b8\u30e3\u30f3\u30af\u30d5\u30fc\u30c9\u306e\u904e\u5270\u306a\u6442\u53d6\u306f\u65e9\u6b7b\u306b\u306e\u4e00\u56e0\u306b\u306a\u308b\u3001\u3068\u3044\u3046\u306e\u304c\u6211\u3005\u306e\u4eee\u8aac\u3060\u3002",en:"326 Our hypothesis is that eating excessive amounts of junk food contributes to early mortality."},B.a,t.w)
B.cf=new A.a(2,{jp:"327 \u653f\u5e9c\u306f\u611f\u67d3\u306e\u62e1\u5927\u3092\u672a\u7136\u306b\u9632\u3050\u305f\u3081\u306e\u9069\u5207\u306a\u63aa\u7f6e\u3092\u53d6\u3089\u306a\u304b\u3063\u305f\u3002",en:"327 The government did not take appropriate measures to prevent the infection from spreading."},B.a,t.w)
B.dp=new A.a(2,{jp:"328 \u305d\u306e\u5927\u81e3\u306f\u5185\u95a3\u304b\u3089\u306e\u8f9e\u4efb\u3092\u4f59\u5100\u306a\u304f\u3055\u308c\u305f\u3002",en:"328 The minister was obliged to resign from the Cabinet."},B.a,t.w)
B.ar=new A.a(15,{"314":B.fI,"315":B.ka,"316":B.bj,"317":B.fa,"318":B.fV,"319":B.fr,"320":B.eL,"321":B.hd,"322":B.eJ,"323":B.hL,"324":B.aU,"325":B.d2,"326":B.il,"327":B.cf,"328":B.dp},B.H,t.j)
B.P=A.f(s(["198","199","200","201","202","203","204","205","206","207","208","209","210","211"]),t.s)
B.fL=new A.a(2,{jp:"198 \u5f7c\u304c\u79c1\u306e\u76ee\u3092\u898b\u3088\u3046\u3068\u3057\u306a\u304b\u3063\u305f\u306e\u3067\u3001\u4f55\u304b\u3092\u96a0\u3057\u3066\u3044\u308b\u3068\u601d\u3063\u305f\u3002",en:"198 It occurred to me that he was holding something back, because he wouldn't look me in the eye."},B.a,t.w)
B.hl=new A.a(2,{jp:"199 \u5f7c\u5973\u306f\u6211\u6162\u3057\u304d\u308c\u306a\u304f\u306a\u308a\u3001\u895f\u9996\u3092\u3064\u304b\u3093\u3067\u5f7c\u3092\u306e\u306e\u3057\u3063\u305f\u3002",en:"199 When her patience gave out, she grabbed his collar and swore at him."},B.a,t.w)
B.dJ=new A.a(2,{jp:"200 \u78ba\u304b\u306b\u3001\u79c1\u305f\u3061\u306f\u6642\u3005\u53e3\u3052\u3093\u304b\u3082\u3057\u307e\u3059\u304c\u3001\u666e\u6bb5\u306f\u4ef2\u826f\u304f\u3084\u3063\u3066\u3044\u307e\u3059\u3002",en:"200 I must admit we quarrel every now and then, but generally we're on good terms with each other."},B.a,t.w)
B.e6=new A.a(2,{jp:"201 \u300c\u541b\u306e\u5bb6\u306b\u5bc4\u3063\u3066\u3082\u3044\u3044\u304b\u3044\uff1f\u300d \u300c\u3082\u3061\u308d\u3093\u3044\u3044\u308f\u3088\u3002\u6c17\u517c\u306d\u306a\u304f\uff01\u300d",en:'201 "Do you mind if I stop by your house?" "No, not at all. Be my guest!"'},B.a,t.w)
B.hp=new A.a(2,{jp:"202 \u3061\u3087\u3063\u3068\u5f85\u3063\u3066\u3066\u3002\u3059\u3050\u623b\u308b\u304b\u3089\u3002\u5207\u3089\u306a\u3044\u3067\u3088\uff01\uff08\u96fb\u8a71\u3067\uff09",en:"202 Hold on. I'll be right back. Don't hang up!"},B.a,t.w)
B.jU=new A.a(2,{jp:"203 \u3046\u3061\u306b\u306f\u6cca\u3081\u3089\u308c\u306a\u3044\u308f\u3002\u4e00\u3064\u306b\u306f\u3001\u6642\u3005\u304a\u7236\u3055\u3093\u304c\u3075\u3089\u3063\u3068\u3084\u3063\u3066\u6765\u308b\u304b\u3089\u3002",en:"203 I can't put you up. For one thing, my dad drop in on me from time to time."},B.a,t.w)
B.iL=new A.a(2,{jp:"204 \u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u304c\u3058\u3063\u3068\u7acb\u3063\u3066\u3044\u308b\u9593\u3001\u30dc\u30d6\u306f\u6b69\u9053\u3092\u884c\u3063\u305f\u308a\u6765\u305f\u308a\u3057\u3066\u3044\u305f\u3002",en:"204 While Jennifer was standing still, Bob was pacing back and forth along the sidewalk."},B.a,t.w)
B.iK=new A.a(2,{jp:"205 \u300c\u4ef2\u76f4\u308a\u3057\u3088\u3046\u3088\u3001\u30ea\u30b5\u3002\u300d \u300c\u79c1\u304c\u3044\u3066\u5f53\u7136\u3060\u306a\u3093\u3066\u601d\u308f\u306a\u3044\u3067\u3002\u79c1\u305f\u3061\u3001\u4eca\u5ea6\u306f\u6c38\u9060\u306b\u7d42\u308f\u308a\u3088\u3002\u672c\u6c17\u306a\u3093\u3060\u304b\u3089\uff01\u300d",en:'205 "Let\'s make up, Lisa." "Stop taking me for granted! We\'re through for good this time. I mean it!"'},B.a,t.w)
B.ho=new A.a(2,{jp:"206 \u304a\u3044\uff01\u30ea\u30b5\u3001\u305d\u3046\u611f\u60c5\u7684\u306b\u306a\u308b\u306a\u3088\u3002\u541b\u3092\u50b7\u3064\u3051\u308b\u3064\u3082\u308a\u3058\u3083\u306a\u304b\u3063\u305f\u3093\u3060\u3002\u3058\u3063\u304f\u308a\u8a71\u3057\u5408\u304a\u3046\u3002",en:"206 Come on! Don't get so emotional, Lisa. I didn't mean to hurt you. Let's talk it over."},B.a,t.w)
B.bn=new A.a(2,{jp:"207 \u300c\u79c1\u3092\u88cf\u5207\u3063\u305f\u308f\u306d\uff01\u300d \u300c\u8a31\u3057\u3066\u304f\u308c\u3088\u3002\u3069\u3046\u3057\u305f\u3089\u57cb\u3081\u5408\u308f\u305b\u304c\u3067\u304d\u308b\u304b\u306a\u3042\uff1f\u300d \u300c\u4ed5\u8fd4\u3057\u3057\u3066\u3084\u308b\u3063\uff01\u300d",en:'207 "You betrayed me!" "Please forgive me. How can I make it up to you?" "I\'ll get even!"'},B.a,t.w)
B.hQ=new A.a(2,{jp:"208 \u81ea\u5206\u306e\u7f6a\u306f\u96a0\u3057\u3066\u304a\u304b\u305a\u306b\u544a\u767d\u3057\u305f\u307b\u3046\u304c\u3044\u3044\u3002",en:"208 You should confess your sins rather than conceal them."},B.a,t.w)
B.jH=new A.a(2,{jp:"209 \u7d04\u675f\u306f\u5b88\u308a\u306a\u3055\u3044\u3002\u305d\u3046\u3057\u306a\u3044\u3068\u8a55\u5224\u3092\u843d\u3068\u3057\u307e\u3059\u3088\u3002",en:"209 Keep your word; otherwise you'll end up losing face."},B.a,t.w)
B.dh=new A.a(2,{jp:"210 \u30dc\u30d6\u306f\u81ea\u5206\u306e\u9053\u5fb3\u7684\u4fe1\u6761\u3092\u66f2\u3052\u306a\u3044\u7537\u3060\u3002\u6b63\u76f4\u3067\u3044\u308c\u3070\u6700\u5f8c\u306b\u306f\u5831\u308f\u308c\u308b\u3068\u4fe1\u3058\u3066\u3044\u308b\u3002",en:"210 Bob sticks to his moral principles and believes that honesty pays off in the long run."},B.a,t.w)
B.fW=new A.a(2,{jp:"211 \u300c\u5143\u6c17\u3092\u51fa\u3057\u3066\u3002\u4ed5\u65b9\u306a\u3044\u308f\u3002\u300d \u300c\u3084\u308c\u308b\u3060\u3051\u306e\u3053\u3068\u306f\u3084\u3063\u305f\u3093\u3060\u3002\u300d \u300c\u308f\u304b\u3063\u3066\u308b\u3002\u904e\u304e\u305f\u3053\u3068\u306b\u304f\u3088\u304f\u3088\u3057\u306a\u3044\u3067\u3002\u3084\u308a\u76f4\u305b\u308b\u308f\u3088\uff01\u300d",en:'211 "Cheer up! You couldn\'t help it." "I did my best." "I know. Don\'t dwell on the past. You can start over!"'},B.a,t.w)
B.az=new A.a(14,{"198":B.fL,"199":B.hl,"200":B.dJ,"201":B.e6,"202":B.hp,"203":B.jU,"204":B.iL,"205":B.iK,"206":B.ho,"207":B.bn,"208":B.hQ,"209":B.jH,"210":B.dh,"211":B.fW},B.P,t.j)
B.ab=A.f(s(["212","213","214","215","216","217","218","219","220","221","222","223"]),t.s)
B.bH=new A.a(2,{jp:"212 \u300c\u30b8\u30a7\u30fc\u30f3\u3001\u30bf\u30a4\u30e0\u30ba\u30fb\u30b9\u30af\u30a7\u30a2\u30fc\u307e\u3067\u4e57\u305b\u3066\u884c\u3063\u3066\u6b32\u3057\u3044\u3093\u3060\u3051\u3069\u3002\u300d \u300c\u305d\u3046\u3057\u3066\u3042\u3052\u305f\u3044\u306e\u306f\u5c71\u3005\u3060\u3051\u3069\u3002\u4eca\u3001\u5168\u7136\u6642\u9593\u304c\u306a\u3044\u306e\u3002\u300d",en:'212 "Jane, please do me a favor and give me a ride to Times Square." "I wish I could, but I\'m tied up right now."'},B.a,t.w)
B.ku=new A.a(2,{jp:"213 \u3044\u3064\u3082\u306e\u3088\u3046\u306b\u3001\u30de\u30a4\u30af\u306f\u6642\u9593\u901a\u308a\u306b\u73fe\u308c\u305f\u3002\u672c\u5f53\u306b\u6642\u9593\u306b\u6b63\u78ba\u306a\u4eba\u3060\u3002\u300d",en:"213 As usual, Mike turned up on time. He's very punctual."},B.a,t.w)
B.iB=new A.a(2,{jp:"214 \u3053\u306e\u524d\u3001\u6df7\u96d1\u3057\u305f\u5e79\u7dda\u9053\u8def\u306e\u771f\u3093\u4e2d\u3067\u30ac\u30b9\u6b20\u3057\u3066\u3057\u307e\u3063\u305f\u3002",en:"214 The other day I ran out of gas in the middle of a busy Interstate."},B.a,t.w)
B.ii=new A.a(2,{jp:"215 \u79c1\u306e\u524d\u3092\u8d70\u3063\u3066\u3044\u305f\u30c8\u30e9\u30c3\u30af\u304c\u30b9\u30ea\u30c3\u30d7\u3057\u3066\u6a2a\u8ee2\u3057\u3001\u7a4d\u307f\u8377\u3092\u8def\u9762\u3044\u3063\u3071\u3044\u306b\u6563\u4e71\u3055\u305b\u305f\u3002",en:"215 A truck driving ahead of me skidded, turned over, and scattered its load all over the road."},B.a,t.w)
B.d4=new A.a(2,{jp:"216 \u885d\u7a81\u3092\u907f\u3051\u3089\u308c\u305f\u306e\u306f\u904b\u304c\u826f\u304b\u3063\u305f\u3060\u3051\u3001\u3068\u5f7c\u306f\u56de\u60f3\u3057\u305f\u3002",en:"216 He recalled that a collision had been avoided by sheer luck."},B.a,t.w)
B.hW=new A.a(2,{jp:"217 \u7dca\u6025\u306e\u969b\u306b\u306f\u3001\u3059\u3050\u306b\u79c1\u306e\u4ee3\u7406\u4eba\u3068\u9023\u7d61\u3092\u53d6\u3063\u3066\u4e0b\u3055\u3044\u3002",en:"217 In case of an emergency, get in touch with my agent right away."},B.a,t.w)
B.bz=new A.a(2,{jp:"218 \u300c\u30b8\u30a7\u30fc\u30f3\u3001\u4ffa\u305f\u3061\u306f\u3069\u3053\u306b\u5411\u304b\u3063\u3066\u308b\u3093\u3060\uff1f\u300d \u300c\u8ff7\u3063\u305f\u307f\u305f\u3044\u3002\u9055\u3046\u65b9\u5411\u306b\u6765\u3061\u3083\u3063\u305f\u308f\u3002\u300d \u300c\u4f55\u3060\u3088\u3002\u8eca\u3092\u6b62\u3081\u3066\u304f\u308c\uff01\u300d",en:'218 "Jane, where are we heading?" "I think we\'re lost. We went in the wrong direction." "Damn! Pull over!"'},B.a,t.w)
B.fm=new A.a(2,{jp:"219 \u50d5\u306e\u3055\u3073\u3064\u3044\u305f\u30d5\u30a9\u30fc\u30c9\u304c\u6545\u969c\u3057\u3066\u3001\u4ea4\u5dee\u70b9\u3092\u3075\u3055\u3044\u3067\u3057\u307e\u3063\u305f\u3002",en:"219 My rusty Ford broke down, obstructing the intersection."},B.a,t.w)
B.b5=new A.a(2,{jp:"220 \u8868\u9762\u306b\u7d30\u304b\u3044\u50b7\u3084\u3078\u3053\u307f\u304c\u305f\u304f\u3055\u3093\u3042\u308b\u304b\u3089\u3001\u78e8\u3044\u3066\u3082\u7121\u99c4\u3060\u3088\u3002",en:"220 There are so many fine scratches and dents on its surface, it's no use polishing it."},B.a,t.w)
B.cV=new A.a(2,{jp:"221 \u300c\u304a\u3044\u3001\u6e0b\u6ede\u306b\u306f\u307e\u3063\u3061\u3083\u3063\u305f\u3088\uff01\u300d \u300c\u71b1\u304f\u306a\u3089\u306a\u3044\u3067\u3001\u30b8\u30e7\u30fc\u3002\u8fd1\u9053\u3057\u307e\u3057\u3087\u3046\u3002\u6642\u9593\u307e\u3067\u306b\u306f\u7740\u3051\u308b\u308f\u3002\u300d",en:'221 "Hey, we\'re stuck in a traffic jam!" "Chill out, Joe. Let\'s take a shortcut! We\'ll get there in time."'},B.a,t.w)
B.c7=new A.a(2,{jp:"222 \u300c\u30d1\u30f3\u30af\u3057\u3061\u3083\u3063\u305f\u3088\u3002\u624b\u3092\u8cb8\u3057\u3066\u304f\u308c\u308b\uff1f\u300d \u300c\u559c\u3093\u3067\u3002\u300d",en:'222 "I\'ve got a flat tire. Can you give me a hand?" "I\'d be glad to."'},B.a,t.w)
B.jS=new A.a(2,{jp:"223 \u30cf\u30f3\u30c9\u30eb\u304c\u304d\u304b\u306a\u304f\u306a\u3063\u305f\u6551\u6025\u8eca\u304c\u3001\u5371\u3046\u304f\u6b69\u884c\u8005\u3092\u3072\u304d\u305d\u3046\u306b\u306a\u3063\u305f\u3002",en:"223 The ambulance went out of control and came close to running over a pedestrian."},B.a,t.w)
B.kR=new A.a(12,{"212":B.bH,"213":B.ku,"214":B.iB,"215":B.ii,"216":B.d4,"217":B.hW,"218":B.bz,"219":B.fm,"220":B.b5,"221":B.cV,"222":B.c7,"223":B.jS},B.ab,t.j)
B.a8=A.f(s(["186","187","188","189","190","191","192","193","194","195","196","197"]),t.s)
B.c3=new A.a(2,{jp:"186 \u3044\u3063\u305f\u3044\u306a\u305c\u307f\u3093\u306a\u304c\u305d\u308c\u7a0b\u307e\u3067\u306b\u30dc\u30d6\u3092\u8efd\u8511\u3059\u308b\u306e\u304b\u3001\u50d5\u306b\u306f\u308f\u304b\u3089\u306a\u3044\u3002",en:"186 I can't figure out why on earth everybody feels so much contempt for Bob!"},B.a,t.w)
B.fc=new A.a(2,{jp:"187 \u5f7c\u306e\u3053\u3068\u3092\u7b11\u308f\u305a\u306b\u306f\u3044\u3089\u308c\u306a\u3044\u3002\u3070\u304b\u306a\u9593\u9055\u3044\u3092\u7e70\u308a\u8fd4\u3059\u304b\u3089\u306d\u3002\u304d\u3063\u3068\u5f7c\u306f\u61f2\u308a\u306a\u3044\u3093\u3060\u308d\u3046\u306a\u3002",en:"187 I can't help laughing at him because he keeps on making stupid mistakes. He'd be the last person to learn his lesson."},B.a,t.w)
B.bm=new A.a(2,{jp:"188 \u3055\u3089\u306b\u5384\u4ecb\u306a\u3053\u3068\u306b\u3001\u5f7c\u306f\u79c1\u305f\u3061\u306b\u8ff7\u60d1\u3092\u304b\u3051\u3066\u3044\u308b\u3053\u3068\u3055\u3048\u308f\u304b\u3063\u3066\u3044\u306a\u3044\u3002",en:"188 To make matters worse, he isn't even conscious of annoying us."},B.a,t.w)
B.k6=new A.a(2,{jp:"189 \u614c\u3066\u3066\u3044\u305f\u304b\u3089\u3001\u624b\u888b\u3092\u9593\u9055\u3048\u3066\u88cf\u8fd4\u3057\u306b\u306f\u3081\u3066\u3057\u307e\u3063\u305f\u3002",en:"189 Since I was in a hurry, I put my gloves on inside out by mistake."},B.a,t.w)
B.cU=new A.a(2,{jp:"190 \u30c7\u30a4\u30d6\u306f\u30c7\u30d6\u3067\u30c9\u30b8\u3002\u6d45\u3044\u5c0f\u5ddd\u3092\u98db\u3073\u8d8a\u3048\u305f\u6642\u306b\u3001\u3064\u307e\u305a\u3044\u3066\u8db3\u9996\u3092\u637b\u632b\u3057\u305f\u3093\u3060\u3002",en:"190 Dave is fat and clumsy. When he leaped over the shallow stream, he stumbled and twisted his ankle."},B.a,t.w)
B.fw=new A.a(2,{jp:"191 \u300c\u50d5\u3001\u9ad8\u6240\u6050\u6016\u75c7\u306a\u3093\u3060\u3002\u300d \u300c\u5f31\u866b\u3063\uff01\u300d",en:'191 "I\'m scared of heights." "You\'re a coward!"'},B.a,t.w)
B.dF=new A.a(2,{jp:"192 \u6d88\u6975\u7684\u306a\u305d\u306e\u7537\u6027\u304c\u3001\u4eba\u524d\u3067\u81ea\u5df1\u8868\u73fe\u3092\u3059\u308b\u3053\u3068\u306f\u307e\u305a\u306a\u3044\u3002",en:"192 The passive man seldom, if ever, expresses himself in public."},B.a,t.w)
B.jm=new A.a(2,{jp:"193 \u8ff7\u4fe1\u306f\u3059\u3079\u3066\u6839\u62e0\u306e\u306a\u3044\u3082\u306e\u3060\u3068\u3044\u3046\u3053\u3068\u304c\u3001\u30cb\u30c3\u30af\u306b\u8a00\u308f\u308c\u3066\u3088\u304f\u308f\u304b\u3063\u305f\u3002",en:"193 Nick convinced me that all superstitions are irrational."},B.a,t.w)
B.iw=new A.a(2,{jp:"194 \u6ce8\u5c04\u306e\u3053\u3068\u3092\u8003\u3048\u308b\u3068\u3001\u6016\u304f\u3066\u9707\u3048\u3066\u3057\u307e\u3046\u3002",en:"194 I tremble with fear at the thought of an injection."},B.a,t.w)
B.i9=new A.a(2,{jp:"195 \u30dc\u30d6\u306f\u6839\u304c\u6020\u3051\u8005\u3060\u304b\u3089\u3001\u4e0e\u3048\u3089\u308c\u305f\u4ed5\u4e8b\u3092\u3057\u3070\u3057\u3070\u6020\u308b\u3002",en:"195 Since Bob is lazy at heart, he frequently neglects his duties."},B.a,t.w)
B.iA=new A.a(2,{jp:"196 \u30dc\u30d6\u304c\u50cd\u3044\u3066\u3044\u308b\u9593\u3001\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u306f\u5bb6\u3067\u304f\u3060\u3089\u306a\u3044\u30e1\u30ed\u30c9\u30e9\u30de\u306b\u5922\u4e2d\u306b\u306a\u3063\u3066\u3044\u305f\u3002",en:"196 While Bob was at work, Jennifer was at home absorbed in silly soap opera."},B.a,t.w)
B.ks=new A.a(2,{jp:"197 \u30dc\u30d6\u306f\u30de\u30f3\u30ac\u597d\u304d\u3060\u3051\u3069\u3001\u50d5\u306b\u306f\u305d\u308c\u307b\u3069\u3044\u3044\u3082\u306e\u3068\u306f\u601d\u3048\u306a\u3044\u3002\u5b9f\u969b\u3001\u3064\u307e\u3089\u306a\u3044\u3088\u3002",en:"197 Bob likes cartoons, but I don't think much of them. As a matter of fact, they're boring"},B.a,t.w)
B.kO=new A.a(12,{"186":B.c3,"187":B.fc,"188":B.bm,"189":B.k6,"190":B.cU,"191":B.fw,"192":B.dF,"193":B.jm,"194":B.iw,"195":B.i9,"196":B.iA,"197":B.ks},B.a8,t.j)
B.an=A.f(s(["224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240"]),t.s)
B.eo=new A.a(2,{jp:"224 \u706b\u661f\u306b\u306f\u304b\u3064\u3066\u539f\u59cb\u7684\u306a\u751f\u7269\u304c\u5b58\u5728\u3057\u3066\u3044\u305f\u3068\u5f7c\u306f\u529b\u8aac\u3057\u3066\u3044\u308b\u3002",en:"224 He contends that primitive life once existed on Mars."},B.a,t.w)
B.fj=new A.a(2,{jp:"225 \u4e57\u7d44\u54e1\u305f\u3061\u306f\u5b87\u5b99\u3078\u306e\u822a\u6d77\u306e\u6e96\u5099\u306b\u5fd9\u3057\u3044\u3002",en:"225 The crew is busy preparing for the voyage into outer space."},B.a,t.w)
B.hF=new A.a(2,{jp:"226 \u5f7c\u3089\u306f\u7121\u91cd\u529b\u72b6\u614b\u3067\u4e00\u9023\u306e\u5b9f\u9a13\u3092\u304a\u3053\u306a\u3063\u305f\u3002",en:"226 They conducted a series of experiments under zero gravity."},B.a,t.w)
B.jx=new A.a(2,{jp:"227 \u591a\u304f\u306e\u5929\u6587\u5b66\u8005\u306f\u3001\u5b87\u5b99\u306f\u7121\u9650\u306b\u81a8\u5f35\u3092\u7d9a\u3051\u3066\u3044\u304f\u3082\u306e\u3068\u8003\u3048\u3066\u3044\u308b\u3002",en:"227 Many astronomers assume that the universe will expand infinitely."},B.a,t.w)
B.kd=new A.a(2,{jp:"228 \u5b87\u5b99\u98db\u884c\u58eb\u305f\u3061\u306f\u81ea\u7136\u3068\u6cb8\u304d\u8d77\u3053\u3063\u305f\u62cd\u624b\u3067\u8fce\u3048\u3089\u308c\u305f\u3002",en:"228 The astronauts were greeted with spontaneous applause."},B.a,t.w)
B.dv=new A.a(2,{jp:"229 \u6ec5\u4ea1\u306e\u5371\u6a5f\u306b\u7015\u3057\u305f\u5730\u7403\u3092\u5b88\u308d\u3046\u3068\u3001\u3042\u308b\u57fa\u91d1\u304c\u8a2d\u7acb\u3055\u308c\u305f\u3002",en:"229 A fund was set up with a view to preserving our endangered planet."},B.a,t.w)
B.cx=new A.a(2,{jp:"230 \u5927\u6d2a\u6c34\u3067\u73fe\u5730\u306e\u4ea4\u901a\u7db2\u304c\u9ebb\u75fa\u3057\u305f\u3002",en:"230 The massive flood paralyzed the local transportation network."},B.a,t.w)
B.aQ=new A.a(2,{jp:"231 \u8d64\u9053\u306f\u5730\u7403\u3092\u4e8c\u3064\u306e\u534a\u7403\u306b\u5206\u3051\u308b\u3002",en:"231 The equator divides the globe into two hemispheres."},B.a,t.w)
B.dG=new A.a(2,{jp:"232 \u6bdb\u76ae\u306e\u30b3\u30fc\u30c8\u306e\u305f\u3081\u306b\u52d5\u7269\u3092\u7f60\u3067\u6355\u7372\u3059\u308b\u306e\u306f\u6b8b\u9177\u306a\u3053\u3068\u3060\u3002",en:"232 I think it's cruel to trap animals for fur coats."},B.a,t.w)
B.bf=new A.a(2,{jp:"233 \u305d\u306e\u56e3\u4f53\u306f\u91ce\u751f\u52d5\u7269\u306e\u4fdd\u8b77\u306b\u304a\u3044\u3066\u3001\u6700\u3082\u91cd\u8981\u306a\u5f79\u5272\u3092\u679c\u305f\u3057\u3066\u3044\u308b\u3002",en:"233 The organization plays a principal role in wildlife conservation."},B.a,t.w)
B.fb=new A.a(2,{jp:"234 \u591a\u304f\u306e\u5f31\u3044\u751f\u7269\u7a2e\u304c\u7d76\u6ec5\u306e\u5371\u6a5f\u306b\u7015\u3057\u3066\u3044\u308b\u3002",en:"234 Many fragile species are on the verge of extinction."},B.a,t.w)
B.dO=new A.a(2,{jp:"235 \u9577\u5f15\u304f\u5e72\u3070\u3064\u304c\u53ce\u7a6b\u306b\u751a\u5927\u306a\u88ab\u5bb3\u3092\u3082\u305f\u3089\u3057\u305f\u3002",en:"235 The prolonged drought did severe damage to the crops."},B.a,t.w)
B.bI=new A.a(2,{jp:"236 \u71b1\u5e2f\u96e8\u6797\u306e\u6d88\u6ec5\u304c\u5730\u7403\u898f\u6a21\u3067\u6025\u901f\u306b\u9032\u3093\u3067\u3044\u307e\u3059\u3002\u305d\u306e\u539f\u56e0\u306e\u4e00\u3064\u306f\u9178\u6027\u96e8\u3067\u3059\u3002",en:"236 Tropical rain forests are quickly disappearing on a global scale. In part, it's due to acid rain."},B.a,t.w)
B.jZ=new A.a(2,{jp:"237 \u5730\u7403\u6e29\u6696\u5316\u306f\u3001\u4e8c\u9178\u5316\u70ad\u7d20\u306e\u6392\u51fa\u3068\u76f4\u63a5\u306e\u95a2\u4fc2\u304c\u3042\u308b\u3068\u8a00\u308f\u308c\u3066\u3044\u308b\u3002",en:"237 It is said that global warming is directly related to carbon dioxide emissions."},B.a,t.w)
B.j8=new A.a(2,{jp:"238 \u30aa\u30be\u30f3\u5c64\u306e\u7834\u58ca\u306f\u74b0\u5883\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059\u3002",en:"238 The destruction of the ozone layer affects the environment."},B.a,t.w)
B.kj=new A.a(2,{jp:"239 \u59d4\u54e1\u4f1a\u306f\u3001\u5927\u6c17\u6c5a\u67d3\u3092\u6291\u5236\u3059\u308b\u305f\u3081\u306b\u4e92\u3044\u306b\u5354\u529b\u3057\u5408\u3046\u3088\u3046\u5404\u56fd\u306b\u8981\u8acb\u3057\u305f\u3002",en:"239 The committee called on all nations to work side by side to curb air pollution."},B.a,t.w)
B.fX=new A.a(2,{jp:"240 \u6eb6\u3051\u7d9a\u3051\u308b\u6c37\u6cb3\u3092\u76e3\u8996\u3059\u308b\u305f\u3081\u306b\u3001\u4eba\u5de5\u885b\u661f\u304c\u8ecc\u9053\u306b\u6253\u3061\u4e0a\u3052\u3089\u308c\u305f\u3002",en:"240 A satellite was launched into orbit to monitor melting glaciers."},B.a,t.w)
B.l2=new A.a(17,{"224":B.eo,"225":B.fj,"226":B.hF,"227":B.jx,"228":B.kd,"229":B.dv,"230":B.cx,"231":B.aQ,"232":B.dG,"233":B.bf,"234":B.fb,"235":B.dO,"236":B.bI,"237":B.jZ,"238":B.j8,"239":B.kj,"240":B.fX},B.an,t.j)
B.L=A.f(s(["329","330","331","332","333","334","335","336","337","338","339","340","341"]),t.s)
B.eT=new A.a(2,{jp:"329 \u591a\u304f\u306e\u4eba\u3005\u306f\u3001\u73fe\u884c\u306e\u7fa9\u52d9\u6559\u80b2\u5236\u5ea6\u304c\u6642\u4ee3\u9045\u308c\u3067\u3042\u308b\u3068\u8003\u3048\u3066\u3044\u308b\u3002",en:"329 Many people regard the current compulsory education system as being obsolete."},B.a,t.w)
B.dy=new A.a(2,{jp:"330 \u5927\u304d\u306a\u76ee\u6a19\u3092\u5b9f\u73fe\u3059\u308b\u3088\u3046\u306b\u3068\u3001\u305f\u304f\u3055\u3093\u306e\u4eba\u304c\u79c1\u3092\u52b1\u307e\u3057\u3066\u304f\u308c\u305f\u3002",en:"330 Many people encouraged me to fulfill my ambitions."},B.a,t.w)
B.h8=new A.a(2,{jp:"331 \u81ea\u5206\u306e\u5922\u3092\u5b9f\u73fe\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u5f7c\u306f\u5b66\u6821\u3092\u4e2d\u9000\u3057\u3066\u6771\u4eac\u3092\u76ee\u6307\u3057\u305f\u3002",en:"331 To make his dreams come true, he dropped out of school and made his way to Tokyo."},B.a,t.w)
B.jA=new A.a(2,{jp:"332 \u300c\u666e\u6bb5\u306f\u4f55\u3092\u306a\u3055\u3063\u3066\u3044\u308b\u3093\u3067\u3059\u304b\uff1f\u300d \u300c\u5927\u5b66\u751f\u3067\u3059\u3002\u30cf\u30fc\u30d0\u30fc\u30c9\u306e1\u5e74\u3067\u3059\u3002\u300d \u300c\u5c02\u653b\u306f\uff1f\u300d \u300c\u54f2\u5b66\u3067\u3059\u3002\u300d",en:'332 "What do you do?" "I\'m a college student, a freshman at Harvard." "What\'s your major?" "Philosophy."'},B.a,t.w)
B.kp=new A.a(2,{jp:"333 2001\u5e744\u67081\u65e5\u304b\u3089\u6388\u696d\u6599\u304c10%\u8fd1\u304f\u5024\u4e0a\u3052\u306b\u306a\u308a\u307e\u3059\u3002",en:"333 Tuition will be raised by nearly ten percent as of April 1, 2001."},B.a,t.w)
B.iI=new A.a(2,{jp:"334 \u300c\u5968\u5b66\u91d1\u3092\u7533\u3057\u8fbc\u3082\u3046\u304b\u3069\u3046\u304b\u60a9\u3093\u3067\u3044\u308b\u306e\u3002\u300d \u300c\u3084\u308b\u3060\u3051\u3084\u3063\u3066\u307f\u306a\u3088\uff01\u300d",en:'334 "I\'m of two minds whether to apply for the scholarship or not." "Give it a try!"'},B.a,t.w)
B.jg=new A.a(2,{jp:"335 \u5f7c\u306f\u6176\u5fdc\u5927\u5b66\u3092\u5352\u696d\u3059\u308b\u3068\u3059\u3050\u306b\u5bb6\u696d\u3092\u7d99\u3044\u3060\u3002",en:"335 As soon as he graduated from Keio University, he took over his family's business."},B.a,t.w)
B.iP=new A.a(2,{jp:"336 \u8ecd\u306e\u898f\u5f8b\u306f\u53b3\u683c\u3060\u304b\u3089\u3001\u3042\u306a\u305f\u306f\u305d\u3063\u3061\u306e\u4e16\u754c\u306b\u5411\u304b\u306a\u3044\u308f\u3002",en:"336 You aren't cut out for the military because of its rigid discipline."},B.a,t.w)
B.aR=new A.a(2,{jp:"337 \u79c1\u306f\u3069\u3093\u306a\u72a0\u7272\u3092\u6255\u3063\u3066\u3067\u3082\u3001\u811a\u672c\u5bb6\u3067\u98df\u3079\u3066\u3044\u304f\u3068\u5fc3\u306b\u6c7a\u3081\u3066\u3044\u308b\u3002",en:"337 I am determined to make a living as a playwright at all costs."},B.a,t.w)
B.hj=new A.a(2,{jp:"338 \u5f7c\u3082\u5927\u4eba\u306b\u306a\u3063\u3066\u3001\u7269\u4e8b\u3092\u7dcf\u5408\u7684\u306a\u8996\u91ce\u3067\u898b\u3089\u308c\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3002",en:"338 As he grew up, he learned to put things in perspective."},B.a,t.w)
B.dY=new A.a(2,{jp:"339 \u540c\u3058\u3088\u3046\u306a\u4eba\u3005\u304b\u3089\u306a\u308b\u79c1\u305f\u3061\u306e\u5730\u57df\u793e\u4f1a\u3067\u306f\u3001\u4f53\u5236\u306b\u5f93\u304a\u3046\u3068\u3059\u308b\u610f\u8b58\u306f\u4e0d\u53ef\u6b20\u306a\u8981\u7d20\u3067\u3042\u308b\u3002",en:"339 Conformity is an essential element of our homogeneous community."},B.a,t.w)
B.hz=new A.a(2,{jp:"340 \u4f1a\u793e\u306e\u305f\u3081\u306b\u3042\u304f\u305b\u304f\u50cd\u304f\u3088\u308a\u306f\u3001\u6211\u304c\u9053\u3092\u884c\u304f\u307b\u3046\u304c\u3044\u3044\u3002\u578b\u306b\u306f\u307e\u308d\u3046\u3068\u3057\u305f\u3063\u3066\u4f55\u306e\u5f97\u306b\u3082\u306a\u3089\u306a\u3044\u3088\uff01",en:"340 I'd rather go my own way than toil away for a company. Trying to fit into a mold gets me nowhere!"},B.a,t.w)
B.es=new A.a(2,{jp:"341 \u30c8\u30e0\u306f\u6027\u683c\u304c\u5f7c\u306e\u304a\u3058\u306b\u4f3c\u3066\u3044\u308b\u3002\u3064\u307e\u308a\u305d\u306e\u3001\u751f\u307e\u308c\u3064\u304d\u306e\u9811\u56fa\u8005\u3002\u5f7c\u306f\u7d76\u5bfe\u306b\u6298\u308c\u306a\u3044\u3002",en:"341 Tom takes after his uncle in personality. I mean, he is obstinate by nature. He never gives in."},B.a,t.w)
B.av=new A.a(13,{"329":B.eT,"330":B.dy,"331":B.h8,"332":B.jA,"333":B.kp,"334":B.iI,"335":B.jg,"336":B.iP,"337":B.aR,"338":B.hj,"339":B.dY,"340":B.hz,"341":B.es},B.L,t.j)
B.M=A.f(s(["282","283","284","285","286","287","288","289","290","291","292","293"]),t.s)
B.j3=new A.a(2,{jp:"282 \u3069\u3046\u3084\u3089\u30cb\u30c3\u30af\u306f\u3001\u81ea\u5206\u306e\u8ca0\u62c5\u304c\u5897\u3048\u308b\u304b\u3089\u305d\u306e\u4ed5\u4e8b\u3092\u5f15\u304d\u53d7\u3051\u305f\u304c\u3089\u306a\u304b\u3063\u305f\u3088\u3046\u3060\u3002",en:"282 Apparently, Nick wasn't willing to take on the task because it would just add to his burdens."},B.a,t.w)
B.dP=new A.a(2,{jp:"283 \u30dc\u30d6\u306f\u4eca\u591c\u3001\u5f7c\u5973\u3068\u30c7\u30fc\u30c8\u3059\u308b\u3064\u3082\u308a\u3060\u3063\u305f\u304c\u3001\u6b8b\u696d\u306b\u306a\u3063\u3066\u3057\u307e\u3063\u305f\u3002",en:"283 Bob had intended to take her out tonight, but he had to work overtime."},B.a,t.w)
B.iZ=new A.a(2,{jp:"284 \u300c\u9045\u304f\u3068\u3082\u91d1\u66dc\u65e5\u307e\u3067\u306b\u306f\u640d\u5931\u306e\u898b\u7a4d\u308a\u3092\u51fa\u3057\u3066\u4e0b\u3055\u3044\u3002\u300d \u300c\u4f55\u3068\u304b\u3084\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u300d",en:'284 Please estimate the losses by Friday at the latest. "I\'ll manage it somehow."'},B.a,t.w)
B.iu=new A.a(2,{jp:"285 \u300c\u983c\u308a\u306b\u3057\u3066\u308b\u308f\u3001\u30cb\u30c3\u30af\u3002\u300d \u300c\u5927\u4e08\u592b\u3001\u304d\u3061\u3093\u3068\u3084\u3063\u3066\u304a\u304d\u307e\u3059\u3002\u300d \u300c\u3042\u308a\u304c\u3068\u3046\u3002\u611f\u8b1d\u3059\u308b\u308f\u3002\u300d \u300c\u3044\u3044\u3093\u3067\u3059\u3088\u3002\u300d",en:'285 "Nick, I\'m counting on you." "OK, I\'ll see to it." "Thanks, I appreciate it." "Don\'t mention it."'},B.a,t.w)
B.cR=new A.a(2,{jp:"286 \u5f7c\u306f\u4e0a\u53f8\u304c\u305d\u3070\u306b\u3044\u308b\u6642\u306f\u71b1\u5fc3\u306a\u3075\u308a\u3092\u3059\u308b\u3002",en:"286 He pretends to be enthusiastic when his boss is around."},B.a,t.w)
B.b4=new A.a(2,{jp:"287 \u5f7c\u306f\u540c\u50da\u3092\u8e0f\u307f\u53f0\u306b\u3057\u3066\u51fa\u4e16\u3057\u305f\u3002\u6065\u3092\u77e5\u308b\u3079\u304d\u3060\u3002",en:"287 He got promoted at the expense of his colleagues. He should be ashamed of himself."},B.a,t.w)
B.jo=new A.a(2,{jp:"288 \u666f\u6c17\u306e\u5f8c\u9000\u304c\u59cb\u307e\u308b\u3068\u3001\u77ed\u671f\u5951\u7d04\u793e\u54e1\u305f\u3061\u306f\u6b21\u3005\u306b\u4e00\u6642\u89e3\u96c7\u3092\u8a00\u3044\u6e21\u3055\u308c\u305f\u3002",en:"288 As the recession set in, temporary employees were laid off one after another."},B.a,t.w)
B.fC=new A.a(2,{jp:"289 \u6700\u8fd1\u3067\u306f\u3001\u591a\u304f\u306e\u4eba\u3005\u304c\u8077\u306b\u5c31\u304d\u305f\u304f\u3066\u3082\u5c31\u3051\u306a\u3044\u3067\u3044\u308b\u3002\u8ab0\u306e\u8cac\u4efb\u3060\u308d\u3046\uff1f",en:"289 Nowadays, many people are out of work against their will. Who is responsible for that?"},B.a,t.w)
B.ko=new A.a(2,{jp:"290 \u79c1\u3082\u60b2\u89b3\u7684\u306b\u306a\u3063\u3066\u304d\u3066\u3001\u4ee5\u524d\u306f\u6c7a\u3057\u3066\u6c17\u306b\u306a\u3089\u306a\u304b\u3063\u305f\u3053\u3068\u306b\u4e0d\u5b89\u3092\u611f\u3058\u3066\u3044\u308b\u3002",en:"290 I've gotten pessimistic, and I'm worried about something I would never have been concerned about before."},B.a,t.w)
B.hC=new A.a(2,{jp:"291 \u4eca\u65e5\u3067\u306f\u3001\u30b5\u30e9\u30ea\u30fc\u30de\u30f3\u3067\u3055\u3048\u5927\u5909\u306a\u82e6\u96e3\u306b\u76f4\u9762\u3057\u3066\u3044\u308b\u3002",en:"291 Today, even white-collar workers are confronted with great hardships."},B.a,t.w)
B.fP=new A.a(2,{jp:"292 \u5f53\u5c40\u306f\u901a\u8ca8\u3092\u5b89\u5b9a\u3055\u305b\u3088\u3046\u3068\u61f8\u547d\u3060\u304c\u3001\u3069\u3046\u306b\u3082\u306a\u3089\u306a\u3044\u3002",en:"292 The authorities are striving in vain to stabilize the currency."},B.a,t.w)
B.hb=new A.a(2,{jp:"293 \u65e5\u672c\u306e\u81a8\u5927\u306a\u8d64\u5b57\u3092\u524a\u6e1b\u3059\u308b\u3053\u3068\u304c\u4f55\u3088\u308a\u3082\u7dca\u6025\u3092\u8981\u3059\u308b\u3053\u3068\u3060\u3001\u3068\u3044\u3046\u7d50\u8ad6\u306b\u6211\u3005\u306f\u9054\u3057\u305f\u3002",en:"293 We've come to the conclusion that nothing is more urgent than reducing Japan's huge deficit"},B.a,t.w)
B.aw=new A.a(12,{"282":B.j3,"283":B.dP,"284":B.iZ,"285":B.iu,"286":B.cR,"287":B.b4,"288":B.jo,"289":B.fC,"290":B.ko,"291":B.hC,"292":B.fP,"293":B.hb},B.M,t.j)
B.N=A.f(s(["354","355","356","357","358","359","360","361","362","363","364","365"]),t.s)
B.dA=new A.a(2,{jp:"354 \u30cb\u30c3\u30af\u306f\u305d\u306e\u5831\u916c\u306b\u6e80\u8db3\u3057\u3066\u3044\u306a\u3044\u3002\u5f7c\u306f\u81ea\u5df1\u4e2d\u5fc3\u7684\u3067\u6b32\u304c\u6df1\u3044\u3002",en:"354 Nick is by no means satisfied with the reward. He is selfish and greedy."},B.a,t.w)
B.hN=new A.a(2,{jp:"355 \u300c\u5168\u90e8\u3067200\u30c9\u30eb\u8cb8\u3057\u3066\u308b\u306e\u3001\u30dc\u30d6\u3002\u3044\u3064\u8fd4\u3059\u3064\u3082\u308a\u306a\u306e\uff1f\u300d \u300c\u3054\u3081\u3093\u3001\u91d1\u6b20\u306a\u3093\u3060\u3002\u300d \u300c\u307e\u305f\u306a\u306e\uff1f\u300d",en:'355 "You owe me $200 altogether, Bob. When are you going to pay me back?" "I\'m sorry. I\'m hard up." "There you go again!"'},B.a,t.w)
B.hY=new A.a(2,{jp:"356 \u30d6\u30e9\u30a4\u30a2\u30f3\u304c\u9a5a\u3044\u305f\u3053\u3068\u306b\u3001\u501f\u91d1\u306f\u304b\u306a\u308a\u306e\u984d\u306b\u306a\u3063\u3066\u3044\u305f\u3002",en:"356 To Brian's surprise, his debt amounted to a considerable sum."},B.a,t.w)
B.cW=new A.a(2,{jp:"357 \u904e\u53bb\u306e\u6804\u5149\u306b\u3057\u304c\u307f\u3064\u304f\u306e\u306f\u3084\u3081\u306a\u3044\u3068\u3001\u53d6\u308a\u6b8b\u3055\u308c\u308b\u308f\u3088\u3002",en:"357 Stop clinging to your glory days, or you'll be left behind."},B.a,t.w)
B.h1=new A.a(2,{jp:"358 \u4eca\u65e5\u306e\u53b3\u3057\u3044\u73fe\u5b9f\u304b\u3089\u306f\u9003\u308c\u3089\u308c\u306a\u3044\u4ee5\u4e0a\u3001\u305d\u308c\u306b\u9806\u5fdc\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002",en:"358 You cannot escape from today's harsh realities, so you must adapt to them."},B.a,t.w)
B.h2=new A.a(2,{jp:"359 \u7e41\u6804\u306f\u6c38\u9060\u306b\u7d9a\u304f\u3082\u306e\u3067\u306f\u306a\u3044\u3002\u3064\u307e\u308a\u3001\u3044\u3064\u304b\u306f\u7d42\u308f\u308a\u3092\u8fce\u3048\u308b\u3082\u306e\u3060\u3002",en:"359 Prosperity does not last forever. In other words, it will come to an end one of these days."},B.a,t.w)
B.ey=new A.a(2,{jp:"360 \u305d\u306e\u8077\u7a2e\u306b\u306f\u76f8\u5fdc\u306e\u8cc7\u683c\u3084\u80fd\u529b\u304c\u5fc5\u8981\u3067\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u304c\u4f7f\u3048\u308b\u3053\u3068\u306f\u7d76\u5bfe\u6761\u4ef6\u3067\u3042\u308b\u3002",en:"360 Proper qualifications are required for the position; computer literacy is a must."},B.a,t.w)
B.e7=new A.a(2,{jp:"361 \u3053\u306e\u5c01\u7b52\u306b\u5c65\u6b74\u66f8\u3082\u5165\u308c\u3066\u4eba\u4e8b\u90e8\u306b\u63d0\u51fa\u3057\u3066\u4e0b\u3055\u3044\u3002",en:"361 Enclose your resume in this envelope and submit it to the personnel department."},B.a,t.w)
B.e5=new A.a(2,{jp:"362 \u7269\u4e8b\u304c\u3046\u307e\u304f\u884c\u304f\u3068\u4fe1\u3058\u308b\u306a\u3093\u3066\u541b\u3082\u697d\u89b3\u7684\u3060\u306d\u3002\u53ef\u80fd\u6027\u306f\u305b\u3044\u305c\u304450%\u3060\u3088\u3002",en:"362 It's optimistic of you to believe that things will work out. At best there's a fifty-fifty chance."},B.a,t.w)
B.cJ=new A.a(2,{jp:"363 \u767b\u9332\u7528\u7d19\u306f\u7121\u6599\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002",en:"363 Registration forms can be obtained free of charge."},B.a,t.w)
B.bL=new A.a(2,{jp:"364 \u3053\u306e\u8b1b\u7fd2\u4f1a\u306b\u53c2\u52a0\u3092\u3054\u5e0c\u671b\u306e\u65b9\u306f\u3001\u4eca\u3059\u3050\u304a\u96fb\u8a71\u4e0b\u3055\u3044\u3002",en:"364 Please give us a call now if you want to participate in the workshop!"},B.a,t.w)
B.bh=new A.a(2,{jp:"365 \u3055\u3089\u306b\u3054\u8cea\u554f\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001\u3069\u3046\u305e\u3054\u9060\u616e\u306a\u304f\u30d5\u30ea\u30fc\u30c0\u30a4\u30e4\u30eb1-800-555-1212\u307e\u3067\u304a\u96fb\u8a71\u304f\u3060\u3055\u3044\u3002",en:"365 For further inquiries, please feel free to contact us toll-free at 1-800-555-1212."},B.a,t.w)
B.ax=new A.a(12,{"354":B.dA,"355":B.hN,"356":B.hY,"357":B.cW,"358":B.h1,"359":B.h2,"360":B.ey,"361":B.e7,"362":B.e5,"363":B.cJ,"364":B.bL,"365":B.bh},B.N,t.j)
B.ah=A.f(s(["294","295","296","297","298","299","300","301","302","303"]),t.s)
B.cr=new A.a(2,{jp:"294 \u30a2\u30f3\u30b1\u30fc\u30c8\u7528\u7d19\u304c\u7121\u4f5c\u70ba\u306b\u914d\u5e03\u3055\u308c\u305f\u3002",en:"294 The questionnaires were distributed at random."},B.a,t.w)
B.kH=new A.a(2,{jp:"295 \u4ee5\u4e0b\u306e\u7a7a\u6b04\u90e8\u5206\u306b\u3054\u8a18\u5165\u3044\u305f\u3060\u304f\u3060\u3051\u3067\u7d50\u69cb\u3067\u3059\u3002\uff08\u9ed2\u307e\u305f\u306f\u9752\u30a4\u30f3\u30af\u3067\u306f\u3063\u304d\u308a\u3068\u66f8\u3044\u3066\u4e0b\u3055\u3044\uff09",en:"295 All you have to do is fill in the blanks below. (Please print in black or blue ink.)"},B.a,t.w)
B.jK=new A.a(2,{jp:"296 10%\u306e\u5272\u5f15\u306b\u52a0\u3048\u3066\u3001\u7121\u6599\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u30c4\u30a2\u30fc\u3092\u4e00\u3064\u9078\u629e\u3067\u304d\u307e\u3059\u3002",en:"296 In addition to a 10% discount, you can pick out an optional excursion for free."},B.a,t.w)
B.jv=new A.a(2,{jp:"297 \u5404\u76ee\u7684\u5730\u307e\u3067\u306e\u5f80\u5fa9\u6599\u91d1\u306f\u4e0b\u8a18\u306e\u901a\u308a\u3067\u3059\u3002",en:"297 Round-trip fares to each destination are as follows."},B.a,t.w)
B.dr=new A.a(2,{jp:"298 \u300c\u4e8b\u524d\u306b\u4e88\u7d04\u306e\u78ba\u8a8d\u3092\u3059\u308b\u306e\u3092\u5fd8\u308c\u306a\u3044\u3067\u306d\u3002\u300d \u300c\u3048\u3048\u3002\u300d",en:'298 "Don\'t forget to confirm your reservation in advance." "I won\'t."'},B.a,t.w)
B.eU=new A.a(2,{jp:"299 \u9045\u304f\u3068\u3082\u51fa\u767a\u6642\u523b\u306e45\u5206\u524d\u306b\u306f\u642d\u4e57\u624b\u7d9a\u304d\u3092\u5fc5\u305a\u5b8c\u4e86\u3055\u305b\u3066\u4e0b\u3055\u3044\u3002",en:"299 Be sure to check in at least 45 minutes prior to departure time."},B.a,t.w)
B.bU=new A.a(2,{jp:"300 \u81ea\u5206\u306e\u8377\u7269\u306b\u540d\u672d\u3092\u4ed8\u3051\u305f\u3051\u308c\u3069\u3082\u3001\u3059\u3050\u306b\u53d6\u308c\u3066\u3057\u307e\u3063\u305f\u3002",en:"300 I attached my name tag to my baggage, but it soon came off."},B.a,t.w)
B.cw=new A.a(2,{jp:"301 \u3053\u308c\u3089\u306e\u5c0f\u5305\u306e\u91cd\u3055\u306f\u5e73\u5747\u3059\u308b\u30682\u30dd\u30f3\u30c9\u3067\u3059\u3002",en:"301 On average, these packages weigh two pounds."},B.a,t.w)
B.jO=new A.a(2,{jp:"302 \u3053\u306e\u30d3\u30cb\u30fc\u30eb\u88fd\u306e\u30b4\u30df\u888b\u306f\u6709\u5bb3\u306a\u5316\u5b66\u7269\u8cea\u3092\u542b\u3093\u3067\u3044\u307e\u305b\u3093\u3002",en:"302 This plastic garbage bag is free of hazardous chemicals."},B.a,t.w)
B.iG=new A.a(2,{jp:"303 \u3053\u306e\u61d0\u4e2d\u96fb\u706f\u306f\u660e\u304b\u308a\u304c\u5f31\u304f\u306a\u3063\u3066\u304d\u305f\u3002\u96fb\u6c60\u3092\u5165\u308c\u66ff\u3048\u306a\u3044\u3068\u3002",en:"303 This flashlight is getting dim. It needs new batteries."},B.a,t.w)
B.kX=new A.a(10,{"294":B.cr,"295":B.kH,"296":B.jK,"297":B.jv,"298":B.dr,"299":B.eU,"300":B.bU,"301":B.cw,"302":B.jO,"303":B.iG},B.ah,t.j)
B.ad=A.f(s(["273","274","275","276","277","278","279","280","281"]),t.s)
B.hE=new A.a(2,{jp:"273 \u660e\u3089\u304b\u306b\u305d\u306e\u5e83\u544a\u306f10\u4ee3\u306e\u82e5\u8005\u5c64\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u3066\u3044\u308b\u3002",en:"273 Obviously, the advertisement is aimed at teenagers."},B.a,t.w)
B.b3=new A.a(2,{jp:"274 \u73fe\u5728\u5efa\u8a2d\u4e2d\u306e\u305d\u306e\u5de5\u5834\u306f\u3001\u4e00\u65e5\u5f53\u305f\u308a1000\u53f0\u306e\u30d3\u30c7\u30aa\u30c7\u30c3\u30ad\u3092\u7d44\u7acb\u3066\u308b\u3053\u3068\u306b\u306a\u308b\u3002",en:"274 The factory now under construction will assemble 1,000 VCR units per day."},B.a,t.w)
B.ev=new A.a(2,{jp:"275 \u52b9\u7387\u7684\u306a\u6a5f\u68b0\u304c\u3001\u8089\u4f53\u52b4\u50cd\u306b\u53d6\u3063\u3066\u4ee3\u308f\u3063\u305f\u3002",en:"275 Efficient machinery replaced manual labor."},B.a,t.w)
B.c1=new A.a(2,{jp:"276 \u5f53\u6642\u3001\u305d\u306e\u5de8\u5927\u4f01\u696d\u304c\u56fd\u5185\u306e\u5546\u696d\u3092\u4e8b\u5b9f\u4e0a\u72ec\u5360\u3057\u3066\u3044\u305f\u3002",en:"276 In those days, the gigantic corporation had a virtual monopoly over internal commerce."},B.a,t.w)
B.hf=new A.a(2,{jp:"277 \u5236\u9650\u304c\u89e3\u9664\u3055\u308c\u3001\u6570\u5343\u306e\u65b0\u3057\u3044\u4f01\u696d\u304c\u8a95\u751f\u3057\u305f\u3002",en:"277 With restrictions removed, thousands of new enterprises have come into being."},B.a,t.w)
B.iT=new A.a(2,{jp:"278 \u3070\u304b\u3052\u305f\u65b0\u4e8b\u696d\u306e\u7d50\u679c\u3001\u5f7c\u306f\u7834\u7523\u306e\u5371\u6a5f\u306b\u7015\u3057\u3066\u3044\u308b\u3002",en:"278 As a result of his ridiculous venture, he is in danger of going bankrupt."},B.a,t.w)
B.bG=new A.a(2,{jp:"279 \u6628\u5e74\u3068\u6bd4\u3079\u3066\u3001\u58f2\u4e0a\u306e\u6570\u5b57\u3060\u3051\u3092\u898b\u308c\u3070\u4e8b\u696d\u306f\u4e0a\u5411\u3044\u3066\u3044\u308b\u3002\u3057\u304b\u3057\u306a\u304c\u3089\u3001\u5229\u76ca\u306f\u307e\u3060\u5168\u304f\u51fa\u3066\u3044\u306a\u3044\u3002",en:"279 Compared to the previous year, business is looking up in terms of sales. However, we haven't made any profit yet."},B.a,t.w)
B.ex=new A.a(2,{jp:"280 \u300c\u6d77\u5916\u306e\u652f\u5e97\u306b\u8ee2\u52e4\u3059\u308b\u3053\u3068\u306b\u306a\u3063\u305f\u3088\u3002\u300d \u300c\u3048\u3063\u3002\u5bc2\u3057\u304f\u306a\u308b\u308f\u3002\u624b\u7d19\u3067\u3082\u4e0b\u3055\u3044\u306d\u3002\u300d",en:'280 "I\'m going to be transferred to an overseas branch." "Oh, I\'ll miss you. Please drop me a line."'},B.a,t.w)
B.jB=new A.a(2,{jp:"281 \u5f7c\u304c\u51fa\u5f35\u4e2d\u306b\u3001\u5965\u3055\u3093\u304c\u7537\u306e\u5b50\u306e\u8d64\u3061\u3083\u3093\u3092\u51fa\u7523\u3057\u305f\u3002",en:"281 While he was away on business, his wife gave birth to a baby boy."},B.a,t.w)
B.kT=new A.a(9,{"273":B.hE,"274":B.b3,"275":B.ev,"276":B.c1,"277":B.hf,"278":B.iT,"279":B.bG,"280":B.ex,"281":B.jB},B.ad,t.j)
B.a9=A.f(s(["393","394","395","396","397","398","399","400","401","402","403"]),t.s)
B.hH=new A.a(2,{jp:"393 \u79c1\u305f\u3061\u306f\u653f\u6cbb\u5bb6\u3068\u3044\u3046\u3068\u507d\u5584\u3092\u9023\u60f3\u3057\u304c\u3061\u3060\u3002",en:"393 We tend to associate politicians with hypocrisy."},B.a,t.w)
B.bE=new A.a(2,{jp:"394 \u5f7c\u3089\u306e\u4e00\u756a\u306e\u95a2\u5fc3\u4e8b\u306f\u3001\u79c1\u305f\u3061\u306e\u751f\u6d3b\u6c34\u6e96\u3092\u9ad8\u3081\u308b\u3053\u3068\u3067\u306f\u306a\u304f\u3001\u79c1\u305f\u3061\u304b\u3089\u643e\u53d6\u3059\u308b\u3053\u3068\u3060\u3002",en:"394 They are primarily concerned with exploiting us, not with enhancing our living standards."},B.a,t.w)
B.ct=new A.a(2,{jp:"395 \u305d\u306e\u7537\u306f\u304b\u3064\u3066\u4fdd\u5b88\u653f\u515a\u306b\u5bfe\u3057\u3066\u652f\u914d\u7684\u5f71\u97ff\u529b\u3092\u53ca\u307c\u3057\u3066\u3044\u305f\u304c\u3001\u4eca\u3067\u306f\u5f7c\u306e\u529b\u3082\u5f31\u307e\u3063\u3066\u3044\u308b\u3002",en:"395 The man once exerted a dominant influence on the conservative party, but now his power is diminishing."},B.a,t.w)
B.hy=new A.a(2,{jp:"396 \u5831\u9053\u62c5\u5f53\u8005\u306f\u300c\u8abf\u67fb\u4e2d\u3067\u3059\u300d\u3068\u8a00\u3063\u3066\u4e00\u5207\u306e\u30b3\u30e1\u30f3\u30c8\u3092\u62d2\u5426\u3057\u305f\u3002",en:'396 The spokesperson refused to make any comment, saying, "It\'s under investigation."'},B.a,t.w)
B.eH=new A.a(2,{jp:"397 \u80cc\u5f8c\u3067\u7cf8\u3092\u5f15\u3044\u3066\u3044\u308b\u4eba\u7269\u304c\u3044\u308b\u3068\u8b66\u5bdf\u306f\u8a00\u3063\u3066\u3044\u308b\u3002",en:"397 The police say there's someone pulling strings behind the scenes."},B.a,t.w)
B.kt=new A.a(2,{jp:"398 \u5f79\u54e1\u305f\u3061\u306f\u4f55\u3089\u304b\u306e\u898b\u8fd4\u308a\u3092\u671f\u5f85\u3057\u3066\u3001\u5b98\u50da\u305f\u3061\u3092\u6599\u4ead\u3001\u3059\u306a\u308f\u3061\u3001\u9ad8\u7d1a\u306a\u65e5\u672c\u6599\u7406\u5e97\u3067\u63a5\u5f85\u3057\u305f\u3002",en:"398 The executives entertained the bureaucrats at ryotei, or exclusive Japanese restaurants, hoping for something in return."},B.a,t.w)
B.dn=new A.a(2,{jp:"399 \u5f7c\u306e\u79d8\u66f8\u306f\u6a5f\u5bc6\u60c5\u5831\u3092\u3044\u3063\u3055\u3044\u6f0f\u3089\u3057\u3066\u3044\u306a\u3044\u3068\u660e\u8a00\u3057\u305f\u3002",en:"399 His secretary flatly denied leaking any confidential information."},B.a,t.w)
B.cb=new A.a(2,{jp:"400 \u30af\u30d3\u306b\u306a\u308b\u306e\u304c\u6016\u3044\u304b\u3089\u3001\u96c7\u7528\u4e3b\u306b\u3042\u3048\u3066\u9006\u3089\u304a\u3046\u3068\u3059\u308b\u4eba\u306f\u8ab0\u4e00\u4eba\u3068\u3057\u3066\u3044\u306a\u3044\u3002",en:"400 No one dares to contradict his/her employer for fear of being fired."},B.a,t.w)
B.hK=new A.a(2,{jp:"401 \u5f7c\u306f\u81ea\u5206\u306e\u5c0a\u53b3\u3092\u5b88\u308b\u305f\u3081\u306b\u3001\u5c06\u6765\u6709\u671b\u306a\u7d4c\u6b74\u3092\u72a0\u7272\u306b\u3057\u305f\u3002",en:"401 He sacrificed his promising career to retain his dignity."},B.a,t.w)
B.kg=new A.a(2,{jp:"402 \u81ea\u5206\u306e\u904b\u547d\u306b\u7518\u3093\u3058\u308b\u3050\u3089\u3044\u306a\u3089\u81ea\u6bba\u3057\u305f\u65b9\u304c\u307e\u3057\u3060\u3002",en:"402 I might as well kill myself as reconcile myself to my fate."},B.a,t.w)
B.eO=new A.a(2,{jp:"403 \u6bd2\u7269\u3092\u98f2\u3093\u3067\u81ea\u6bba\u3057\u3088\u3046\u3068\u3057\u305f\u76f4\u524d\u306b\u5f7c\u306f\u601d\u3044\u3068\u3069\u307e\u3063\u305f\u3002",en:"403 He was about to commit suicide by swallowing poison when he thought better of it."},B.a,t.w)
B.kP=new A.a(11,{"393":B.hH,"394":B.bE,"395":B.ct,"396":B.hy,"397":B.eH,"398":B.kt,"399":B.dn,"400":B.cb,"401":B.hK,"402":B.kg,"403":B.eO},B.a9,t.j)
B.Q=A.f(s(["342","343","344","345","346","347","348","349","350","351","352","353"]),t.s)
B.fE=new A.a(2,{jp:"342 \u6a5f\u304c\u719f\u3057\u305f\u3089\u3001\u5927\u80c6\u306b\u7a81\u304d\u9032\u3080\u3093\u3060\uff01\u50d5\u304c\u3044\u3064\u3082\u305d\u3070\u306b\u3044\u308b\u3002",en:"342 When the time is ripe, be bold and go for it! I'll stand by you."},B.a,t.w)
B.f2=new A.a(2,{jp:"343 \u81ea\u5206\u306e\u4fe1\u5ff5\u3092\u5b88\u308b\u305f\u3081\u306b\u306f\u7acb\u3061\u4e0a\u304c\u308b\u3057\u3001\u3044\u304b\u306a\u308b\u8105\u5a01\u306b\u3082\u5c48\u3057\u306a\u3044\u3064\u3082\u308a\u3060\u3002",en:"343 I'll stand up for what I believe in and won't yield to any threats."},B.a,t.w)
B.k7=new A.a(2,{jp:"344 \u300c\u81ea\u5206\u306e\u5f31\u70b9\u3092\u514b\u670d\u3067\u304d\u3055\u3048\u3059\u308c\u3070\u306a\u3042\u3002\u300d \u300c\u3042\u306a\u305f\u6b21\u7b2c\u3088\u3002\u300d",en:'344 "If only I could conquer my weaknesses!" "It\'s up to you."'},B.a,t.w)
B.e_=new A.a(2,{jp:"345 \u81ea\u5206\u306e\u624d\u80fd\u3092\u793a\u3059\u305f\u3081\u306b\u3001\u3081\u3063\u305f\u306b\u306a\u3044\u3053\u306e\u6a5f\u4f1a\u3092\u6700\u5927\u9650\u306b\u5229\u7528\u3059\u308b\u3079\u304d\u3060\u3002",en:"345 You should make the most of this rare opportunity to demonstrate your talent."},B.a,t.w)
B.jI=new A.a(2,{jp:"346 \u50d5\u3092\u304c\u3063\u304b\u308a\u3055\u305b\u306a\u3044\u3088\u306d\u3002\u4fe1\u983c\u3057\u3066\u3044\u308b\u3088\u3002\u541b\u306a\u3089\u3046\u307e\u304f\u3084\u308c\u308b\u3055\uff01",en:"346 You won't let me down. I have great faith in you. You can make it!"},B.a,t.w)
B.iv=new A.a(2,{jp:"347 \u89b3\u5ba2\u305f\u3061\u306f\u5f7c\u5973\u306e\u512a\u96c5\u306a\u6f14\u6280\u306b\u611f\u52d5\u3057\u305f\u3002",en:"347 The spectators were moved by her graceful performance."},B.a,t.w)
B.ff=new A.a(2,{jp:"348 1995\u5e74\u3001\u5b89\u85e4\u6c0f\u306f\u5efa\u7bc9\u306b\u304a\u3051\u308b\u6700\u3082\u6a29\u5a01\u3042\u308b\u8cde\u3092\u53d7\u8cde\u3057\u305f\u3002",en:"348 In 1995, Ando received architecture's most prestigious award."},B.a,t.w)
B.eu=new A.a(2,{jp:"349 \u9006\u5883\u3092\u3082\u306e\u3068\u3082\u305b\u305a\u3001\u30de\u30a4\u30af\u306f\u3059\u3070\u3089\u3057\u3044\u5049\u696d\u3092\u6210\u3057\u9042\u3052\u305f\u3002\u79f0\u8cdb\u3092\u53d7\u3051\u308b\u306e\u306f\u5f53\u7136\u3060\u3002",en:"349 In the face of adversity, Mike accomplished an extraordinary feat. He deserves praise."},B.a,t.w)
B.hi=new A.a(2,{jp:"350 \u8074\u8846\u306f\u5f7c\u306e\u8aac\u5f97\u529b\u306e\u3042\u308b\u8b1b\u7fa9\u306b\u611f\u9298\u3092\u53d7\u3051\u305f\u3002",en:"350 The audience was impressed by his eloquent lecture."},B.a,t.w)
B.kc=new A.a(2,{jp:"351 \u5eb6\u6c11\u306e\u8eab\u304b\u3089\u3001\u30b8\u30e7\u30f3\u306f\u4e16\u754c\u7684\u306a\u540d\u58f0\u3092\u52dd\u3061\u53d6\u3063\u305f\u3002",en:"351 From a humble background, John achieved worldwide fame."},B.a,t.w)
B.kl=new A.a(2,{jp:"352 \u5f7c\u306f\u6226\u5f8c\u306b\u83ab\u5927\u306a\u8ca1\u7523\u3092\u7bc9\u3044\u305f\u3002",en:"352 He accumulated a tremendous fortune during the postwar era."},B.a,t.w)
B.eg=new A.a(2,{jp:"353 \u5f7c\u306f\u4ee5\u524d\u306f\u88d5\u798f\u3067\u6c17\u524d\u3082\u3088\u304b\u3063\u305f\u3051\u308c\u3069\u3001\u4eca\u3067\u306f\u305d\u306e\u65e5\u66ae\u3089\u3057\u3060\u3002",en:"353 He used to be well off and generous, but now he lives from hand to mouth."},B.a,t.w)
B.aA=new A.a(12,{"342":B.fE,"343":B.f2,"344":B.k7,"345":B.e_,"346":B.jI,"347":B.iv,"348":B.ff,"349":B.eu,"350":B.hi,"351":B.kc,"352":B.kl,"353":B.eg},B.Q,t.j)
B.aj=A.f(s(["366","367","368","369","370","371","372","373","374","375","376","377","378","379","380","381","382"]),t.s)
B.i5=new A.a(2,{jp:"366 \u300c\u30dc\u30d6\u3001\u6700\u8fd1\u3069\u3046\uff1f\u300d \u300c\u6700\u9ad8\u3060\u3088\uff01\u5c31\u8077\u9762\u63a5\u304c\u3046\u307e\u304f\u3044\u3063\u305f\u3093\u3060\u3002\u300d \u300c\u3084\u3063\u305f\u3058\u3083\u306a\u3044\uff01\u300d",en:'366 "How\'s it going, Bob?" "Couldn\'t be better! I did well in my job interview!" "Good for you!"'},B.a,t.w)
B.hw=new A.a(2,{jp:"367 \u7814\u4fee\u751f\u305f\u3061\u306f\u3001\u5f7c\u304b\u3089\u4e0e\u3048\u3089\u308c\u305f\u6307\u793a\u304c\u3055\u3063\u3071\u308a\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u3002",en:"367 He gave instructions to the trainees, but they couldn't make heads or tails of them."},B.a,t.w)
B.jr=new A.a(2,{jp:"368 \u4e00\u5ea6\u306b\u4e8c\u3064\u306e\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3088\u3002\u7121\u7406\u306b\u6c7a\u307e\u3063\u3066\u308b\u3002\u4e00\u3064\u305a\u3064\u3084\u308a\u306a\u3088\u3002",en:"368 You can't do two things at one time! It's out of the question. Do them one by one."},B.a,t.w)
B.bT=new A.a(2,{jp:"369 \u300c\u30dc\u30d6\u3001\u5f7c\u5973\u306e\u90aa\u9b54\u3092\u3057\u3061\u3083\u3060\u3081\u3060\u305e\u3002\u3061\u3087\u3063\u304b\u3044\u3092\u51fa\u3059\u306a\u3088\u3002\u300d\u3068\u5f7c\u306f\u5c0f\u58f0\u3067\u8a00\u3063\u305f\u3002",en:'369 "Bob, don\'t disturb her. Mind your own business," he whispered.'},B.a,t.w)
B.ir=new A.a(2,{jp:"370 \u305d\u3046\u3084\u3063\u3066\u3057\u3064\u3053\u304f\u5f7c\u5973\u3092\u56f0\u3089\u305b\u308b\u3068\u3001\u5f7c\u5973\u3082\u6012\u308a\u51fa\u3059\u305e\u3002",en:"370 If you persist in bothering her like that, she'll lose her temper."},B.a,t.w)
B.fu=new A.a(2,{jp:"371 \u5f7c\u306f\u3042\u307e\u308a\u306b\u5b50\u4f9b\u3060\u304b\u3089\u8a98\u60d1\u306b\u52dd\u3066\u306a\u304b\u3063\u305f\u3002",en:"371 He was so childish that he couldn't resist temptation."},B.a,t.w)
B.kC=new A.a(2,{jp:"372 \u300c\u304e\u3083\u3042\u304e\u3083\u3042\u8a00\u3046\u306e\u306f\u3084\u3081\u3066\u3002\u672c\u5f53\u306b\u3044\u3089\u3044\u3089\u3059\u308b\u308f\u3002\u300d\u3068\u5f7c\u5973\u306f\u53eb\u3093\u3060\u3002",en:'372 "Stop making a fuss. It really gets on my nerves!" she shouted.'},B.a,t.w)
B.kb=new A.a(2,{jp:"373 \u30cb\u30c3\u30af\u306b\u53e3\u7b54\u3048\u3057\u305f\u3063\u3066\u7121\u99c4\u3060\u3088\u3002\u8a00\u3063\u3066\u307f\u308a\u3083\u5f7c\u306f\u72ec\u88c1\u8005\u3055\u3002",en:'373 There\'s no point in talking back to Nick. He is a "dictator," so to speak.'},B.a,t.w)
B.k_=new A.a(2,{jp:"374 \u5f7c\u5973\u305f\u3061\u306f\u5f7c\u306e\u524d\u3067\u306f\u3068\u3066\u3082\u793c\u5100\u6b63\u3057\u3044\u304c\u3001\u5b9f\u969b\u306b\u306f\u3001\u3044\u3064\u3082\u9670\u53e3\u3092\u53e9\u3044\u3066\u3044\u308b\u3002",en:"374 They are very polite in his presence, but actually, they always talk about him behind his back."},B.a,t.w)
B.cG=new A.a(2,{jp:"375 \u300c\u30cb\u30c3\u30af\u3092\u8efd\u8511\u3057\u3066\u3044\u308b\u3093\u3060\u308d\u3046\uff1f\u300d \u300c\u3068\u3093\u3067\u3082\u306a\u3044\uff01\u5c0a\u656c\u3057\u3066\u3044\u308b\u308f\u3002\u300d",en:'375 "You despise Nick, don\'t you?" "On the contrary! I look up to him."'},B.a,t.w)
B.f6=new A.a(2,{jp:"376 \u5f7c\u306e\u7d76\u3048\u9593\u306a\u3044\u4fae\u8fb1\u304c\u3001\u5f7c\u5973\u306e\u6012\u308a\u3092\u304b\u304d\u7acb\u3066\u305f\u3002",en:"376 His constant insults aroused her anger."},B.a,t.w)
B.je=new A.a(2,{jp:"377 \u66f8\u985e\u306e\u6574\u7406\u3068\u304b\u304a\u8336\u304f\u307f\u306b\u306f\u3001\u307b\u3068\u307b\u3068\u3046\u3093\u3056\u308a\u3002\u4f1a\u793e\u3092\u8f9e\u3081\u308b\u3053\u3068\u306b\u3057\u305f\u308f\uff01",en:"377 I'm fed up with just shuffling papers and pouring coffee. I've made up my mind to quit!"},B.a,t.w)
B.bM=new A.a(2,{jp:"378 \u5b9f\u969b\u3001\u591a\u304f\u306e\u4eba\u3005\u304c\u5bb6\u8a08\u306e\u3084\u308a\u304f\u308a\u306b\u82e6\u52b4\u3057\u3066\u3044\u308b\u3002\u6708\u300510\u4e07\u5186\u3067\u3069\u3046\u3057\u305f\u3089\u3084\u3063\u3066\u3044\u3051\u308b\u3060\u308d\u3046\uff1f",en:"378 In reality, many people have difficulty making ends meet. How can you get by on 100,000 yen a month?"},B.a,t.w)
B.bN=new A.a(2,{jp:"379 \u5973\u6027\u8077\u54e1\u304c\u81ea\u5206\u305f\u3061\u306e\u65e5\u5e38\u696d\u52d9\u306b\u4e0d\u6e80\u3092\u8a00\u3046\u306e\u3082\u3082\u3063\u3068\u3082\u3060\u3002\u5168\u304f\u3084\u308a\u304c\u3044\u306e\u7121\u3044\u4ed5\u4e8b\u3060\u304b\u3089\u3002",en:"379 Female clerks may well complain about their routines, which are not challenging at all."},B.a,t.w)
B.br=new A.a(2,{jp:"380 \u629c\u672c\u7684\u306b\u4e8b\u696d\u306e\u518d\u69cb\u7bc9\u3092\u304a\u3053\u306a\u3063\u305f\u304a\u304b\u3052\u3067\u3001\u5f53\u793e\u306e\u9ed2\u5b57\u306f3\u500d\u306b\u81a8\u3089\u3093\u3060\u3002",en:"380 Thanks to a fundamental restructuring, our surplus has swelled threefold."},B.a,t.w)
B.bx=new A.a(2,{jp:"381 \u73fe\u5728\u306e\u591a\u304f\u306e\u4eba\u304c\u3001\u4f1a\u793e\u306b\u5bfe\u3059\u308b\u5fe0\u8aa0\u306f\u3070\u304b\u3052\u305f\u8003\u3048\u3060\u3068\u601d\u3063\u3066\u3044\u308b\u3002",en:"381 Many people today think of loyalty to a company as an absurd notion."},B.a,t.w)
B.h0=new A.a(2,{jp:"382 \u50d5\u306f\u9060\u3044\u90ca\u5916\u304b\u3089\u308f\u3056\u308f\u3056\u901a\u52e4\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u3082\u3046\u3046\u3093\u3056\u308a\u3060\uff01",en:"382 I have to commute all the way from a distant suburb. I'm sick of it!"},B.a,t.w)
B.kZ=new A.a(17,{"366":B.i5,"367":B.hw,"368":B.jr,"369":B.bT,"370":B.ir,"371":B.fu,"372":B.kC,"373":B.kb,"374":B.k_,"375":B.cG,"376":B.f6,"377":B.je,"378":B.bM,"379":B.bN,"380":B.br,"381":B.bx,"382":B.h0},B.aj,t.j)
B.a7=A.f(s(["304","305","306","307","308","309","310","311","312","313"]),t.s)
B.jC=new A.a(2,{jp:"304 \u3059\u307f\u307e\u305b\u3093\u3002\u30cb\u30e5\u30fc\u30e8\u30fc\u30af\u5e02\u8857\u306b\u884c\u304f\u30b7\u30e3\u30c8\u30eb\u30d0\u30b9\u306f\u3069\u306e\u4f4d\u306e\u9593\u9694\u3067\u8d70\u3063\u3066\u307e\u3059\u304b\uff1f",en:"304 Excuse me. How often do the shuttle buses run to downtown New York?"},B.a,t.w)
B.cs=new A.a(2,{jp:"305 \u305d\u306e\u30e2\u30fc\u30c6\u30eb\u306f400\u4eba\u3082\u306e\u5bbf\u6cca\u5ba2\u3092\u6cca\u3081\u3089\u308c\u308b\u3002",en:"305 The motel can accommodate as many as 400 guests."},B.a,t.w)
B.jk=new A.a(2,{jp:"306 \u3053\u306e\u30b9\u30a4\u30fc\u30c8\u30eb\u30fc\u30e0\u306f\u3001\u79c1\u306e\u6301\u3063\u3066\u3044\u308b\u30de\u30f3\u30b7\u30e7\u30f3\u306e3\u500d\u306e\u5e83\u3055\u3060\u3002",en:"306 This suite is three times larger than my condominium."},B.a,t.w)
B.iV=new A.a(2,{jp:"307 \u3053\u306e\u65bd\u8a2d\u5185\u3067\u306e\u30b4\u30df\u306e\u6295\u3052\u6368\u3066\u306b\u306f\u3001\u6700\u9ad8500\u30c9\u30eb\u306e\u7f70\u91d1\u304c\u79d1\u305b\u3089\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",en:"307 Littering in this facility is subject to a maximum fine of $500."},B.a,t.w)
B.hm=new A.a(2,{jp:"308 \u3042\u306e\u30ec\u30b9\u30c8\u30e9\u30f3\u306f\u3044\u3064\u3067\u3082\u6df7\u3093\u3067\u3044\u308b\u304b\u3089\u3001\u4e8b\u524d\u306b\u4e88\u7d04\u3092\u3057\u305f\u65b9\u304c\u3044\u3044\u3002",en:"308 That restaurant is always packed. We'd better make a reservation beforehand."},B.a,t.w)
B.df=new A.a(2,{jp:"309 \u300c\u98df\u4e8b\u306e\u90aa\u9b54\u3092\u3057\u3066\u60aa\u3044\u3093\u3060\u3051\u3069\u3001\u3061\u3087\u3063\u3068\u5185\u5bc6\u306b\u8a71\u304c\u3057\u305f\u3044\u306e\u3002\u300d \u300c\u5f8c\u3067\u541b\u306e\u3068\u3053\u308d\u306b\u884c\u304f\u3088\u3002\u300d",en:'309 Sorry to interrupt your meal but I\'d like a word with you in private. "Can I get back to you later?"'},B.a,t.w)
B.dt=new A.a(2,{jp:"310 \u6599\u7406\u4eba\u306f\u5f7c\u306e\u4fe1\u3058\u3089\u308c\u306a\u3044\u307b\u3069\u306e\u98df\u6b32\u306b\u3068\u3066\u3082\u9a5a\u3044\u305f\u3002",en:"310 The cook was astonished at his incredible appetite."},B.a,t.w)
B.fF=new A.a(2,{jp:"311 \u300c\u4e0b\u3067\u4f55\u304c\u8d77\u3053\u3063\u3066\u3044\u308b\u306e\uff1f \u3059\u3054\u304f\u6c17\u306b\u306a\u308b\u308f\u3002\u300d \u300c\u3055\u3042\u3001\u4f55\u3060\u308d\u3046\u3002\u300d",en:'311 "What\'s going on down there? I\'m curious." "I have no idea."'},B.a,t.w)
B.cu=new A.a(2,{jp:"312 \u8208\u596e\u3057\u305f\u30d5\u30a1\u30f3\u305f\u3061\u304c\u3001\u30de\u30a4\u30b1\u30eb\u3092\u4e00\u76ee\u898b\u3088\u3046\u3068\u88cf\u53e3\u306b\u7fa4\u304c\u3063\u3066\u3044\u305f\u3002",en:"312 Excited fans were hanging around the rear exit hoping to catch a glimpse of Michael."},B.a,t.w)
B.fR=new A.a(2,{jp:"313 \u5f7c\u3089\u306f\u6709\u540d\u4eba\u3068\u51fa\u304f\u308f\u3059\u306a\u308a\u3001\u30b5\u30a4\u30f3\u3092\u306d\u3060\u3063\u305f\u3002",en:"313 On encountering the celebrity, they asked for his autograph."},B.a,t.w)
B.kN=new A.a(10,{"304":B.jC,"305":B.cs,"306":B.jk,"307":B.iV,"308":B.hm,"309":B.df,"310":B.dt,"311":B.fF,"312":B.cu,"313":B.fR},B.a7,t.j)
B.a0=A.f(s(["419","420","421","422","423","424","425","426","427","428","429","430","431","432"]),t.s)
B.bJ=new A.a(2,{jp:"419 \u6211\u3005\u306f\u3001\u8ab0\u3067\u3042\u308d\u3046\u3068\u30c6\u30ed\u6d3b\u52d5\u306b\u643a\u308f\u308b\u8005\u306b\u5bdb\u5bb9\u3067\u3044\u308b\u3064\u3082\u308a\u306f\u306a\u3044\u3002",en:"419 We will not tolerate anyone who engages in terrorism."},B.a,t.w)
B.bP=new A.a(2,{jp:"420 \u60aa\u540d\u9ad8\u3044\u53cd\u4e71\u5175\u306f\u3064\u3044\u306b\u6355\u3089\u3048\u3089\u308c\u3001\u62d8\u7f6e\u6240\u306b\u8eab\u67c4\u3092\u62d8\u675f\u3055\u308c\u305f\u3002",en:"420 The notorious rebel was ultimately captured and confined to jail."},B.a,t.w)
B.dB=new A.a(2,{jp:"421 \u66b4\u52d5\u3092\u93ae\u5727\u3059\u308b\u305f\u3081\u306b\u3001\u76f4\u3061\u306b\u8ecd\u968a\u304c\u6d3e\u9063\u3055\u308c\u305f\u3002",en:"421 Troops were swiftly called in to put down the riot."},B.a,t.w)
B.cl=new A.a(2,{jp:"422 \u79c1\u305f\u3061\u306f\u66b4\u529b\u306b\u983c\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u7406\u6027\u306b\u8a34\u3048\u308b\u3079\u304d\u3060\u3002",en:"422 We should appeal to reason instead of resorting to violence."},B.a,t.w)
B.jj=new A.a(2,{jp:"423 \u5f53\u5206\u306e\u9593\u306f\u67d4\u8edf\u306a\u6226\u8853\u3092\u3068\u3063\u3066\u307f\u3066\u306f\u3069\u3046\u3067\u3057\u3087\u3046\u3002",en:"423 I suggest we adopt flexible tactics for the moment."},B.a,t.w)
B.aV=new A.a(2,{jp:"424 \u8ecd\u306f\u5168\u9818\u571f\u3092\u5360\u9818\u3059\u308b\u3053\u3068\u306b\u6210\u529f\u3057\u305f\u3002",en:"424 The armed forces succeeded in occupying the entire territory."},B.a,t.w)
B.jX=new A.a(2,{jp:"425 \u3053\u306e\u3088\u3046\u306a\u72b6\u6cc1\u3067\u306f\u3001\u6575\u306f\u964d\u4f0f\u305b\u3056\u308b\u3092\u5f97\u306a\u3044\u3002\u5f7c\u3089\u304c\u3053\u308c\u4ee5\u4e0a\u6301\u3061\u3053\u305f\u3048\u308b\u3053\u3068\u306f\u4e0d\u53ef\u80fd\u3060\u3002",en:"425 Under the circumstances, the enemy has no choice but to surrender. They can't hold out any longer."},B.a,t.w)
B.dW=new A.a(2,{jp:"426 \u9045\u304b\u308c\u65e9\u304b\u308c\u3001\u4eba\u8cea\u305f\u3061\u306f\u89e3\u653e\u3055\u308c\u308b\u3060\u308d\u3046\u3002",en:"426 Sooner or later, the hostages will be set free."},B.a,t.w)
B.jW=new A.a(2,{jp:"427 \u5c02\u5236\u653f\u6cbb\u306b\u3088\u308b\u652f\u914d\u306e\u3082\u3068\u3067\u3001\u7f6a\u306e\u306a\u3044\u4eba\u3005\u304c\u5e02\u6c11\u6a29\u3092\u5265\u596a\u3055\u308c\u305f\u3002",en:"427 Under the reign of tyranny, innocent people were deprived of their citizenship."},B.a,t.w)
B.fq=new A.a(2,{jp:"428 \u305d\u306e\u547d\u4ee4\u306b\u3044\u3084\u3044\u3084\u5f93\u3046\u5175\u58eb\u3082\u3044\u305f\u3002",en:"428 Some soldiers were reluctant to obey the commands."},B.a,t.w)
B.cX=new A.a(2,{jp:"429 \u5f7c\u306e\u653f\u6a29\u306f\u304d\u3063\u3068\u5d29\u58ca\u3059\u308b\u3002",en:"429 His regime is bound to collapse."},B.a,t.w)
B.j9=new A.a(2,{jp:"430 \u540c\u76df\u8af8\u56fd\u306f\u305d\u306e\u4fb5\u7565\u884c\u70ba\u304c\u56fd\u9023\u6c7a\u8b70\u306b\u9055\u53cd\u3059\u308b\u3082\u306e\u3068\u3057\u3066\u3001\u53b3\u3057\u304f\u975e\u96e3\u3057\u305f\u3002",en:"430 The allies condemned the invasion as a violation of UN resolutions."},B.a,t.w)
B.bK=new A.a(2,{jp:"431 \u305d\u306e\u56fd\u3067\u5185\u4e71\u304c\u52c3\u767a\u3059\u308b\u53ef\u80fd\u6027\u304c\u306a\u3044\u3068\u306f\u65ad\u8a00\u3067\u304d\u306a\u3044\u3002",en:"431 We cannot rule out the possibility that civil war will break out in that country."},B.a,t.w)
B.eN=new A.a(2,{jp:"432 \u305d\u306e\u690d\u6c11\u5730\u306f\u72ec\u7acb\u3092\u5ba3\u8a00\u3057\u3001\u5171\u548c\u56fd\u3068\u306a\u3063\u305f\u3002",en:"432 The colony declared independence and became a republic."},B.a,t.w)
B.aL=new A.a(14,{"419":B.bJ,"420":B.bP,"421":B.dB,"422":B.cl,"423":B.jj,"424":B.aV,"425":B.jX,"426":B.dW,"427":B.jW,"428":B.fq,"429":B.cX,"430":B.j9,"431":B.bK,"432":B.eN},B.a0,t.j)
B.ai=A.f(s(["404","405","406","407","408","409","410","411","412","413","414","415","416","417","418"]),t.s)
B.et=new A.a(2,{jp:"404 \u305d\u306e\u66d6\u6627\u306a\u5642\u306f\u5618\u3060\u3068\u308f\u304b\u3063\u305f\u3002\u3060\u304c\u305d\u308c\u3067\u3082\u3001\u591a\u5c11\u306e\u7591\u3044\u306f\u307e\u3060\u6b8b\u308b\u3002",en:"404 The vague rumor proved to be false. Nevertheless, some skepticism lingers on."},B.a,t.w)
B.hP=new A.a(2,{jp:"405 \u3042\u308b\u653f\u5e9c\u9ad8\u5b98\u304c\u4f01\u696d\u304b\u3089\u8cc4\u8cc2\u3092\u53d7\u3051\u53d6\u3063\u305f\u5bb9\u7591\u3092\u304b\u3051\u3089\u308c\u3066\u3044\u308b\u3002\u3057\u304b\u3057\u3001\u902e\u6355\u3059\u308b\u306b\u306f\u8a3c\u62e0\u304c\u4e0d\u5341\u5206\u3060\u3002",en:"405 A senior official is suspected of accepting bribes from a company, but there isn't sufficient evidence to arrest him."},B.a,t.w)
B.hI=new A.a(2,{jp:"406 \u305d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8cac\u4efb\u8005\u3067\u3042\u3063\u305f\u30b8\u30a7\u30a4\u30bd\u30f3\u304c\u3001\u6c5a\u8077\u306b\u624b\u3092\u67d3\u3081\u305f\u7406\u7531\u3067\u89e3\u4efb\u3055\u308c\u305f\u3002",en:"406 Jason, who was in charge of the project, was dismissed for corruption."},B.a,t.w)
B.h7=new A.a(2,{jp:"407 \u79c1\u306e\u77e5\u308b\u9650\u308a\u3001\u5f7c\u306f\u305d\u306e\u8a50\u6b3a\u306e\u4f01\u307f\u306b\u306f\u95a2\u4e0e\u3057\u3066\u3044\u307e\u305b\u3093\u3002",en:"407 To my knowledge, he has not been involved in the fraud scheme."},B.a,t.w)
B.c4=new A.a(2,{jp:"408 \u95a2\u9023\u66f8\u985e\u306e\u5c71\u3092\u8abf\u3079\u3066\u3044\u304f\u3046\u3061\u306b\u3001\u5f7c\u3089\u306f\u771f\u5b9f\u3092\u3064\u304b\u3093\u3060\u3002",en:"408 They found out the truth while examining a pile of relevant documents."},B.a,t.w)
B.ij=new A.a(2,{jp:"409 \u5f7c\u3089\u304c\u6570\u5341\u5e74\u306b\u308f\u305f\u3063\u3066\u9055\u6cd5\u53d6\u5f15\u3092\u96a0\u853d\u3057\u3066\u3044\u305f\u3053\u3068\u304c\u3001\u516c\u5224\u4e2d\u306b\u660e\u3089\u304b\u306b\u306a\u3063\u305f\u3002",en:"409 During the trial it came to light that they had been covering up illegal transactions for decades."},B.a,t.w)
B.d9=new A.a(2,{jp:"410 \u5211\u4e8b\u306f\u305d\u306e\u5834\u3067\u3001\u5f7c\u306e\u8a3c\u8a00\u3092\u4e00\u8a00\u4e00\u53e5\u6b63\u78ba\u306b\u66f8\u304d\u53d6\u3063\u305f\u3002",en:"410 The detective took down his testimony on the spot, word for word."},B.a,t.w)
B.jJ=new A.a(2,{jp:"411 \u751f\u307e\u308c\u3066\u521d\u3081\u3066\u826f\u5fc3\u306e\u5475\u8cac\u3092\u611f\u3058\u307e\u3057\u305f\u304c\u3001\u305d\u3046\u3059\u308b\u4ee5\u5916\u306b\u305d\u306e\u5834\u3092\u3057\u306e\u3050\u65b9\u6cd5\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002",en:"411 For the first time in my life, I felt a pang of conscience, but there was no other way out."},B.a,t.w)
B.cM=new A.a(2,{jp:"412 \u6628\u65e5\u306e\u591c\u306b\u898b\u305f\u751f\u3005\u3057\u3044\u60aa\u5922\u304c\u307e\u3060\u982d\u304b\u3089\u96e2\u308c\u306a\u3044\u3002",en:"412 I'm still haunted by a vivid nightmare I had last night."},B.a,t.w)
B.ed=new A.a(2,{jp:"413 \u6982\u3057\u3066\u3001\u8a18\u8005\u3068\u3044\u3046\u3082\u306e\u306f\u500b\u4eba\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3092\u4fb5\u5bb3\u3059\u308b\u3053\u3068\u306b\u305f\u3081\u3089\u3044\u3092\u611f\u3058\u306a\u3044\u3002",en:"413 By and large, reporters don't hesitate to intrude on one's privacy."},B.a,t.w)
B.fk=new A.a(2,{jp:"414 \u8457\u8005\u306f\u4f55\u5ea6\u3082\u4f55\u5ea6\u3082\u73fe\u7a3f\u3092\u624b\u76f4\u3057\u3057\u305f\u3002",en:"414 The author revised his manuscript over and over again."},B.a,t.w)
B.j5=new A.a(2,{jp:"415 \u4ed6\u4eba\u306e\u904e\u3061\u3092\u6307\u6458\u3059\u308b\u3053\u3068\u306b\u304b\u3051\u3066\u306f\u3001\u5f7c\u306e\u53f3\u306b\u51fa\u308b\u3082\u306e\u306f\u3044\u306a\u3044\u3002",en:"415 He is second to none when it comes to finding fault with others."},B.a,t.w)
B.fS=new A.a(2,{jp:"416 \u6982\u3057\u3066\u3001\u30a8\u30ea\u30fc\u30c8\u305f\u3061\u306f\u6279\u5224\u306b\u5bfe\u3057\u3066\u920d\u611f\u3060\u3002",en:"416 On the whole, the elite are not sensitive to criticism."},B.a,t.w)
B.dg=new A.a(2,{jp:"417 \u3042\u308b\u5927\u8846\u7d19\u306b\u5f7c\u306f\u9ebb\u85ac\u5e38\u7528\u8005\u3060\u3068\u66b4\u9732\u3055\u308c\u3001\u5f7c\u306e\u8a55\u5224\u306f\u307b\u3068\u3093\u3069\u5730\u306b\u843d\u3061\u305f\u3002",en:"417 When a tabloid revealed that he was a drug addict, his reputation was all but ruined."},B.a,t.w)
B.dd=new A.a(2,{jp:"418 \u5f7c\u3089\u306f\u305d\u306e\u9632\u885b\u8a08\u753b\u3092\u3042\u3089\u3086\u308b\u9762\u304b\u3089\u691c\u8a0e\u3057\u3001\u591a\u6570\u306e\u554f\u984c\u7b87\u6240\u3092\u6307\u6458\u3057\u305f\u3002",en:"418 They considered every aspect of the defense program and pointed out numerous flaws."},B.a,t.w)
B.kY=new A.a(15,{"404":B.et,"405":B.hP,"406":B.hI,"407":B.h7,"408":B.c4,"409":B.ij,"410":B.d9,"411":B.jJ,"412":B.cM,"413":B.ed,"414":B.fk,"415":B.j5,"416":B.fS,"417":B.dg,"418":B.dd},B.ai,t.j)
B.am=A.f(s(["433","434","435","436","437","438","439","440","441","442","443","444","445","446","447","448"]),t.s)
B.bp=new A.a(2,{jp:"433 \u305d\u306e\u9ad8\u6f54\u306a\u611b\u56fd\u8005\u306b\u656c\u610f\u3092\u8868\u3057\u3066\u3001\u5de8\u5927\u306a\u8a18\u5ff5\u7891\u304c\u5efa\u3066\u3089\u308c\u305f\u3002",en:"433 An immense monument was erected in honor of the noble patriot."},B.a,t.w)
B.jq=new A.a(2,{jp:"434 \u5f7c\u306f\u3072\u3056\u307e\u305a\u3044\u3066\u6545\u4eba\u306e\u970a\u306b\u7948\u308a\u3092\u6367\u3052\u305f\u3002",en:"434 He got down on his knees and prayed for the souls of the deceased."},B.a,t.w)
B.jD=new A.a(2,{jp:"435 \u6700\u9ad8\u88c1\u5224\u6240\u306f\u7687\u5c45\u306e\u8fd1\u304f\u306b\u3042\u308b\u3002",en:"435 The Supreme Court is located near the Imperial Palace."},B.a,t.w)
B.cj=new A.a(2,{jp:"436 \u4e2d\u7d76\u5408\u6cd5\u8cdb\u6210\u6d3e\u30b0\u30eb\u30fc\u30d7\u304c\u4e2d\u7d76\u306e\u7981\u6b62\u306b\u5bfe\u3057\u3066\u6297\u8b70\u3057\u305f\u3002",en:"436 The pro-choice group protested against a ban on abortion."},B.a,t.w)
B.cm=new A.a(2,{jp:"437 \u30d5\u30a9\u30fc\u30c9\u4e0a\u9662\u8b70\u54e1\u306f\u305d\u306e\u6fc0\u3057\u3044\u8ad6\u4e89\u306b\u304a\u3044\u3066\u3001\u4e2d\u7acb\u306e\u7acb\u5834\u3092\u5b88\u3063\u305f\u3002",en:"437 Senator Ford remained neutral in the bitter controversy."},B.a,t.w)
B.jf=new A.a(2,{jp:"438 \u30d5\u30a9\u30fc\u30c9\u6c0f\u306f\u3053\u3053\u4e00\u9031\u9593\u305a\u3063\u3068\u56f0\u96e3\u306a\u7acb\u5834\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\u3002\u3082\u306f\u3084\u3001\u5f7c\u306b\u306f\u3069\u3046\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u306a\u3044\u3002",en:"438 Ford has been in a difficult situation all week long. He is no longer capable of coping with it."},B.a,t.w)
B.k1=new A.a(2,{jp:"439 \u9996\u8133\u4f1a\u8ac7\u306f\u4e16\u754c\u4e2d\u3067\u540c\u6642\u306b\u653e\u9001\u3055\u308c\u308b\u4e88\u5b9a\u3060\u3002",en:"439 The summit talks are to be broadcast simultaneously throughout the world."},B.a,t.w)
B.jp=new A.a(2,{jp:"440 \u5916\u4ea4\u7684\u5bfe\u8a71\u306e\u304a\u304b\u3052\u3067\u305d\u306e\u7d1b\u4e89\u306b\u7d42\u6b62\u7b26\u3092\u6253\u3064\u3053\u3068\u304c\u3067\u304d\u305f\u3002",en:"440 Diplomatic dialogue helped put an end to the conflict."},B.a,t.w)
B.hq=new A.a(2,{jp:"441 \u4e21\u56fd\u306e\u76f8\u4e92\u7406\u89e3\u3092\u6df1\u3081\u308b\u305f\u3081\u306b\u3001\u30b8\u30e7\u30f3\u30bd\u30f3\u3055\u3093\u304c\u89aa\u5584\u5927\u4f7f\u306b\u4efb\u547d\u3055\u308c\u305f\u3002",en:"441 Johnson was appointed as a goodwill ambassador to foster understanding between the two nations."},B.a,t.w)
B.iF=new A.a(2,{jp:"442 \u305d\u306e\u5c02\u9580\u5bb6\u306f\u56fd\u969b\u7684\u306a\u7dca\u5f35\u304c\u9ad8\u307e\u3063\u3066\u3044\u304f\u3068\u4e88\u6e2c\u3057\u3066\u3044\u308b\u3002",en:"442 The specialist predicts international tension will build up."},B.a,t.w)
B.eW=new A.a(2,{jp:"443 \u79c1\u306e\u8003\u3048\u3067\u306f\u3001\u6052\u4e45\u7684\u306a\u5e73\u548c\u306a\u3069\u5e7b\u60f3\u306b\u904e\u304e\u306a\u3044\u3002",en:"443 In my opinion, permanent peace is nothing but an illusion."},B.a,t.w)
B.f7=new A.a(2,{jp:"444 \u6c11\u65cf\u7684\u5c11\u6570\u6d3e\u306f\u504f\u898b\u3001\u8ca7\u56f0\u3001\u6291\u5727\u3068\u6226\u3063\u3066\u3044\u308b\u3002",en:"444 Ethnic minorities struggle against prejudice, poverty, and oppression."},B.a,t.w)
B.js=new A.a(2,{jp:"445 \u3059\u3079\u3066\u306e\u5dee\u5225\u3092\u306a\u304f\u3059\u305f\u3081\u306b\u3001\u79c1\u305f\u3061\u306f\u3042\u3089\u3086\u308b\u52aa\u529b\u3092\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002",en:"445 We must make every effort to do away with all discrimination."},B.a,t.w)
B.ky=new A.a(2,{jp:"446 \u79fb\u6c11\u305f\u3061\u306f\u8089\u4f53\u7684\u3001\u7cbe\u795e\u7684\u82e6\u75db\u306b\u8010\u3048\u3066\u304d\u305f\u3002",en:"446 The immigrants have endure physical and mental pain."},B.a,t.w)
B.iS=new A.a(2,{jp:"447 \u305d\u306e\u6539\u6b63\u6848\u306f\u3001\u4eba\u7a2e\u306e\u591a\u69d8\u6027\u3092\u8003\u616e\u3057\u3066\u3044\u306a\u3044\u3068\u306e\u7406\u7531\u3067\u5374\u4e0b\u3055\u308c\u305f\u3002",en:"447 The amendment was rejected because it didn't take racial diversity into account."},B.a,t.w)
B.eV=new A.a(2,{jp:"448 \u8a00\u3046\u307e\u3067\u3082\u306a\u304f\u3001\u96e3\u6c11\u305f\u3061\u306f\u81ea\u7531\u3092\u5f37\u304f\u6c42\u3081\u3066\u3044\u305f\u3002",en:"448 Needless to say, the refugees were longing for freedom."},B.a,t.w)
B.l1=new A.a(16,{"433":B.bp,"434":B.jq,"435":B.jD,"436":B.cj,"437":B.cm,"438":B.jf,"439":B.k1,"440":B.jp,"441":B.hq,"442":B.iF,"443":B.eW,"444":B.f7,"445":B.js,"446":B.ky,"447":B.iS,"448":B.eV},B.am,t.j)
B.ak=A.f(s(["466","467","468","469","470","471","472","473","474","475","476"]),t.s)
B.ic=new A.a(2,{jp:"466 \u901a\u8def\u306e\u5411\u3053\u3046\u304b\u3089\u3001\u8ab0\u304b\u304c\u79c1\u3092\u3058\u3063\u3068\u898b\u3066\u3044\u308b\u306e\u306b\u6c17\u4ed8\u3044\u305f\u306e\u3067\u632f\u308a\u5411\u3044\u305f\u3002\u3057\u304b\u3057\u3001\u8ab0\u306e\u59ff\u3082\u898b\u3048\u306a\u304b\u3063\u305f\u3002",en:"466 I became aware of someone staring at me from across the aisle, so I turned around. But there was no one in sight."},B.a,t.w)
B.iC=new A.a(2,{jp:"467 \u4f55\u8005\u304b\u306b\u8155\u3092\u3064\u304b\u307e\u308c\u3001\u5f7c\u5973\u306f\u6016\u304f\u3066\u60b2\u9cf4\u3092\u4e0a\u3052\u305f\u3002",en:"467 She screamed with horror as someone took hold of her arm."},B.a,t.w)
B.cP=new A.a(2,{jp:"468 \u5f7c\u5973\u306e\u7121\u4e8b\u3092\u77e5\u3089\u3055\u308c\u3066\u3001\u5f7c\u306f\u5b89\u5835\u306e\u305f\u3081\u606f\u3092\u3064\u3044\u305f\u3002",en:"468 Informed of her safety, he breathed a sigh of relief."},B.a,t.w)
B.cE=new A.a(2,{jp:"469 \u9283\u5f3e\u304c\u80f8\u3092\u8cab\u901a\u3057\u3001\u5f7c\u306f\u5371\u7be4\u72b6\u614b\u306b\u9665\u3063\u305f\u3002",en:"469 The bullet penetrated his chest, leaving him in critical condition."},B.a,t.w)
B.f0=new A.a(2,{jp:"470 \u305d\u3046\u306a\u3063\u305f\u306e\u304c\u6545\u610f\u306a\u306e\u304b\u904e\u5931\u306a\u306e\u304b\u3001\u73fe\u5728\u306e\u3068\u3053\u308d\u307e\u3060\u306f\u3063\u304d\u308a\u3057\u306a\u3044\u3002",en:"470 At present, it's still uncertain whether it was done deliberately or by accident."},B.a,t.w)
B.eP=new A.a(2,{jp:"471 \u30c7\u30ea\u30ab\u30a8\u30c3\u30bb\u30f3\u304b\u3089\u706b\u707d\u304c\u767a\u751f\u3057\u3001\u7070\u306e\u5c71\u3092\u6b8b\u3057\u3066\u5168\u713c\u3057\u305f\u3002",en:"471 A deli caught fire and burned down, leaving a heap of ashes."},B.a,t.w)
B.e1=new A.a(2,{jp:"472 \u82b1\u706b\u306e\u8caf\u8535\u5eab\u304c\u7a81\u7136\u7206\u767a\u3057\u3001\u6fc0\u3057\u3044\u708e\u3092\u93ae\u3081\u308b\u307e\u3067\u306b2\u65e5\u9593\u3092\u8981\u3057\u305f\u3002",en:"472 All of a sudden the fireworks warehouse exploded, and it took two days to put out the blaze."},B.a,t.w)
B.fx=new A.a(2,{jp:"473 30\u968e\u5efa\u3066\u306e\u30d3\u30eb\u3067\u7206\u5f3e\u304c\u7206\u767a\u3057\u300150\u4eba\u4ee5\u4e0a\u304c\u91cd\u50b7\u3092\u8ca0\u3063\u305f\u3002",en:"473 A bomb went off in a thirty-story building, and more than fifty people were seriously wounded."},B.a,t.w)
B.fe=new A.a(2,{jp:"474 \u30a2\u30c6\u30cd\u3078\u5411\u304b\u3046\u4e00\u96bb\u306e\u8ca8\u7269\u8239\u304c\u3001\u4f55\u306e\u75d5\u8de1\u3082\u6b8b\u3055\u305a\u306b\u5730\u4e2d\u6d77\u3067\u6c88\u6ca1\u3057\u305f\u3002",en:"474 A cargo vessel, bound for Athens, sank in Mediterranean without a trace."},B.a,t.w)
B.bl=new A.a(2,{jp:"475 \u7121\u8b00\u306a\u7537\u305f\u3061\u304c\u5357\u6975\u63a2\u691c\u4e2d\u306b\u51cd\u6b7b\u3057\u305f\u3002",en:"475 The reckless men froze to death during their expedition to the Antarctic."},B.a,t.w)
B.h4=new A.a(2,{jp:"476 \u540c\u3058\u3053\u3068\u304c\u7e70\u308a\u8fd4\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3001\u305d\u306e\u60b2\u5287\u3092\u5fd8\u308c\u3066\u306f\u306a\u3089\u306a\u3044\u3002",en:"476 The tragedy must be remembered so as not to be repeated."},B.a,t.w)
B.l0=new A.a(11,{"466":B.ic,"467":B.iC,"468":B.cP,"469":B.cE,"470":B.f0,"471":B.eP,"472":B.e1,"473":B.fx,"474":B.fe,"475":B.bl,"476":B.h4},B.ak,t.j)
B.a_=A.f(s(["383","384","385","386","387","388","389","390","391","392"]),t.s)
B.k8=new A.a(2,{jp:"383 \u4f59\u751f\u306f\u81ea\u5206\u306e\u7406\u60f3\u306e\u8ffd\u6c42\u306b\u8cbb\u3084\u3057\u305f\u3044\u3002",en:"383 I want to spend the rest of my life pursuing my ideals."},B.a,t.w)
B.hg=new A.a(2,{jp:"384 \u73fe\u5f79\u3092\u5f15\u9000\u3057\u305f\u5f8c\u3001\u30c6\u30ec\u30b5\u306f\u5b64\u5150\u306e\u4e16\u8a71\u306b\u4e00\u8eab\u3092\u6367\u3052\u305f\u3002",en:"384 After retirement, Teresa devoted herself to caring for orphans."},B.a,t.w)
B.j0=new A.a(2,{jp:"385 \u56f0\u3063\u3066\u3044\u308b\u5b50\u3069\u3082\u305f\u3061\u306e\u305f\u3081\u306b\u3001\u79c1\u305f\u3061\u306f\u52df\u91d1\u6d3b\u52d5\u306b\u5354\u529b\u3057\u305f\u3002",en:"385 For the sake of children in need, we cooperated to collect donations."},B.a,t.w)
B.ce=new A.a(2,{jp:"386 \u305d\u306e\u6148\u5584\u56e3\u4f53\u306b\u306f\u3001\u304a\u3088\u305d20\u5104\u5186\u306e\u5bc4\u4ed8\u3092\u3057\u305f\u4eba\u7269\u306e\u540d\u524d\u304c\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u3002",en:"386 The charity is named after a man who gave away some two billion yen."},B.a,t.w)
B.cq=new A.a(2,{jp:"387 \u5f7c\u306e\u81ea\u53d9\u4f1d\u304c\u4eca\u65e5\u767a\u58f2\u3055\u308c\u3001\u5348\u524d\u4e2d\u306b\u5b8c\u58f2\u3057\u305f\u3002",en:"387 His autobiography was released today and was sold out by noon."},B.a,t.w)
B.fJ=new A.a(2,{jp:"388 \u9ad8\u6f54\u306a\u4eba\u7269\u3060\u3068\u5ea6\u3005\u79f0\u3055\u308c\u308b\u30c6\u30c3\u30c9\u304c\u3001\u5e02\u9577\u306b\u7acb\u5019\u88dc\u3059\u308b\u3002",en:"388 Ted, who is often referred to as a man of integrity, is going to run for mayor."},B.a,t.w)
B.hR=new A.a(2,{jp:"389 \u305d\u306e\u5019\u88dc\u8005\u306f\u9078\u6319\u7d50\u679c\u306b\u843d\u80c6\u3057\u305f\u3002",en:"389 The candidate was disappointed by the outcome of the election."},B.a,t.w)
B.b9=new A.a(2,{jp:"390 \u5e02\u8b70\u4f1a\u306f\u5177\u4f53\u7684\u306a\u554f\u984c\u306b\u3082\u3063\u3068\u7126\u70b9\u3092\u5f53\u3066\u308b\u3079\u304d\u3060\u3002",en:"390 The municipal council should concentrate more on specific issues."},B.a,t.w)
B.bC=new A.a(2,{jp:"391 \u5e74\u91d1\u751f\u6d3b\u8005\u304c\u53b3\u3057\u3044\u751f\u6d3b\u3092\u5f37\u3044\u3089\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u306e\u306f\u4e8b\u5b9f\u3067\u3059\u3002",en:"391 It is the case that those who live on a pension are forced to lead a hard life."},B.a,t.w)
B.jN=new A.a(2,{jp:"392 \u3053\u306e\u30c7\u30fc\u30bf\u306f\u9664\u5916\u3057\u305f\u65b9\u304c\u3044\u3044\u3002\u6b63\u78ba\u3068\u8a00\u3046\u306b\u306f\u307b\u3069\u9060\u3044\u3082\u306e\u3060\u3002",en:"392 We should leave out this data. It's far from accurate."},B.a,t.w)
B.aK=new A.a(10,{"383":B.k8,"384":B.hg,"385":B.j0,"386":B.ce,"387":B.cq,"388":B.fJ,"389":B.hR,"390":B.b9,"391":B.bC,"392":B.jN},B.a_,t.j)
B.V=A.f(s(["518","519","520","521","522","523","524","525","526","527","528","529","530"]),t.s)
B.i3=new A.a(2,{jp:"518 \u3061\u3087\u3063\u3068\u6642\u9593\u3092\u5272\u3044\u3066\u304f\u308c\u307e\u305b\u3093\u304b\uff1f\u4e8c\u4eba\u306b\u3068\u3063\u3066\u5927\u4e8b\u306a\u3053\u3068\u3092\u8a71\u3057\u5408\u3044\u305f\u3044\u3093\u3067\u3059\u3002",en:"518 Can you spare a minute? I'd like to discuss something of importance to both of us."},B.a,t.w)
B.jw=new A.a(2,{jp:"519 \u3042\u306a\u305f\u306b\u306f\u4e9b\u7d30\u306a\u3053\u3068\u306b\u601d\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u79c1\u306b\u3068\u3063\u3066\u305d\u308c\u306f\u6ce8\u610f\u3059\u3079\u304d\u3053\u3068\u306a\u3093\u3067\u3059\u3002",en:"519 It may seem trivial to you but for me it's worth paying attention to."},B.a,t.w)
B.eS=new A.a(2,{jp:"520 \u30dc\u30d6\u306b\u3064\u3044\u3066\u8a00\u3048\u3070\u3001\u5f7c\u306f\u3069\u3093\u306a\u3053\u3068\u3067\u3082\u53d7\u3051\u5165\u308c\u308b\u30bf\u30a4\u30d7\u3060\u304c\u3001\u5bfe\u7167\u7684\u306b\u30b8\u30a7\u30fc\u30f3\u306f\u3068\u3066\u3082\u614e\u91cd\u6d3e\u3060\u3002",en:"520 As far as Bob is concerned, anything goes. By contrast, Jane is very cautious."},B.a,t.w)
B.da=new A.a(2,{jp:"521 \u6c17\u307e\u305a\u3044\u6c88\u9ed9\u306e\u5f8c\u3001\u30d3\u30eb\u306f\u5f7c\u5973\u306e\u624b\u3092\u53d6\u3063\u3066\u4e0a\u306e\u968e\u306b\u5f15\u3063\u5f35\u3063\u3066\u884c\u3063\u305f\u3002",en:"521 After an awkward pause, Bill took her by the hand and dragged her upstairs."},B.a,t.w)
B.b_=new A.a(2,{jp:"522 \u30d3\u30eb\u306f\u305f\u3060\u30e2\u30cb\u30ab\u3092\u6170\u3081\u305f\u304b\u3063\u305f\u3060\u3051\u306a\u306e\u306b\u3001\u5f7c\u5973\u306f\u5f7c\u304c\u81ea\u5206\u306b\u6c17\u304c\u3042\u308b\u306e\u3060\u3068\u89e3\u91c8\u3057\u305f\u3002",en:"522 Bill just wanted to comfort Monica, but she interpreted it as romantic interest."},B.a,t.w)
B.eY=new A.a(2,{jp:"523 \u5f7c\u5973\u304c\u719f\u7761\u3057\u3066\u3044\u308b\u306e\u3092\u78ba\u304b\u3081\u3066\u3001\u5f7c\u306f\u3053\u3063\u305d\u308a\u90e8\u5c4b\u3092\u629c\u3051\u51fa\u3057\u3066\u65c5\u7acb\u3063\u305f\u3002",en:"523 After making sure she was sound asleep, he crept out of the room and set off."},B.a,t.w)
B.kw=new A.a(2,{jp:"524 \u3053\u3053\u3060\u3051\u306e\u8a71\u3060\u3051\u3069\u3001\u30ea\u30b5\u3001\u5973\u306e\u4eba\u3092\u71b1\u304f\u62b1\u64c1\u3057\u3066\u308b\u30cb\u30c3\u30af\u3092\u898b\u3061\u3083\u3063\u305f\u3093\u3060\u3002",en:"524 Between you and me, Lisa, I came across Nick passionately embracing a woman."},B.a,t.w)
B.dk=new A.a(2,{jp:"525 \u305d\u3046\u3044\u3046\u767a\u8a00\u306f\u8aa4\u89e3\u3092\u62db\u304d\u3084\u3059\u3044\u3002",en:"525 Such a remark is open to misunderstanding."},B.a,t.w)
B.h3=new A.a(2,{jp:"526 \u300c\u3082\u3046\u6211\u6162\u3067\u304d\u306a\u3044\u3063\uff01\u300d\u300c\u843d\u3061\u7740\u3051\u3088\u3002\u3059\u3050\u305d\u3053\u306b\u884c\u304f\u304b\u3089\u3002\u300d",en:'526 "I can\'t stand it anymore!" "Calm down. I\'ll come over as soon as possible."'},B.a,t.w)
B.iU=new A.a(2,{jp:"527 \u305d\u3093\u306a\u3053\u3068\u771f\u306b\u53d7\u3051\u3061\u3083\u3060\u3081\u3060\u3088\u3002\u5f7c\u306f\u5927\u3052\u3055\u306b\u8a00\u3046\u50be\u5411\u304c\u3042\u308b\u304b\u3089\u3002",en:"527 Don't take it literally. He is inclined to exaggerate."},B.a,t.w)
B.du=new A.a(2,{jp:"528 \u300c\u30ea\u30b5\u3092\u99ac\u9e7f\u306b\u3057\u305f\u3053\u3068\u3092\u8b1d\u308b\u3079\u304d\u3060\u308f\u3002\u4eca\u56de\u306f\u3084\u308a\u3059\u304e\u3088\u3002\u300d\u300c\u3042\u3042\u3001\u305d\u3046\u3059\u308b\u3088\u3002\u305d\u306e\u5185\u5f7c\u5973\u306e\u6a5f\u5acc\u304c\u76f4\u3063\u305f\u3089\u306d\u3002\u300d",en:'528 "You should apologize to Lisa for making fun of her. You went too far this time." "Yeah .. I will, sometime when she\'s in a better mood."'},B.a,t.w)
B.f8=new A.a(2,{jp:"529 \u300c\u30ea\u30b5\u3001\u30cb\u30c3\u30af\u3068\u3046\u307e\u304f\u3084\u3063\u3066\u308b\uff1f\u300d\u300c\u6642\u3005\u3001\u96e2\u5a5a\u3092\u8003\u3048\u308b\u3053\u3068\u304c\u3042\u308b\u308f\u3002\u300d\u300c\u5197\u8ac7\u3060\u308d\uff01\u300d",en:'529 Lisa, are you getting along with Nick? "Once in a while, I think of divorcing him." "You must be kidding!"'},B.a,t.w)
B.eE=new A.a(2,{jp:"530 \u5f7c\u5973\u306f\u6ce3\u304d\u306a\u304c\u3089\u3001\u5f7c\u304b\u3089\u306e\u624b\u7d19\u3092\u3081\u3061\u3083\u304f\u3061\u3083\u306b\u5f15\u304d\u88c2\u3044\u3066\u6368\u3066\u305f\u3002",en:"530 In tears, she tore up his letter and threw it away."},B.a,t.w)
B.aF=new A.a(13,{"518":B.i3,"519":B.jw,"520":B.eS,"521":B.da,"522":B.b_,"523":B.eY,"524":B.kw,"525":B.dk,"526":B.h3,"527":B.iU,"528":B.du,"529":B.f8,"530":B.eE},B.V,t.j)
B.a5=A.f(s(["457","458","459","460","461","462","463","464","465"]),t.s)
B.ig=new A.a(2,{jp:"457 \u8b66\u5bdf\u306f\u305d\u306e\u6b8b\u8650\u306a\u6bba\u4eba\u4e8b\u4ef6\u306e\u624b\u304c\u304b\u308a\u3092\u635c\u3057\u3066\u3044\u308b\u3002",en:"457 The cops are searching for clues to the brutal murder."},B.a,t.w)
B.k4=new A.a(2,{jp:"458 \u305d\u306e\u7537\u306f\u982d\u304c\u304a\u304b\u3057\u3044\u306b\u9055\u3044\u306a\u3044\u3002\u5584\u60aa\u306e\u533a\u5225\u304c\u3064\u3051\u3089\u308c\u306a\u3044\u3093\u3060\u3002",en:"458 The man must be insane. He can't distinguish vice from virtue."},B.a,t.w)
B.jc=new A.a(2,{jp:"459 \u51f6\u5668\u306b\u6b8b\u3055\u308c\u305f\u6307\u7d0b\u306f\u5bb9\u7591\u8005\u306e\u3082\u306e\u3068\u4e00\u81f4\u3059\u308b\u3002",en:"459 The fingerprints left on the weapon correspond with the suspect's."},B.a,t.w)
B.e9=new A.a(2,{jp:"460 \u305d\u306e\u8457\u540d\u306a\u5fc3\u7406\u5b66\u8005\u304c\u8a98\u62d0\u7f6a\u3067\u8a34\u3048\u3089\u308c\u305f\u3053\u3068\u306b\u3001\u79c1\u305f\u3061\u306f\u307f\u306a\u9a5a\u3044\u305f\u3002",en:"460 It took us all by surprise when the noted psychologist was accused of kidnapping."},B.a,t.w)
B.jL=new A.a(2,{jp:"461 \u966a\u5be9\u56e3\u306b\u3088\u308b\u6709\u7f6a\u8a55\u6c7a\u304c\u5927\u8ad6\u4e89\u306e\u5f15\u304d\u91d1\u3068\u306a\u3063\u305f\u3002",en:"461 The jury's guilty verdict gave rise to widespread debate."},B.a,t.w)
B.dQ=new A.a(2,{jp:"462 \u7537\u306f\u60c5\u5831\u914c\u91cf\u3092\u6c42\u3081\u305f\u304c\u3001\u72af\u3057\u305f\u7f6a\u306b\u5bfe\u3057\u306620\u5e74\u306e\u61f2\u5f79\u5211\u304c\u8a00\u3044\u6e21\u3055\u308c\u305f\u3002",en:"462 The man pleaded for mercy, but he was sentenced to twenty years in prison for his crime."},B.a,t.w)
B.kF=new A.a(2,{jp:"463 \u52e4\u52d9\u4e2d\u306e\u8b66\u5b98\u306f\u3001\u4e00\u4eba\u306e\u304a\u5e74\u5bc4\u308a\u304c\u81ea\u5206\u306e\u80cc\u5f8c\u306b\u8fd1\u3065\u3044\u3066\u304f\u308b\u306e\u306b\u6c17\u4ed8\u3044\u305f\u3002",en:"463 The officer on duty perceived an elderly man coming up behind him."},B.a,t.w)
B.ej=new A.a(2,{jp:"464 \u5f7c\u306f\u305d\u306e\u5bb6\u306b\u62bc\u5165\u308d\u3046\u3068\u3057\u3066\u3044\u308b\u6ce5\u68d2\u3092\u76ee\u306b\u3057\u305f\u3002",en:"464 He caught sight of a thief attempting to break into the house."},B.a,t.w)
B.co=new A.a(2,{jp:"465 \u304a\u3068\u3068\u3044\u3001\u5f7c\u306f\u305d\u306e\u539f\u91ce\u3067\u5947\u5999\u306a\u51fa\u6765\u4e8b\u3092\u76ee\u6483\u3057\u305f\u3002",en:"465 The day before yesterday he witnessed a weird incident in the wilderness."},B.a,t.w)
B.kL=new A.a(9,{"457":B.ig,"458":B.k4,"459":B.jc,"460":B.e9,"461":B.jL,"462":B.dQ,"463":B.kF,"464":B.ej,"465":B.co},B.a5,t.j)
B.a2=A.f(s(["492","493","494","495","496","497","498","499","500","501","502","503","504","505","506"]),t.s)
B.eF=new A.a(2,{jp:"492 \u304b\u306a\u308a\u306e\u6570\u306e\u4eba\u3005\u304c\u3001\u305d\u306e\u592b\u5a66\u306e\u7d50\u5a5a\u8a18\u5ff5\u306e\u304a\u795d\u3044\u306b\u62db\u5f85\u3055\u308c\u3066\u3044\u308b\u3002",en:"492 Quite a few people have been invited to celebrate the couple's anniversary."},B.a,t.w)
B.dc=new A.a(2,{jp:"493 \u3082\u3046\u3059\u3050\u6e96\u5099\u5b8c\u4e86\u3067\u3059\u3002\u305d\u306e\u9593\u3001\u8efd\u98df\u3092\u3054\u81ea\u7531\u306b\u3064\u307e\u3093\u3067\u304f\u3060\u3055\u3044\u3002",en:"493 It won't be long before everything is ready. In the meantime, help yourself to some snacks."},B.a,t.w)
B.fi=new A.a(2,{jp:"494 \u3051\u3070\u3051\u3070\u3057\u3044\u5947\u5999\u306a\u670d\u3092\u7740\u3066\u3044\u305f\u5f7c\u5973\u306f\u3001\u4eba\u6df7\u307f\u306e\u4e2d\u3067\u3082\u3072\u3068\u304d\u308f\u76ee\u7acb\u3063\u305f\u3002",en:"494 Dressed in a loud and peculiar outfit, she stood out in the crowd."},B.a,t.w)
B.jG=new A.a(2,{jp:"495 \u62db\u304b\u308c\u305f\u4eba\u306f\u7686\u3001\u5f7c\u5973\u306e\u3082\u3066\u306a\u3057\u306b\u5fc3\u3092\u6253\u305f\u308c\u305f\u3002",en:"495 All the guests were touched by her hospitality."},B.a,t.w)
B.fs=new A.a(2,{jp:"496 \u5f7c\u5973\u306e\u3088\u308c\u3088\u308c\u306e\u670d\u306f\u3001\u305d\u306e\u5834\u306b\u306f\u3075\u3055\u308f\u3057\u304f\u306a\u304b\u3063\u305f\u3002",en:"496 Her shabby clothes were not suitable for the occasion."},B.a,t.w)
B.hD=new A.a(2,{jp:"497 \u305f\u307e\u305f\u307e\u77e5\u308a\u5408\u3063\u305f\u4eba\u305f\u3061\u3068\u8a71\u3059\u306b\u306f\u3001\u305d\u306e\u8a71\u984c\u306f\u7acb\u3061\u5165\u308a\u904e\u304e\u3066\u3044\u308b\u3002",en:"497 That topic is too intimate to share with casual acquaintances."},B.a,t.w)
B.k0=new A.a(2,{jp:"498 \u30c8\u30e0\u306f\u9154\u3063\u3071\u3089\u3046\u3068\u4e0b\u54c1\u306b\u306a\u3063\u3066\u3001\u4eba\u306b\u4e0d\u5feb\u306a\u601d\u3044\u3092\u3055\u305b\u308b\u304b\u3089\u3001\u8fd1\u3065\u3044\u3061\u3083\u3060\u3081\u3060\u3088\u3002",en:"498 When Tom gets drunk, he gets crude and offensive. Stay away from him."},B.a,t.w)
B.fp=new A.a(2,{jp:"499 \u5f7c\u5973\u304c\u307b\u306e\u3081\u304b\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u5f7c\u306f\u307b\u3068\u3093\u3069\u7406\u89e3\u3067\u304d\u306a\u304b\u3063\u305f\u3002",en:"499 He could hardly comprehend what she was implying."},B.a,t.w)
B.hZ=new A.a(2,{jp:"500 \u5973\u306e\u5b50\u306e\u524d\u3067\u304b\u3089\u304b\u308f\u308c\u3066\u3001\u30dc\u30d6\u306f\u6065\u305a\u304b\u3057\u304b\u3063\u305f\u3002",en:"500 Bob felt embarrassed when he was teased in front of some girls."},B.a,t.w)
B.cp=new A.a(2,{jp:"501 \u5f7c\u306e\u66d6\u6627\u306a\u8fd4\u4e8b\u306f\u306a\u304a\u3055\u3089\u5f7c\u5973\u3092\u3044\u3089\u3044\u3089\u3055\u305b\u305f\u3002",en:"501 His ambiguous reply made her all the more irritated."},B.a,t.w)
B.dl=new A.a(2,{jp:"502 \u30dc\u30d6\u306f\u3068\u3066\u3082\u81c6\u75c5\u3067\u5973\u306e\u5b50\u3068\u304a\u3057\u3083\u3079\u308a\u3059\u308b\u3068\u8d64\u9762\u3057\u3066\u3057\u307e\u3046\u3002",en:"502 Bob is very timid and blushes when chatting with girls."},B.a,t.w)
B.fA=new A.a(2,{jp:"503 \u30cb\u30c3\u30af\u306f\u5730\u65b9\u51fa\u8eab\u8005\u306a\u3089\u8ab0\u3067\u3042\u308d\u3046\u3068\u898b\u4e0b\u3057\u3066\u3044\u308b\u3002",en:"503 Nick looks down on anyone who comes from a rural area."},B.a,t.w)
B.iE=new A.a(2,{jp:"504 \u300c\u3069\u3046\u3057\u305f\u306e\u3001\u30dc\u30d6\uff1f\u305d\u3093\u306a\u306b\u6697\u3044\u9854\u3092\u3057\u3066\u3002\u300d\u300c\u307b\u3063\u3068\u3044\u3066\u304f\u308c\u3088\u3002\u541b\u306b\u306f\u95a2\u4fc2\u306a\u3044\u3053\u3068\u3060\u3002\u300d",en:'504 "What\'s the matter, Bob? You look so miserable." "Leave me alone. It\'s none of your business."'},B.a,t.w)
B.dZ=new A.a(2,{jp:"505 \u30dc\u30d6\u306f\u5909\u88c5\u3057\u3066\u3044\u305f\u3051\u308c\u3069\u3082\u3001\u4e00\u76ee\u3067\u5f7c\u3060\u3068\u308f\u304b\u3063\u305f\u3002",en:"505 Although Bob was in disguise, I recognized him at a glance."},B.a,t.w)
B.f9=new A.a(2,{jp:"506 \u300c\u4f55\u3092\u304f\u3059\u304f\u3059\u7b11\u3063\u3066\u308b\u3093\u3060\uff1f\u300d\u300c\u30dc\u30d6\u3001\u30c8\u30ec\u30fc\u30ca\u30fc\u304c\u5f8c\u308d\u524d\u3060\u3088\u3002\u300d\u300c\u3042\u3063\uff01\u300d",en:'506 "What are you chuckling about?" "Bob, you have your sweatshirt on backwards!" "Oops!"'},B.a,t.w)
B.kJ=new A.a(15,{"492":B.eF,"493":B.dc,"494":B.fi,"495":B.jG,"496":B.fs,"497":B.hD,"498":B.k0,"499":B.fp,"500":B.hZ,"501":B.cp,"502":B.dl,"503":B.fA,"504":B.iE,"505":B.dZ,"506":B.f9},B.a2,t.j)
B.ac=A.f(s(["477","478","479","480","481","482","483","484","485","486","487","488","489","490","491"]),t.s)
B.kD=new A.a(2,{jp:"477 \u305d\u306e\u5c55\u89a7\u4f1a\u306b\u884c\u304f\u3068\u53e4\u4ee3\u6587\u660e\u306b\u5bfe\u3059\u308b\u6df1\u3044\u7406\u89e3\u304c\u5f97\u3089\u308c\u308b\u3002",en:"477 The exhibition offers profound insights into ancient civilization."},B.a,t.w)
B.cZ=new A.a(2,{jp:"478 \u30a4\u30bf\u30ea\u30a2\u30f3\u30eb\u30cd\u30c3\u30b5\u30f3\u30b9\u3092\u958b\u82b1\u3055\u305b\u308b\u304d\u3063\u304b\u3051\u3092\u4f5c\u3063\u305f\u306e\u306f\u30b8\u30e7\u30c3\u30c8\u306e\u529f\u7e3e\u3060\u3002",en:"478 Giotto is credited with sowing the seeds of the Italian Renaissance."},B.a,t.w)
B.h_=new A.a(2,{jp:"479 \u30dc\u30d6\u306f\u88c5\u98fe\u3055\u308c\u305f\u984d\u306b\u305d\u306e\u8096\u50cf\u753b\u3092\u53ce\u3081\u305f\u3051\u308c\u3069\u3001\u4e0a\u4e0b\u9006\u3055\u307e\u3060\u3063\u305f\u3002",en:"479 Bob mounted the portrait in a fancy frame, but it was upside down."},B.a,t.w)
B.cY=new A.a(2,{jp:"480 \u3053\u306e\u8358\u53b3\u306a\u5927\u8056\u5802\u306e\u5efa\u7acb\u306f\u4e2d\u4e16\u306b\u307e\u3067\u3055\u304b\u306e\u307c\u308b\u3002",en:"480 This magnificent cathedral dates back to the Middle Ages."},B.a,t.w)
B.k9=new A.a(2,{jp:"481 \u30a2\u30b8\u30a2\u306e\u5b97\u6559\u304b\u3089\u9583\u304d\u3092\u5f97\u3066\u3001\u5f7c\u306f\u8907\u6570\u306e\u3059\u3070\u3089\u3057\u3044\u5f6b\u523b\u4f5c\u54c1\u3092\u751f\u307f\u51fa\u3057\u305f\u3002",en:"481 Asian religions inspired him to create splendid sculptures."},B.a,t.w)
B.em=new A.a(2,{jp:"482 \u5f7c\u3089\u306f\u57cb\u8535\u3055\u308c\u305f\u5b9d\u7269\u3092\u6c42\u3081\u3066\u7802\u6f20\u3092\u63a2\u691c\u3057\u305f\u3002",en:"482 They explored the desert in search of buried treasure."},B.a,t.w)
B.iX=new A.a(2,{jp:"483 \u305f\u3068\u3048\u3044\u304f\u3089\u304b\u304b\u308d\u3046\u3068\u3082\u305d\u306e\u5091\u4f5c\u3092\u624b\u306b\u5165\u308c\u308b\u3068\u3001\u305d\u306e\u5927\u5bcc\u8c6a\u306f\u8a00\u3044\u5f35\u3063\u305f\u3002",en:"483 The millionaire insisted on acquiring the masterpiece no matter how it cost."},B.a,t.w)
B.fz=new A.a(2,{jp:"484 \u795e\u8a71\u3084\u4f1d\u8aac\u306f\u4ee3\u3005\u8a9e\u308a\u7d99\u304c\u308c\u3066\u3044\u304f\u3079\u304d\u3060\u3002",en:"484 Myths and legends should be handed down from generation to generation."},B.a,t.w)
B.dD=new A.a(2,{jp:"485 \u305d\u306e\u8a00\u8a9e\u5b66\u8005\u306f\u3044\u304f\u3064\u304b\u306e\u4e2d\u56fd\u8a9e\u306e\u65b9\u8a00\u3092\u6d41\u66a2\u306b\u8a71\u3059\u3002",en:"485 The linguist is fluent in several Chinese dialects."},B.a,t.w)
B.dR=new A.a(2,{jp:"486 \u305d\u306e\u90e8\u65cf\u306f\u7956\u5148\u3092\u5d07\u62dd\u3057\u3001\u79c1\u305f\u3061\u306b\u306f\u306a\u3058\u307f\u306e\u306a\u3044\u72ec\u81ea\u306e\u8a00\u8a9e\u3092\u8a71\u3059\u3002",en:"486 The tribe worships its ancestors and speaks its own language, which is not familiar to us."},B.a,t.w)
B.iY=new A.a(2,{jp:"487 \u305d\u306e\u5dde\u3067\u306f\u3044\u307e\u3060\u306b\u53e4\u3044\u6163\u7fd2\u304c\u6839\u5f37\u3044\u3001\u3068\u305d\u306e\u6587\u5316\u4eba\u985e\u5b66\u8005\u306f\u8a00\u3063\u3066\u3044\u308b\u3002",en:"487 The anthropologist says old customs still prevail in the province."},B.a,t.w)
B.kz=new A.a(2,{jp:"488 \u610f\u5730\u306e\u60aa\u3044\u9b54\u5973\u304c\u7537\u306b\u3068\u3093\u3067\u3082\u306a\u3044\u9b54\u6cd5\u3092\u304b\u3051\u3066\u3001\u866b\u306b\u5909\u3048\u3066\u3057\u307e\u3063\u305f\u3002",en:"488 The wicked witch cast an evil spell on the man and turned him into a bug."},B.a,t.w)
B.de=new A.a(2,{jp:"489 \u305d\u306e\u967a\u3057\u3044\u5c0f\u9053\u306b\u6cbf\u3063\u3066\u5f7c\u3089\u306f\u524d\u9032\u3057\u305f\u3002\u305d\u308c\u306f\u56fd\u5883\u3078\u305f\u3069\u308a\u7740\u304f\u552f\u4e00\u306e\u65b9\u6cd5\u3060\u3063\u305f\u3002",en:"489 They proceeded along the steep path, which was the sole access to the border."},B.a,t.w)
B.iH=new A.a(2,{jp:"490 \u6d1e\u7a9f\u304b\u3089\u5927\u304d\u306a\u733f\u304c\u73fe\u308c\u308b\u3068\u3001\u5f7c\u3089\u306f\u3073\u3063\u304f\u308a\u3057\u3066\u9003\u3052\u3066\u884c\u3063\u305f\u3002",en:"490 When a big ape emerged from the cave, they got frightened and ran away."},B.a,t.w)
B.b1=new A.a(2,{jp:"491 \u300c\u4fe1\u3058\u3066\u304f\u308c\u306a\u3044\u304b\u3082\u3057\u308c\u306a\u3044\u3051\u3069\u3001\u5b87\u5b99\u4eba\u3092\u898b\u305f\u306e\u3002\u3067\u3001\u6d88\u3048\u3061\u3083\u3063\u305f\u306e\u3088\uff01\u300d \u300c\u5197\u8ac7\u306f\u3088\u305b\u3088\u3002\u300d",en:'491 "Believe it or not, I saw an alien and then it vanished!" "Give me a break!"'},B.a,t.w)
B.kS=new A.a(15,{"477":B.kD,"478":B.cZ,"479":B.h_,"480":B.cY,"481":B.k9,"482":B.em,"483":B.iX,"484":B.fz,"485":B.dD,"486":B.dR,"487":B.iY,"488":B.kz,"489":B.de,"490":B.iH,"491":B.b1},B.ac,t.j)
B.O=A.f(s(["449","450","451","452","453","454","455","456"]),t.s)
B.eM=new A.a(2,{jp:"449 \u3042\u308b\u8abf\u67fb\u306b\u3088\u308b\u3068\u3001\u4eca\u65e5\u3067\u306f5\u4eba\u4e2d3\u4eba\u304c\u5916\u4ea4\u554f\u984c\u306b\u306f\u7121\u95a2\u5fc3\u3060\u305d\u3046\u3060\u3002",en:"449 According to a survey, three in five people are indifferent to foreign affairs."},B.a,t.w)
B.hn=new A.a(2,{jp:"450 \u5b89\u5168\u4fdd\u969c\u6761\u7d04\u304c\u671f\u9650\u5207\u308c\u306b\u306a\u3063\u305f\u3089\u3001\u65e5\u7c73\u95a2\u4fc2\u306f\u3069\u3046\u306a\u308b\u3060\u308d\u3046\uff1f",en:"450 What will become of Japan-U.S. relations if the security treaty expires?"},B.a,t.w)
B.f3=new A.a(2,{jp:"451 \u65e5\u672c\u304c\u4e0d\u516c\u5e73\u306a\u95a2\u7a0e\u3092\u64a4\u5ec3\u3057\u306a\u3051\u308c\u3070\u3001\u7c73\u56fd\u306f\u5236\u88c1\u63aa\u7f6e\u3092\u53d6\u308b\u3060\u308d\u3046\u3002",en:"451 Unless Japan eliminates its unfair tariffs, the U.S. will impose sanctions."},B.a,t.w)
B.jh=new A.a(2,{jp:"452 \u4e21\u56fd\u306e\u9593\u3067\u306f\u8cbf\u6613\u6469\u64e6\u304c\u3044\u3064\u751f\u3058\u3066\u3082\u304a\u304b\u3057\u304f\u306a\u3044\u3002",en:"452 Trade friction might arise between the two nations at any moment."},B.a,t.w)
B.i_=new A.a(2,{jp:"453 \u6211\u3005\u306e\u6700\u512a\u5148\u4e8b\u9805\u306f\u3053\u306e\u8ad6\u4e89\u306b\u304d\u3063\u3071\u308a\u3068\u6c7a\u7740\u3092\u4ed8\u3051\u308b\u3053\u3068\u3060\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u76f8\u624b\u5074\u3068\u306e\u59a5\u5354\u3082\u899a\u609f\u3057\u3066\u3044\u308b\u3002",en:"453 Our top priority is to settle this dispute once and for all, so we are ready to meet them halfway."},B.a,t.w)
B.ip=new A.a(2,{jp:"454 \u9023\u90a6\u4e88\u7b97\u306f\u304b\u308d\u3046\u3058\u3066\u8b70\u4f1a\u306e\u627f\u8a8d\u3092\u5f97\u305f\u3002",en:"454 The federal budget was narrowly approved by Congress."},B.a,t.w)
B.kA=new A.a(2,{jp:"455 \u653f\u5e9c\u306f\u5225\u306e\u6b73\u5165\u6e90\u3092\u63a2\u3055\u306a\u3051\u308c\u3070\u3044\u3051\u306a\u3044\u3001\u3068\u5f7c\u306f\u4e3b\u5f35\u3057\u3066\u3044\u308b\u3002",en:"455 He argues that the administration must look for alternative sources of revenue."},B.a,t.w)
B.hO=new A.a(2,{jp:"456 \u4e16\u8ad6\u8abf\u67fb\u306e\u7d50\u679c\u304b\u3089\u3001\u5727\u5012\u7684\u591a\u6570\u306e\u4eba\u304c\u305d\u306e\u6cd5\u5f8b\u3092\u652f\u6301\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3002",en:"456 A poll shows that an overwhelming majority is in favor of the legislation."},B.a,t.w)
B.ay=new A.a(8,{"449":B.eM,"450":B.hn,"451":B.f3,"452":B.jh,"453":B.i_,"454":B.ip,"455":B.kA,"456":B.hO},B.O,t.j)
B.a1=A.f(s(["507","508","509","510","511","512","513","514","515","516","517"]),t.s)
B.dL=new A.a(2,{jp:"507 \u5f7c\u306f\u53cb\u9054\u4f5c\u308a\u304c\u82e6\u624b\u3067\u3001\u3044\u3064\u3082\u3072\u3068\u308a\u307c\u3063\u3061\u3067\u3044\u308b\u3002",en:"507 He is not good at making friends and always keeps to himself."},B.a,t.w)
B.cQ=new A.a(2,{jp:"508 \u81ea\u5206\u304c\u53d7\u3051\u5165\u308c\u3089\u308c\u308b\u5834\u6240\u3092\u898b\u3064\u3051\u3089\u308c\u305a\u3001\u5f7c\u306f\u6975\u5ea6\u306e\u4e0d\u5b89\u3068\u5b64\u72ec\u306b\u9665\u3063\u3066\u3044\u305f\u3002",en:"508 Having found no place he felt he belonged, he was extremely uneasy and lonely."},B.a,t.w)
B.ep=new A.a(2,{jp:"509 \u65b0\u3057\u3044\u74b0\u5883\u306b\u9806\u5fdc\u3059\u308b\u306e\u306f\u304b\u306a\u308a\u5927\u5909\u306a\u3053\u3068\u3060\u3068\u308f\u304b\u3063\u305f\u3002",en:"509 I found it pretty hard to adjust to my new surroundings."},B.a,t.w)
B.hT=new A.a(2,{jp:"510 \u3042\u3042\u3044\u3046\u6d17\u7df4\u3055\u308c\u305f\u4eba\u305f\u3061\u306e\u4e2d\u3067\u3001\u81ea\u5206\u306f\u307e\u3063\u305f\u304f\u5834\u9055\u3044\u306a\u6c17\u304c\u3057\u305f\u3002",en:"510 I felt utterly out of place among those sophisticated people."},B.a,t.w)
B.dV=new A.a(2,{jp:"511 \u6b63\u76f4\u8a00\u3063\u3066\u3001\u79c1\u306f\u30af\u30e9\u30b7\u30c3\u30af\u97f3\u697d\u306f\u597d\u304d\u3058\u3083\u306a\u3044\u3002\u304b\u305f\u3084\u3001\u30e2\u30ea\u30fc\u306e\u307b\u3046\u306f\u5b8c\u5168\u306b\u306f\u307e\u3063\u3066\u3044\u308b\u3002",en:"511 To tell the truth, I don't like classical music. On the other hand, Molly is really into it."},B.a,t.w)
B.hM=new A.a(2,{jp:"512 \u30dc\u30d6\u306f\u6606\u866b\u306e\u89b3\u5bdf\u306b\u697d\u3057\u307f\u3092\u611f\u3058\u3066\u3044\u308b\u3002",en:"512 Bob derives pleasure from observing insects."},B.a,t.w)
B.c2=new A.a(2,{jp:"513 \u300c\u6c17\u5206\u8ee2\u63db\u306b\u30c8\u30e9\u30f3\u30d7\u304b\u4f55\u304b\u3057\u306a\u3044\uff1f\u300d\u300c\u308f\u308b\u3044\u3051\u3069\u3001\u305d\u3046\u3044\u3046\u6c17\u5206\u3058\u3083\u306a\u3044\u3088\u3002\u300d",en:'513 "How about playing cards or something for a change?" "Sorry, I\'m not up for it."'},B.a,t.w)
B.iD=new A.a(2,{jp:"514 \u300c\u304a\u5148\u306b\u3069\u3046\u305e\u3002\u300d\u300c\u3044\u3084\u3001\u3042\u306a\u305f\u306e\u65b9\u3053\u305d\u304a\u5148\u306b\u3069\u3046\u305e\u3002\u300d\u300c\u3059\u307f\u307e\u305b\u3093\u3002\u300d\u300c\u3069\u3046\u3044\u305f\u3057\u307e\u3057\u3066\u3002\u300d",en:'514 "After you." "No pleasure, you go ahead." "Thanks." "You\'re welcome."'},B.a,t.w)
B.bk=new A.a(2,{jp:"515 \u5f7c\u306e\u59ea\u306f\u5e74\u306e\u5272\u306b\u306f\u793e\u4ea4\u7684\u3067\u5927\u4eba\u3060\u3002\u4e8c\u5341\u4ee3\u3068\u8a00\u3063\u3066\u3082\u901a\u7528\u3059\u308b\u3002",en:"515 His niece is sociable and mature for her age. She could pass for twenty-something."},B.a,t.w)
B.k3=new A.a(2,{jp:"516 \u300c\u3058\u3083\u3042\u306d\u3002\u5bb6\u65cf\u306e\u307f\u3093\u306a\u306b\u3088\u308d\u3057\u304f\u3002\u300d\u300c\u3042\u3042\u3002\u307e\u305f\u306d\u3002\u300d",en:'516 "Take care of yourself and say hi to your family for me." "I will. See you later."'},B.a,t.w)
B.eX=new A.a(2,{jp:"517 \u304a\u8fd4\u4e8b\u9802\u3051\u308b\u306e\u3092\u697d\u3057\u307f\u306b\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u656c\u5177",en:"517 I'm looking forward to hearing from you. Sincerely,"},B.a,t.w)
B.aM=new A.a(11,{"507":B.dL,"508":B.cQ,"509":B.ep,"510":B.hT,"511":B.dV,"512":B.hM,"513":B.c2,"514":B.iD,"515":B.bk,"516":B.k3,"517":B.eX},B.a1,t.j)
B.a6=A.f(s(["531","532","533","534","535","536","537","538","539","540","541","542","543","544","545","546","547"]),t.s)
B.d5=new A.a(2,{jp:"531 \u300c\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u306b\u3060\u307e\u3055\u308c\u305f\uff01\u300d\u300c\u5f7c\u5973\u3092\u4fe1\u3058\u306a\u3044\u304f\u3089\u3044\u306e\u5206\u5225\u304c\u3042\u3063\u3066\u3082\u826f\u304b\u3063\u305f\u306e\u306b\u3002\u300d",en:'531 "Jennifer deceived me!" "You should have known better than to trust her."'},B.a,t.w)
B.bg=new A.a(2,{jp:"532 \u30c8\u30e0\u306f\u81ea\u5206\u306e\u4eba\u751f\u306e\u591a\u304f\u3092\u7121\u99c4\u306b\u3057\u3066\u304d\u305f\u3053\u3068\u3092\u5f8c\u6094\u3057\u305f\u3002",en:"532 Tom regretted having wasted a great deal of his life."},B.a,t.w)
B.d8=new A.a(2,{jp:"533 \u81ea\u5206\u306e\u601d\u6625\u671f\u3092\u632f\u308a\u8fd4\u308b\u3068\u3001\u3044\u3064\u3082\u6182\u9b31\u306a\u6c17\u5206\u306b\u306a\u308b\u3002",en:"533 I cannot look back on my adolescence without feeling depressed."},B.a,t.w)
B.iz=new A.a(2,{jp:"534 \u300c\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u304c\u4ffa\u3092\u3075\u3063\u3066\u4ed6\u306e\u7537\u306e\u3068\u3053\u308d\u306b\u3044\u3063\u305f\u3088\u3002\u300d\u300c\u3048\u3063\u3001\u305d\u308c\u306f\u8f9b\u3044\u308f\u306d\u3002\u300d\u300c\u305d\u3046\u3067\u3082\u306a\u3044\u3088\u3002\u6163\u308c\u3066\u308b\u3088\u3002\u300d",en:'534 "Jennifer left me for another guy." "Oh, you must be upset." "Not really. I\'m used to it."'},B.a,t.w)
B.d7=new A.a(2,{jp:"535 \u300c\u5f7c\u5973\u304c\u898b\u9001\u308a\u306b\u6765\u306a\u304b\u3063\u305f\u306e\u3082\u5f53\u7136\u3060\u3088\u3002\u300d\u300c\u3069\u3046\u3057\u3066\uff1f\u300d\u300c\u4e8c\u4eba\u306f\u5225\u308c\u305f\u3093\u3060\u3002\u300d\u300c\u3048\u3063\u3001\u304b\u308f\u3044\u305d\u3046\u306b\uff01\u300d",en:'535 "No wonder she didn\'t show up to see him off." "How come?" "They broke up." "Oh, what a pity!"'},B.a,t.w)
B.i0=new A.a(2,{jp:"536 \u300c\u3053\u3053\u3067\u81ea\u5206\u4e00\u4eba\u3060\u3051\u751f\u304d\u3066\u3044\u304f\u306a\u3093\u3066\u62f7\u554f\u3060\u300d\u3068\u5f7c\u306f\u3059\u3059\u308a\u6ce3\u304d\u3057\u3066\u8a00\u3063\u305f\u3002",en:'536 "Living here all by myself is torture!" he sobbed.'},B.a,t.w)
B.iO=new A.a(2,{jp:"537 \u300c\u6b63\u76f4\u8a00\u3046\u3068\u79c1\u3001\u30b1\u30f3\u306b\u5922\u4e2d\u306a\u306e\u3002\u3060\u3063\u3066\u3001\u52c7\u6562\u3067\u81ea\u5206\u306b\u81ea\u4fe1\u3092\u6301\u3063\u3066\u3044\u3066\u3001\u305d\u308c\u306b\u5371\u967a\u3092\u5192\u3059\u3053\u3068\u3092\u6c7a\u3057\u3066\u6050\u308c\u306a\u3044\u3067\u3057\u3087\u3002\u300d\u300c\u79c1\u306a\u3089\u30c7\u30fc\u30c8\u306b\u8a98\u3046\u308f\u3002\u300d",en:'537 "To be honest, I\'m crazy about Ken because he\'s brave, self-confident, and never afraid of taking risks. " "If I were you, I\'d ask him out!"'},B.a,t.w)
B.jt=new A.a(2,{jp:"538 \u300c\u305a\u3044\u3076\u3093\u9577\u3044\u9593\u3001\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u3068\u306f\u4ed8\u304d\u5408\u3063\u305f\u308a\u5225\u308c\u305f\u308a\u306e\u7e70\u308a\u8fd4\u3057\u3060\u3088\u3002\u300d\u300c\u76f8\u5909\u308f\u3089\u305a\u512a\u67d4\u4e0d\u65ad\u306d\u3002\u305d\u308d\u305d\u308d\u843d\u3061\u7740\u3044\u305f\u3089\u3069\u3046\uff1f\u300d",en:'538 "I\'ve been going with Jennifer on and off for ages." "You\'re as indecisive as ever. Isn\'t it "'},B.a,t.w)
B.bQ=new A.a(2,{jp:"539 \u300c\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u306b\u305a\u3063\u3068\u3060\u307e\u3055\u308c\u3066\u3044\u305f\u306e\u304c\u5206\u304b\u3063\u3066\u304d\u305f\u3088\u3002\u300d\u300c\u4f55\u3066\u3046\u3076\u306a\u306e\u3002\u5f7c\u5973\u306e\u672c\u6027\u304c\u898b\u629c\u3051\u306a\u304b\u3063\u305f\u306e\uff1f\u300d",en:'539 "It dawned on me that I had been taken in by Jennifer all along." "How naive! Didn\'t you see through her?"'},B.a,t.w)
B.iM=new A.a(2,{jp:"540 \u5b9f\u969b\u3001\u5f7c\u5973\u306f\u8ab0\u304b\u3068\u4ed8\u304d\u5408\u3063\u3066\u3044\u308b\u3051\u308c\u3069\u3082\u3001\u50d5\u306f\u5f7c\u5973\u3092\u8ae6\u3081\u306a\u3044\u3002",en:"540 Even though she is seeing someone else, I won't give her up."},B.a,t.w)
B.km=new A.a(2,{jp:"541 \u300c\u3084\u3042\u3001\u30b8\u30a7\u30fc\u30f3\u3002\u6700\u8fd1\u3069\u3046\uff1f\u300d\u300c\u5225\u306b\u3002\u3042\u306a\u305f\u306f\uff1f\u300d\u300c\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u3068\u7d50\u5a5a\u3057\u305f\u3093\u3060\u3002\u300d\u300c\u3048\u3048\u3063\u3001\u304a\u3081\u3067\u3068\u3046\uff01\u300d",en:'541 "Hi, Jane. What\'s up?" "Not much. How about you?" "I got married to Jennifer." "Wow! Congratulations!"'},B.a,t.w)
B.kh=new A.a(2,{jp:"542 \u5927\u5909\u306a\u3053\u3068\u304c\u3042\u3063\u305f\u308a\u3001\u843d\u3061\u8fbc\u3093\u3060\u308a\u3057\u305f\u3068\u304d\u306f\u3044\u3064\u3067\u3082\u3001\u79c1\u304c\u3042\u306a\u305f\u306e\u305d\u3070\u306b\u3044\u308b\u308f\u3002",en:"542 Whenever you're in trouble or feeling down, I'll be there for you."},B.a,t.w)
B.dT=new A.a(2,{jp:"543 \u300c\u559c\u3073\u300d\u306f\u300c\u60b2\u3057\u307f\u300d\u306e\u53cd\u5bfe\u3067\u3059\u3002",en:'543 "Delight" is the opposite of "sorrow."'},B.a,t.w)
B.cy=new A.a(2,{jp:"544 \u300c\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u306f\u50d5\u3092\u3070\u304b\u547c\u3070\u308f\u308a\u307e\u3067\u3057\u3066\u3001\u3057\u304b\u3082\u305d\u308c\u3092\u64a4\u56de\u3057\u306a\u3044\u3093\u3060\u3002\u300d\u300c\u81ea\u696d\u81ea\u5f97\u3088\uff01\u3042\u306a\u305f\u304b\u3089\u3051\u3057\u304b\u3051\u305f\u3093\u3067\u3057\u3087\u3046\uff1f\u300d",en:'544 "Jennifer went so far as to call me an idiot and she wouldn\'t take it back." "Serves you right! You provoked her, didn\'t you?"'},B.a,t.w)
B.eh=new A.a(2,{jp:"545 \u300c\u5f7c\u5973\u306e\u50b2\u6162\u3055\u306b\u3069\u3046\u3057\u3066\u6211\u6162\u3057\u3066\u3044\u308b\u306e\uff1f\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u3060\u3051\u3088\u3002\u300d\u300c\u3046\u308b\u3055\u3044\uff01\u300d",en:'545 "Why do you put up with her arrogance? She\'s just taking advantage of you. "Shut up!"'},B.a,t.w)
B.fh=new A.a(2,{jp:"546 \u614c\u3066\u306a\u304f\u3066\u3044\u3044\u3067\u3059\u3088\u3002\u305d\u306e\u3053\u3068\u3092\u3058\u3063\u304f\u308a\u8003\u3048\u308b\u306b\u306f\u30012\u30013\u65e5\u5fc5\u8981\u3067\u3057\u3087\u3046\u304b\u3089\u3002",en:"546 Take your time. I know you need a couple of days to reflect on it."},B.a,t.w)
B.c9=new A.a(2,{jp:"547 \u30dc\u30d6\u306f\u81ea\u5206\u306e\u529b\u3067\u3053\u306e\u53b3\u3057\u3044\u8a66\u7df4\u3092\u4e57\u308a\u5207\u3089\u306a\u3051\u308c\u3070\u3044\u3051\u306a\u3044\u3002",en:"547 Bob has to get through this ordeal on his own."},B.a,t.w)
B.kM=new A.a(17,{"531":B.d5,"532":B.bg,"533":B.d8,"534":B.iz,"535":B.d7,"536":B.i0,"537":B.iO,"538":B.jt,"539":B.bQ,"540":B.iM,"541":B.km,"542":B.kh,"543":B.dT,"544":B.cy,"545":B.eh,"546":B.fh,"547":B.c9},B.a6,t.j)
B.K=A.f(s(["548","549","550","551","552","553","554","555","556","557","558","559","560"]),t.s)
B.fd=new A.a(2,{jp:"548 \u30cf\u30a8\u3068\u868a\u304c\u5f7c\u306e\u7791\u60f3\u306e\u90aa\u9b54\u3092\u3057\u305f\u3002",en:"548 Flies and mosquitoes interfered with his meditation."},B.a,t.w)
B.c5=new A.a(2,{jp:"549 2\u5ea6\u306e\u5ef6\u671f\u306e\u5f8c\u3001\u305d\u306e\u795e\u8056\u306a\u5100\u5f0f\u306f\u57f7\u308a\u884c\u308f\u308c\u305f\u3002",en:"549 The sacred ritual took place after being postponed twice."},B.a,t.w)
B.eB=new A.a(2,{jp:"550 \u304a\u574a\u3055\u3093\u304c\u7a81\u7136\u5927\u58f0\u3067\u7b11\u3044\u51fa\u3057\u3001\u53b3\u7c9b\u306a\u96f0\u56f2\u6c17\u3092\u53f0\u7121\u3057\u306b\u3057\u305f\u3002",en:"550 All at once, the Buddhist priest burst into laughter, spoiling the solemn atmosphere."},B.a,t.w)
B.fM=new A.a(2,{jp:"551 \u54b3\u3001\u304f\u3057\u3083\u307f\u3001\u3042\u304f\u3073\u3092\u3059\u308b\u3068\u304d\u306f\u53e3\u3092\u624b\u3067\u96a0\u3057\u306a\u3055\u3044\u3002",en:"551 Cover your mouth when you cough, sneeze, or yawn."},B.a,t.w)
B.dz=new A.a(2,{jp:"552 \u300c\u5f7c\u5973\u306e\u89aa\u621a\u304c3\u65e5\u524d\u306b\u4ea1\u304f\u306a\u3063\u305f\u3093\u3060\u3002\u300d\u300c\u3048\u3063\u3001\u305d\u308c\u306f\u5927\u5909\u306d\u3002\u304a\u6c17\u306e\u6bd2\u3060\u308f\u3002\u300d",en:'552 "One of her relatives passed away three days ago." "Oh, that\'s too bad. I\'m so sorry."'},B.a,t.w)
B.jY=new A.a(2,{jp:"553 \u5f7c\u5973\u306f\u846c\u5100\u306b\u53c2\u5217\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u3059\u3079\u3066\u306e\u6bb5\u53d6\u308a\u3092\u3064\u3051\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002",en:"553 Besides attending the funeral, she needs to make all the arrangements."},B.a,t.w)
B.bS=new A.a(2,{jp:"554 \u300c\u30b8\u30a7\u30fc\u30f3\u3001\u6c17\u6301\u3061\u306f\u5206\u304b\u308b\u3088\u3002\u60b2\u3057\u307f\u306f\u3059\u3050\u306b\u6d88\u3048\u308b\u3082\u306e\u3058\u3083\u306a\u3044\u3002\u300d\u300c\u5927\u4e08\u592b\u3002\u4e57\u308a\u8d8a\u3048\u3066\u307f\u305b\u308b\u308f\u3002",en:'554 "I feel for you, Jane. Grief doesn\'t fade away quickly." "I\'m OK. I\'ll get over it."'},B.a,t.w)
B.c6=new A.a(2,{jp:"555 \u5f7c\u5973\u306f\u5b50\u4f9b\u306e\u9803\u306e\u304b\u3051\u304c\u3048\u306e\u306a\u3044\u601d\u3044\u51fa\u3092\u5927\u5207\u306b\u3057\u3066\u3044\u308b\u3002",en:"555 She cherishes the precious memories of her childhood."},B.a,t.w)
B.iJ=new A.a(2,{jp:"556 \u300c\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u3068\u8a00\u3048\u3070\u3001\u5f7c\u5973\u3001\u5b9f\u696d\u5bb6\u3068\u5a5a\u7d04\u3057\u305f\u3093\u3060\u3088\u3002\u300d\u300c\u3042\u304d\u308c\u3066\u3082\u306e\u304c\u8a00\u3048\u306a\u3044\u308f\u3002\u7834\u8ac7\u306b\u306a\u3089\u306a\u304d\u3083\u3044\u3044\u3051\u3069\u306d\u3002\u300d",en:'556 "Speaking of Jennifer, she got engaged to a businessman." "I\'m at a loss for words! I hope she won\'t break it off."'},B.a,t.w)
B.cC=new A.a(2,{jp:"557 \u8fd1\u9803\u3067\u306f\u3001\u7d50\u5a5a\u306e\u52d5\u6a5f\u306f\u5fc5\u305a\u3057\u3082\u7d14\u7c8b\u3068\u306f\u9650\u3089\u306a\u3044\u3002\u4f8b\u3048\u3070\u3001\u30b8\u30a7\u30cb\u30d5\u30a1\u30fc\u3092\u898b\u3066\u3054\u3089\u3093\u3088\u3002",en:"557 These days, the motives for marriage are not necessarily pure. Take Jennifer for example."},B.a,t.w)
B.cB=new A.a(2,{jp:"558 \u30dc\u30d6\u306b\u306f\u3084\u3055\u3057\u304f\u63a5\u3057\u3066\u3042\u3052\u3066\u304f\u308c\u3088\u3002\u307b\u3089\u3001\u5f7c\u306f\u6700\u8fd1\u305a\u3063\u3068\u8f9b\u3044\u3053\u3068\u7d9a\u304d\u306a\u3093\u3060\u3002",en:"558 Go easy on Bob. You know, he's been going through a rough period recently."},B.a,t.w)
B.cI=new A.a(2,{jp:"559 \u300c\u3068\u3053\u308d\u3067\u3001\u4eca\u4f55\u6642\uff1f\u300d\u300c\u3048\u30fc\u3063\u3068\u30018\u664215\u5206\u524d\u3060\u3088\u3002\u300d",en:'559 "By the way, do you have the time?" "Let\'s see .. it\'s a quarter to eight."'},B.a,t.w)
B.bq=new A.a(2,{jp:"560 \u300c\u30dc\u30d6\u3001\u4eca\u65e5\u306f\u3053\u306e\u8fba\u307e\u3067\u306b\u3057\u307e\u3057\u3087\u3046\u3002\u304a\u8179\u304c\u307a\u3053\u307a\u3053\u3002\u300d\u300c\u3042\u3042\u3002\u6669\u98ef\u306f\u50d5\u304c\u304a\u3054\u308b\u3088\u3002\u300d",en:'560 "Let\'s call it a day, Bob. I\'m starved." "Yep. I\'ll buy you dinner."'},B.a,t.w)
B.au=new A.a(13,{"548":B.fd,"549":B.c5,"550":B.eB,"551":B.fM,"552":B.dz,"553":B.jY,"554":B.bS,"555":B.c6,"556":B.iJ,"557":B.cC,"558":B.cB,"559":B.cI,"560":B.bq},B.K,t.j)
B.l_=new A.a(45,{"1":B.ao,"10":B.kQ,"5":B.aI,"2":B.ap,"3":B.aE,"9":B.aB,"7":B.aJ,"4":B.at,"6":B.kW,"11":B.aG,"8":B.kK,"14":B.kV,"15":B.aq,"12":B.kU,"16":B.as,"13":B.aH,"22":B.aC,"21":B.aD,"27":B.ar,"18":B.az,"19":B.kR,"17":B.kO,"20":B.l2,"28":B.av,"24":B.aw,"30":B.ax,"25":B.kX,"23":B.kT,"33":B.kP,"29":B.aA,"31":B.kZ,"26":B.kN,"35":B.aL,"34":B.kY,"36":B.l1,"39":B.l0,"32":B.aK,"43":B.aF,"38":B.kL,"41":B.kJ,"40":B.kS,"37":B.ay,"42":B.aM,"44":B.kM,"45":B.au},B.al,A.dJ("a<d,q<d,q<d,d>>>"))})();(function staticFields(){$.cY=null
$.e3=null
$.dW=null
$.dV=null
$.eC=null
$.ez=null
$.eG=null
$.dc=null
$.dh=null
$.dL=null
$.at=null
$.bg=null
$.bh=null
$.dE=!1
$.r=B.c
$.G=A.f([],A.dJ("x<m>"))
$.Z=null
$.dm=null
$.e_=null
$.dZ=null
$.b1=A.fg(t.N,t.Z)
$.aU=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hT","eI",()=>A.ht("_$dart_dartClosure"))
s($,"i0","eJ",()=>A.V(A.cK({
toString:function(){return"$receiver$"}})))
s($,"i1","eK",()=>A.V(A.cK({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"i2","eL",()=>A.V(A.cK(null)))
s($,"i3","eM",()=>A.V(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"i6","eP",()=>A.V(A.cK(void 0)))
s($,"i7","eQ",()=>A.V(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"i5","eO",()=>A.V(A.eb(null)))
s($,"i4","eN",()=>A.V(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"i9","eS",()=>A.V(A.eb(void 0)))
s($,"i8","eR",()=>A.V(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ic","dO",()=>A.fu())
s($,"id","eT",()=>A.e2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.C,MediaError:J.C,Navigator:J.C,NavigatorConcurrentHardware:J.C,NavigatorUserMediaError:J.C,OverconstrainedError:J.C,PositionError:J.C,GeolocationPositionError:J.C,Range:J.C,HTMLAudioElement:A.e,HTMLBRElement:A.e,HTMLButtonElement:A.e,HTMLCanvasElement:A.e,HTMLContentElement:A.e,HTMLDListElement:A.e,HTMLDataElement:A.e,HTMLDataListElement:A.e,HTMLDetailsElement:A.e,HTMLDialogElement:A.e,HTMLDivElement:A.e,HTMLEmbedElement:A.e,HTMLFieldSetElement:A.e,HTMLHRElement:A.e,HTMLHeadElement:A.e,HTMLHeadingElement:A.e,HTMLHtmlElement:A.e,HTMLIFrameElement:A.e,HTMLImageElement:A.e,HTMLInputElement:A.e,HTMLLIElement:A.e,HTMLLabelElement:A.e,HTMLLegendElement:A.e,HTMLLinkElement:A.e,HTMLMapElement:A.e,HTMLMediaElement:A.e,HTMLMenuElement:A.e,HTMLMetaElement:A.e,HTMLMeterElement:A.e,HTMLModElement:A.e,HTMLOListElement:A.e,HTMLObjectElement:A.e,HTMLOptGroupElement:A.e,HTMLOptionElement:A.e,HTMLOutputElement:A.e,HTMLParagraphElement:A.e,HTMLParamElement:A.e,HTMLPictureElement:A.e,HTMLPreElement:A.e,HTMLProgressElement:A.e,HTMLQuoteElement:A.e,HTMLScriptElement:A.e,HTMLShadowElement:A.e,HTMLSlotElement:A.e,HTMLSourceElement:A.e,HTMLSpanElement:A.e,HTMLStyleElement:A.e,HTMLTableCaptionElement:A.e,HTMLTableCellElement:A.e,HTMLTableDataCellElement:A.e,HTMLTableHeaderCellElement:A.e,HTMLTableColElement:A.e,HTMLTextAreaElement:A.e,HTMLTimeElement:A.e,HTMLTitleElement:A.e,HTMLTrackElement:A.e,HTMLUListElement:A.e,HTMLUnknownElement:A.e,HTMLVideoElement:A.e,HTMLDirectoryElement:A.e,HTMLFontElement:A.e,HTMLFrameElement:A.e,HTMLFrameSetElement:A.e,HTMLMarqueeElement:A.e,HTMLElement:A.e,HTMLAnchorElement:A.ah,HTMLAreaElement:A.bp,HTMLBaseElement:A.ai,HTMLBodyElement:A.a4,CDATASection:A.P,CharacterData:A.P,Comment:A.P,ProcessingInstruction:A.P,Text:A.P,CSSStyleDeclaration:A.aD,MSStyleCSSProperties:A.aD,CSS2Properties:A.aD,XMLDocument:A.a7,Document:A.a7,DOMException:A.cl,DOMImplementation:A.bu,Element:A.o,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,Window:A.l,DOMWindow:A.l,EventTarget:A.l,HTMLFormElement:A.bw,HTMLDocument:A.aG,Location:A.aN,MouseEvent:A.D,DragEvent:A.D,PointerEvent:A.D,WheelEvent:A.D,DocumentFragment:A.i,ShadowRoot:A.i,DocumentType:A.i,Node:A.i,NodeList:A.aP,RadioNodeList:A.aP,HTMLSelectElement:A.bK,HTMLTableElement:A.aY,HTMLTableRowElement:A.bQ,HTMLTableSectionElement:A.bR,HTMLTemplateElement:A.an,CompositionEvent:A.M,FocusEvent:A.M,KeyboardEvent:A.M,TextEvent:A.M,TouchEvent:A.M,UIEvent:A.M,Attr:A.aq,NamedNodeMap:A.b5,MozNamedAttrMap:A.b5,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Range:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.hE
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.js.map
