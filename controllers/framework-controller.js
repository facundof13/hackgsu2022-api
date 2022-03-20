const FrameworkService = require('../services/framework-service');

module.exports = class FrameworkController {
    constructor() {
        this.frameworkService = new FrameworkService();
    }

    getFrameworks = async (req, res) => {
        try {
            res.json(await this.frameworkService.getFrameworks());
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }
}