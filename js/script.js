const app = new Vue({
    el: "#root",
    data: {
        done: false,
        newTodo: {
            text: "",
            done: false,
        },
        testi:[
        {
            text: "Fare i compiti",
            done: true,
        },
        {
            text: "Fare la spesa",
            done: false,
        },
        {
            text: "Fare il bucato",
            done: false,
        },
        ],
    },
    methods: {
        addText(){
            if (this.newTodo.text != ""){
            this.testi.unshift({...this.newTodo});
            this.newTodo.text = "";
        }
        },
        deleteText(i){
            this.testi.splice(i, 1)
        },
        addTodo(){
            this.addText();
        },
        addClass(event){
            event.done = !event.done; 
        }
    }
})