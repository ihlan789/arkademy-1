groupNumber('993141 -1 1323 14-232');

    function groupNumber(string) {


        string = string.replace(/-/g, '');
        string = string.replace(/ /g, '');
        string = string.split('');
        let output = '';

        for (var i = 0; i < string.length; i++) {
            let pisah = i + 1;
            if (pisah % 3 == 0 && i !== string.length - 1) {
                string[i] = string[i].split(string[i]).join(string[i] + '-');
            }
        }

        if (string.length % 3 == 1) {
            // console.log('masuk')
            for (var x = string.length - 1; x >= string.length - 4; x--) {
                string[x] = string[x].replace('-', '');
                let sp = x + 1;
                // console.log('s'+sp)
                // console.log(string.length);

                if (sp % 2 == 0 && sp !== string.length && string.length % 2 == 0) {
                    // console.log('str:'+string[sp-1] + ', sp:'+ sp-1);
                    string[sp - 1] = string[sp - 1].split(string[sp - 1]).join(string[sp - 1] + '-');

                } else if (sp % 2 == 0 && sp !== string.length - 1 && string.length % 2 == 1) {
                    // console.log('else if')
                    string[sp] = string[sp].split(string[sp]).join(string[sp] + '-');
                }

            }
        }
        // console.log(string.length)
        for (var o = 0; o < string.length; o++) {
            output += string[o];
        }

        console.log(output)
    }
    
