export const getNews = async ({ searchWord = '', cat = '' } = {}) => {
    let apiUrl = '';
  
    if (searchWord && cat) {
      apiUrl = `https://newsapi.org/v2/top-headlines?q=${searchWord}&category=${cat}&apiKey=13cd51ca76b646689d8eeaae0116d499`;
    } 
    else if (searchWord) {
      apiUrl = `https://newsapi.org/v2/top-headlines?q=${searchWord}&apiKey=13cd51ca76b646689d8eeaae0116d499`;
    } else if (cat) {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=13cd51ca76b646689d8eeaae0116d499`;
    } else {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=13cd51ca76b646689d8eeaae0116d499`;
    }
  
    const response = await fetch(apiUrl, {
      method: "GET",
    });
  
    return await response.json();
  };
  





// export const getNews = async ({searchWord, cat}) => {

//     const response = await fetch(searchWord?
//         `https://newsapi.org/v2/top-headlines?q=${searchWord}&apiKey=13cd51ca76b646689d8eeaae0116d499`
//         :`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=13cd51ca76b646689d8eeaae0116d499`,
//      {method: "GET",
 
//  });
 
//  return await response.json();
//  };