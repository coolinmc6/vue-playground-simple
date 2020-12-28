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