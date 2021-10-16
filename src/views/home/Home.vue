<template>
  <div class="home">
    <section>
      <div class="container">
        <h1>Home</h1>

        <form
          :class="{ 'was-validated': formWasValidated }"
          @submit.prevent="submitFormAccess($event)"
          novalidate
        >
          <!-- is-invalid -->
          <input
            v-model="formUsername"
            ref="formUsername"
            class="form-control"
            type="text"
            placeholder="Ex: meuNick98"
            name="username"
            required
          />
          <!-- pattern="^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$" -->
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

  data: () => ({
    formUsername: "",
    formWasValidated: false,
  }),

  watch: {
    formUsername() {
      const valid = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        this.formUsername
      );

      if (valid) {
        this.$refs.formUsername.setCustomValidity("");
      } else {
        this.$refs.formUsername.setCustomValidity("Preencha um username válido.");
      }

      console.debug("formUsername", valid);
      return valid;
    },
  },

  created() {
    // TODO: Criar modulo de autenticacao
  },

  methods: {
    async submitFormAccess(event) {
      this.formWasValidated = true;
      const form = event.target;
      const valid = form.checkValidity();
      console.debug(valid);
      if (!valid) {
        form.reportValidity();
        return;
      }

      const username = form.elements["username"].value;
      console.debug(username);

      // TODO: Criar modulo de autenticacao
      try {
        const u = await firebase.user.readUserDataByUsername(username);
        if (u) {
          console.debug("Existe um usuario u", u);
          return;
        }
      } catch (error) {
        console.debug(error);
      }

      try {
        await firebase.user.writeUserData(username, `${username}@email.com`);
      } catch (error) {
        console.debug(error);
      }
      // firebase.user.readUserDataByEmail("ola@email.com");
    },
  },
};
</script>
