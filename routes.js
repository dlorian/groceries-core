
const init = (app, service) => {

    app.get('/grocery', async (req, res) => {
        try {
            const groceries = await service.findAll();
            res.status(200).json(groceries);
        } catch(err) {
            res.status(500).send(err);
        }
    });

    app.get('/grocery/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const grocery = await service.findById(id);
            res.status(200).json(grocery);
        } catch(err) {
            res.status(500).send(err);
        }
    });


    app.post('/grocery', async (req, res) => {
        try {
           const grocery =  await service.add(req.body);
           res.status(200).json(grocery);
        } catch(err) {
            console.log(err);
        }
    });
}

module.exports = { init };