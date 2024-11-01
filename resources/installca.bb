#!/usr/bin/env bb

(require '[babashka.process :refer [process]])

(println "Script is running...")

(let [result @(process ["ls" "-l" "/home/vaske/Documents"])]
  (println (:out result)))
