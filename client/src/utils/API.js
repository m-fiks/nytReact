import axios from "axios";

export default {
    articleQuery: (topic, startYear, endYear) =>{
        const apiKey = "e74b17e821394fbcb799dc99ad6d7e75";
        let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
        //let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=LGBTQ&begin_date=20110101&end_date=20181231";
    
        return axios.get(queryURL);
    }
}
