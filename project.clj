(defproject cahelper "0.1.0-SNAPSHOT"
  :description "AClosure app - Vaske"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [ring-cors "0.1.13"]
                 [ring/ring-defaults "0.3.3"]]
  :plugins [[lein-ring "0.12.5"]]
  :source-paths ["src"]
  :main cahelper.core)
