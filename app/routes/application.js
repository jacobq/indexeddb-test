import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      items: this.get('store').findAll('item')
    }).then(model => {
      console.log('DEBUG: application route resolved model ->', model);
      return model;
    });
  }
});
