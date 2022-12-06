
export const ResepMakanan = [
	{
		id: 1,
		nama: 'Salad Sayur',
		durasi: '15 menit',
		porsi: '1 porsi (300g)',
		bahan: ["Wortel","Selada","Paprika","Mentimun","Tomat Ceri","Garam & Lada Bubuk"],
		jumlahBahan: ["55 gram","75 gram","1 buah","60 gram","180 gram","secukupnya"],
		bg: '/src/assets/makanan/kecil/saladSayur.png',
		bgBesar: 'src/assets/makanan/besar/saladSayur.png',
		gambarBahan: [
			"/src/assets/bahanMakanan/Carrot.png",
			"/src/assets/bahanMakanan/Cucumber.png",
			"/src/assets/bahanMakanan/Lettuce.png",
			"/src/assets/bahanMakanan/Paprika.png",
			"/src/assets/bahanMakanan/Tomato.png",
			"/src/assets/bahanMakanan/SpoonOfSugar.png"
		],
		bahanSaos : [
			"200 gram mayonais",
			"2sdm cincangan acar",
			"2 sdm paprika cincang",
			"2 sdm cuca apel",
			"1 siung bawang putih cicang halus",
			"2 siung bawang merah",
			"3 sdm minyak zaitun",
			"lada bubuk dan garam secukupnya"
		],
		langkah: [
			"Masukan semua bahan salad ke dalam mangkuk. Taburi dengan lada dan garam, lalu aduk sampai tercampur rata.",
			"Tuang saos secukupnya, aduk hingga rata. Salad sayur siap disajikan."
		]
	},
	{
		id: 2,
		nama: 'Oatmeal Pancake',
		durasi: '10 menit',
		porsi: '1 porsi (4 pcs)',
		bahan: ["Oatmeal","Telur","Gula Pasir","Gula Pasir"],
		jumlahBahan: ["100 gram","1 butir","2 sdm","2 sdm"],
		bg: "/src/assets/makanan/kecil/pancake.png",
		bgBesar: 'src/assets/makanan/besar/oatmealPancake.png',
		gambarBahan: [
			"/src/assets/bahanMakanan/Porridge.png",
			"/src/assets/bahanMakanan/EasterEggs.png",
			"/src/assets/bahanMakanan/SugarSack.png",
			"/src/assets/bahanMakanan/BottleOfWater.png"
		],
		langkah: [
			"Campurkan oatmeal, pisang, telur, dan baking powder, lalu blender hingga halus.",
			"Panaskan wajan anti lengket dengan api sedang.",
			"Tuang adonan pancake, masak hingga dua sisinya matang merata.",
			"Angkat dan sajikan dengan sirup atau topping favoritmu."
		]
	},
	{
		id: 3,
		nama: 'Mashed Potato',
		durasi: '20 menit',
		porsi: '1 porsi (500 gram)',
		bahan: ["Kentang","Telur","Garam","Gula Pasir"],
		jumlahBahan: ["200 gram","1 butir","1/2 sdm","2 sdm"],
		bg: '/src/assets/makanan/kecil/mashedPotato.png',
		bgBesar: 'src/assets/makanan/besar/meshPotato.png',
		gambarBahan: [
			"/src/assets/bahanMakanan/Potato.png",
			"/src/assets/bahanMakanan/EasterEggs.png",
			"/src/assets/bahanMakanan/SpoonOfSugar.png",
			"/src/assets/bahanMakanan/SugarSack.png"
		],
		langkah: [
			"Kupas kentang lalu potong-potong. Rebus hingga empuk sekitar 15-20 menit. Angkat dan tiriskan. Langsung haluskan kentang dengan potato masher atau ulekan",
			"Dalam panci, hangatkan susu cair dan mentega. Angkat lalu tuang ke wadah kentang.",
			"Bumbui dengan garam dan merica. Aduk rata sambil tekan-tekan dengan saringan halus dari besi agar hasilnya lembut dan creamy.",
			"Siap disajikan dengan taburan lada hitam."
		]
	},
	{
		id: 4,
		nama: 'Chicken Salad',
		durasi: '30 menit',
		porsi: '1 porsi (450 gram)',
		bahan: ["Ayam","Tomat","Selada","Mentimun"],
		jumlahBahan: ["200 gram","1 butir","1/2 sdm","2 sdm"],
		bg: 'src/assets/makanan/kecil/chickenSalad.png',
		bgBesar: 'src/assets/makanan/besar/brokoliAyamLadaHitam.png',
		gambarBahan: [
			"/src/assets/bahanMakanan/Chicken.png",
			"/src/assets/bahanMakanan/Tomato.png",
			"/src/assets/bahanMakanan/Lettuce.png",
			"/src/assets/bahanMakanan/Cucumber.png"
		],
		langkah: [
			"Tumis dada ayam tanpa minyak hingga berubah warna",
			"Tuang saus lada hitam, tuang air secukupnya. Masak hingga matang",
			"Masukan cabai dan brokoli. Masak sebentar, masukan bawang bombay",
			"Masak hingga kuah mengental"
		]
	},
	{
		id: 5,
		nama: 'Brokoli Ayam Lada Hitam',
		durasi: '20 menit',
		porsi: '1 porsi (450 gram)',
		bahan: ["Ayam","Bombai","Brokoli","Cabai"],
		jumlahBahan: ["70 gram","1/2 buah","1 buah","secukupnya"],
		bg: "/src/assets/makanan/kecil/ayamBrokoli.png",
		bgBesar: 'src/assets/makanan/besar/brokoliAyamLadaHitam.png',
		gambarBahan: [
			"/src/assets/bahanMakanan/Chicken.png",
			"src/assets/bahanMakanan/Onion.png",
			"src/assets/bahanMakanan/Broccoli.png",
			"src/assets/bahanMakanan/ChiliPepper.png"
		],
		langkah: [
			"Tumis dada ayam tanpa minyak hingga berubah warna",
			"Tuang saus lada hitam, tuang air secukupnya. Masak hingga matang",
			"Masukan cabai dan brokoli. Masak sebentar, masukan bawang bombay",
			"Masak hingga kuah mengental"
		]
	},
	{
		id: 6,
		nama: 'Tumis Bayam',
		durasi: '10 menit',
		porsi: '1 porsi (4 pcs)',
		bahan: ["Bayam","Bawang Putih","Bawang Merah","Cabai Rawit"],
		jumlahBahan: ["1 ikat","3 siung","4 siung","1 buah"],
		bg: "src/assets/makanan/kecil/tumisBayam.png",
		bgBesar: 'src/assets/makanan/besar/brokoliAyamLadaHitam.png',
		gambarBahan: [
			"src/assets/bahanMakanan/Spinach.png",
			"src/assets/bahanMakanan/Onion.png",
			"src/assets/bahanMakanan/redOnion.png",
			"src/assets/bahanMakanan/ChiliPepper.png"
		],
		langkah: [
			"Tumis dada ayam tanpa minyak hingga berubah warna",
			"Tuang saus lada hitam, tuang air secukupnya. Masak hingga matang",
			"Masukan cabai dan brokoli. Masak sebentar, masukan bawang bombay",
			"Masak hingga kuah mengental"
		]
	},
	{
		id: 7,
		nama: 'Sereal Buah',
		durasi: '10 menit',
		porsi: '1 porsi (250 gram)',
		bahan: ["Yogurt","Kiwi","Stroberi","Rasberry"],
		jumlahBahan: ["180 ml","1 buah","1 buah","1/2 cangkir"],
		bg: "src/assets/makanan/kecil/serealBuah.png",
		bgBesar: 'src/assets/makanan/besar/brokoliAyamLadaHitam.png',
		gambarBahan: [
			"src/assets/bahanMakanan/Yogurt.png",
			"src/assets/bahanMakanan/Kiwi.png",
			"src/assets/bahanMakanan/Strawberry.png",
			"src/assets/bahanMakanan/Raspberry.png"
		],
		langkah: [
			"Tumis dada ayam tanpa minyak hingga berubah warna",
			"Tuang saus lada hitam, tuang air secukupnya. Masak hingga matang",
			"Masukan cabai dan brokoli. Masak sebentar, masukan bawang bombay",
			"Masak hingga kuah mengental"
		]
	},
	{
		id: 8,
		nama: 'Roti Gandum',
		durasi: '10 menit',
		porsi: '1 porsi (250 gram)',
		bahan: ["Roti","Telur","Alpukat","Madu"],
		jumlahBahan: ["2 buah","1 butir","1 buah","1/2 cangkir"],
		bg: "src/assets/makanan/kecil/rotiGandum.png",
		bgBesar: 'src/assets/makanan/besar/brokoliAyamLadaHitam.png',
		gambarBahan: [
			"src/assets/bahanMakanan/Toast.png",
			"src/assets/bahanMakanan/EasterEggs.png",
			"src/assets/bahanMakanan/Avocado.png",
			"src/assets/bahanMakanan/Honey.png"
		],
		langkah: [
			"Tumis dada ayam tanpa minyak hingga berubah warna",
			"Tuang saus lada hitam, tuang air secukupnya. Masak hingga matang",
			"Masukan cabai dan brokoli. Masak sebentar, masukan bawang bombay",
			"Masak hingga kuah mengental"
		]
	},
]

