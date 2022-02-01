import React, {useEffect, useState} from 'react';

const URL = 'https://jsonplaceholder.typicode.com';

function useJSONPlaceholder({resource, id}) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`${URL}/${resource}/${id}`)
      .then(response => response.json())
      .then(json => setData(json.body ?? json.title));
  }, [resource, id]);

  return {
    data,
  };
}

export default useJSONPlaceholder;
