<template>
  <div class="home">
    <section>
      <div class="container">
        <h1>Home</h1>

        <form @submit.prevent="submitFormAccess($event)">
          <input type="text" name="username" />
          <button>Entrar</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "@/services/firebase";

export default {
  name: "Home",

  created() {},

  methods: {
    submitFormAccess(event) {
      const form = event.target;
      const username = form.elements["username"].value;
      console.debug(username);

      firebase.user.writeUserData(username, `${username}@email.com`);
      // firebase.user.readUserDataByEmail("ola@email.com");
    },
  },
};
</script>
