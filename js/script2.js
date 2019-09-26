$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});



//paralax

//navbar
$(window).scroll(function(){ //ketika window/layar di scrool maka akan menjalankan fungsi berikut
	if ($('.navbar').offset().top > 100) {	//jika jarak navbar dari atas lebih dari 100
		$('.navbar').addClass('navbar-inverse box-sh');	//maka class navbar akan di tambahkan dengan class navbar-inverse box-sh
	}else{ //jika tidak
		$('.navbar').removeClass('navbar-inverse box-sh'); //maka class navbar-inverse box-sh akan di hapus
	}
});

//about
$(window).on('load', function(){ //ketika windows atau layar di load maka akan menjalankan fungsi
	$('.about').addClass('ada'); //class about ditambah class ada

	$('.navbar').addClass('nav-str');
});

$(window).scroll(function(){ //ketika windows di scrool maka akan menjalankan fungsi
	var wScroll = $(this).scrollTop(); //membuat variable dengan nama wScroll dimana isinya adah jarak dari atas ketika layer di scroll

	//portfolio
	if(wScroll > $('.portfolio').offset().top -270){ //ketika var lebih dari class portfolio jarak ketinggian dikurangi -270 maka
		$('.portfolio .thumbnail').addClass('muncul'); // akan ditambahkan class muncul
	}

	//skill
	if(wScroll > $('#skill').offset().top -400){ //ketika var lebih dari class portfolio jarak ketinggian dikurangi -270 maka
		$('.proses').addClass('gg'); // akan ditambahkan class muncul
	}

	//about
	if(wScroll > $('#hobi').offset().top -300){ //ketika var lebih dari class portfolio jarak ketinggian dikurangi -270 maka
	$('.hobi').addClass('ada-hb'); // akan ditambahkan class muncul
	}	

	//edukasi
	if(wScroll > $('#edukasi').offset().top -300){ //ketika var lebih dari class portfolio jarak ketinggian dikurangi -270 maka
	$('.edukasi').addClass('ada-hb'); // akan ditambahkan class muncul
	}	
});