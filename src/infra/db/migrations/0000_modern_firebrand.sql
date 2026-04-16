CREATE TABLE "uploads" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"romote_key" text NOT NULL,
	"remote_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "uploads_romote_key_unique" UNIQUE("romote_key")
);
