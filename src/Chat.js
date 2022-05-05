import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import db from "./firebase";
import { selectUser } from "./features/userSlice";

function Chat() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    if (channelId) {
      const q = query(
        collection(db, "channels", channelId, "messages"),
        orderBy("timestamp", "desc")
      );
      onSnapshot(q, (snapshot) => {
        setUserInfos(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [channelId]);

  // console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();

    addDoc(collection(db, "channels", channelId, "messages"), {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {userInfos.map((userInfo) => (
          <Message userInfo={userInfo} />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />

          <button
            className="chat__inputButoon"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
