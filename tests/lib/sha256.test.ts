import { Sha256ToInt } from '@lib/sha256'

describe('测试 Sha56', () => {
  test('sha256 test', () => {
    // See also: https://github.com/zenozeng/color-hash/issues/30
    expect(Sha256ToInt('2018-06-14T17')).not.toBe(Sha256ToInt('2018-06-15T09'))

    // See also: https://github.com/zenozeng/color-hash/issues/27
    expect(Sha256ToInt('myView1')).not.toEqual(Sha256ToInt('myView2'))
  })
})
