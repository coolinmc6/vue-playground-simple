Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'Bob',
    todos: [
      { text: "Learn Stuff", completed: false },
      { text: 'Do Stuff', completed: false },
      { text: 'Make dat money', completed: false },
      { text: "hey man", completed: false },
    ],
    open: false,
    iClass: 'profile',
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    toggleToDo(state, index) {
      state.todos[index].completed = !state.todos[index].completed;
    },
    addToDo(state, obj) {
      state.todos.push(obj);
    }
  }
})

Vue.component('todo-component', {
  template: `<div @click="handleClick(index)" :class="{ complete: todo.completed }">{{ todo.text }}</div>`,
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleClick(index) {
      this.$emit('toggle-todo', index)
    }
  }
})

Vue.component('todo-form', {
  template: `
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="text" placeholder="Enter your todo item" />
        <button>Add ToDo</button>
    </form>
  `,
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit() {
      const obj = {
        text: this.text,
        completed: false
      }
      this.$emit('add-todo', obj)
      this.text = '';
    }
  }
})

var app = new Vue({
  el: '#app',
  store,
  data: {
    name: 'World'
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    toggleToDo(index) {
      this.$store.commit('toggleToDo', index)
    },
    addToDo(obj) {
      this.$store.commit('addToDo', obj)
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    myTodos() {
      return this.$store.state.todos
    }
  }
})