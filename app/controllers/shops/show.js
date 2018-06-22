import Controller from '@ember/controller';

export default Controller.extend({
    id: null,
    name: null,
    quantity: null,
    price: null,
    validInputs: false,
   
    actions: {
        async submit () {
            const productId = this.get('id'),
            
            shop = this.get('store').peekRecord('shop', this.get('model.id')),
            name = this.get('name');
            console.log(productId);
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
                const product = await this.get('store').findRecord('product', productId);
                product.set('name', name);
                product.set('quantity', quantity);
                product.set('price', price);
                product.save();

            } else {
                const product = await this.get('store').createRecord('product', {
                    name,
                    quantity,
                    price,        
                    shop
                });
                product.save();
            }

            this.set('id', '');
            this.set('name', '');
            this.set('quantity', '');
            this.set('price', '');
        },

        edit (product) {
            this.set('id', product.id);
            this.set('name', product.name);
            this.set('quantity', product.quantity);
            this.set('price', product.price);
            console.log(product)
        }, 

        deleteData () {
            this.set('id', '');
            this.set('name', '');
            this.set('quantity', '');
            this.set('price', '');
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
