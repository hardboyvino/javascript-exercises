const findTheOldest = function(people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        
    const currentPersonAge = (currentPerson.yearOfDeath === undefined ? 2023 : currentPerson.yearOfDeath) - currentPerson.yearOfBirth;
    
    const oldestPersonAge = (oldestPerson.yearOfDeath === undefined ? 2023 : oldestPerson.yearOfDeath) - oldestPerson.yearOfBirth;
    
    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
 