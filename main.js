expect(dollars).toBe(50);

expect(cents).toBe(5000);

expect(hamburgerPrice >= 1 && hamburgerPrice <= 10).toBe(true);

expect(numberOfHamburgers >= 1 && hamburgerPrice <= 10).toBe(true);

expect(dollarsSpent).toBe(hamburgerPrice * numberOfHamburgers);

expect(newDollars).toBe(dollars - dollarsSpent);

expect(typeof firstName).toBe('string');

expect(firstName.length > 0).toBe(true);

expect(typeof lastName).toBe('string');

expect(lastName.length > 0).toBe(true);

expect(fullName).toBe(firstName + ' ' + lastName);
