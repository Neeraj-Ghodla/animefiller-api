# animefiller-api

This is an unofficial api for the https://www.animefillerlist.com/ website.

The api only has 2 endpoints. One to get the list of all animes in the database and the other to get the episode information of a particular anime.

https://secure-plains-19770.herokuapp.com/api [GET]
To get a list of all animes in the database.

https://secure-plains-19770.herokuapp.com/api/{anime_name} [GET]
To get episode information about a particular anime. The anime name should be exactly same as provided in the anime list. It is recommended that you copy the anime name from the first endpoint.

for e.g A GET request to https://secure-plains-19770.herokuapp.com/api/Naruto should give you all the episode information about Naruto.


# How does the api works
The api basically fetches data from a MongoDB database which is populated by scraping https://www.animefillerlist.com/ website. The information that you get from the api should the same compared to https://www.animefillerlist.com/ website because the web scraper is run every hour to update the database of any new changes.
