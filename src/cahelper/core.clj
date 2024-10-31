(ns cahelper.core
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [ring.util.response :refer [response]]))

(defroutes app-routes
  (GET "/" [] (response "Hello from the backend!"))
  (GET "/api/data" [] (response {:message "This is your API!"}))
  (route/not-found "Not Found"))

(defn -main []
  (jetty/run-jetty app-routes {:port 3000 :join? false}))
