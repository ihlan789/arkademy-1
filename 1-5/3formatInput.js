	function formatInput(array){


		


		let split = arguments[0].replace(/[}]/g,'').split('{');
		
		let arrayOutput = [];
		

		for (var i = 1; i < split.length; i++) {
			
			let count = split[i];
			count = parseInt(count)+1;
		
			//console.log('output: '+split[0] + arguments[count]);
			arrayOutput.push(arguments[count]);
		}

		let finalOutput='';
		for (let i2 = 0; i2 < arrayOutput.length; i2++) {
			finalOutput += arrayOutput[i2]+ ' ';
			
		}

	//console.log ('hasil: '+split[0]+finalOutput)
	return 'hasil: '+split[0]+finalOutput;

	}

//##### testing
console.log(formatInput("Hello {0} {1}", "Arkademian", "Fighters!"));
console.log(formatInput("This is an {2}","Halangan","Rintangan","Exercise")
)
