## Welcome to GitHub Pages

This project was build with Vanilla Javascript

### Requirement

- Node v14.7.0

### How to run

1. Clone this project on your directory
2. Open terminal or powershell at same path directory
3. run `node shipMembers`

### Challenge

Another Titanic is about to sink. There are [n] numbers of people aboard the ship. Each person has a
property of name and age. The captain of the ship gives an order to evacuate and list the names of the
most people with the same age sorted alphabetically. In the case of more than 1 group of age at the
same maximum amount, split the data into different arrays.

Example:
There are 6 people aboard with the following data:

[
{name : John, age:  15},
{name : Peter, age:  12},
{name : Roger, age:  12},
{name : Anne, age:  44},
{name : Mary, age:  15},
{name : Nancy, age:  15},
]

Because the most occurring age in the data is 15, the output should be an array of strings with the
people's name, in this case it should be ['John', 'Mary', 'Nancy'].

[
{name : John, age: 15},
{name : Peter, age: 12},
{name : Roger, age: 12},
{name : Anne, age: 44},
{name : Mary, age: 15},
{name : Nancy, age: 39},
]

In the case of the above situation where there are more than one groups of age are at the
maximum amount, return both groups in a different array so in this case it should return [['Peter',
'Roger'], [‘John’, ’Mary’]]. The example input data will be attached along with this project.
