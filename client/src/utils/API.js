import axios from "axios"

//Creating the base URL for searching iTunes
const BASURL = 'https://itunes.apple.com/search?media=podcast&term='

export default {

  // Search the iTunes Affiliate API
  searchItunes: function(query){
    return axios.get(BASURL + query);
  }
}
