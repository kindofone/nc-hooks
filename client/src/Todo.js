import React, { useEffect, useState } from 'react';
import useJSONPlaceholder from './useJSONPlaceholder';

function Todo({id}) {
  const {data} = useJSONPlaceholder({
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
