let students = [
  {
      id: 1,
      name: "Arda",
      lastname: "Toraman",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Aysu",
      lastname: "Aşçı",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Berat",
      lastname: "Dimen",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Berk",
      lastname: "Uçar",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Doğa",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Doğukan",
      lastname: "Sarı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Ece",
      lastname: "Ceylan",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Emre",
      lastname: "Özçalkap",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Fatih Can",
      lastname: "Kaya",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Furkan",
      lastname: "Coşar",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Gökhan",
      lastname: "Ünlü",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 12,
      name: "Halil İbrahim",
      lastname: "Korkmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 13,
      name: "Kemal",
      lastname: "Özalp",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 14,
      name: "Kerem",
      lastname: "Kaçmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 15,
      name: "Melek",
      lastname: "Dal",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 16,
      name: "Muhammed Baki",
      lastname: "Çağlayan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 17,
      name: "Muhammed",
      lastname: "Yazıcı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 18,
      name: "Muhammet Hasan",
      lastname: "Türkmen",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 19,
      name: "Ömer",
      lastname: "Fırat",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 20,
      name: "Sema",
      lastname: "Bekdemir",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 21,
      name: "Sıla",
      lastname: "Kara",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 22,
      name: "Sudenur",
      lastname: "Taştekin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 23,
      name: "Tunahan",
      lastname: "Orak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];

let kadinListe = document.querySelector('#kadinListe');
let erkekListe = document.querySelector('#erkekListe');
let kadinOgrenciSayisi = 0;
let erkekOgrenciSayisi = 0;
let kadinOgrenciSayisiText = document.querySelector('#kadinOgrenciSayisiText');
let erkekOgrenciSayisiText = document.querySelector('#erkekOgrenciSayisiText');

for(let i=0; i<students.length; i++) {
    ogrenciler.innerHTML += '<li>' + 'İsim: ' + students[i].name + '<br>' + 'Soyisim: ' + students[i].lastname + '<br>' + 'Cinsiyet: ' + students[i].gender + '<br>' + 'Kurs: ' + students[i].section + '<br>' + 'Rol: ' + students[i].role;
}

for (let i=0; i<students.length; i++) {
    if(students[i].gender === 'Kadın') {
        kadinOgrenciSayisi++;
        kadinListe.innerHTML += '<li>' + 'İsim: ' + students[i].name + '<br>' + 'Soyisim: ' + students[i].lastname + '<br>' + 'Cinsiyet: ' + students[i].gender + '<br>' + 'Kurs: ' + students[i].section + '<br>' + 'Rol: ' + students[i].role;
        }

    if(students[i].gender === 'Erkek') {
        erkekOgrenciSayisi++;
        erkekListe.innerHTML += '<li>' + 'İsim: ' + students[i].name + '<br>' + 'Soyisim: ' + students[i].lastname + '<br>' + 'Cinsiyet: ' + students[i].gender + '<br>' + 'Kurs: ' + students[i].section + '<br>' + 'Rol: ' + students[i].role;
    }
}

kadinOgrenciSayisiText.innerHTML = '<strong>' + 'Kadın Öğrenci Sayısı: ' + '</strong>' + kadinOgrenciSayisi;
erkekOgrenciSayisiText.innerHTML = '<strong>' + 'Erkek Öğrenci Sayısı: ' + '</strong>' + erkekOgrenciSayisi;



