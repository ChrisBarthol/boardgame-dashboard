import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const plays = pgTable('plays', {
    id: serial('id').primaryKey(),
    userid: integer('userid').notNull(),
    playid: integer('playid').notNull(),
    date: timestamp('date').notNull(),
    quantity: integer('quantity').notNull(),
    duration: integer('duration').notNull(),
    players: integer('players').notNull(),
    location: text('location').notNull()
});

export const players = pgTable('players', {
    id: serial('id').primaryKey(),
    userid: integer('userid').notNull(),
    playid: integer('playid').notNull(),
});


export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull()
});


export const game = pgTable('game', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    minplayers: integer('minplayers').notNull(),
    maxplayers: integer('maxplayers').notNull(),
    duration: integer('duration').notNull(),
    description: text('description').notNull(),
    image: text('image').notNull(),
    bggid: integer('bggid').notNull()
});

export type SelectPlay = typeof plays.$inferSelect;
export const insertPlaySchema = createInsertSchema(plays);