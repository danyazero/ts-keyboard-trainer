import axios from "axios";

export function getWordsReq(letters: string){
    return axios.get(`https://fly.wordfinderapi.com/api/search?letters=${letters}&page_size=15`)
}