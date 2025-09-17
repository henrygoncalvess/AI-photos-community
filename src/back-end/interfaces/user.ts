import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface ValidationError {
  name: string;
  message: string;
  action: string;
  status_code: number;
}

export interface SessionObject {
  _id: string;
  token: string;
  user_id: ObjectId;
  created_at: string;
  expires_at: string;
  updated_at: string;
}
