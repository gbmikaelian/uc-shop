import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name (i) {
        return `Product ${i+1}`;
    },
    shop: 1,
    quantity: faker.list.random(3, 2, 7, 1)(),
    price: faker.list.random(100, 300, 500, 800)()

});
