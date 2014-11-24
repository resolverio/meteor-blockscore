BlockScore = function ( apiKey ) {
	this.apiKey = apiKey;

	this.blockScore = function ( section, method, params, callback ) {
		Meteor.call( 'BlockScore', section, method, this.apiKey, params, function ( error, result ) {
			if ( callback ) callback( error, result );
		});
	};

	this.candidates.asyncAPI    = this.blockScore.bind( this );
	this.companies.asyncAPI     = this.blockScore.bind( this );
	this.people.asyncAPI        = this.blockScore.bind( this );
	this.question_sets.asyncAPI = this.blockScore.bind( this );
	this.watchlists.asyncAPI    = this.blockScore.bind( this );
};

BlockScore.prototype.candidates = {
	create: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'create', params, callback );
	},

	del: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'del', params, callback );
	},

	history: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'history', params, callback );
	},

	hits: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'hits', params, callback );
	},

	list: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'list', params, callback );
	},

	retrieve: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'retrieve', params, callback );
	},

	update: function ( params, callback ) {
		this.asyncAPI( 'candidates', 'update', params, callback );
	}
};

BlockScore.prototype.companies = {
	create: function ( params, callback ) {
		this.asyncAPI( 'companies', 'create', params, callback );
	},

	list: function ( params, callback ) {
		this.asyncAPI( 'companies', 'list', params, callback );
	},

	retrieve: function ( params, callback ) {
		this.asyncAPI( 'companies', 'retrieve', params, callback );
	}
};

BlockScore.prototype.people = {
	create: function ( params, callback ) {
		this.asyncAPI( 'people', 'create', params, callback );
	},

	list: function ( params, callback ) {
		this.asyncAPI( 'people', 'list', params, callback );
	},

	retrieve: function ( params, callback ) {
		this.asyncAPI( 'people', 'retrieve', params, callback );
	}
};

BlockScore.prototype.question_sets = {
	create: function ( params, callback ) {
		this.asyncAPI( 'question_sets', 'create', params, callback );
	},

	retrieve: function ( params, callback ) {
		this.asyncAPI( 'question_sets', 'retrieve', params, callback );
	},

	score: function ( params, callback ) {
		this.asyncAPI( 'question_sets', 'score', params, callback );
	}
};

BlockScore.prototype.watchlists = {
	search: function ( params, callback ) {
		this.asyncAPI( 'watchlists', 'search', params, callback );
	}
};
