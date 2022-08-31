import { HSL2RGB, RGB2HEX } from '@lib/colors'

describe('测试colors', () => {
  test('HSL2RGB should return correct RGB of the given HSL', () => {
  // test examples from http://zh.wikipedia.org/wiki/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4
    expect(HSL2RGB(0, 1, 0.5)).toEqual([255, 0, 0])
    expect(HSL2RGB(120, 1, 0.75)).toEqual([128, 255, 128])
    expect(HSL2RGB(240, 1, 0.25)).toEqual([0, 0, 128])

    // test example generated using gpick
    expect(HSL2RGB(330, 1, 0.75)).toEqual([255, 128, 191])
  })

  test('RGB2HEX: should return hex for rgb', () => {
    expect(RGB2HEX([255, 64, 0])).toEqual('#ff4000')
  })

  test('RGB2HEX should return string which length is 7 for even samll rgb values', () => {
    expect(RGB2HEX([1, 15, 16])).toEqual('#010f10')
  })
})
