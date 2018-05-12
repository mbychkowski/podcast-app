import axios from "axios"

// Creating the base URL for searching iTunes
const BASESEARCH = "https://itunes.apple.com/search?media=podcast&term=";

// Creating the base URL for searching rss2json
const BASERSS = "https://api.rss2json.com/v1/api.json?rss_url=";

export default {

  // Search the iTunes Affiliate API
  searchItunes: function(query) {
    return axios.get(BASESEARCH + query);
  },

  // Convert RSS feed to readable json using rss2json API
  searchRss: function(query) {
    return axios.get(BASERSS + query);
  },

  //Get all users
  getUsers: function(){
    return axios.get("/api/users")
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users/db", userData);
  },
  //Get a list of all the top ten podcasts
  getTopTenShows: function(){
    return axios.get("/api/podcastShow/topTen");
  },
  //Get s list of all saved podcasts
  getPodcasts: function(){
    return axios.get("/api/podcastShow")
  },
  //Add a podcast to the db
  addPodcast: function(podcastData){
    return axios.post("/api/podcastShow", podcastData)
  },
  //Add a podcast episode to the db
  addEpisode: function(episodeData){
    return axios.post("/api/podcastEpisode", episodeData)
  },
  //get the op podcasts from the database
  getTopTenEpisodes: function(){
    return axios.get("/api/podcastEpisode/topTen")
  },
  // Add a subscription to a user
  addSubscription: function(subscriptionData){
    return axios.post("/api/subscriptions", subscriptionData)
  },
  // Push a user to a podcast
  addUserToSubscription: function(userData){
    return axios.put("/api/podcastShow/subscription", userData)
  }
}
