let rerenderEntireTree = () => {
  console.log('state changed')
}

let state = {
  dialogsPage: {
    dialogContact: [
      { id: 0, userName: "Maximuson" },
      { id: 1, userName: "Tester" },
      { id: 2, userName: "Jora" },
      { id: 3, userName: "Pavlovich" }
    ],

    messages: [
      { id: 0, messageText: "Hi" },
      { id: 1, messageText: "Test for overflow this block" }
    ]
  },
  profilePage: {
    id: 5,
    newPostText: "",
    posts: [
      { id: 0,
        userName: "Maximuson",
        text: "Test for overflow this block" },
      {
        id: 1,
        userName: "Maximuson",
        text: "Note that the development build is not optimized."
      },
      { id: 2, userName: "Maximuson", text: "Some Text of this post" },
      {
        id: 3,
        userName: "Maximuson",
        text: "maybe later there will be imgs and more text"
      },
      { id: 4, userName: "Maximuson", text: "and more and likes" }
    ]
  }
};

export const addPost = () => {
  let post = {
    id: state.profilePage.id,
    userName: "Maximuson",
    text: state.profilePage.newPostText
  };
  state.profilePage.posts.push(post);
  state.profilePage.id += 1;
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
  
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
