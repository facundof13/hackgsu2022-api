const LanguageService = require('../services/language-service');


module.exports = class LanguageController {
    constructor() {
        this.languageService = new LanguageService();
    }

    getAllLanguages = async (req, res) => {
        try {
            res.json(await this.languageService.getAllLanguages());
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

    getAllLanguageFrameworks = async (req, res) => {
        try {
            res.json(await this.languageService.getAllLanguageFrameworks(req.params.id));
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }


}