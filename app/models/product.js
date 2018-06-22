import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    shop: DS.belongsTo('shop'),
    name: DS.attr(),
    quantity: DS.attr(),
    price: DS.attr(), 
    intId: computed('id', function() {
			if (!this.get('id')) { return null; }
			return parseInt(this.get('id'), 10);
		}),
    
});
