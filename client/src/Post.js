import React, { useEffect, useState } from 'react';
import useServer from './useServer';

function Post({id}) {
  const {data} = useServer({
    resource: 'posts', 
    id
  });

  return data == null ? (
    <div>Loading...</div>
  ) : (
    <div>{data}</div>
  );
}

export default Post;
