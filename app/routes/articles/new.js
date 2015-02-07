import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('article', {
			friend: this.modelFor('friends/show') });
	}, 
	deactivate: function() {
		console.log('----- deactivate hook called -----');
		
		// We grab the model loaded in this route //
		var model = this.modelFor('articles/new');
		
		// If we are leaving the Route we verify if the model is in // 'isNew' state, which means it wasn't saved to the backend. //
		if (model.get('isNew')) {
			// We call DS#destroyRecord() which removes it from the store //
			model.destroyRecord();
		}

	},
	actions: {
		save: function() {
				var _this = this;
				var model = this.modelFor('articles/new');
				model.save().then(function(){ 
					_this.transitionTo('articles');
			}); 
		},
		cancel: function() { this.transitionTo('articles');
		} 
	}
});