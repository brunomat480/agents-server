import { z } from 'zod';

const envSchemma = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.url().startsWith('postgresql://'),
});

export const env = envSchemma.parse(process.env);
