import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        key: 0,
        author: 'Diego Schell Fernandes',
        icon:
          'https://media.licdn.com/dms/image/C4D03AQHbAoeZdJ7HUg/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=K_zbbT1YCk3cmkd9zyoZBDO5hCGhXHo1Al_OFkN4NH4',
        time: 'há 2 min',
        text:
          'Etiam in libero lacinia, ultricies ligula in, sagittis metus. Donec mollis urna a mauris egestas tristique. Nullam id convallis neque, vitae scelerisque nibh. Duis non tincidunt lacus. Aliquam at odio consectetur, congue eros in, tempus erat. Pellentesque tristique metus nunc, eget interdum augue consequat in. Quisque sit amet scelerisque leo.',
      },
      {
        key: 1,
        author: 'Cleiton Souza',
        icon:
          'https://media.licdn.com/dms/image/C4E03AQHBUeNuteNiqg/profile-displayphoto-shrink_800_800/0?e=1538006400&v=beta&t=t5KxL3ZHV4JiR4zfYWyzLOYiRuMlaBMnalbA3wwmBPo',
        time: 'há 7 min',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus metus quis viverra commodo. Vivamus a dui vel velit placerat mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam imperdiet nibh purus, scelerisque bibendum tellus sagittis a. Curabitur bibendum ante maximus, vestibulum nibh vitae, vestibulum ligula. Cras nec dolor in mi aliquet rhoncus. Phasellus cursus dui diam, et vestibulum turpis sodales at. Ut sed sagittis mauris. Vestibulum volutpat vitae sem id ultrices. In cursus non lectus in sollicitudin.',
      },
      {
        key: 2,
        author: 'Matheus Michels',
        icon:
          'https://media.licdn.com/dms/image/C4D03AQFdvzuStmmTBw/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=s4UKARTkmLCHetWfFmdv3Kw27D7fACu5jjdGEGHT_O0',
        time: 'há 14 min',
        text:
          'Quisque massa nisi, pharetra vel tempus sed, elementum id nulla. Aliquam non luctus turpis. Sed aliquet fermentum tellus, et blandit leo venenatis at. Nunc facilisis eros eros, quis faucibus nisi maximus non.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <div>
          <Header title="RocketBook" />
        </div>
        <div className="posts">
          {posts.map(post => <Post key={post.key} {...post} />)}
        </div>
      </Fragment>
    );
  }
}
