import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {
  return (
    <div className={s.blockProfileStatus}>
      <ProfileInfo name="Maximuson Pavlenko" friendsC="3" folowersC="44" />
      <ProfilePosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
