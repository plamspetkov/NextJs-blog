import mongoose from 'mongoose';

export default function loadModel(modelName, modelSchema) {
	return mongoose.models[modelName] // Check if the model exists
		? mongoose.model(modelName) // If true, only retrieve it
		: mongoose.model(modelName, modelSchema); // If false, define it
}