export const olahraga = [
	{
		nama: 'Pemanasan Pagi',
		deskripsi: 'Bangun dengan energi, agar tubuh anda siap untuk hari ini',
		durasi: '4-5 Menit',
		jumlahLatihan: '9 Latihan',
		gambar: 'src/assets/OR1.png',
		instruksi: [
			{
				id: 1,
				nama: 'Plank',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/plank.png'
			},
			{
				id: 2,
				nama: 'Kuadrisep Kiri',
				durasi: '00:30',
				gambar: 'src/assets/KSK.png'
			},
			{
				id: 3,
				nama: 'Kuadrisep Kanan',
				durasi: '00:30',
				gambar: 'src/assets/KS.png'
			},
			{
				id: 4,
				nama: 'Bird Dog',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/birdDog.png'
			},
			{
				id: 5,
				nama: 'Sikap Anak',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/sikapAnak.png'
			},
			{
				id: 6,
				nama: 'Push Up Kaki Ditekuk',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/pushUpKakiTekuk.png'
			},
			{
				id: 7,
				nama: 'Crunch Sepeda',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/crunchSepeda.png'
			},
			{
				id: 8,
				nama: 'Peregangan Kobra',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/pereganganKobra.png'
			},
			{
				id: 9,
				nama: 'Papan Angkat Kaki',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/papanAngkatKaki.png'
			},
		]
	},

	{
		nama: 'Peregangan Sebelum Tidur',
		deskripsi: 'Tenangkan diri anda dan dapatkan tidur berkualitas',
		durasi: '4-5 Menit',
		jumlahLatihan: '9 Latihan',
		gambar: 'src/assets/OR2.png',
		instruksi: [
			{
				id: 1,
				nama: 'Plank',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/plank.png'
			},
			{
				id: 2,
				nama: 'Tendangan Beralun Terlungkup',
				durasi: '00:20',
				gambar: 'src/assets/olahraga/peragangan/tendanganTerlungkup.png'
			},
			{
				id: 3,
				nama: 'Sisi Lingkaran Kiri',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/peragangan/sisiLingkaranKiri.png'
			},
			{
				id: 4,
				nama: 'Sisi Lingkaran Kiri',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/peragangan/sisiLingkaranKanan.png'
			},
			{
				id: 5,
				nama: 'Sikap Anak',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/sikapAnak.png'
			},
			{
				id: 6,
				nama: 'Peragangan Kupu-Kupu Berbaring',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/peragangan/pereganganKupu.png'
			},
			{
				id: 7,
				nama: 'Bird Dog',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/birdDog.png'
			},
			{
				id: 8,
				nama: 'Peregangan Kobra',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/pereganganKobra.png'
			},
			{
				id: 9,
				nama: 'Superman',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/peragangan/superman.png'
			},
		]
	},

	{
		nama: 'HIIT Pembakar Lemak',
		deskripsi: 'Latihan dengan intensitas tinggi dengan efek pembakaran lanjut',
		durasi: '6-7 Menit',
		jumlahLatihan: '12 Latihan',
		gambar: 'src/assets/OR3.png',
		instruksi: [
			{
				id: 1,
				nama: 'Kuadrisep Kiri',
				durasi: '00:30',
				gambar: 'src/assets/KSK.png'
			},
			{
				id: 2,
				nama: 'Kuadrisep kanan',
				durasi: '00:30',
				gambar: 'src/assets/KS.png'
			},
			{
				id: 3,
				nama: 'Tendangan Bokong',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/tendanganBokong.png'
			},
			{
				id: 4,
				nama: 'Putar Pinggul Satu Kaki',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/putarPinggulSatuKaki.png'
			},
			{
				id: 5,
				nama: 'Jongkok Raih Atas',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/jongkokRaihAtas.png'
			},
			{
				id: 6,
				nama: 'Peregangan Betis Kanan',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/pereganganBetisKanan.png'
			},
			{
				id: 7,
				nama: 'Peregangan Betis Kiri',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/pereganganBetisKiri.png'
			},
			{
				id: 8,
				nama: 'Loncat Samping',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/loncatSamping.png'
			},
			{
				id: 9,
				nama: 'Peregangan Kobra',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/pereganganKobra.png'
			},
			{
				id: 10,
				nama: 'Sikap Anak',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/sikapAnak.png'
			},
			{
				id: 11,
				nama: 'Crunch Sepeda',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/olahragaPagi/crunchSepeda.png'
			},
			{
				id: 12,
				nama: 'Crunch Silang Lengan',
				durasi: '00:30',
				gambar: 'src/assets/olahraga/Hiit/crunchSilangLengan.png'
			},
		]
	}
]
