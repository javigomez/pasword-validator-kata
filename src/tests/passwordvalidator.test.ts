import { passwordValidator } from '../core/passwordvalidator'

describe('passwordValidator', () => {
	it('given a valid password returns true', () => {
		expect(passwordValidator('1234abcdABCD_')).toBe(true)
	})
	it('given an short password returns false', () => {
		expect(passwordValidator('1aA_')).toBe(false)
	})
	it('given an password without numbers returns false', () => {
		expect(passwordValidator('abcdABCD_')).toBe(false)
	})
	it('given an password without capital letters returns false', () => {
		expect(passwordValidator('1234abcd_')).toBe(false)
	})
	it('given an password without lowercase letters returns false', () => {
		expect(passwordValidator('1234ABCD_')).toBe(false)
	})
	it('given an password without underscores letters returns false', () => {
		expect(passwordValidator('1234abcdABCD')).toBe(false)
	})
})
