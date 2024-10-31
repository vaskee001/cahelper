(ns cahelper.installca
  (:require [clojure.java.shell :refer [sh]])) 

(defn installca []
  (let [script-path "resources/installca.sh" 
        result (sh "bash" script-path)]       
    (:out result)))                           
