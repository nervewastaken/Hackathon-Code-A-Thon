const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres.keqffvaytvbaqniavqtg",
  host: "aws-0-us-east-1.pooler.supabase.com",
  database: "postgres",
  password: "9ChJhmA5BIkZUvr1",
  port: "6543", // Default port for Supabase Postgres
  ssl: {
    rejectUnauthorized: false, // Required for some cloud setups, handle according to your security requirements
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
