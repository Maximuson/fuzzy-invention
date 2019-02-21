import React from 'react';
import s from './ProfileInfo.module.css'

let nameSurname = React.createRef()

const ProfileInfo = (args) => {
    return (
        <div className={s.textAndAvatar}>
            <img src="https://avatars1.githubusercontent.com/u/36667426?s=400&u=476fff5c770b7a74134f22ba5b2e00843ac960ea&v=4" alt="" className={s.avatarProfile} />
            <h2 ref={nameSurname}>{args.name}</h2>
            <span>
                <h3>Friends</h3>
                <strong>{args.friendsC}</strong>
            </span>
            <span>
                <h3>Folowers</h3>
                <strong>{args.folowersC}</strong>
            </span>
        </div>
    )
}

export default ProfileInfo;