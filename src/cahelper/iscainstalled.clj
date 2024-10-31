(ns cahelper.iscainstalled
  (:require [clojure.java.shell :refer [sh]]))

(defn check-ca-installation []
  (let [script-path "resources/iscainstalled.sh"
        result (sh "bash" script-path)]
    (:out result)))
