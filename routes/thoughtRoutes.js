const router = require('express').Router();
const { 
    getThoughts, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction 
} = require('../controllers/thoughtController');

router.route('/api/thoughts').get(getThoughts).post(createThought);

router.route('/api/thoughts/:thoughtId').put(updateThought).delete(deleteThought);

router.route('/api/thoughts/:thoughtId/reactions').post(addReaction).delete(deleteReaction);
