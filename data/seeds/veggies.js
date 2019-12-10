exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('veggies').truncate().then(function() {
		// Inserts seed entries
		return knex('veggies').insert([
			{ Name: 'broccoli', like_it: 1 },
			{ Name: 'sprouts', like_it: 0 },
			{ Name: 'cabbage' },
		]);
	});
};
