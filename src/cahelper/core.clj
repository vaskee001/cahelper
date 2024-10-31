(ns cahelper.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.resource :refer [wrap-resource]]))

(defn handler [request]
  (case (:uri request)
    "/" {:status 200
         :headers {"Content-Type" "text/html"}
         :body (slurp "resources/public/index.html")}
    {:status 404
     :body "Page not found"}))

(defn -main []
  (let [app (-> handler
                (wrap-defaults site-defaults)
                (wrap-resource "public"))]
    (run-jetty app {:port 3000})))
