const log = require('./log.js');

const initCRUD = (app, path, crudService) => {
    log.info(`Initialize crud opersations for path ${path}`);

    app.get(`/${path}`, async (req, res) => {
        try {
            const groceries = await crudService.findAll();
            res.status(200).json(groceries);
        } catch(err) {
            log.error(err);
            res.status(500).send(err);
        }
    });

    app.get(`/${path}/:id`, async (req, res) => {
        const id = req.params.id;
        try {
            const grocery = await crudService.findById(id);
            res.status(200).json(grocery);
        } catch(err) {
            log.error(err);
            res.status(500).send(err);
        }
    });


    app.post(`/${path}`, async (req, res) => {
        try {
           const grocery =  await crudService.add(req.body);
           res.status(200).json(grocery);
        } catch(err) {
            log.error(err);
            console.log(err);
        }
    });
}

module.exports = { initCRUD };