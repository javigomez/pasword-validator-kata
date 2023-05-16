// LongChecker 5 chars returns false: abcde
// LongChecker 6 chars returns true: 123456
// AtLeastANumberChecker 6 letters retunrs false
// AtLeastANumberChecker ab3def retunrs true
// AtLeastAnUppercaseChecker Abcdef returns true
// AtLeastAnUppercaseChecker qbcdef returns false
// AtLeastALowercaseChecker 1BCDeF returnst true
// AtLeastALowercaseChecker 1BCDEF returnst false
// AtLeastAnUnderscore ab_def returns true
// AtLeastAnUnderscore abedef returns false
// PasswordChecker a_C4fg returns true
// PasswordChecker '' returns false



// 1234abcdABCD_ ⇒ true - cumple todas las reglas
// 1aA_ ⇒ false - no tiene longitud suficiente
//abcdABCD_ ⇒ false - no tiene números
//1234ABCD_ ⇒ false - no tiene minúsculas
//1234abcd_ ⇒ false - no tiene mayúsculas
//1234abcdABCD ⇒ false - no tiene guion bajo

import { passwordValidator } from '../core/passwordvalidator'

describe('passwordValidator', () => {
	it('given a valid password returns true', () => {
		expect(passwordValidator('1234abcdABCD_')).toBe(true)
	})
})
