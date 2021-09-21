//Objects in Objects

const userInfo = {
  firstName: 'Avi',
  lastName: 'Flombaum',
  company: {
    name: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice'
  },
  friends: [{//'Nancy' [0], 'Corinna' [1]
    firstName: 'Nancy',
    lastName: 'Burgess',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Developer Apprentice'
    }
  },
  {
    firstName: 'Corinna',
    lastName: 'Jackson',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Lead Developer'
    }
  }],
  projects: [{//Array:'Flatbook' [0],'Scuber' [1]
    title: 'Flatbook',
    description: 'The premier Flatiron School-based social network in the world.'
  },
  {
    title: 'Scuber',
    description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  }]
};

//To review, for a property at the top level of our object, we can grab a value using dot notation:

userInfo.lastName;
//=> "Flombaum"

//If the property we're accessing is nested inside another object, we just append the additional key(s):

userInfo.company.jobTitle;
//=> "Developer Apprentice"

//If the property is nested inside an array, we need to specify the index in the array for the object that we want. To get the first name of Avi's first friend and the title of his second project:

userInfo.friends[0].firstName;
//=> "Nancy"

userInfo.friends[1].firstName;
//=> "Corinna"

userInfo.projects[1].title;
//=> "Scuber"

userInfo.projects[0].title;
//=> "Flatbook"

//-----------------------------------------------------------------
//Arrays in arrays

//Working with nested arrays isn't all that different from nested objects. Simply replace the named properties of nested objects with indexes of nested arrays. Let's review with an example:

const letters = ['a', ['b', ['c', ['d', ['e']], 'f']]];

//Given the above nested array, how would we get the letter 'e'? First, we'd need the second element in letters, letters[1]:

letters[1];
//=> ["b", ["c", ["d", ["e"]], "f"]]

//Then we'd need the second element of that element, so letters[1][1]:

letters[1][1];
//=> ["c", ["d", ["e"]], "f"]

//Then the second element of that element, letters[1][1][1]:

letters[1][1][1];
//=> ["d", ["e"]]

//And the second element of that element, letters[1][1][1][1]:

letters[1][1][1][1];
//=> ["e"]

//Finally, we want the first element in that final nested array, l
letters[1][1][1][1][0]:

letters[1][1][1][1][0];
//=> "e"

//NOTE:remember that each lookup (each set of square brackets) "drills down" into each successive nested array.

//Practice--------------------------------------------------------

array[0];// 1st element
//=> a

array[1];// second element
//=> [ 'b', [ 'c', [ 'd', [Array] ] ] ]

array[1][0];
//=> b
//first element of the above returned value [ 'b', [ 'c', [ 'd', [Array] ] ] ]

array[1][1];
//=> [ 'c', [ 'd', [ 'e' ] ] ]
// second element of [ 'b', [ 'c', [ 'd', [Array] ] ] ]

array[1][1][1];
//=> [ 'd', [ 'e' ] ]
// second element of [ 'c', [ 'd', [ 'e' ] ] ]

array[1][1][1][1];
//=> [ 'e' ]
// second element of  [ 'd', [ 'e' ] ]

array[1][1][1][1][0];
// => e
// first element of [ 'e' ]

