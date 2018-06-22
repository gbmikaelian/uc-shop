import Controller from '@ember/controller';

export default Controller.extend({
    shopName: '',
    id: '',
    actions: {
        editShop (param) {
            this.set('shopName', param.name)
            this.set('id', param.id)
        },

        modalShow () {
            this.set('shopName', '')
            this.set('id', '')
        },

        async remove (id) {
            const shop = await this.get('store').findRecord('shop', id, {reload: true});
            shop.destroyRecord();
        },

        getShopId (id) {
            this.set('id', id)
        },

        async saveShop ({shopName, id}) {
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
            this.set('id', '')
        }
    }
});
