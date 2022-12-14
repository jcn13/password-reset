const mongoose = require('mongoose')

module.exports = connectino = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect(process.env.DB, connectionParams)
    console.log('connected to database.')
  } catch (error) {
    console.log(error, 'could not connect database.')
  }
}
