/*
Santa is conducting his daily roll call for the reindeer,
but the printer has mistakenly printed all their names backwards.
To take attendance properly,
he urgently needs a tool to reverse the reindeer names and put them in alphabetical order!
Can you help Santa?

Example:

rollCall(["yzneT","ydissaC","enimA"])
["Amine","Cassidy","Tenzy"]

rollCall(["rennuD","nexiV","recnarP","temoC","neztilB","recnaD","diduC","rehsaD","hploduR"])
["Blitzen","Comet","Cupid","Dancer","Dasher","Donner","Prancer","Rudolph","Vixen"]

rollCall(["A","B","C"])
["A","B","C"]
*/

export function rollCall(names: string[]): string[] {
	return names.map(name => name.split('').reverse().join('')).sort();
}
