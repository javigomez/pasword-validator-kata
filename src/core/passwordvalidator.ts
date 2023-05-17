export function passwordValidator(password: string): boolean {
    return (
      longerThan6Chars(password) &&
      containsNumber(password) &&
      containsUppercaseLetter(password) &&
      containsLowercaseLetter(password) &&
      containsUnderscore(password)
    );
  }
  
  function longerThan6Chars(password: string): boolean {
    return password.length >= 6;
  }
  
  function containsNumber(password: string): boolean {
    return /\d/.test(password);
  }
  
  function containsUppercaseLetter(password: string): boolean {
    return /[A-Z]/.test(password);
  }
  
  function containsLowercaseLetter(password: string): boolean {
    return /[a-z]/.test(password);
  }
  
  function containsUnderscore(password: string): boolean {
    return /_/.test(password);
  }