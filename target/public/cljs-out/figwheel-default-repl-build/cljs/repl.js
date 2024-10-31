// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19501){
var map__19502 = p__19501;
var map__19502__$1 = cljs.core.__destructure_map.call(null,map__19502);
var m = map__19502__$1;
var n = cljs.core.get.call(null,map__19502__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19503_19531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19504_19532 = null;
var count__19505_19533 = (0);
var i__19506_19534 = (0);
while(true){
if((i__19506_19534 < count__19505_19533)){
var f_19535 = cljs.core._nth.call(null,chunk__19504_19532,i__19506_19534);
cljs.core.println.call(null,"  ",f_19535);


var G__19536 = seq__19503_19531;
var G__19537 = chunk__19504_19532;
var G__19538 = count__19505_19533;
var G__19539 = (i__19506_19534 + (1));
seq__19503_19531 = G__19536;
chunk__19504_19532 = G__19537;
count__19505_19533 = G__19538;
i__19506_19534 = G__19539;
continue;
} else {
var temp__5823__auto___19540 = cljs.core.seq.call(null,seq__19503_19531);
if(temp__5823__auto___19540){
var seq__19503_19541__$1 = temp__5823__auto___19540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19503_19541__$1)){
var c__5525__auto___19542 = cljs.core.chunk_first.call(null,seq__19503_19541__$1);
var G__19543 = cljs.core.chunk_rest.call(null,seq__19503_19541__$1);
var G__19544 = c__5525__auto___19542;
var G__19545 = cljs.core.count.call(null,c__5525__auto___19542);
var G__19546 = (0);
seq__19503_19531 = G__19543;
chunk__19504_19532 = G__19544;
count__19505_19533 = G__19545;
i__19506_19534 = G__19546;
continue;
} else {
var f_19547 = cljs.core.first.call(null,seq__19503_19541__$1);
cljs.core.println.call(null,"  ",f_19547);


var G__19548 = cljs.core.next.call(null,seq__19503_19541__$1);
var G__19549 = null;
var G__19550 = (0);
var G__19551 = (0);
seq__19503_19531 = G__19548;
chunk__19504_19532 = G__19549;
count__19505_19533 = G__19550;
i__19506_19534 = G__19551;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19552 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19552);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19552)))?cljs.core.second.call(null,arglists_19552):arglists_19552));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19507_19553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19508_19554 = null;
var count__19509_19555 = (0);
var i__19510_19556 = (0);
while(true){
if((i__19510_19556 < count__19509_19555)){
var vec__19519_19557 = cljs.core._nth.call(null,chunk__19508_19554,i__19510_19556);
var name_19558 = cljs.core.nth.call(null,vec__19519_19557,(0),null);
var map__19522_19559 = cljs.core.nth.call(null,vec__19519_19557,(1),null);
var map__19522_19560__$1 = cljs.core.__destructure_map.call(null,map__19522_19559);
var doc_19561 = cljs.core.get.call(null,map__19522_19560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19562 = cljs.core.get.call(null,map__19522_19560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19558);

cljs.core.println.call(null," ",arglists_19562);

if(cljs.core.truth_(doc_19561)){
cljs.core.println.call(null," ",doc_19561);
} else {
}


var G__19563 = seq__19507_19553;
var G__19564 = chunk__19508_19554;
var G__19565 = count__19509_19555;
var G__19566 = (i__19510_19556 + (1));
seq__19507_19553 = G__19563;
chunk__19508_19554 = G__19564;
count__19509_19555 = G__19565;
i__19510_19556 = G__19566;
continue;
} else {
var temp__5823__auto___19567 = cljs.core.seq.call(null,seq__19507_19553);
if(temp__5823__auto___19567){
var seq__19507_19568__$1 = temp__5823__auto___19567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19507_19568__$1)){
var c__5525__auto___19569 = cljs.core.chunk_first.call(null,seq__19507_19568__$1);
var G__19570 = cljs.core.chunk_rest.call(null,seq__19507_19568__$1);
var G__19571 = c__5525__auto___19569;
var G__19572 = cljs.core.count.call(null,c__5525__auto___19569);
var G__19573 = (0);
seq__19507_19553 = G__19570;
chunk__19508_19554 = G__19571;
count__19509_19555 = G__19572;
i__19510_19556 = G__19573;
continue;
} else {
var vec__19523_19574 = cljs.core.first.call(null,seq__19507_19568__$1);
var name_19575 = cljs.core.nth.call(null,vec__19523_19574,(0),null);
var map__19526_19576 = cljs.core.nth.call(null,vec__19523_19574,(1),null);
var map__19526_19577__$1 = cljs.core.__destructure_map.call(null,map__19526_19576);
var doc_19578 = cljs.core.get.call(null,map__19526_19577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19579 = cljs.core.get.call(null,map__19526_19577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19575);

cljs.core.println.call(null," ",arglists_19579);

if(cljs.core.truth_(doc_19578)){
cljs.core.println.call(null," ",doc_19578);
} else {
}


var G__19580 = cljs.core.next.call(null,seq__19507_19568__$1);
var G__19581 = null;
var G__19582 = (0);
var G__19583 = (0);
seq__19507_19553 = G__19580;
chunk__19508_19554 = G__19581;
count__19509_19555 = G__19582;
i__19510_19556 = G__19583;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.call(null,"Spec");

var seq__19527 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19528 = null;
var count__19529 = (0);
var i__19530 = (0);
while(true){
if((i__19530 < count__19529)){
var role = cljs.core._nth.call(null,chunk__19528,i__19530);
var temp__5823__auto___19584__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19584__$1)){
var spec_19585 = temp__5823__auto___19584__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19585));
} else {
}


var G__19586 = seq__19527;
var G__19587 = chunk__19528;
var G__19588 = count__19529;
var G__19589 = (i__19530 + (1));
seq__19527 = G__19586;
chunk__19528 = G__19587;
count__19529 = G__19588;
i__19530 = G__19589;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq.call(null,seq__19527);
if(temp__5823__auto____$1){
var seq__19527__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19527__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19527__$1);
var G__19590 = cljs.core.chunk_rest.call(null,seq__19527__$1);
var G__19591 = c__5525__auto__;
var G__19592 = cljs.core.count.call(null,c__5525__auto__);
var G__19593 = (0);
seq__19527 = G__19590;
chunk__19528 = G__19591;
count__19529 = G__19592;
i__19530 = G__19593;
continue;
} else {
var role = cljs.core.first.call(null,seq__19527__$1);
var temp__5823__auto___19594__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19594__$2)){
var spec_19595 = temp__5823__auto___19594__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19595));
} else {
}


