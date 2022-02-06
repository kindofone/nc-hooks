import http from 'http';
import Url from 'url-parse';
import fetch from 'node-fetch';
import {POSTS_JSON} from './posts_json.mjs';
import {TODOS_JSON} from './todos_json.mjs';

const hostname = '127.0.0.1';
const port = '3001';

function respondFromCache(resource, id) {
  let data = null;
  switch (resource) {
    case 'posts':
      const posts = JSON.parse(POSTS_JSON);
      data = posts.find(item => item.id === id);
      break;
    case 'todos':
      const todos = JSON.parse(TODOS_JSON);
      data = todos.find(item => item.id === id);
      break;
  }

  return data;
}

async function respondFromJSONPlaceholder(resource, id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}/${id}`);
  return await response.json();
}

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);
  res.setHeader('Content-Type', 'application/json');

  const {query} = new Url(req.url, true);
  const resource = query.resource;
  const id = parseInt(query.id);
  const cache = query.cache === 'true';
  
  let data = null;
  if (cache) {
    data = respondFromCache(res, resource, id);
  } else {
    data = await respondFromJSONPlaceholder(res, resource, id);
  }

  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});