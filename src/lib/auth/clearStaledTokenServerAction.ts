"use server"
import { pool } from "../postgres";

export const clearStaledTokens = async () => {
  try {
    await pool.query("DELETE FROM verification_token WHERE expires < NOW()")
  } catch (error) {
    throw error;
  }
} 