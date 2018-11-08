import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  indexedDb: service(),

  init(...args) {
    this._super(...args);
    console.log('DEBUG: indexedDb.setupTask.perform()');
    this.indexedDb.setupTask.perform();
  }
});
