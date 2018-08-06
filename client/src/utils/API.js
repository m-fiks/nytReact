import axios from "axios";

export default {
    articleQuery: (topic, startYear, endYear) =>{
        const apiKey = "e74b17e821394fbcb799dc99ad6d7e75";
        let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
        return axios.get(queryURL);
    },
    saveArticles: (data) => {
        return axios.post("/api/articles", data)
    },
    getSaved: () => {
        return axios.get("/api/articles");
    },
    deleteArticle: (id) => {
        return axios.delete("/api/articles/" + id)
    },
    deleteAll: () => {
        return axios.delete("/api/remove")
    }
}
