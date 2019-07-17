# Replit Test

### Guidelines

* If a question asks you to define a variable in terms of another variable, then do... exactly that. If `x = 2`, and you're asked to make `y` be 1 more than `x`, then the correct answer is to define `y` as `x + 1`, _not_ as `3`.
* You should not have to reassign any variables below, so use `const` to declare them.
* It is a good idea to go in order, because many steps require variables defined above them. If you want to skip and come back to one later, do not do any that rely on that one either; any test will fail unless all the variables it refers to are already defined.


### Numbers

* Create a variable called `dollars` that holds the number 50.
* Create a variable called `cents` and define it in terms of `dollars` such that it is 100 times the value.
* Create a variable called `hamburgerPrice` that holds a number in the range 1-10, inclusive.
* Create a variable called `numberOfHamburgers` that holds a number in the range 1-10, inclusive.
* Create a variable called `dollarsSpent` and define it in terms of `hamburgerPrice` and `numberOfHamburgers` such that it is the two values multiplied by each other.
* Create a variable called `newDollars` and define it in terms of `dollars` and `dollarsSpent` such that it is the value of `dollars` minus the value of `dollarsSpent`.


### Strings

* Create a variable called `firstName` that holds your first name (or any non-empty string).
* Create a variable called `lastName` thta holds your last name (or any non-empty string).
* Create a variable called `fullName` and define it in terms of `firstName` and `lastName` such that it is the first, followed by a space, followed by the second.
* Create a variable called `school` that holds the name of your school.
* Create a variable called `sentence` and define it in terms of `fullName` and `school` such that it contains those variables, plus additional characters of your choice.
* Create a variable called `powerful` and define it in terms of `sentence` using `replace`, such that the first space is replaced by two asterisks, i.e. two of the * symbol.
* Create a variable called `firstHalfOfSentence` and define it in terms of `sentence` such that it is the first half of the string. For example, if there are 14 characters in `sentence`, `halfSentence` should be the the first 7. If there are an odd number of characters in `sentence`, then include the middle character. e.g., if there are 15 characters in `sentence`, then `firstHalfOfSentence` should include the first 8.
* Create a variable called `secondHalfOfSentence` and define it in terms of `sentence` such that it is the last half of the string. If there are an odd number of characters, then do _not_ include the middle character.


### Booleans

* Create a variable called `havingFun` that holds the boolean value that corresponds to whether or not you are. In general, if not in this quiz.
* Create a variable called `learning` that holds the boolean value that corresponds to whether or not you are.
* Create a variable called `killingIt` and define it in terms of the previous two variables such that it is true only if both are. Do not use an `if` statement.
* Create a variable called `notBankrupt` and define it in terms of `newDollars` such that it is true if `newDollars` is greater than 0. Do not use an `if` statement.
