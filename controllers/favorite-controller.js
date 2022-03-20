const FavoriteService = require('../services/favorite-service');

module.exports = class FavoriteController {

    constructor() {
        this.favoriteService = new FavoriteService();
    }

    getFavorite = async (req, res) => {
        try {
            res.json(await this.favoriteService.getFavorite(req.params.id));
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

    postFavorite = async (req, res) => {
        try {
            if (req.user.id) {
                res.json(await this.favoriteService.postFavorite(req.user.id, req.params.id));
            } else {
                res.status(401).send();
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }

    getUserFavorite = async (req, res) => {
        try {
            if (req.user.id) {
                res.json({ is_favorite: await this.favoriteService.getUserFavorite(req.user.id, req.params.id) });
            } else {
                res.json({ error: true });
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }
}