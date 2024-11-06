(defproject cahelper "0.1.0-SNAPSHOT"
  :description "AClosure app - Vaske"
  :dependencies [[org.clojure/clojure "1.12.0"]
                ;;  [org.clojure/clojurescript "1.11.132"]
                ;;  [cljs-http "0.1.48"]  
                ;;  [reagent "1.2.0"]    
                 [ring/ring-jetty-adapter "1.9.5"]
                 [ring-cors "0.1.13"]
                 [ring/ring-defaults "0.5.0"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-cljsbuild "1.1.8"]]
  :source-paths ["src"]
  :main cahelper.core)
