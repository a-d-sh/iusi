import { model, models, Schema } from 'mongoose'

const BookSchema = new Schema({
	title: String,
	position: Number,
	content: String,
	videoUrl: String,
	duration: {
		hours: { type: Number, default: 0 },
		minutes: { type: Number, default: 0 },
		seconds: { type: Number, default: 0 },
	},
	section: { type: Schema.Types.ObjectId, ref: 'Section' },
	free: { type: Boolean, default: false },
	userProgress: [{ type: Schema.Types.ObjectId, ref: 'UserProgress' }],
})

const Book = models.Book || model('Book', BookSchema)
export default Book
