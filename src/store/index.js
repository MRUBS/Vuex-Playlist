import Vue from 'vue';
import Vuex from 'vuex';
import { setTimeout } from 'core-js';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		products: [
			{ name: 'Banana Skin', price: 20 },
			{ name: 'Shiny Star', price: 40 },
			{ name: 'Green Shells', price: 60 },
			{ name: 'Red Shells', price: 80 }
		]
	},
	getters: {
		saleProductsOne: (state) => {
			let saleProductsOne = state.products.map((product) => {
				return {
					name: '**' + product.name + '**',
					price: product.price / 2
				};
			});
			return saleProductsOne;
		},
		saleProductsTwo: (state) => {
			let saleProductsTwo = state.products.map((product) => {
				return {
					name: '**' + product.name + '**',
					price: product.price / 4
				};
			});
			return saleProductsTwo;
		}
	},
	mutations: {
		reducePrice: (state, payload) => {
			state.products.forEach((product) => {
				product.price -= payload;
			});
		}
	},
	actions: {
		reducePrice: (context, payload) => {
			setTimeout(() => {
				context.commit('reducePrice', payload);
			}, 2000);
		}
	},
	modules: {}
});
