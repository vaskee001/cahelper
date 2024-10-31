(ns cahelper.frontend
  (:require [reagent.core :as r]))

;; Define the main application component
(defn app []
  (let [data (r/atom nil)  ;; Create an atom to hold fetched data
        error (r/atom nil)]  ;; Create an atom to hold any error messages
    (fn []
      [:div
       [:h1 "Welcome to CAHelper"]
       [:button
        {:on-click (fn []
                     (reset! error nil)  ;; Reset error before fetching
                     (js/fetch "/api/data"
                               {:method "GET"})
                     .then (fn [response]
                             (if (.ok response)
                               (-> response .json
                                   (.then (fn [json]
                                            (reset! data json)))
                                   (.catch (fn [err]
                                             (reset! error (str "Error parsing JSON: " err)))))
                               (reset! error "Failed to fetch data!"))))}
        "Fetch Data"]
       ;; Display any error messages
       (when @error
         [:div.alert.alert-danger @error])
       ;; Display the fetched data
       (when @data
         [:div [:pre (pr-str @data)]])])))

;; Render the main app component
(defn main []
  (r/render [app]
            (.getElementById js/document "app")))

;; Export the initialization function
(defn ^:export init []
  (main))
