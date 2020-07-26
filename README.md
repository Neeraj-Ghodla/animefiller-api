# animefiller-api

This is an unofficial api for the https://www.animefillerlist.com/ website.

The api only has 2 endpoints. One to get the list of all animes in the database and the other to get the episode information of a particular anime.

https://secure-plains-19770.herokuapp.com/api [GET]
To get a list of all animes in the database.

https://secure-plains-19770.herokuapp.com/api/{anime name} [GET]
To get episode information about a particular anime. The anime name should be exactly same as provided in the anime list. It is recommended that you copy the anime name from the first endpoint.

# How does the api works.
The api basically fetches data from a MongoDB database which is populated by scraping https://www.animefillerlist.com/ website.
