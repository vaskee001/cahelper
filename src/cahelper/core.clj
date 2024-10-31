(ns cahelper.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery *anti-forgery-token*]]
            [ring.middleware.cors :refer [wrap-cors]] 
            [cahelper.iscainstalled :refer [check-ca-installation]]
            [cahelper.installca :refer [installca]])) 

(defn index-page []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (-> "resources/public/index.html"
             slurp
             (.replace "{{csrfToken}}" *anti-forgery-token*))})

(defn handler [request]
  (case (:uri request)
    "/" (index-page)
    "/server.html" {:status 200
                    :headers {"Content-Type" "text/html"}
                    :body (slurp "resources/public/server.html")}
    "/clients.html" {:status 200
                     :headers {"Content-Type" "text/html"}
                     :body (slurp "resources/public/clients.html")}
    "/admins.html" {:status 200
                    :headers {"Content-Type" "text/html"}
                    :body (slurp "resources/public/admins.html")}
    "/logout.html" {:status 200
                    :headers {"Content-Type" "text/html"}
                    :body (slurp "resources/public/logout.html")}
    "/checkca" {:status 200
                :headers {"Content-Type" "text/plain"}
                :body (check-ca-installation)} ; 
    "/installca" {:status 200
                  :headers {"Content-Type" "text/plain"}
                  :body (installca)} 
    {:status 404
     :body "Page not found"}))

(defn -main []
  (let [app (-> handler
                (wrap-cors :access-control-allow-origin ["http://127.0.0.1:3000"]
                           :access-control-allow-methods [:get :post :options])
                (wrap-anti-forgery)
                (wrap-defaults site-defaults)
                (wrap-resource "public"))]
    (run-jetty app {:port 3000})))
