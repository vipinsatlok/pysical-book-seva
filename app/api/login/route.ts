import type { NextApiRequest, NextApiResponse } from "next";

interface LoginData {
  email: string;
  password: string;
}

export default function handleLogin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  const { email, password } = req.body as LoginData;

  res.status(200).json({ email, password });
}
