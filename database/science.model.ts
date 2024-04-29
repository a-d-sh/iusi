import { model, models, Schema } from 'mongoose'

const ScienceSchema = new Schema(
	{
		title: String,
		position: Number,
		direction: { type: Schema.Types.ObjectId, ref: 'direction' },
		books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
	},
	{ timestamps: true }
)

const Science = models.Section || model('Science', ScienceSchema)
export default Science
