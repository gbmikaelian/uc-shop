import Route from '@ember/routing/route';

export default Route.extend({
    model (params) {
        const products = this.get('store').findRecord('shop', params.id, {include: 'products'});
        return products
    }
});
