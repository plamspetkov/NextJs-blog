import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: 'string',
			required: true,
		},
		desc: {
			type: 'string',
			required: true,
		},
		img: {
			type: 'string',
			required: true,
		},
		content: {
			type: 'string',
			required: true,
		},
		username: {
			type: 'string',
			required: true,
		},
	},
	{ timestamps: true }
);

// const Post = mongoose.model('Post', postSchema);
// const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
// export default Post;
// export default mongoose.model('Post', postSchema);
export default mongoose.models.Post || mongoose.model('Post', postSchema);
