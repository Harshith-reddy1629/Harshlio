const rateLimitStore = new Map<
  string,
  { count: number; lastRequest: number }
>();

export function rateLimit(ip: string, limit = 10, windowMs = 60 * 1000) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) {
    rateLimitStore.set(ip, { count: 1, lastRequest: now });
    return { allowed: true };
  }

  const timePassed = now - record.lastRequest;

  if (timePassed > windowMs) {
    rateLimitStore.set(ip, { count: 1, lastRequest: now });
    return { allowed: true };
  }

  if (record.count < limit) {
    record.count++;
    rateLimitStore.set(ip, record);
    return { allowed: true };
  }

  return { allowed: false };
}
