<template >
  <form @submit.prevent="handle_submit">
    <label for="">Email</label>
    <input type="email" required v-model="email" />

    <label for="">Password</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error"> {{ passwordError }} </div>


    <label for="">Role</label>
    <select v-model="role">
      <option value="Assassin">Assassin</option>
      <option value="Mage">Mage</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup.alt="add_skill">
    <div v-for="skill in skills" :key="skill" class="pill" @click="remove_skill(skill)">
      {{ skill }}
    </div>

    <div class="term">
      <input type="checkbox" required v-model="terms">
      <label for="">Accept term and conditions</label>
    </div>


    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ terms }}</p>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'Assassin',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  }, methods: {
    add_skill(e) {
      if (e.key === ',' && this.tempSkill) {

        if (this.skills.includes(this.tempSkill)) {
          return;
        }
        this.skills.push(this.tempSkill);
        this.tempSkill = '';


      }
    },

    remove_skill(skill) {
      this.skills = this.skills.filter(item => item !== skill);
    },

    handle_submit() {
      // Validate Password
      this.passwordError = this.password.length > 5 ?
        '' : "Password must be 5 characters long"


      // No error
      if (this.passwordError) {
        return;
      }
      console.log(`Email: ${this.email}`)
      console.log(`Password: ${this.password}`)
      console.log(`SKills: ${this.skills}`)
      console.log(`Terms: ${this.terms}`)
    }


  }
};
</script>
<style >
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border: 2px solid rgb(22, 24, 24);
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 16px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>