import React, {useEffect, useState} from 'react';

const URL = 'http://localhost:3001';

function useServer({resource, id}) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // http://localhost:3001?[posts/todos]Id=1
    fetch(`${URL}?resource=${resource}&id=${id}`)
      .then(response => response.json())
      .then(json => setData(json.body ?? json.title));
  }, [resource, id]);

  return {
    data,
  };
}

export default useServer;
