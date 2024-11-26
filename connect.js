import mongoose from 'mongoose';

// Define the function that connects to MongoDB
export const connectToMongoDB = (uri) => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
};
