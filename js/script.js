const app = new Vue({
    el: "#root",
    data: {
        newTodo: "",
        testi:[
        "Fare i compiti",
        "Fare la spesa",
        "Fare il bucato",
        ]
    },
    methods: {
        addText(){
            this.testi.push(this.newTodo)
        },
        deleteText(i){
            this.testi.splice(i, 1)
        }
    }
})