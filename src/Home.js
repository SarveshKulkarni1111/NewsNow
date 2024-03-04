import {React, useState, useEffect} from 'react'
import NewsCard from './newsCard';
import Navbar from './navbar';
import { getNews } from './api';


const Home = ({cat}) => {

    const [newsData, setnewsData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getNews({cat}).then((news) => setnewsData(news.articles));
    fetchData();
  }, [cat]);
  

  const fetchData = async () => {
    const news = await getNews();
    setnewsData(news.articles);
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    const news = await getNews({ searchWord: query });
    setnewsData(news.articles);
  };


  return (
      <div className="text-center" style={{ height: '100vh'}}>
      <Navbar onSearch={handleSearch} />
    <div>
    {newsData? (newsData.map((article, index) => (
         <NewsCard
           key={index}
           urlToImage={article.urlToImage}
           url={article.url}
           title={article.title}
           description={article.description}
           author={article.author}
         />
       ))) : (<p>No data</p>)
     }
     </div>

     </div>
  )
}

export default Home
