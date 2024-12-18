const mongoose = require('mongoose');

// Koneksi ke MongoDB Atlas
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

// Event listener untuk menangani status koneksi
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = db;
