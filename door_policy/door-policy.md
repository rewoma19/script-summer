# Instructions

A new poetry club has opened in town, and you are thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you will need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you will need to work out the password of the day.

The password is always based on a poen and can be derived into a two-step process.

1. The guard will recite the poem, one line at a time, and you have to respond with an appropriate letter of that line.
2. The guard will now tell you all the letters you need to write them down on a piece of paper in a specific format.

The details of the process depend on which door you are trying to enter.

## Task 1

### Get the first letter of a sentence.

To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.

To end up with a nice password, the members of the poetry club like to use **acrostic** poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.

> Stands so high
> Huge hooves too
> Impatiently waits for
> Reins and harness
> Eager to leave

So when the guard recites **Stands so high**, you will respond **S**, when the guard recites **Huge hooves too**, you will respond **H**.

Implement the function **frontDoorResponse** that takes a line of the poem as an argument and returns the first letter of that line.

## Task 2

### Capitalize a word

Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize a word.

Implement the function **frontDoorPassword** that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.

## Task 3

### Get the last letter of a sentence.

To determine the letters for the front door password, you need to respond with the last letter of the line of the poem, that the guard recites to you.

The members of the poetry club are really clever. The poem mentioned is also **telestich**, which means that the last letter of each sentence also forms a word:

> Stands so high
> Huge hooves too
> Impatiently waits for
> Reins and harness
> Eager to leave

So when the guard recites **Stands so high**, you will respond **h**, when the guard recites **Huge hooves too**, you will respond **o**.

Implement the function **backDoorResponse** that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.

## Task 4

### Be polite

To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add **', please'** at the end.

Implement the function **backDoorPassword** that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.
