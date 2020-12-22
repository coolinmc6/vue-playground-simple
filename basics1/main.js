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
        }
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
    data: {
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
    methods: {
        toggleToDo(idx) {
            this.todos[idx].completed = !this.todos[idx].completed
            console.log(this.todos)
        },
        toggleOpen() {
            this.open = !this.open;
        },
        cancel() {
            this.open = false;
        },
        addToDo(obj) {
            this.todos.push(obj);
        }
    },
    computed: {
        title() {
            return this.name + "'s ToDo List"
        },
        image() {
            return `https://www.placehold.it/200x200?text=Hello+${this.name}`
        }
    }
})