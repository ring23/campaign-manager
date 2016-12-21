import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createCampaign(model) {
      this.sendAction('createCampaign',model);

      // Clear each input field
      this.set('newCampaign.name', null);
      this.set('newCampaign.type', null);
      this.set('newCampaign.fileDeliveryDate', null);
      this.set('newCampaign.deploymentDate', null);
    }
  }
});
