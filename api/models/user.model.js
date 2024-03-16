import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://i0.wp.com/hometeamofamerica.com/wp-content/uploads/2023/02/Feature-Female-Agent-Placeholder-Home-Team-of-America-1.png?resize=800%2C800&ssl=1"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
