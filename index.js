var Person = function(name , birthdate , occupation) {
    this.name = name;
    this.birthdate = birthdate;
    this.occupation = occupation
}
Person.prototype.calculateAge = function() {
    var currentYear = new Date().getFullYear()
    var age = currentYear - this.birthdate;
    console.log(age)
}
Person.prototype.city = 'Chemnitz'

var negin = new Person('negin' , 1987 , 'Developer')
console.log(negin);