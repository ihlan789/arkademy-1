	function cek_kata(kata){

		
		

		if (isNaN(kata)==false) {
			return 'Parameter harus string!'
		}

		let jumlah=0;
		kata = kata.split(' ');

		for (let i = 0; i < kata.length; i++) {
			
			let cek = parseInt(kata[i]);
			if (isNaN(cek)==true) {
				jumlah++;
				

			}
			
		}

		return 'jumlah kata: '+jumlah;

	}


console.log(cek_kata(3));
console.log(cek_kata('ini 2 kata'));
