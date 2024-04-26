import { model, models, Schema } from 'mongoose'

const PurchasedirectionSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		direction: { type: Schema.Types.ObjectId, ref: 'Direction' },
	},
	{ timestamps: true }
)

const Purchasedirection =
	models.Purchasedirection ||
	model('Purchasedirection', PurchasedirectionSchema)
export default Purchasedirection
