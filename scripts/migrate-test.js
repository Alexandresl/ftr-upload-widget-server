import { execSync } from "node:child_process";
import { config } from "dotenv";

// Load environment variables from .env.test
config({ path: ".env.test" });

console.log("Environment variables loaded successfully");

try {
  // Run drizzle-kit migrate
  console.log("Running drizzle-kit migrate...");
  execSync("npx drizzle-kit migrate", { stdio: "inherit" });
  console.log("Migration completed successfully");
} catch (error) {
  console.error("Migration failed:", error.message);
  console.error("Exit code:", error.status);
  process.exit(1);
}
