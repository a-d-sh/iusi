import { model, models, Schema } from 'mongoose'

const BookSchema = new Schema({
	title: String,
	position: Number,
	url: String,

	section: { type: Schema.Types.ObjectId, ref: 'Section' },
	free: { type: Boolean, default: false },
	userProgresss: [{ type: Schema.Types.ObjectId, ref: 'UserProgresss' }],
})

const Book = models.Book || model('Book', BookSchema)
export default Book
