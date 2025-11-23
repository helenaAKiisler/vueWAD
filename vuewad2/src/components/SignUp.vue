<template>
    <div class= "center">
    <section class="signupBox">
    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />

        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div v-if="passwordErrors.length" class="error-messages">
        <p>The password is not valid:</p>
        <ul>
          <li v-for="(error, index) in passwordErrors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <button type="submit">Signup</button>
    </form>
  </section>
  </div>

</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordErrors: []
    };
  },
  methods: {
    validatePassword(password) {
      const errors = [];

      if (password.length < 8 || password.length >= 15) {
        errors.push("Password must be at least 8 characters and less than 15 characters");
      }
      if (!/^[A-Z]/.test(password)) {
        errors.push("Password must start with an uppercase alphabet");
      }
      if (!/[A-Z]/.test(password)) {
        errors.push("Includes at least one uppercase alphabet character");
      }
      if ((password.match(/[a-z]/g) || []).length < 2) {
        errors.push("Includes at least two lowercase alphabet characters");
      }
      if (!/\d/.test(password)) {
        errors.push("Includes at least one numeric value");
      }
      if (!/_/.test(password)) {
        errors.push('Includes the character "_"');
      }

      return errors;
    },
    submitForm() {
      // Handle signup logic here
      this.passwordErrors = this.validatePassword(this.password);

      if (this.passwordErrors.length) return;
      console.log("Form submitted:", this.name, this.email, this.password);
      alert("Signup successful!");
    }
  }
};
</script>

<style>

.signupBox{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-color: lightpink;
    border-radius: 1em;
    padding: 2em;
    max-width: 330px;
}
form {
    background-color: lightpink;
}

.form-grid {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem 1rem;
    align-items: center;
    background-color: lightpink;
    padding: 1rem;
}

.form-grid label {
    text-align: right;
    background-color: lightpink;
}

button {
    background-color: rgb(230, 108, 127);
    color: white;
    border: #f4c3cc;
    padding: 10px 20px;
    border-radius: 1em;
    cursor: pointer;
    font-size: 1em;
}
.center {
  display: flex;
  justify-content: center;
 }
</style>