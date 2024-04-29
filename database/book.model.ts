import { model, models, Schema } from 'mongoose'

const BookSchema = new Schema({
	title: String,
	position: Number,
	url: String,

	science: { type: Schema.Types.ObjectId, ref: 'Science' },
	free: { type: Boolean, default: false },
	userProgresss: [{ type: Schema.Types.ObjectId, ref: 'UserProgresss' }],
})

const Book = models.Book || model('Book', BookSchema)
export default Book
