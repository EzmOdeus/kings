const mongoose =require( "mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },

    // data: [
    //   {
    //     type: Schema.Types.ObjectId,

    //     ref: "data",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema)
module.exports=User  