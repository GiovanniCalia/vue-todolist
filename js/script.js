const app = new Vue({
    el: "#root",
    data: {
        decoration:{
            textDecoration: "line-through",
        },
        newTodo: "",
        testi:[
        "Fare i compiti",
        "Fare la spesa",
        "Fare il bucato",
        ]
    },
    methods: {
        addText(){
            if (this.newTodo != ""){
            this.testi.push(this.newTodo);
            this.newTodo = ""
        }
        },
        deleteText(i){
            this.testi.splice(i, 1)
        },
        addClass(){
            this.decoration;
        }
    }
})