<template>
  <div class="chat">
    <section>
      <div class="container">
        <h1>Chat</h1>

        <form @submit.prevent="submitFormMessage($event)">
          <input type="text" name="message" />
          <button>Entrar</button>
        </form>

        <div class="console">
          <div v-for="(v, k) in messages" :key="k">
            <span>{{ v.userId }}</span> :
            <span>{{ v.message }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "@/services/firebase";

export default {
  name: "Chat",

  data: () => ({
    unsubscribe: null,
    messages: {},
  }),

  created() {
    const unsubscribe = firebase.chat.onMessage(this.onMessage, this.onMessageError);
    this.unsubscribe = unsubscribe;
  },

  beforeDestroy() {
    console.debug("beforeDestroy", this.unsubscribe);
    if (this.unsubscribe) {
      console.debug("this.unsubscribe");
      this.unsubscribe();
    }
  },

  methods: {
    submitFormMessage(event) {
      const form = event.target;
      console.debug(form);
      const message = form.elements["message"].value;

      // firebase.user.writeUserData(username, `${username}@email.com`);
      // firebase.user.readUserDataByEmail("ola@email.com");
      firebase.chat.sendMessage("1", message);
    },

    onMessage(msg) {
      console.debug(msg);
      this.$set(this, "messages", msg);
    },

    onMessageError(error) {
      console.debug(error);
    },
  },
};
</script>
