import { boolean,serial ,integer, pgTable, varchar, date } from "drizzle-orm/pg-core";

export const employee = pgTable('employee', {
    id: serial('id').primaryKey(),
    screener: boolean('screener').notNull(),
    queueManager: boolean('queue_manager').notNull(),
    orderManager: boolean('order_manager').notNull(),
    partyExpert: boolean('party_expert').notNull(),
    taxExpert: boolean('tax_expert').notNull(),
    titleExpert: boolean('title_expert').notNull(),
    mortgageExpert: boolean('mortgage_expert').notNull(),
    qualityExpert: boolean('quality_expert').notNull(),
    deliveryManager: boolean('delivery_manager').notNull(),
  });



  export const scores = pgTable('scores', {
    id: serial('id').primaryKey(),
    employeeId: integer('employee_id').notNull().references(() => employee.id),
    screenerScore: integer('screener_score').notNull(),
    queueManagerScore: integer('queue_manager_score').notNull(),
    orderManagerScore: integer('order_manager_score').notNull(),
    partyExpertScore: integer('party_expert_score').notNull(),
    taxExpertScore: integer('tax_expert_score').notNull(),
    titleExpertScore: integer('title_expert_score').notNull(),
    mortgageExpertScore: integer('mortgage_expert_score').notNull(),
    qualityExpertScore: integer('quality_expert_score').notNull(),
    deliveryManagerScore: integer('delivery_manager_score').notNull(),
  });

  export const titles = pgTable('titles', {
    orderId: serial('order_id').primaryKey(),
    description: varchar('description', { length: 255 }).notNull(),
    date: date('date').notNull(),
  });



// A line has been added here
  