"use server"

import { pool } from "../postgres";
import { auth } from "./authConfig";

export const getUserRole = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const uuid = session.user?.id;

  const uuidRegExp: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

  if (typeof uuid !== "string" || !uuidRegExp.test(uuid)) {
    throw new Error("Invalid UUID");
  }

  const { rows } = await pool.query("SELECT role FROM users WHERE id = $1", [uuid]);

  return rows[0]?.role;
}