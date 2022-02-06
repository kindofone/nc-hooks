import http from 'http';
import Url from 'url-parse';
import {POSTS_JSON} from './posts_json.mjs';
import {TODOS_JSON} from './todos_json.mjs';

const hostname = '127.0.0.1';
const port = '3001';

function getResourceById(resource, id) {
  return resource.find(item => item.id === id);
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000);
  res.setHeader('Content-Type', 'application/json');

  const {query} = new Url(req.url, true);
  const resource = query.resource;
  const id = parseInt(query.id);

  let data = null;
  switch (resource) {
    case 'posts':
      data = getResourceById(JSON.parse(POSTS_JSON), id);
      break;
    case 'todos':
      data = getResourceById(JSON.parse(TODOS_JSON), id);
      break;
  }

  if (data == null) {
    res.statusCode = 500;
    res.end("resource or id undefined");
    return;
  }
  
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});