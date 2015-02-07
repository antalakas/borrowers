import Ember from 'ember';

export default Ember.Controller.extend({
	hasDescription: Ember.computed.notEmpty('model.description'), 
	isValid: Ember.computed.and(
	    'hasDescription'
	),
	actions: {
		save: function() {
			if (this.get('isValid')) {
				var _this = this;
				this.get('model').save().then( function() {
					_this.transitionToRoute('articles');
				});
			} else {
				this.set('errorMessage', 'You have to fill an article description');
			}

			return false;
		},
		cancel: function() {
			this.transitionToRoute('articles');
		}
	}	
});
