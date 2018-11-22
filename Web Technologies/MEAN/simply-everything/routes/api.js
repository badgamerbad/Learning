const mongoose = require('mongoose');
const tasksSchema = mongoose.model('tasks');

module.exports = app => {
    app.get('/api/tasks', midFoo, async (req, res) => {
        const tasks = await tasksSchema.find()
        res.json(tasks)
    })
    app.post('/api/tasks', midFoo, async(req, res) => {
        let query = {
            name: req.body.name,
            type: req.body.type,
        }
        const object =  await tasksSchema.insertMany(query)
        res.json(object)
    })
    app.delete('/api/tasks/:id', midFoo, async(req, res) => {
        const object = await tasksSchema.deleteOne({"_id": mongoose.Types.ObjectId(req.params.id)})
        res.json(object)
    })
}

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("776654150542-ca4q9ioshln2cs1dqcvaqiqk8ms4bvhl.apps.googleusercontent.com");
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "776654150542-ca4q9ioshln2cs1dqcvaqiqk8ms4bvhl.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}
const midFoo = function(req, res, next){
    verify(req.headers.authorization).catch(console.error)
    next()
}