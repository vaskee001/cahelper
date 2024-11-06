(ns cahelper.installca
  (:require [clojure.java.shell :refer [sh]]))

(defn installca []
  (let [result (sh "bash" "-c" "ls -l /home/vaske/Documents")] 
    (if (zero? (:exit result))        
      (:out result)                   
      (:err result)))) 