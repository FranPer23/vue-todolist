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
            newElement: null,

        };
    },

    methods: {
        addNewElement() {
            if(this.newElement.length > 0) {
                this.elements.unshift(this.newElement);
              
            }
        }

    }
}).mount("#app")