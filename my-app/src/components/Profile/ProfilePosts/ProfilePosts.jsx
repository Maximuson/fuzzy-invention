import React from "react";
import s from "./ProfilePosts.module.css";
import Post from "../../Post/Post";

const ProfilePosts = props => {
  let postsElements = props.posts.map(p => {
    return <Post key={p.id} userName={p.userName} text={p.text} />;
  });

  let postTextarea = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  };
  let updateNewPostText = () => {
    let text = postTextarea.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.createPostBlock}>
        <textarea
          onChange={updateNewPostText}
          ref={postTextarea}
          value={props.newPostText}
          cols="30"
          rows="10"
        />
        <button onClick={addPost}>Create post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default ProfilePosts;
