//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

//ower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules: 

//Only one disk can be moved at a time.
//Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
//No disk may be placed on top of a smaller disk.

function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 1)
		{
			document.write("Move disk 1 from rod " + from_rod +
			" to rod " + to_rod+"<br/>");
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		document.write("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod+"<br/>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	
	var n = 4; 
	towerOfHanoi(n, 'A', 'C', 'B'); 
