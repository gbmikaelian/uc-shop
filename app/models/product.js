import DS from 'ember-data';

export default DS.Model.extend({
    shop: DS.belongsTo('shop'),
    name: DS.attr(),
    quantity: DS.attr(),
    price: DS.attr()
});
