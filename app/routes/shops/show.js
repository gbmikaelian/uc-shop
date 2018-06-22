import Route from '@ember/routing/route';

export default Route.extend({
    async model (params) {
        const products = await this.get('store').findRecord('shop', params.id, {include: 'products'});
        // console.log(products.objectAt(0).get('quantity'));
        return products
    }
});
