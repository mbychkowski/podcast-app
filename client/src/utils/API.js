import axios from "axios"

// Creating the base URL for searching iTunes
const BASESEARCH = "https://itunes.apple.com/search?media=podcast&term="
export default {

  // Search the iTunes Affiliate API
  searchItunes: function(query) {
    return axios.get(BASESEARCH + query);
  }
}

// Creating the base URL for searching rss2json
const BASERSS = "https://api.rss2json.com/v1/api.json?rss_url=";
export default {

  // Convert RSS feed to readable json using rss2json API
  searchRss: function(query) {
    return axios.get(BASERSS + query);
  }
};
