function hitung(tombol){
    //tangkap id form
    var form = document.getElementById('calcuForm');
    var a1 = parseFloat(form.angka1.value);
    var a2 = parseFloat(form.angka2.value);
    
    switch (tombol) {
        case 'tambah':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 + a2; //rumus
                form.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'kurang':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 - a2; //rumus
                form.hasil.value = total; //penempatan hasil 
            } 
            break;
        
        case 'kali':
             if (isNaN(a1) || isNaN(a2)) {
                    alert("Harap masukkan angka!!");
                }    
            else {
                    var total =  a1 * a2; //rumus
                    form.hasil.value = total; //penempatan hasil 
                } 
             break;

        case 'bagi':
            if (isNaN(a1) || isNaN(a2)) {
                    alert("Harap masukkan angka!!");
                   }    
            else {
                    var total = a1 / a2; //rumus
                    form.hasil.value = total; //penempatan hasil 
                   } 
             break; 
        
        case 'pangkat':
            if (isNaN(a1) || isNaN(a2)) {
                    alert("Harap masukkan angka!!");
                }    
            else {
                var total = Math.pow(a1,a2); //rumus
                form.hasil.value = total; //penempatan hasil
                } 
             break;   
        default:
            break;
        }
    }
