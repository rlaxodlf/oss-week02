// P4. Roster queries  (commit: "p4: roster queries")
//
// An array of objects is the shape of every API response you will meet.
// Do not change the data.

const students = [
  { name: "Yuna",    dept: "CS", score: 92 },
  { name: "Minho",   dept: "EE", score: 88 },
  { name: "Hana",    dept: "ME", score: 84 },
  { name: "Jiho",    dept: "CS", score: 71 },
  { name: "Soyeon",  dept: "CS", score: 97 },
  { name: "Taeyang", dept: "EE", score: 65 },
  { name: "Eunji",   dept: "ME", score: 79 },
  { name: "Junseo",  dept: "CS", score: 58 },
  { name: "Dohyun",  dept: "EE", score: 86 },
  { name: "Seoyeon", dept: "CS", score: 83 },
];

// (a) Names with score >= 80, as an array of strings.  (filter, then map)
//     expected: 80 or more: [ 'Yuna', 'Minho', 'Hana', 'Soyeon', 'Dohyun', 'Seoyeon' ]
// TODO
// console.log("80 or more:", ...);
const over80 = students.filter(n=>n.score>=80).map(n=>n.name);
console.log("80 or more:", over80);

// (b) Students per department, as an object.  (forEach + an empty object)
//     expected: per dept: { CS: 5, EE: 3, ME: 2 }
//     Hint: counts[s.dept] = (counts[s.dept] ?? 0) + 1;
// TODO
// console.log("per dept:", ...);
const counts = {};
students.forEach(n=>{counts[n.dept] = (counts[n.dept] ?? 0) + 1});
console.log("per dept:", counts);

// (c) Ranking by score, one line each: "1. Soyeon (CS) 97"
//     Copy the array before sorting (students.slice()).
//     sort() is destructive and (a) and (b) must still see the original order.
// TODO
const copied = students.slice();
copied.sort((a,b)=>b.score-a.score);
copied.forEach((n,i)=>{console.log(`${i+1}. ${n.name} (${n.dept}) ${n.score}`)});