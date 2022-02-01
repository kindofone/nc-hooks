import React, { useEffect, useState } from 'react';
import useJSONPlaceholder from './useJSONPlaceholder';

function Post({id}) {
  const {data} = useJSONPlaceholder({
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
