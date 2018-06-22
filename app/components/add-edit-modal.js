import Component from '@ember/component';

export default Component.extend({
    shopName: '',
    id: '',
    actions: {
        saveShop () {
            this.get('saveShop')({shopName: this.get('shopName'), id: this.get('id')})
            this.set('shopName', '')
        },

        editShop (param) {
            this.set('shopName', param.name)
            this.get('editShop')(param)
        },
    }
});
