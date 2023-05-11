import { describe, assert, expect, test } from 'vitest'
import { validator } from '@ER/hooks/use-logic'
describe('validator', () => {
  test('Radio', () => {
    const field = { type: 'radio', label: 'Radio', icon: 'radio', key: 'radio_FQWZ5Tf_KQryjLOj_-Oso', id: 'FQWZ5Tf_KQryjLOj_-Oso', options: { dataKey: 'FQWZ5Tf_KQryjLOj_-Oso', displayStyle: 'block', defaultValue: '', labelWidth: 100, isShowLabel: true, disabled: false, required: false }, style: { width: { pc: '100%', mobile: '100%' } } }
    expect(
      validator({
        operator: 'equal',
        value: 'CrvWR4TVdNRxvxty5iAT2'
      },
      'CrvWR4TVdNRxvxty5iAT2',
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'not_equal',
        value: 'CrvWR4TVdNRxvxty5iAT2'
      },
      'CrvWR4TVdNRxvxty5iAT2',
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'contains',
        value: ['CrvWR4TVdNRxvxty5iAT2']
      },
      'CrvWR4TVdNRxvxty5iAT2',
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'toBeFalsy',
        value: ['CrvWR4TVdNRxvxty5iAT2']
      },
      'CrvWR4TVdNRxvxty5iAT2',
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'empty'
      },
      '',
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'empty'
      },
      undefined,
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'empty'
      },
      null,
      field)).toBeTruthy()
    expect(
      validator({
        operator: 'not_empty'
      },
      '',
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'not_empty'
      },
      undefined,
      field)).toBeFalsy()
    expect(
      validator({
        operator: 'not_empty'
      },
      null,
      field)).toBeFalsy()
  })
})
