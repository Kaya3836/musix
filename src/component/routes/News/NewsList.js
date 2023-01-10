import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const [ articles, setArticles ] = useState([]);   

    useEffect(() => {
        const getArticles = async () => {
            const res = await 
            axios
                .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2089df34b502431d8a6c213e4483639f"
                );
            setArticles(res.data.articles)
            console.log(res);
        };
        getArticles()
    });
    return( 
        <div>
            {articles.map(({ title, description, url, urlToImage}) => (
                <NewsItem
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}/>
            ) )}
        </div>
    )
}

export default NewsList;