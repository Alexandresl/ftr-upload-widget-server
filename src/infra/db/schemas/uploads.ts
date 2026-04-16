import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const uploads = pgTable('uploads', {
    id: text('id').primaryKey().$defaultFn(() => uuidv7()),
    name: text('name').notNull(),
    romoteKey: text('romote_key').notNull().unique(),
    remoteUrl: text('remote_url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull()
})