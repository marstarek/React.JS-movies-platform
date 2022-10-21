
# React.JS movies platform  

responsive website movies platform

with home page to get popular and top rated movies ,filter movies ,movie details page , pagination

using React.JS ,swiper
@reduxjs/toolkit
react-redux
react-router-dom
redux-thunk
tailwindcss
daisyui
postcss
vite

## API Reference

#### Get all popular movies

```http
  GET /movie/popular
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get the primary information about a movie.

```http
  GET /movie/{movie_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get the top rated movies on TMDB.

```http
  GET /movie/top_rated
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `page`      | `integer` | **optional**. Specify which page to query. |




## Installation

Install my-project with npm

```bash
  cd React.JS movies platform
  npm install 
  npm run dev
  npm run build
  cd build
  cp index.html 200.html
  surge
```
    
## Acknowledgements

 - [swiperjs](https://swiperjs.com/demos#space-between)
 - [redux-toolkit](https://redux-toolkit.js.org/)
 - [react-router](https://reactrouter.com/en/main)
 - [redux-thunk](https://redux.js.org/usage/writing-logic-thunks)
 - [tailwind css](https://tailwindcss.com/)
 - [daisy ui](https://daisyui.com/)
 - [vite js](https://vitejs.dev/)
 - [hero icons](https://heroicons.com/)
 - [surge](https://surge.sh/)
 
## Demo

 link to demo
[React.JS movies platform ](https://63528b829588ca3de3904278--fluffy-cuchufli-91a178.netlify.app/)
[React.JS movies platform ](https://industrious-digestion.surge.sh/)





![img1](img3.png?raw=true "Title")
![img1](img1.png?raw=true "Title")
![img1](img2.png?raw=true "Title")
![img1](img4.png?raw=true "Title")
![img1](img5.png?raw=true "Title")
