import axios from "axios";

export default {
  // Gets all Podcasts
  getPodcasts: function() {
    return axios.get("/api/Podcasts");
  },
  // Gets the Podcast with the given id
  getPodcast: function(id) {
    return axios.get("/api/Podcasts/" + id);
  },
  // Deletes the Podcast with the given id
  deletePodcast: function(id) {
    return axios.delete("/api/Podcasts/" + id);
  },
  // Saves a Podcast to the database
  savePodcast: function(PodcastData) {
    return axios.post("/api/Podcasts", PodcastData);
  }
};
