#!/usr/bin/env bb

(defn command-exists? [cmd]
  (not (nil? (some-> (clojure.java.shell/sh "command" "-v" cmd) :exit zero?))))

(if (command-exists? "openvpn")
  (println "OpenVPN is present on the system.")
  (println "OpenVPN is not installed on the system."))
