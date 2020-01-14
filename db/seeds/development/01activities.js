
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        {id: 1, activity: "Arcade", description: "Lovely arcade next to the Lakeside shopping center. They have a varitety of games and physical games with a bowling alley at the back. The piano tiles will cause hair-loss as my reactions are far superior to its ability to register hits", location: "Lakeside"},
        {id: 2, activity: "Bay 66 Skate Park", description: "London hosts many different skate parks and street-spots, this one being one of the best", location: "Notting Hill"},
        {id: 3, activity: "Eating donuts", description: "Delightful donuts at Krispy Kreme. Hot original glazed donuts are served from 8pm-11pm every day. The drive through is 24 hours. A bottle of water if definetly needed.", location: "Enfield"},
        {id: 4, activity: "Having a pint at The Ship", description: "London hosts many many pubs and bars. This one is conveniently close by if you happen to work at The Ministry", location: "Borough Road"},
      ]);
    });
};