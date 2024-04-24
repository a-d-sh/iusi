import { model, models, Schema } from 'mongoose'

const DirectionSchema = new Schema(
	{
		title: String,
		titleru: String,
		titleen: String,
		previewImage: String,
		published: { type: Boolean, default: false },
		instructor: { type: Schema.Types.ObjectId, ref: 'User' },
		slug: String,
		tags: String,
		purchases: [{ type: Schema.Types.ObjectId, ref: 'Purchase' }],
	},
	{ timestamps: true }
)

const Direction = models.Direction || model('Direction', DirectionSchema)
export default Direction
