export default function() {
this.namespace = '/api';

this.get('/shops');
this.get('/shops/:id');

this.post('/shops');
this.patch('/shops/:id');
this.delete('/shops/:id');

this.get('/products');
this.get('/products/:id');

this.post('/products');
this.patch('/products/:id');
this.delete('/products/:id');

}