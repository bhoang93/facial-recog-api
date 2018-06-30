// const Clarafai = require('clarifai');

// const app = new Clarifai.App({apiKey: 'c0999884afc44870958579db16b6f31e'});

// const handleApiCall = (req, res) => {
// 	app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", req.body.input)
// 	.then(data => {
// 		res.json(data);
// 	})
// 	.catch(err => res.status(400).json('Not working.'))
// }

// const handleImage = (db) => (req, res) => {
//   const { id } = req.body;
//   db('users').where('id', '=', id)
//   .increment('entries', 1)
//   .returning('entries')
//   .then(entries => {
//     res.json(entries[0]);
//   })
//   .catch(err => res.status(400).json('unable to get entries'))
// }

// module.exports = {
// 	handleImage,
// 	handleApiCall
// }

const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: 'c0999884afc44870958579db16b6f31e'
});

const handleApiCall = (req, res) => {
	app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json(err))
}

const handleImage = (db) => (req, res) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}