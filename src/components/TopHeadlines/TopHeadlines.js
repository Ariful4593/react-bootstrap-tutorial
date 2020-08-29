import React, {useEffect} from 'react';
import {useState} from 'react';
import Header from '../Header/Header';
const TopHeadlines = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=91b9c79c1b6b4aeebc5138c97060b62f';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    console.log(articles)
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                
            articles.map(article => <Header article={article}></Header>)
                
            }
        </div>
    );
};

export default TopHeadlines;