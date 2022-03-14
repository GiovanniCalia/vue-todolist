const app = new Vue({
    el: "#root",
    data: {
        done: false,
        newTodo: "",
        testi:[
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato",
        /*{
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
        },*/
        ],
    },
    methods: {
        addText(){
            if (this.newTodo != ""){
            this.testi.push(this.newTodo);
            this.newTodo = "";
        }
        },
        deleteText(i){
            this.testi.splice(i, 1)
        },
        addTodo(){
            this.addText();
        },
        addClass(){
            this.done = true; 
        }
    }
})