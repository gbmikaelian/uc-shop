import DS from 'ember-data';
import { computed } from '@ember/object';
export default DS.Model.extend({
    products: DS.hasMany('product'),
    name: DS.attr('string'),
    totalPrice: computed('products.@each.{price,quantity}', function () {
        let products = this.get('products');

        return products.map(product => (product.get('price') * product.get('quantity')));
    })
});
