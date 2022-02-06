import React, {useEffect, useState} from 'react';

const URL = 'http://localhost:3001';

function useServer({resource, id, cache = true}) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`${URL}?resource=${resource}&id=${id}&cache=${cache}`)
      .then(response => response.json())
      .then(json => setData(json.body ?? json.title));
  }, [resource, id]);

  return {
    data,
  };
}

export default useServer;
