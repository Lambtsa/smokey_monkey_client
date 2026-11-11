import { z } from "zod";

/* The most guests the form lets visitors book for */
export const MAX_GUESTS = 10;

/* Body of POST /api/v1/email: a table booking request */
export const reservationRequestSchema = z.object({
  name: z.string().trim().min(1),
  email: z.email().trim(),
  /* From the datetime-local input, e.g. "2026-11-14T19:30" */
  date: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/),
  count: z.coerce.number().int().min(1).max(MAX_GUESTS),
});

export type ReservationRequest = z.infer<typeof reservationRequestSchema>;
