import React from 'react';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader {...props} />
    <div className="border" />
    <div className="body">
      <p>
        {props.text}
      </p>
    </div>
  </div>
);

export default Post;
