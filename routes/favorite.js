const router = require('express').Router();
const FavoriteController = require('../controllers/favorite-controller');
const favoriteController = new FavoriteController();

router.route('/favorite/:id').get(favoriteController.getFavorite);
router.route('/favorite/:id').post(favoriteController.postFavorite);
router.route('/user-favorite/:id').get(favoriteController.getUserFavorite);

module.exports = router;