// import { createStore } from "vuex";
// import axios from "axios";


// export default createStore({

//  state : {
//     products2: []
//   },

//   getters: {
//     products2: state => state.products2,

//   },
  
//   mutations : {
//     setproducts(state, products2) {
//       state.products2 = products2
//     }
//   },
  
//   actions : {
//     fetchProducts2({ commit }) {
//         commit('setLoading', true)
//         axios.get('http://localhost:5000/api/products')
//           .then(response => {
//             commit('setProducts', response.data)
//           })
//           .catch(error => {
//             commit('setLoading', false)
//             commit('setError', error.response.data)
//           })
//       },
//   },
  
//   modules: {},
// });