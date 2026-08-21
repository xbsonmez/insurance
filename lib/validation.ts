export function isValidIdentityNumber(value: string): boolean {
  const tc = value.trim();
  if (!/^[1-9][0-9]{10}$/.test(tc)) return false;

  const digits = tc.split("").map(Number);
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  const tenth = (oddSum * 7 - evenSum) % 10;
  if (tenth !== digits[9]) return false;

  const sumFirstTen = digits.slice(0, 10).reduce((a, b) => a + b, 0);
  if (sumFirstTen % 10 !== digits[10]) return false;

  return true;
}

export function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return /^5[0-9]{9}$/.test(digits);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function formatPhone(value: string): string {
  const d = normalizePhone(value).slice(0, 10);
  let out = "";
  if (d.length > 0) out = "(" + d.slice(0, 3);
  if (d.length >= 3) out += ") ";
  if (d.length >= 3) out += d.slice(3, 6);
  if (d.length >= 6) out += " " + d.slice(6, 8);
  if (d.length >= 8) out += " " + d.slice(8, 10);
  return out;
}
