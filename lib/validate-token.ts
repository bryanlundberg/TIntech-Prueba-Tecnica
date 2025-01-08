import { config } from "@/config/config";
import jwt from "jsonwebtoken";

export default function validateToken(accessToken: string) {
  return jwt.verify(accessToken, config.JWT_SECRET_KEY as string);
}
