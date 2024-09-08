import {Schema , model, models} from 'mongoose'

const userSchena = new Schema({
    email:{
        type: String,
        unique: true,
        required: [true, "Email required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email  is not valid"]
    },

    password:{
        type:String,
        required: [true, "Password required"],
        select: false
    },
    fullname:{
        type:String,
        required: [true, "Full name required"],
        mixLenght: [3, "FULL NAME MUST BE AT LEAST 3 CHARACTERS"],
        mAxLenght: [50, "FULL NAME MUST BE AT MOST 50 CHARACTERS"]
    },
})


const User =models.User || model('User', userSchena)
export default User;