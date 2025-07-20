import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    loading: false,
    error: null,
    product: null,
    cart: [],

    relatedProducts: [],

    selectedProduct: null,
    selectedCategory: null,

    selectedCategories: [],

    /////////////////////Mongo DB//////////////////////
    products2 :[]
  },


  

  getters: {
    products: state => state.products,
    productsByCategory: state => category => {
      return state.products.filter(product => product.category === category);
    },
    productsByDiscount: state => discount => {
      return state.products.filter(product => product.discount >= discount);
    },
    productsByReview: state => review => {
      return state.products.filter(product => product.review >= review);
    },
    productsByRating: state => review => {
      return state.products.filter(product => product.rating.rate >= 4.0);
    },
    productCount: state => {
      return state.cart.length;
    },

    // Display only Categories ------------------------------
    // uniqueCategories: state => {
    //   create an empty array to hold the unique categories ////////////// Commment
    //   let uniqueCategories = [];
    //   loop through the products and extract the categories ///////////// comment
    //   state.products.forEach(product => {
    //     if (!uniqueCategories.includes(product.category)) {
    //       uniqueCategories.push(product.category);
    //     }
    //   });
    //   return uniqueCategories;
    // },


    ///////////////////Below Function is used to diplay Single Categories with product length in a single categories/////////////////////////////
    uniqueCategories: state => {
      // create an empty array to hold the unique categories and their product count
      let uniqueCategories = [];
      // loop through the products and extract the categories
      state.products.forEach(product => {
        let category = product.category;
        let index = uniqueCategories.findIndex(cat => cat.name === category);
        if (index === -1) {
          uniqueCategories.push({ name: category, count: 1 });
        } else {
          uniqueCategories[index].count++;
        }
      });
      return uniqueCategories;
    },
    ///////////////////Above Function is used to diplay Single Categories with product count/////////////////////////////


    productsByCategory: state => {
      return state.products.filter(product => product.category === state.selectedCategory);
    },

    filteredProducts: state => {
      return state.products.filter(product => {
        return state.selectedCategories.includes(product.category)
      })
    },

    ////////////////////////Add Product to the server Side//////////
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },





    ///////////////////Mongo DB /////////////////////////////////////////
    products2: state => state.products2,

  },


  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setProducts(state, products) {
      state.products = products;
      state.loading = false;
      state.error = null;
    },

    setProduct(state, product) {
      state.product = product;
      state.loading = false;
      state.error = null;
    },

    setRelatedProducts(state, relatedProducts) {
      state.relatedProducts = relatedProducts;
      state.loading = false;
      state.error = null;
    },

    set_To_Cart(state, {product, quantity}){
      let productInCart = this.state.cart.find(item => {
        return item.product.id == product.id;
      })

      if(productInCart){  
        productInCart.quantity += quantity;
        return
      }
      state.cart.push({
        product,
        quantity
      })
    },

    removeProductFromCart(state, product){
      state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
      })
    },


    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },

    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },

    setSelectedCategories(state, categories) {
      state.selectedCategories = categories
    },

    ////////////////////////Add Product to the server Side//////////
    addProduct(state, product) {
      state.products.push(product);
    },

    ////////////////////////Delete Product to the server Side//////////
    deleteProduct(state, productId) {
      state.products = state.products.filter(product => product.id !== productId)
    },


    //////////////////////mongo DB//////////////////////////////
    setproducts(state, products2) {
      state.products2 = products2
    }
  },


  actions: {

    fetchProducts({ commit }) {
      commit('setLoading', true)
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('setProducts', response.data)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error.response.data)
        })
    },


    // getProduct({ commit }, productId) {
    //   commit('setLoading', true)
    //   axios.get(`https://fakestoreapi.com/products/${productId}`)
    //     .then(response => {
    //       commit('setProduct', response.data)
    //     })
    //   .catch(error => {
    //     commit('setLoading', false)
    //     commit('setError', error.response.data)
    //   });
    // },

    getProduct({ commit }, productId) {
      commit('setLoading', true)
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          commit('setProduct', response.data)
          // Get related products
          axios.get(`https://fakestoreapi.com/products`)
            .then(relatedResponse => {
                const relatedProducts = relatedResponse.data.filter(product => product.category === response.data.category)
              commit('setRelatedProducts', relatedProducts)
              commit('setLoading', false)
            })
            .catch(error => {
              commit('setLoading', false)
              commit('setError', error.response.data)
            });
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error.response.data)
        });
    },

    addProductToCart({commit}, {product, quantity}){
      commit('set_To_Cart', {product, quantity});
    },


    removeProduct({commit}, product){
      commit('removeProductFromCart', product);
    },

    // selectProduct({ commit }, product) {
    //   commit('setSelectedProduct', product);
    // }


    ////////////////////////Add Product to the server Side//////////
    addProduct({ commit }, product) {
      // You can also make an HTTP request to add the product to the server
      return axios.post('https://fakestoreapi.com/products', product)
        .then(response => {
          commit('addProduct', response.data);
          return response.data;
        })
        .catch(error => {
          console.error('Failed to add product:', error.response.data);
          return error.response.data;
        });
    },

    deleteProduct({ commit }, productId) {
      axios.delete(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          console.log('Product deleted:', response.data);
          commit('deleteProduct', productId)
        })
        .catch(error => {
          console.error('Failed to delete product:', error)
        })
    },


    /////////////////////////////////////////////////////////////
    // fetchProducts2({ commit }) {
    //   commit('setLoading', true)
    //   axios.get('http://localhost:5000/api/products')
    //     .then(response => {
    //       commit('setProducts', response.data)
    //     })
    //     .catch(error => {
    //       commit('setLoading', false)
    //       commit('setError', error.response.data)
    //     })
    // },
  },


  modules: {},
});