var G__19596 = cljs.core.next.call(null,seq__19527__$1);
var G__19597 = null;
var G__19598 = (0);
var G__19599 = (0);
seq__19527 = G__19596;
chunk__19528 = G__19597;
count__19529 = G__19598;
i__19530 = G__19599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19602 = datafied_throwable;
var map__19602__$1 = cljs.core.__destructure_map.call(null,map__19602);
var via = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19603 = cljs.core.last.call(null,via);
var map__19603__$1 = cljs.core.__destructure_map.call(null,map__19603);
var type = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19604 = data;
var map__19604__$1 = cljs.core.__destructure_map.call(null,map__19604);
var problems = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19605 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19605__$1 = cljs.core.__destructure_map.call(null,map__19605);
var top_data = map__19605__$1;
var source = cljs.core.get.call(null,map__19605__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19606 = phase;
var G__19606__$1 = (((G__19606 instanceof cljs.core.Keyword))?G__19606.fqn:null);
switch (G__19606__$1) {
case "read-source":
var map__19607 = data;
var map__19607__$1 = cljs.core.__destructure_map.call(null,map__19607);
var line = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19608 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19608__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19608,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19608);
var G__19608__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19608__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19608__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19608__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19609 = top_data;
var G__19609__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19609,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19609);
var G__19609__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19609__$1);
var G__19609__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19609__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19609__$2);
var G__19609__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19609__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19609__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19609__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19609__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19610 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19610,(0),null);
var method = cljs.core.nth.call(null,vec__19610,(1),null);
var file = cljs.core.nth.call(null,vec__19610,(2),null);
var line = cljs.core.nth.call(null,vec__19610,(3),null);
var G__19613 = top_data;
var G__19613__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19613,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19613);
var G__19613__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19613__$1);
var G__19613__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__19613__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19613__$2);
var G__19613__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19613__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19613__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19613__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19613__$4;
}

break;
case "execution":
var vec__19614 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19614,(0),null);
var method = cljs.core.nth.call(null,vec__19614,(1),null);
var file = cljs.core.nth.call(null,vec__19614,(2),null);
var line = cljs.core.nth.call(null,vec__19614,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19601_SHARP_){
var or__5002__auto__ = (p1__19601_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19601_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19617 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19617__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19617,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19617);
var G__19617__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19617__$1);
var G__19617__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19617__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19617__$2);
var G__19617__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19617__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19617__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19606__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19621){
var map__19622 = p__19621;
var map__19622__$1 = cljs.core.__destructure_map.call(null,map__19622);
var triage_data = map__19622__$1;
var phase = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19623 = phase;
var G__19623__$1 = (((G__19623 instanceof cljs.core.Keyword))?G__19623.fqn:null);
switch (G__19623__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19624_19633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19625_19634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19626_19635 = true;
var _STAR_print_fn_STAR__temp_val__19627_19636 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19626_19635);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19627_19636);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19619_SHARP_){
return cljs.core.dissoc.call(null,p1__19619_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19625_19634);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19624_19633);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19628_19637 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19629_19638 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19630_19639 = true;
var _STAR_print_fn_STAR__temp_val__19631_19640 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19630_19639);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19631_19640);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19620_SHARP_){
return cljs.core.dissoc.call(null,p1__19620_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19629_19638);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19628_19637);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19623__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
