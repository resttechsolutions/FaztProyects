<template>
  <div class="user">
    <h1>User Component</h1>
    <ul>
      <li v-for="user in users">
          {{ user.name }} -- {{ user.email }} 
          <button v-on:click="deleteUser(user)">Delete</button> 
      </li>
    </ul>

    <div>
        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="Name:" id="username">
            <input type="email" v-model="newUser.email" placeholder="Email:" id="userEmail">
            <button type="submit">Add</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      newUser: {}
    };
  },
  methods: {
      addUser(){
          this.users.push(this.newUser);
          this.newUser = {};
      },
      deleteUser(user){
          this.users.splice(this.users.indexOf(user, 1));
      }
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then(res => this.users = res.body);
  }
};
</script>

<style>
.user {
  color: #fff;
  padding: 20px;
  background: #c31432; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #240b36,
    #c31432
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #240b36,
    #c31432
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>