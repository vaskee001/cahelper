(ns cahelper.installca
  (:require [clojure.java.shell :refer [sh]]))

(defn install-ca []
  (let [result (sh "ls" "-l" "/home/vaske/Documents")]  ; Execute the command
    (:exit result)))                                     ; Return the exit status
