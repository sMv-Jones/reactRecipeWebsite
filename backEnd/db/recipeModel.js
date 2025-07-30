import mongoose from 'mongoose'
const recipe = mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    data:[{
        id:String,
        title:String,
        description:String,
        
    }]
},
{timestamps:true}
)
const Recipe = mongoose.model('Recipe',recipe);
export default Recipe; 