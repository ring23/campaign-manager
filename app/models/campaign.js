import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  deploymentDate: DS.attr('string'),
  fileDeliveryDate: DS.attr('string'),
  deployed: DS.attr('boolean')
});
