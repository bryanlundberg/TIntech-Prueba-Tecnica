import { model, models, Schema } from "mongoose";

interface IUser {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: String,
  password: String,
});

export default models.User || model("User", userSchema);
