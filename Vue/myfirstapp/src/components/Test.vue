<template>
  <div class="test">
    <div>
      <h1>Using Model as a text</h1>
      <h4>{{ user.lastName }}</h4>
    </div>
    <hr />
    <div>
      <h1>Using Model as a Directive</h1>
      <div v-html="myDirectivaHtml"></div>
    </div>
    <hr />
    <div>
      <h1>Using Model as a text in a Directive v-text</h1>
      <div v-text="title"></div>
    </div>
    <hr />
    <div>
      <h1>Taking decitions with v-if/v-else</h1>
      <div v-if="showName">
        <p>{{ user.firstName }}</p>
      </div>
      <div v-else>
        <p>No puedo mostrar nombre</p>
      </div>
    </div>
    <hr />
    <div>
      <h1>Looping an Array with v-for</h1>
      <ul>
        <li v-for="task in tasks">
          {{ task.title }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <h1>Data Binding and Methods</h1>
      <input type="text" v-model="user.firstName" placeholder="User Name" />
      <button v-on:click="greeting(user.firstName)">Greeting</button>
    </div>
    <hr />
    <div>
      <h1>Events on the input 'Enter' and so on...</h1>
      <input type="text" v-on:keyup.enter="typedEnter" id="" />
    </div>
    <hr />
    <div>
      <h1>Computed Properties</h1>
      <h3>{{ fullName }}</h3>
    </div>
    <hr />
    <div>
      <h1>
        Showing PROPS from the component Test.vue call in the main component
        App.vue
      </h1>
      <h3>{{ msg }}</h3>
      <h1>Showing DEFAULT value props</h1>
      <h3>{{ defaultMsg }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "KLK Vue",
      user: {
        firstName: "",
        lastName: "McMillan",
      },
      myDirectivaHtml: "<h3>Hola vue</h3>",
      showName: false,
      tasks: [
        { title: "eat" },
        { title: "dinner" },
        { title: "play" },
        { title: "task" },
      ],
    };
  },
  methods: {
    greeting(name) {
      alert(`Hello ${name}`);
    },
    typedEnter(e) {
      console.log("Dio un Enter");
    },
  },
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },
  },
  props: {
    msg: {
      type: String,
      default: "Default message sending a value in the component tag",
    },
    defaultMsg: {
      type: String,
      default: "This is a default message",
    },
  },
};
</script>

<style media="screen">
.test {
    color: #fff;
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