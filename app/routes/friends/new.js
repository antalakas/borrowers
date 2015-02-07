import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('friend');
	},
	activate: function() {
		console.log('----- activate hook called -----');
	},
	deactivate: function() {
		console.log('----- deactivate hook called -----');
		
		// We grab the model loaded in this route //
		var model = this.modelFor('friends/new');
		
		// If we are leaving the Route we verify if the model is in // 'isNew' state, which means it wasn't saved to the backend. //
		if (model.get('isNew')) {
			// We call DS#destroyRecord() which removes it from the store //
			model.destroyRecord();
		}

	},
	actions: {
		save: function() {
			console.log('+- save action bubbled up to friends new route');
			return true;
		},
		cancel: function() {
			console.log('+- cancel action bubbled up to friends new route');
			return true;
		}
	}
});
