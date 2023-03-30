const {createApp} = Vue;

createApp({
    data() {
        return {
            elements: 
            [
                {
                text: "Imparare a programmare",
                done: true,
                },
                {
                text: "Trovare lavoro",
                done: false,
                },
                {
                text: "Diventare ricca",
                done: false,
                }
            ],
            newElement:"",

        };
    },

    methods: {
        addNewElement() {
            this.elements.push(this.newElement);
            
        }

    }
}).mount("#app")