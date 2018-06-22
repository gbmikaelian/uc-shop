import Component from '@ember/component';

export default Component.extend({
    id: '',
    actions: {
        remove () {
            
            this.get('remove')(this.get('id'))
        }
    }
});
