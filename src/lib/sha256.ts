import { SHA256, enc } from 'crypto-js'

export function Sha256ToInt (s: string) {
  const sha256 = SHA256(s)
  return parseInt(sha256.toString(enc.Hex).substring(0, 8), 16)
}
