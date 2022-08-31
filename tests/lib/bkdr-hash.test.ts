import BKDRHash from '@lib/bkdr-hash'

describe('测试 bkhr-hash', () => {
  test(
    'BKDRHash should return different value for different string',
    () => {
      expect(BKDRHash('abc')).not.toEqual(BKDRHash('hij'))
    }
  )

  test('BKDRHash should work for very long string', () => {
    let longstr = ''
    for (let i = 0; i < 10 * 1000; i++) {
      longstr += 'Hello World.'
    }
    const hash = BKDRHash(longstr)
    expect(hash).not.toEqual(Infinity)
    expect(hash).not.toEqual(0)

    const hash2 = BKDRHash(longstr.substring(0, longstr.length - 1))
    expect(hash).not.toEqual(hash2)
  })
})
