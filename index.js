let people = [{name: 'peter',age: 30},{name: 'Mary', age: 20},{name:'Clare',age: 25}]

function old(people) {
    let oldPeople = people.filter(people => people.age >= 25)
    return oldPeople;
}
console.log(old(people))