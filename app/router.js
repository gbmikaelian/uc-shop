import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shops', function() {
    this.route('show', {path: '/:id'});
  });
  
  this.route('products', function() {
    this.route('show', {path: '/:id'});
  });
});

export default Router;
