(ns cahelper.iscainstalled
  (:require [clojure.java.shell :refer [sh]]))

(defn command-exists? [cmd]
  (let [result (sh cmd "--version")]  ; Try to get the version of the command
    (zero? (:exit result))))           ; If the exit code is 0, the command exists

(defn check-ca-installation []
  (if (command-exists? "openvpn")
    "OpenVPN is present on the system."
    "OpenVPN is not installed on the system."))
