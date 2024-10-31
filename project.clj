(defproject cahelper "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.10.866"]
                 [reagent "1.1.0"]
                 [cljs-ajax "0.8.1"] ]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :source-paths ["src"]
  :cljsbuild
  {:builds
   {:app {:source-paths ["src"]
          :compiler {:output-to "resources/public/js/compiled/cahelper.js"
                     :optimizations :none
                     :source-map true}}}})