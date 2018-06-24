import Controller from '@ember/controller';

export default Controller.extend({
    shopName: '',
    id: '',
    destroyInputData () {
        this.set('shopName', '');
        this.set('id', '');        
    },

    actions: {
        edit (shop) {
            this.set('shopName', shop.name)
            this.set('id', shop.id)
        },

        modalShow () {
            this.destroyInputData();
        },

        async remove () {
            const shop = await this.get('store').findRecord('shop', this.get('id'), {reload: true});
            shop.destroyRecord();
            this.destroyInputData();
        },

        getShopId (id) {
            this.set('id', id)
        },

        async submit () {
            const shopName = this.get('shopName'),
            id = this.get('id');
            
            if (id) {
                const shop = await this.get('store').findRecord('shop', id);
                shop.set('name', shopName);
                shop.save();
            }
            else if (shopName) {
                let shop = await this.get('store').createRecord('shop', {
                    name: shopName 
                });
                shop.save();
            }
            this.destroyInputData();
        }
    }
});
