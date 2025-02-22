import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const users = table(
    "users",
    {
        id: t.integer('id').primaryKey().generatedAlwaysAsIdentity(),
        email: t.varchar('email', { length: 255 }).notNull().unique(),
        username: t.varchar('username', { length: 50 }).notNull().unique(),
        passwordHash: t.varchar('password_hash', { length: 255 }).notNull(),
        firstName: t.varchar('first_name', { length: 100 }),
        lastName: t.varchar('last_name', { length: 100 }),
        isActive: t.boolean('is_active').default(true),
        createdAt: t.timestamp('created_at').defaultNow(),
        updatedAt: t.timestamp('updated_at').defaultNow(),
        provider: t.varchar('provider', { length: 50 }),
        uid: t.varchar('uid', { length: 255 }),
        accessToken: t.varchar('access_token', { length: 255 }),
        refreshToken: t.varchar('refresh_token', { length: 255 }),
        tokenExpiresAt: t.timestamp('token_expires_at'),
        role: rolesEnum('roles').default("guest"),
    },
    (table) => ({
      indexes: [
        t.uniqueIndex("email_idx").on(table.email)
      ]
    })
  );