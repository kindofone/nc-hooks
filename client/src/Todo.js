import React, { useEffect, useState } from 'react';
import useServer from './useServer';

function Todo({id}) {
  const {data} = useServer({
    resource: 'todos', 
    id
  });
  
  return data == null ? (
    <div>Loading...</div>
  ) : (
    <div>{data}</div>
  );
}

export default Todo;
