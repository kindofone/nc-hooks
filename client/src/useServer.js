import React, {useEffect, useState} from 'react';

const URL = 'http://localhost:3001';

function useServer({resource, id}) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`${URL}?${resource}Id=${id}`) // http://localhost:3001?postsId=1
      .then(response => response.json())
      .then(json => setData(json.body ?? json.title));
  }, [resource, id]);

  return {
    data,
  };
}

export default useServer;
