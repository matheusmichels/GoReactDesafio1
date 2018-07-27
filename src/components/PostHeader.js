import React from 'react';

const PostHeader = props => (
  <div className="postHeader">
    <table>
      <tr>
        <td rowSpan="2">
          <img src={props.icon} alt="Avatar usuário" height="60" width="60" />
        </td>
        <td className="author">
          <p>
            {props.author}
          </p>
        </td>
      </tr>
      <tr>
        <td className="time">
          <p>
            {props.time}
          </p>
        </td>
      </tr>
    </table>
  </div>
);

export default PostHeader;
