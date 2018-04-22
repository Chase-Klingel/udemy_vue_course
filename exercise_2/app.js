new Vue({
	el: '#exercise',

  data: {
    value: ''
  },

	methods: {
		sayHello: function() {
			alert('Hello!');
		},

		storeUserInput: function(e) {
			this.value = e.target.value;
		}
	}
});
