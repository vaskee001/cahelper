// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__2940__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2941__i = 0, G__2941__a = new Array(arguments.length -  0);
while (G__2941__i < G__2941__a.length) {G__2941__a[G__2941__i] = arguments[G__2941__i + 0]; ++G__2941__i;}
  args = new cljs.core.IndexedSeq(G__2941__a,0,null);
} 
return G__2940__delegate.call(this,args);};
G__2940.cljs$lang$maxFixedArity = 0;
G__2940.cljs$lang$applyTo = (function (arglist__2942){
var args = cljs.core.seq(arglist__2942);
return G__2940__delegate(args);
});
G__2940.cljs$core$IFn$_invoke$arity$variadic = G__2940__delegate;
return G__2940;
})()
);

(o.error = (function() { 
var G__2943__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2944__i = 0, G__2944__a = new Array(arguments.length -  0);
while (G__2944__i < G__2944__a.length) {G__2944__a[G__2944__i] = arguments[G__2944__i + 0]; ++G__2944__i;}
  args = new cljs.core.IndexedSeq(G__2944__a,0,null);
} 
return G__2943__delegate.call(this,args);};
G__2943.cljs$lang$maxFixedArity = 0;
G__2943.cljs$lang$applyTo = (function (arglist__2945){
var args = cljs.core.seq(arglist__2945);
return G__2943__delegate(args);
});
G__2943.cljs$core$IFn$_invoke$arity$variadic = G__2943__delegate;
return G__2943;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
