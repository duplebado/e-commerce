import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        sliderDisplay: [
            {id: 0,
             imageLink:require("./assets/images/1.jpg")
            },
             {id: 1,
             imageLink:require("./assets/images/2.png")
            },
             {id: 2,
             imageLink:require("./assets/images/3.jpg")
            },
             {id: 3,
             imageLink:require("./assets/images/4.png")
            },
             {id: 4,
             imageLink:require("./assets/images/5.jpg")
            },
             {id: 5,
             imageLink:require("./assets/images/6.jpg")
            },
             {id: 6,
             imageLink:require("./assets/images/7.jpg")
            }
        ],
        productDisplay: [
            {id : 1,
             imageLink: require("./assets/images/rangy/range.jpg"),
             view1: require('./assets/images/rangy/1.jpg'),
             view2: require('./assets/images/rangy/2.jpg'),
             view3: require('./assets/images/rangy/3.jpg'),
             view4: require('./assets/images/rangy/4.jpg'),
             view5: require('./assets/images/rangy/5.jpg'),
             name: "Range Rover Sport (2019)",
             price: "42,000,000",
             make: "Range Rover (Sport HSE Dynamic)",
             year: "2019",
             fuel: "diesel",
             transmission: "automatic",
             engine: "Ingenium 3.0L 6cylinder"
            },
    
            {id : 2,
             imageLink: require("./assets/images/hilux/Toyota-Hilux.jpg"),
             view1: require('./assets/images/hilux/1.jpg'),
             view2: require('./assets/images/hilux/2.jpg'),
             view3: require('./assets/images/hilux/3.jpg'),
             view4: require('./assets/images/hilux/4.jpg'),
             view5: require('./assets/images/hilux/5.jpg'),
             name: "Toyota Hilux (2019)",
             price: "19,000,000",
             make: "Toyota (Hilux)",
             year: "2019",
             fuel: "diesel",
             transmission: "automatic",
             engine: "2.4L turbodiesel"
            },
            {id : 3,
             imageLink: require("./assets/images/cullinan/Cullinan.jpg"),
             view1: require('./assets/images/cullinan/1.jpg'),
             view2: require('./assets/images/cullinan/2.jpg'),
             view3: require('./assets/images/cullinan/3.jpg'),
             view4: require('./assets/images/cullinan/4.jpg'),
             view5: require('./assets/images/cullinan/5.jpg'),
             name: "Rolls Royce Cullinan(2019)",
             price: "145,000,000",
             make: "Rolls Roys (Cullinan)",
             year: "2019",
             fuel: "petrol",
             transmission: "automatic",
             engine: "6.7L twin-turbo V-12"
            },
            {id : 4,
             imageLink: require("./assets/images/challenger/challenger.jpg"),
             view1: require('./assets/images/challenger/1.jpg'),
             view2: require('./assets/images/challenger/2.jpg'),
             view3: require('./assets/images/challenger/3.jpg'),
             view4: require('./assets/images/challenger/4.jpg'),
             view5: require('./assets/images/challenger/5.jpg'),
             name: "Challenger R/T (2018)",
             price: "19,000,000",
             make: "Dodge (Challenger)",
             year: "2018",
             fuel: "petrol",
             transmission: "6-speed manual",
             engine: "5.7L Hemi V8"
            
            },
            {id : 5,
             imageLink: require("./assets/images/black range/otherrange.jpg"),
             view1: require('./assets/images/black range/1.jpg'),
             view2: require('./assets/images/black range/2.jpg'),
             view3: require('./assets/images/black range/3.jpg'),
             view4: require('./assets/images/black range/4.jpg'),
             view5: require('./assets/images/black range/5.jpg'),
             name: "Range Rover Sport (2016)",
             price: "22,000,000",
             make: "Range Rover (Sport)",
             year: "2016",
             fuel: "petrol",
             transmission: "automatic",
             engine: "Supercharged 3.0L V6"
            },
            {id : 6,
             imageLink: require("./assets/images/black benzo/gle.jpg"),
             view1: require('./assets/images/black benzo/1.jpg'),
             view2: require('./assets/images/black benzo/2.jpg'),
             view3: require('./assets/images/black benzo/3.jpg'),
             view4: require('./assets/images/black benzo/4.jpg'),
             view5: require('./assets/images/black benzo/5.jpg'),
             name: "S63 AMG (2016)",
             price: "34,000,000",
             make: "Mercedes Benz(S63 AMG)",
             year: "2016",
             fuel: "petrol",
             transmission: "automatic",
             engine: "bi-turbo 5.5L V8"
            },
            {id : 7,
             imageLink: require("./assets/images/white benzo/benzo.jpg"),
             view1: require('./assets/images/white benzo/1.jpg'),
             view2: require('./assets/images/white benzo/2.jpg'),
             view3: require('./assets/images/white benzo/3.jpg'),
             view4: require('./assets/images/white benzo/4.jpg'),
             view5: require('./assets/images/white benzo/5.jpg'),
             name: "E 400 4MATIC (2018)",
             price: "29,000,000",
             make: "Mercedes Benz (E 400)",
             year: "2018",
             fuel: "petrol",
             transmission: "auto",
             engine: "3.0L V6"
            },
            {id : 8,
             imageLink: require("./assets/images/audi/audi.jpg"),
             view1: require('./assets/images/audi/1.jpg'),
             view2: require('./assets/images/audi/2.jpg'),
             view3: require('./assets/images/audi/3.jpg'),
             view4: require('./assets/images/audi/4.jpg'),
             view5: require('./assets/images/audi/5.jpg'),
             name: "Audi S8 (2017)",
             price: "30,000,000",
             make: "Audi (S8)",
             year: "2017",
             fuel: "petrol",
             transmission: "automatic",
             engine: "turbocharged 4.0L V8"
            },
            {id : 9,
             imageLink: require("./assets/images/navigator/navi.jpg"),
             view1: require('./assets/images/navigator/1.jpg'),
             view2: require('./assets/images/navigator/2.jpg'),
             view3: require('./assets/images/navigator/3.jpg'),
             view4: require('./assets/images/navigator/4.jpg'),
             view5: require('./assets/images/navigator/5.jpg'),
             name: "Cardillac Escalade (2016)",
             price: "26,000,000",
             make: "Cardillac (Escalade Platinum)",
             year: "2016",
             fuel: "petrol",
             transmission: "8-speed automatic",
             engine: "6.2L V8"
            }
        ],
        productDetailsDisplay: null
    },
    mutations:{
        putSomethingInproductDetailsDisplay(state, data){
            this.state.productDetailsDisplay = data;
        }
    }
})

export default store;
