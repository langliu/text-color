import { v4 as generateUUID } from 'uuid'
import ColorHash from '../src'

describe('first', () => {
  test('ColorHash#Hue: should return the hash color based on default hue', () => {
    const hash = new ColorHash()
    for (let i = 0; i < 100; i++) {
      const hue = hash.hsl(generateUUID())[0]
      expect(hue >= 0 && hue < 359).toBe(true) // hash % 359 means max 358
    }
  })
})

test('ColorHash#Hue: should return the hash color based on given hue value', () => {
  const hash = new ColorHash({ hue: 10 })
  for (let i = 0; i < 100; i++) {
    const hue = hash.hsl(generateUUID())[0]
    expect(hue).toBe(10)
  }
})

test('ColorHash#Hue: should return the hash color based on given hue range', () => {
  for (let min = 0; min < 361; min += 60) {
    for (let max = min + 1; max < 361; max += 60) {
      const hash = new ColorHash({ hue: { min, max } })
      for (let i = 0; i < 100; i++) {
        const hue = hash.hsl(generateUUID())[0]
        expect(hue >= min && hue < max).toBe(true)
      }
    }
  }
})

test('ColorHash#Hue: should work for multiple hue ranges', () => {
  const ranges = [
    { min: 30, max: 90 },
    { min: 180, max: 210 },
    { min: 270, max: 285 }
  ]
  const hash = new ColorHash({ hue: ranges })
  for (let i = 0; i < 100; i++) {
    const hue = hash.hsl(generateUUID())[0]
    expect(ranges.some((range) => hue >= range.min && hue < range.max)).toBe(
      true
    )
  }
})

test('ColorHash#LS: should return color based on given lightness and saturation', () => {
  const hash = new ColorHash({ lightness: 0.5, saturation: 0.5 })
  const [, s, l] = hash.hsl(generateUUID())
  expect(s).toEqual(0.5)
  expect(l).toEqual(0.5)
})

test('ColorHash should return the hash color based on given lightness array and saturation array', () => {
  const hash = new ColorHash({
    lightness: [0.9, 1],
    saturation: [0.9, 1]
  })
  const [, s, l] = hash.hsl(generateUUID())
  expect([0.9, 1].includes(s)).toBe(true)
  expect([0.9, 1].includes(l)).toBe(true)
})

test('Custom hash function', () => {
  const customHash = function (str: string) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i)
    }
    return hash
  }

  const hash = new ColorHash({ hash: customHash })
  const h = customHash('abc') % 359

  expect(hash.hsl('abc')[0]).toBe(h)
})
