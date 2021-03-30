
var friendAge = [ 12, 55, 90,  13];
friendAge.push(555);
friendAge.pop();
var zub = friendAge[2];
friendAge[0] = 44;
console.log(friendAge[3]);
console.log(zub);
console.log(friendAge);
var position = friendAge.indexOf(44);
var position = friendAge.indexOf(474);
console.log(position);
console.log(friendAge.length)

var singerName = ['kama' , 'jamal' , 'joy ', 'babe', 'mile', 'jon'];
singerName.push('jan')
console.log(singerName);
singerName.pop('jan')
console.log(singerName);
singerName.shift()
console.log(singerName);
singerName.unshift('jan')
console.log(singerName);

var part = singerName.slice(2);
var part2 = singerName.slice(2, 5);
console.log(part);
console.log(part2);
console.log(singerName.length);
