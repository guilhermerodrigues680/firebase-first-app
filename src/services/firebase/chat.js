import { realTimeDatabase as database } from "./database";
import { ref, set, push, onValue } from "firebase/database";

const chatMessagesPath = "chat/messages/";

async function sendMessage(userId, message) {
  const chatMessagesRef = ref(database, chatMessagesPath);
  const pushChatMessagesRef = push(chatMessagesRef);
  await set(pushChatMessagesRef, {
    userId,
    message,
  });
}

function onMessage(callback, cancelCallback) {
  const chatMessagesRef = ref(database, chatMessagesPath);
  const unsubscribe = onValue(
    chatMessagesRef,
    (snapshot) => {
      const data = snapshot.val();
      console.debug(data);
      console.debug("call callback");
      callback(data);
    },
    (error) => {
      console.debug(error);
      console.debug("call cancelCallback");
      cancelCallback(error);
    }
  );

  return unsubscribe;
}

export default {
  sendMessage,
  onMessage,
};
