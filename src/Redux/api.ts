//https://fly.wordfinderapi.com/api/search?letters=httpsflywor&length=7&page_size=20

import axios from "axios";

export function getWordsReq(letters: string){
    return axios.get(`https://fly.wordfinderapi.com/api/search?letters=${letters}&page_size=5`)
}