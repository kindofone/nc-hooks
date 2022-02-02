import http from 'http';
import Url from 'url-parse';
import {POSTS_JSON} from './posts_json.mjs';

const hostname = '127.0.0.1';
const port = '3001';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);
  res.setHeader('Content-Type', 'application/json');

  const {query} = new Url(req.url, true);
  const id = parseInt(query.postsId);
  const posts = JSON.parse(POSTS_JSON);
  const post = posts.find(post => post.id === id);

  res.end(JSON.stringify(post));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});