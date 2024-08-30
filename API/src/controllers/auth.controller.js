import jwt from "jsonwebtoken";

import { users } from "../database/schema.js";
import { db } from "../database/index.js";

export const login = async (req, res) => {
  const users = await db.query.users.findMany({
    with: {
      posts: true,
    },
  });

  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ error: "Нэвтрэнэ үү" });
  const token = jwt.sign(
    {
      username: users.username,
      email: users.email,
      id: users.id,
    },
    process.env.JWT_SECRET
  );

  res.json({
    token,
    user: {
      username: users.username,
      email: users.email,
      id: users.id,
    },
  });
};

export const register = async (req, res) => {
  const { name, email, passwords } = req.body;
  
  const user = await db
    .insert(users)
    .values({ name, email, passwords })
    .returning();

  res.json(user);
};
