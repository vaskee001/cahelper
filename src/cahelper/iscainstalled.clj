(ns cahelper.iscainstalled
  (:require [clojure.java.shell :refer [sh]]))

(defn command-exists? [cmd]
  (let [result (sh cmd "--version")]  
    (zero? (:exit result))))           

(defn check-ca-installation []
  (if (command-exists? "openvpn")
    "OpenVPN is present on the system."
    "OpenVPN is not installed on the system."))
