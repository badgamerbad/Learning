const mongoose = require('mongoose');
const tasksSchema = mongoose.model('tasks');

module.exports = app => {
    app.get('/api/tasks', async (req, res) => {
        const tasks = await tasksSchema.find()
        res.json(tasks)
    })
    app.post('/api/tasks', async(req, res) => {
        let query = {
            name: req.body.name,
            type: req.body.type,
        }
        const object =  await tasksSchema.insertMany(query)
        res.json(object)
    })
    app.delete('/api/tasks/:id', async(req, res) => {
        const object = await tasksSchema.deleteOne({"_id": mongoose.Types.ObjectId(req.params.id)})
        res.json(object)
    })
}