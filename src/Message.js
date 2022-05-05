import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
// import profile from "./img/ritik.png";

function Message({ userInfo }) {
  console.log(userInfo);
  return (
    <div className="message">
      <Avatar src={userInfo.user.photo} />
      <div className="message__info">
        <h4>
          {userInfo.user.displayName}
          <span className="message__timestamp">
            {userInfo.timestamp?.toDate().toUTCString()}
          </span>
        </h4>

        <p>{userInfo.message}</p>
      </div>
    </div>
  );
}

export default Message;
