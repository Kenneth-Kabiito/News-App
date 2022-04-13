/*This code is the original work for Group 14 of Computer Science Year 3, 2022, Makerere University, Kampala Uganda for the course unit of Principles of Programming, first programming assignment
               GROUP 14 MEMBERS ARE: 
  Kabiito Kenneth       1900716471  19/U/16471/EVE
  Harold Rwothomio      1900717834  19/U/17834/EVE
  Akol David            217020007   17/U/18575
  Katwesigye Robinson   1900716593  19/U/16593/EVE */

//varialbes
const localButton = document.getElementById("local");
const businessButton = document.getElementById("business");
const entButton = document.getElementById("entertainment");
const sportsButton = document.getElementById("sports");
const weatherButton = document.getElementById("weather");
const searchButton = document.getElementById("searchButton");

const queryNews = document.getElementById("queryNews");
const typeN = document.getElementById("typeN");
const details = document.getElementById("details");

//Array
var newsDataArr = [];

// APIs

const API_KEY = "e3195b63bb944db3b54db0158e97d012";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3195b63bb944db3b54db0158e97d012";
const LOCAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=local&apiKey=e3195b63bb944db3b54db0158e97d012";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3195b63bb944db3b54db0158e97d012";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e3195b63bb944db3b54db0158e97d012";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=e3195b63bb944db3b54db0158e97d012";
const WEATHER_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=weather&apiKey=e3195b63bb944db3b54db0158e97d012";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="; 

window.onload = function() {
	typeN.innerHTML = "<h4>Headlines</h4>";
	fetchHeadlines();
};

localButton.addEventListener("click",function(){
	typeN.innerHTML = "<h4>local news</h4>";
     fetchlocalNews();
}); 

businessButton.addEventListener("click",function(){
	typeN.innerHTML = "<h4>Business news</h4>";
     fetchBusinessNews();
});

entButton.addEventListener("click",function(){
	typeN.innerHTML = "<h4>Entertainment news</h4>";
     fetchEntertainmentNews();
});

sportsButton.addEventListener("click",function(){
	typeN.innerHTML = "<h4>Sports news</h4>";
     fetchSportsNews();
});

weatherButton.addEventListener("click",function(){
	typeN.innerHTML = "<h4>Weather news</h4>";
     fetchWeatherNews();
});

searchButton.addEventListener("click",function(){
	typeN.innerHTML = "<h4>Search : "+queryNews.value+" </h4>";
     fetchQueryNews();
});

const fetchHeadlines = async () => {
	const response = await fetch(HEADLINE_NEWS+API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

const fetchlocalNews = async () => {
	const response = await fetch(LOCAL_NEWS+API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

const fetchBusinessNews = async () => {
	const response = await fetch(BUSINESS_NEWS+API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

const fetchEntertainmentNews = async () => {
	const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

const fetchSportsNews = async () => {
	const response = await fetch(SPORTS_NEWS+API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

const fetchWeatherNews = async () => {
	const response = await fetch(WEATHER_NEWS+API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

const fetchQueryNews = async () => {
	  if (queryNews.value == null)
	  	return;
	const response = await fetch(SEARCH_NEWS+encodeURIComponent(queryNews.value)+"&apiKey="API_KEY);
      newsDataArr = [];
	if(response.status >= 200 && response.status <300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
	} else {
              // Handle errors
          console.log(response.status, response.statusText);
	} 
	  displayNews();
}

   function displayNews(){
   	    details.innerHTML = "";
     if (newsDataArr.length == 0) {
     	details.innerHTML = "<h5>No Data Found.</h5>";
     	  return;
     }
       newsDataArr.forEach(news => {

       	  var date = news.publishedAt.split("T");

         var col = document.createElement('div');
         col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

         var card = document.createElement('div');
         card.className = "p-2";
         
         var image = document.createElement('img');
         image.setAttribute("height", "matchparent");
         image.setAttribute("width", "100%");
         image.src=news.urlToImage;

         var cardBody = document.createElement('div');
         var newsHeading = document.createElement('h5');
         newsHeading.className = "card-title";
         newsHeading.innerHTML = news.title;

         var dateHeading = document.createElement('h6');
         dateHeading.className = "text-primary";
         dateHeading.innerHTML = date[0];

         var description = document.createElement('p');
         description.className = "text-muted";
         description.innerHTML = news.description;

         var link = document.createElement('a');
         link.className = "btn btn-dark";
         link.setAttribute("target", "_blank");
         link.href = news.url;
         link.innerHTML = "Read more";

         cardBody.appendChild(newsHeading);
         cardBody.appendChild(dateHeading);
         cardBody.appendChild(description);
         cardBody.appendChild(link);

         card.appendChild(image);
         card.appendChild(cardBody);

         col.appendChild(card);
         
         details.appendChild(col);

       });
   }