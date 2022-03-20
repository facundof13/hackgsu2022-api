const SnippetService = require('../services/snippet-service');

module.exports = class SnippetsController {
    constructor() {
        this.snippetService = new SnippetService();
    }

    getPopularSnippets = async (req, res) => {
        try {
            res.json(await this.snippetService.getPopularSnippets());
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }
    getSnippets = async (req, res) => {
        try {
            res.json(await this.snippetService.getSnippets(req.params.id));
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

    getSnippet = async (req, res) => {
        try {
            res.json(await this.snippetService.getSnippet(req.params.id));
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

    postSnippet = async (req, res) => {
        try {
            req.body.user_id = req.user.id;
            res.json(await this.snippetService.postSnippet(req.body));
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }
}