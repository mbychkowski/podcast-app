import axios from "axios";
const BASERSS = "https://api.rss2json.com/v1/api.json?rss_url=";

export default {
  searchRss: function(query) {
    return axios.get(BASERSS + query);
  }
};
