import { config } from "dotenv";
import { execSync } from "child_process";

// Load environment variables from .env.test
config({ path: ".env.test" });

// Run drizzle-kit migrate
execSync("drizzle-kit migrate", { stdio: "inherit" });
