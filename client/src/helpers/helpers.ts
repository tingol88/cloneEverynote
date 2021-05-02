export function validate(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{6,}$/.test(password);
}
