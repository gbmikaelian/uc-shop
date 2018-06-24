import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    id: null,
    name: null,
    quantity: null,
    price: null,
    validInputs: false,
    
    totalPrice: computed('model.products.@each.{price,quantity}', function () {
        let products = this.get('model.products');
        return products.reduce((init, product) => {
            return init + (product.get('price') * product.get('quantity'));
        }, 0);
    }),
    destroyInputData () {
        this.set('id', '');
        this.set('name', '');
        this.set('quantity', '');
        this.set('price', '');
    },

    actions: {
        async submit () {
            const productId = this.get('id'),
            shop = this.get('store').peekRecord('shop', this.get('model.id')),
            name = this.get('name');
            
            let quantity = this.get('quantity'),
            price = this.get('price');
            
            quantity = parseInt(quantity);
            price = parseInt(price);
            
            if (price && quantity) {
                this.set('validInputs', false);
            } else {
                this.set('validInputs', true);
                return;
            }
           
            if (productId) {
                var product = await this.get('store').findRecord('product', productId);
                product.set('name', name);
                product.set('quantity', quantity);
                product.set('price', price);

            } else {
                product = await this.get('store').createRecord('product');
                product.set('name', name);
                product.set('quantity', quantity);
                product.set('price', price);
                product.set('shop', shop);
            }
            await product.save();
            await shop.save();
            this.destroyInputData();
            
        },

        edit (product) {
            this.set('id', product.get('id'));
            this.set('name', product.get('name'));
            this.set('quantity', product.get('quantity'));
            this.set('price', product.get('price'));
        }, 

        deleteData () {
            this.destroyInputData();
        },
        async remove () {
            const product = await this.get('store').findRecord('product', this.get('id'), { reload: true } );
            product.destroyRecord();
            this.set('id', '');
        },
        getProductId (id) {
            this.set('id', id);
        }
    }
});
