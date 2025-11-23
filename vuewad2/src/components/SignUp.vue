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
      password: ""
    };
  },
  methods: {
    submitForm() {
      // Handle signup logic here
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
    padding-bottom: 1rem;
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