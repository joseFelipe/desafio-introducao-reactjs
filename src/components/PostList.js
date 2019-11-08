import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Felipe Silva",
          avatar: "https://avatars2.githubusercontent.com/u/6788461?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Alternative está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Ricardo Gutz",
              avatar:
                "https://avatars1.githubusercontent.com/u/33100827?s=460&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Agnaldo Loch",
          avatar:
            "https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-9/57453682_2261230487430620_2494590363558215680_n.jpg?_nc_cat=109&_nc_oc=AQmRPlv2Egl-P2OwpHxgRZht2dB3u2mFIR72ApZkmT7Wz6NNgsIRJiPQPEIscmkcHGqtbnv8cmrupQsXUJAvJSgZ&_nc_ht=scontent.fbnu2-1.fna&oh=9fe19767f6a320402e1aa48dbed81bb1&oe=5E545F48"
        },
        date: "04 Jun 2019",
        content: "Não vamos colocar uma meta, vamos deixar a meta aberta.",
        comments: [
          {
            id: 1,
            author: {
              name: "Jonathan",
              avatar:
                "https://scontent.fbnu2-1.fna.fbcdn.net/v/t31.0-8/25586923_10211312354150053_4121969465493701747_o.jpg?_nc_cat=102&_nc_oc=AQnvNVL9i-9JNuVp7ud5bCAZoIGyXw3xLbKjl97NMIDbSXbEpxiVNl0VZkhUc1pdwR1uneGFH-7YncYD-cn1--kI&_nc_ht=scontent.fbnu2-1.fna&oh=ab3a815b9e619318520784fba83cfa15&oe=5E60C938"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
