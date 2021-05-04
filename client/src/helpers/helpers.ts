export function validatePass(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{6,}$/.test(password);
}

export function validateName(name: string): boolean {
  return /^[a-zA-Z0-9_]{3,20}$/.test(name);
}
export function validateEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email.toLowerCase())
}
