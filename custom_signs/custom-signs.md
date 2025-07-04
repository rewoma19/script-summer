# Instructions

## Task 1

### Build an occasion sign

Implement the function **buildSign(occasion, name)** that accepts a string as the **occasion** parameter and a string holding someone's name as the **name** parameter. The two parameters will be embedded into a template string to output the message on the sign.

## Task 2

### Build a birthday sign

Implement the function **buildBirthdaySign(age)** that accepts an age and based on the age will determine part of the message on the sign. If the age is 50 or older, the sign will refer user as mature, else it will refer them as young. The exact expected output is shown below:

> buildBirthdaySign(50);
> // => "Happy Birthday! What a mature fellow you are."
> buildBirthdaySign(45);
> // => "Happy Birthday! What a young fellow you are."

## Task 3

### Build a graduation sign

Implement the function **graduationFor(name, year)** which takes a name as a string parameter and a year as a naumber parameter and uses string interpolation to create a phrase for a sign that uses a newline to separate the two lines of the message.
