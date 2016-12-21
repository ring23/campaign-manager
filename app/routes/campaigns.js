import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {};
  },

  // If the user isn't authenticated and they try and access /campaigns, redirect them to the home page
  actions: {
    accessDenied() {
      this.transitionTo('/');
    },
    // Create a campaign with the values from the Create a Campaign form and save it to database.
    createCampaign(model) {
      let campaign = this.store.createRecord('campaign', {
        name: model.name,
        type: model.type,
        deploymentDate: model.deploymentDate.toString(),
        fileDeliveryDate: model.fileDeliveryDate.toString(),
      });
      campaign.save();
      transitionTo("/");
    }
  }
});
