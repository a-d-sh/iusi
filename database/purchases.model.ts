import { model, models, Schema } from 'mongoose'

const PurchasesSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		direction: { type: Schema.Types.ObjectId, ref: 'Direction' },
	},
	{ timestamps: true }
)

const Purchases = models.Purchases || model('Purchases', PurchasesSchema)
export default Purchases
