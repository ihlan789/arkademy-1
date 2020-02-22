/*Buatlah sebuah fungsi yang menampilkan output dari 1 sampai n, dengan
ketentuan untuk setiap angka berkelipatan 3 akan digantikan dengan kata
“Arka”, untuk setiap angka berkelipatan 7 akan digantikan dengan kata
“Demy”, dan untuk setiap angka berkelipatan 3 dan 7 akan digantikan
dengan kata “Arkademy”. Catatan: Input harus merupakan angka, jika
bukan angka akan menampilkan error “Input harus angka!”*/

	arkademy('30');

		function arkademy(jumlahx){

			let _array = [];
			let output = '';

			if (isNaN(jumlahx)==true) {
				console.log('ini bukan angka');
				return false

			}
			
			for (let i = 0; i < jumlahx; i++) {

				let jumlah = i+1;

				if (jumlah%3==0 && jumlah%7==0) {
				_array.push('arkademy');
				}else if(jumlah%3==0){
					_array.push('arka')
				}else if(jumlah%7==0){
					_array.push('demy')
				}else{
					_array.push(jumlah);
				}

			}

			console.log(_array);

		}
