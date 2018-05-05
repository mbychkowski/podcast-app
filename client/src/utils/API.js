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
    return axios.post("/api/users", userData);
  },

  //Get a list of all the top ten podcasts
  getTopTen: function(){
    return axios.get("/api/podcastShow/topTen");
  },
  //Get s list of all saved podcasts
  getPodcasts: function(){
    return axios.get("/api/podcastShow")
  },
  //Add a podcast to the db
  addPodcast: function(podcastData){
    return axios.post("/api/podcastShow")
  }

}
