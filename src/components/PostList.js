import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Cantara",
          avatar: "https://avatars2.githubusercontent.com/u/4641831?s=400&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocket está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernando",
              avatar: "https://qph.fs.quoracdn.net/main-qimg-e01acc06b1d3fc9e47d56b42427dec15",
            },
            content: "Estamos sempre de olho na galera lá da comunidade."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://pickaface.net/assets/images/slides/slide4.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? \n\nEstou fazendo o Bootcamp e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg",
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "César Telodo",
              avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64862ac6-78fd-48c3-9c17-a673fa891a3d/d87nszw-525c9864-27c9-4c90-bbce-010b940746bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NDg2MmFjNi03OGZkLTQ4YzMtOWMxNy1hNjczZmE4OTFhM2QvZDg3bnN6dy01MjVjOTg2NC0yN2M5LTRjOTAtYmJjZS0wMTBiOTQwNzQ2YmYuanBnIn1dXX0.NMcudUUALYeOf3t0eNWCSP_N7lUTetf6EyYTd_meG2s",
            },
            content: "Que maaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}

export default PostList;