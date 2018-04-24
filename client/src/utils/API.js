import axios from "axios";
const BASEURL = "https://api.rss2json.com/v1/api.json?rss_url=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
