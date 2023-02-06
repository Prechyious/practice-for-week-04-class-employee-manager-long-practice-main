const Employee = require("./employee");
const Manager = require("./manager");


const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);


const hobbesBonus = hobbes.calculateBonus(0.05);
const calvinBonus = calvin.calculateBonus(0.05);
const susieBonus = susie.calculateBonus(0.05);
const lilyBonus = lily.calculateBonus(0.05);
const cliffordBonus = clifford.calculateBonus(0.05);


console.log(`Hobbes's bonus will be $${hobbesBonus}`);
console.log(`Calvin's bonus will be $${calvinBonus}`);
console.log(`Susie's bonus will be $${susieBonus}`);
console.log(`Lily's bonus will be $${lilyBonus}`);
console.log(`Clifford's bonus will be $${cliffordBonus}`);
