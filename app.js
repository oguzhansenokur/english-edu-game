// ==================== VERİ SETİ ====================
const DATA = {
  jobs: {
    name: "Jobs & Occupations",
    icon: "👔",
    description: "Meslekler ve İş Hayatı",
    trToEn: [
      { tr: "Ben bir öğretmenim.", en: "I am a teacher.", level: "A1" },
      { tr: "O bir doktordur.", en: "He is a doctor.", level: "A1" },
      { tr: "Annem hemşiredir.", en: "My mother is a nurse.", level: "A1" },
      { tr: "Ben bir öğrenciyim.", en: "I am a student.", level: "A1" },
      { tr: "O bir garson.", en: "He is a waiter.", level: "A1" },
      { tr: "Babam şoför.", en: "My father is a driver.", level: "A1" },
      { tr: "Annem öğretmen.", en: "My mother is a teacher.", level: "A1" },
      { tr: "Kardeşim polis.", en: "My brother is a police officer.", level: "A1" },
      { tr: "O bir çiftçi.", en: "She is a farmer.", level: "A1" },
      { tr: "Ben bir satıcıyım.", en: "I am a salesperson.", level: "A1" },
      { tr: "Arkadaşım şarkıcı.", en: "My friend is a singer.", level: "A1" },
      { tr: "O bir tamirci.", en: "He is a mechanic.", level: "A1" },
      { tr: "Ben bir ressamım.", en: "I am a painter.", level: "A1" },
      { tr: "Babam berber.", en: "My father is a barber.", level: "A1" },
      { tr: "Ablam kasiyerdir.", en: "My sister is a cashier.", level: "A1" },
      { tr: "O bir postacı.", en: "He is a postman.", level: "A1" },
      { tr: "Ben bir fırıncıyım.", en: "I am a baker.", level: "A1" },
      { tr: "Annem temizlikçi.", en: "My mother is a cleaner.", level: "A1" },
      { tr: "O bir kasap.", en: "She is a butcher.", level: "A1" },
      { tr: "Kardeşim kuaför.", en: "My sibling is a hairdresser.", level: "A1" },
      { tr: "Ben bir aşçıyım.", en: "I am a cook.", level: "A1" },
      { tr: "O bir hemşire.", en: "He is a nurse.", level: "A1" },
      { tr: "Babam doktor.", en: "My father is a doctor.", level: "A1" },
      { tr: "Ben bir müzisyenim.", en: "I am a musician.", level: "A1" },
      { tr: "O bir dansçı.", en: "She is a dancer.", level: "A1" },
      { tr: "Arkadaşım aktör.", en: "My friend is an actor.", level: "A1" },
      { tr: "Ablam yazar.", en: "My sister is a writer.", level: "A1" },
      { tr: "O bir fotoğrafçı.", en: "He is a photographer.", level: "A1" },
      { tr: "Ben bir askerim.", en: "I am a soldier.", level: "A1" },
      { tr: "Kardeşim itfaiyeci.", en: "My sibling is a firefighter.", level: "A1" },
      { tr: "O bir bahçıvan.", en: "She is a gardener.", level: "A1" },
      { tr: "Ben bir inşaatçıyım.", en: "I am a builder.", level: "A1" },
      { tr: "Babam elektrikçi.", en: "My father is an electrician.", level: "A1" },
      { tr: "Annem kütüphaneci.", en: "My mother is a librarian.", level: "A1" },
      { tr: "O bir rehber.", en: "He is a guide.", level: "A1" },
      { tr: "Ben bir veterinerim.", en: "I am a vet.", level: "A1" },
      { tr: "O bir diş hekimi.", en: "She is a dentist.", level: "A1" },
      { tr: "Kardeşim model.", en: "My sibling is a model.", level: "A1" },
      { tr: "Ben bir güvenlik görevlisiyim.", en: "I am a security guard.", level: "A1" },
      { tr: "O bir tesisatçı.", en: "He is a plumber.", level: "A1" },
      { tr: "Arkadaşım marangoz.", en: "My friend is a carpenter.", level: "A1" },
      { tr: "Ben bir resepsiyonistim.", en: "I am a receptionist.", level: "A1" },
      { tr: "O bir taksi şoförü.", en: "She is a taxi driver.", level: "A1" },
      { tr: "Babam otobüs şoförü.", en: "My father is a bus driver.", level: "A1" },
      { tr: "Ben bir tezgahtarım.", en: "I am a shop assistant.", level: "A1" },
      { tr: "O bir ofis çalışanı.", en: "He is an office worker.", level: "A1" },
      { tr: "Annem fabrika işçisi.", en: "My mother is a factory worker.", level: "A1" },
      { tr: "Ben bir boyacıyım.", en: "I am a painter.", level: "A1" },
      { tr: "O bir garson.", en: "She is a waitress.", level: "A1" },
      { tr: "Kardeşim şef aşçı.", en: "My sibling is a chef.", level: "A1" },
      { tr: "Ben bir işçiyim.", en: "I am a worker.", level: "A1" },
      { tr: "O bir sanatçı.", en: "He is an artist.", level: "A1" },
      { tr: "Arkadaşım aktris.", en: "My friend is an actress.", level: "A1" },
      { tr: "Ben bir denizciyim.", en: "I am a sailor.", level: "A1" },
      { tr: "O bir gazeteci.", en: "She is a journalist.", level: "A1" },
      { tr: "Babam çalışıyor.", en: "My father works.", level: "A1" },
      { tr: "Ben bir doktorum.", en: "I am a doctor.", level: "A1" },
      { tr: "O bir öğretmen.", en: "He is a teacher.", level: "A1" },
      { tr: "Annem bir hemşire.", en: "My mother is a nurse.", level: "A1" },
      { tr: "Ben çalışıyorum.", en: "I work.", level: "A1" },
      { tr: "O bir öğrenci.", en: "She is a student.", level: "A1" },
      { tr: "Kardeşim çiftçi.", en: "My sibling is a farmer.", level: "A1" },
      { tr: "Ben bir satıcıyım.", en: "I am a seller.", level: "A1" },
      { tr: "O bir polis.", en: "He is a police officer.", level: "A1" },
      { tr: "Arkadaşım tamirci.", en: "My friend is a mechanic.", level: "A1" },
      { tr: "Ben bir postacıyım.", en: "I am a postman.", level: "A1" },
      { tr: "O bir fırıncı.", en: "She is a baker.", level: "A1" },
      { tr: "Babam kasap.", en: "My father is a butcher.", level: "A1" },
      { tr: "Ben bir kuaförüm.", en: "I am a hairdresser.", level: "A1" },
      { tr: "O bir berber.", en: "He is a barber.", level: "A1" },
      { tr: "Annem kasiyer.", en: "My mother is a cashier.", level: "A1" },
      { tr: "Ben bir aşçıyım.", en: "I am a chef.", level: "A1" },
      { tr: "O bir temizlikçi.", en: "She is a cleaner.", level: "A1" },
      { tr: "Kardeşim şarkıcı.", en: "My sibling is a singer.", level: "A1" },
      { tr: "Ben bir müzisyenim.", en: "I am a musician.", level: "A1" },
      { tr: "O bir dansçı.", en: "He is a dancer.", level: "A1" },
      { tr: "Arkadaşım aktör.", en: "My friend is an actor.", level: "A1" },
      { tr: "Ben bir yazarım.", en: "I am a writer.", level: "A1" },
      { tr: "O bir fotoğrafçı.", en: "She is a photographer.", level: "A1" },
      { tr: "Babam asker.", en: "My father is a soldier.", level: "A1" },
      { tr: "Ben bir itfaiyeciyim.", en: "I am a firefighter.", level: "A1" },
      { tr: "O bir bahçıvan.", en: "He is a gardener.", level: "A1" },
      { tr: "Annem inşaatçı.", en: "My mother is a builder.", level: "A1" },
      { tr: "Ben bir elektrikçiyim.", en: "I am an electrician.", level: "A1" },
      { tr: "O bir kütüphaneci.", en: "She is a librarian.", level: "A1" },
      { tr: "Kardeşim rehber.", en: "My sibling is a guide.", level: "A1" },
      { tr: "Ben bir veterinerim.", en: "I am a veterinarian.", level: "A1" },
      { tr: "O bir diş hekimi.", en: "He is a dentist.", level: "A1" },
      { tr: "Arkadaşım model.", en: "My friend is a model.", level: "A1" },
      { tr: "Ben bir güvenlik görevlisiyim.", en: "I am a security guard.", level: "A1" },
      { tr: "O bir tesisatçı.", en: "She is a plumber.", level: "A1" },
      { tr: "Babam marangoz.", en: "My father is a carpenter.", level: "A1" },
      { tr: "Ben bir resepsiyonistim.", en: "I am a receptionist.", level: "A1" },
      { tr: "O bir taksi şoförü.", en: "He is a taxi driver.", level: "A1" },
      { tr: "Annem otobüs şoförü.", en: "My mother is a bus driver.", level: "A1" },
      { tr: "Ben bir tezgahtarım.", en: "I am a shop assistant.", level: "A1" },
      { tr: "O bir ofis çalışanı.", en: "She is an office worker.", level: "A1" },
      { tr: "Kardeşim fabrika işçisi.", en: "My sibling is a factory worker.", level: "A1" },
      { tr: "Ben bir boyacıyım.", en: "I am a house painter.", level: "A1" },
      { tr: "Babam mühendistir.", en: "My father is an engineer.", level: "A2" },
      { tr: "Kardeşim polis memuru.", en: "My brother is a police officer.", level: "A2" },
      { tr: "O bir aşçı olarak çalışıyor.", en: "She works as a chef.", level: "A2" },
      { tr: "Ben bir şirkette muhasebeciyim.", en: "I am an accountant at a company.", level: "B1" },
      { tr: "O itfaiyeci olmak istiyor.", en: "He wants to be a firefighter.", level: "A2" },
      { tr: "Ablam avukattır.", en: "My sister is a lawyer.", level: "B1" },
      { tr: "Arkadaşım gazeteci.", en: "My friend is a journalist.", level: "B1" },
      { tr: "O bir pilottur.", en: "She is a pilot.", level: "A2" },
      { tr: "Amcam çiftçidir.", en: "My uncle is a farmer.", level: "A1" },
      { tr: "Ben bir tasarımcıyım.", en: "I am a designer.", level: "B1" },
      { tr: "O bankada çalışıyor.", en: "He works at a bank.", level: "A2" },
      { tr: "Kuzenım programcıdır.", en: "My cousin is a programmer.", level: "B2" },
      { tr: "Ben öğrenci değilim, öğretmenim.", en: "I'm not a student, I'm a teacher.", level: "A1" },
      { tr: "O hastanede doktor olarak çalışıyor.", en: "He works as a doctor at a hospital.", level: "A2" },
      { tr: "Babam emekli bir asker.", en: "My father is a retired soldier.", level: "A2" },
      { tr: "Kız kardeşim ressam olmak istiyor.", en: "My sister wants to be an artist.", level: "A2" },
      { tr: "Ben bir garsonum.", en: "I am a waiter.", level: "A1" },
      { tr: "O otelde resepsiyonist.", en: "She is a receptionist at a hotel.", level: "A2" },
      { tr: "Arkadaşım şarkıcı.", en: "My friend is a singer.", level: "A1" },
      { tr: "O bir müzisyendir.", en: "He is a musician.", level: "A2" },
      { tr: "Ben sekreter olarak çalışıyorum.", en: "I work as a secretary.", level: "A2" },
      { tr: "O bir diş hekimidir.", en: "She is a dentist.", level: "A2" },
      { tr: "Babam şoför.", en: "My father is a driver.", level: "A1" },
      { tr: "Ben bir satıcıyım.", en: "I am a salesperson.", level: "A1" },
      { tr: "O eczacıdır.", en: "He is a pharmacist.", level: "A2" },
      { tr: "Annem berberdir.", en: "My mother is a barber.", level: "A1" },
      { tr: "Ben bir rehberim.", en: "I am a guide.", level: "A2" }
    ],
    enToTr: [
      { en: "I am a teacher.", tr: "Ben öğretmenim.", level: "A1" },
      { en: "He is a doctor.", tr: "O doktordur.", level: "A1" },
      { en: "She is a nurse.", tr: "O hemşiredir.", level: "A1" },
      { en: "I am a student.", tr: "Ben öğrenciyim.", level: "A1" },
      { en: "He is a waiter.", tr: "O bir garsondur.", level: "A1" },
      { en: "My father is a driver.", tr: "Babam şoför.", level: "A1" },
      { en: "She is a singer.", tr: "O şarkıcı.", level: "A1" },
      { en: "I am a farmer.", tr: "Ben çiftçiyim.", level: "A1" },
      { en: "He is a mechanic.", tr: "O tamirci.", level: "A1" },
      { en: "My mother is a cleaner.", tr: "Annem temizlikçi.", level: "A1" },
      { en: "She is a cashier.", tr: "O kasiyer.", level: "A1" },
      { en: "I am a baker.", tr: "Ben fırıncıyım.", level: "A1" },
      { en: "He is a postman.", tr: "O postacı.", level: "A1" },
      { en: "My brother is a mechanic.", tr: "Erkek kardeşim tamirci.", level: "A1" },
      { en: "She is a hairdresser.", tr: "O kuaför.", level: "A1" },
      { en: "My aunt is a hairdresser.", tr: "Teyzem kuaför.", level: "A1" },
      { en: "I am a cook.", tr: "Ben aşçıyım.", level: "A1" },
      { en: "He is a butcher.", tr: "O kasap.", level: "A1" },
      { en: "She is a painter.", tr: "O ressam.", level: "A1" },
      { en: "My father is a barber.", tr: "Babam berber.", level: "A1" },
      { en: "I am a salesperson.", tr: "Ben satıcıyım.", level: "A1" },
      { en: "He is a musician.", tr: "O müzisyen.", level: "A1" },
      { en: "She is a dancer.", tr: "O dansçı.", level: "A1" },
      { en: "My sister is a teacher.", tr: "Kız kardeşim öğretmen.", level: "A1" },
      { en: "I am a taxi driver.", tr: "Ben taksi şoförüyüm.", level: "A1" },
      { en: "He is an actor.", tr: "O aktör.", level: "A1" },
      { en: "She is a writer.", tr: "O yazar.", level: "A1" },
      { en: "I am a photographer.", tr: "Ben fotoğrafçıyım.", level: "A1" },
      { en: "He is a soldier.", tr: "O asker.", level: "A1" },
      { en: "She is a firefighter.", tr: "O itfaiyeci.", level: "A1" },
      { en: "I am a gardener.", tr: "Ben bahçıvanım.", level: "A1" },
      { en: "He is a builder.", tr: "O inşaatçı.", level: "A1" },
      { en: "She is an electrician.", tr: "O elektrikçi.", level: "A1" },
      { en: "I am a librarian.", tr: "Ben kütüphaneciyim.", level: "A1" },
      { en: "He is a guide.", tr: "O rehber.", level: "A1" },
      { en: "She is a vet.", tr: "O veteriner.", level: "A1" },
      { en: "I am a dentist.", tr: "Ben diş hekimiyim.", level: "A1" },
      { en: "He is a model.", tr: "O model.", level: "A1" },
      { en: "She is a security guard.", tr: "O güvenlik görevlisi.", level: "A1" },
      { en: "I am a plumber.", tr: "Ben tesisatçıyım.", level: "A1" },
      { en: "He is a carpenter.", tr: "O marangoz.", level: "A1" },
      { en: "She is a receptionist.", tr: "O resepsiyonist.", level: "A1" },
      { en: "I am a bus driver.", tr: "Ben otobüs şoförüyüm.", level: "A1" },
      { en: "He is a shop assistant.", tr: "O tezgahtar.", level: "A1" },
      { en: "She is an office worker.", tr: "O ofis çalışanı.", level: "A1" },
      { en: "I am a factory worker.", tr: "Ben fabrika işçisiyim.", level: "A1" },
      { en: "He is a chef.", tr: "O şef aşçı.", level: "A1" },
      { en: "She is an artist.", tr: "O sanatçı.", level: "A1" },
      { en: "I am an actress.", tr: "Ben aktrisim.", level: "A1" },
      { en: "He is a sailor.", tr: "O denizci.", level: "A1" },
      { en: "She is a journalist.", tr: "O gazeteci.", level: "A1" },
      { en: "My father works.", tr: "Babam çalışıyor.", level: "A1" },
      { en: "I work.", tr: "Ben çalışıyorum.", level: "A1" },
      { en: "He works.", tr: "O çalışıyor.", level: "A1" },
      { en: "She works.", tr: "O çalışıyor.", level: "A1" },
      { en: "They work.", tr: "Onlar çalışıyorlar.", level: "A1" },
      { en: "We work.", tr: "Biz çalışıyoruz.", level: "A1" },
      { en: "I am a doctor.", tr: "Ben doktorum.", level: "A1" },
      { en: "She is a nurse.", tr: "O hemşire.", level: "A1" },
      { en: "He is a teacher.", tr: "O öğretmen.", level: "A1" },
      { en: "I am a police officer.", tr: "Ben polisim.", level: "A1" },
      { en: "She is a farmer.", tr: "O çiftçi.", level: "A1" },
      { en: "He is a waiter.", tr: "O garson.", level: "A1" },
      { en: "I am a worker.", tr: "Ben işçiyim.", level: "A1" },
      { en: "She is a waitress.", tr: "O garson.", level: "A1" },
      { en: "He is a painter.", tr: "O boyacı.", level: "A1" },
      { en: "I am a seller.", tr: "Ben satıcıyım.", level: "A1" },
      { en: "She is a cleaner.", tr: "O temizlikçi.", level: "A1" },
      { en: "He is a cook.", tr: "O aşçı.", level: "A1" },
      { en: "I am a barber.", tr: "Ben berberim.", level: "A1" },
      { en: "She is a cashier.", tr: "O kasiyer.", level: "A1" },
      { en: "He is a postman.", tr: "O postacı.", level: "A1" },
      { en: "I am a baker.", tr: "Ben fırıncıyım.", level: "A1" },
      { en: "She is a butcher.", tr: "O kasap.", level: "A1" },
      { en: "He is a hairdresser.", tr: "O kuaför.", level: "A1" },
      { en: "I am a singer.", tr: "Ben şarkıcıyım.", level: "A1" },
      { en: "She is a musician.", tr: "O müzisyen.", level: "A1" },
      { en: "He is a dancer.", tr: "O dansçı.", level: "A1" },
      { en: "I am an actor.", tr: "Ben aktörüm.", level: "A1" },
      { en: "She is a writer.", tr: "O yazar.", level: "A1" },
      { en: "He is a photographer.", tr: "O fotoğrafçı.", level: "A1" },
      { en: "I am a soldier.", tr: "Ben askerim.", level: "A1" },
      { en: "She is a firefighter.", tr: "O itfaiyeci.", level: "A1" },
      { en: "He is a gardener.", tr: "O bahçıvan.", level: "A1" },
      { en: "I am a builder.", tr: "Ben inşaatçıyım.", level: "A1" },
      { en: "She is an electrician.", tr: "O elektrikçi.", level: "A1" },
      { en: "He is a librarian.", tr: "O kütüphaneci.", level: "A1" },
      { en: "I am a guide.", tr: "Ben rehberim.", level: "A1" },
      { en: "She is a vet.", tr: "O veteriner.", level: "A1" },
      { en: "He is a dentist.", tr: "O diş hekimi.", level: "A1" },
      { en: "I am a model.", tr: "Ben modelim.", level: "A1" },
      { en: "She is a security guard.", tr: "O güvenlik görevlisi.", level: "A1" },
      { en: "He is a plumber.", tr: "O tesisatçı.", level: "A1" },
      { en: "I am a carpenter.", tr: "Ben marangozum.", level: "A1" },
      { en: "She is a receptionist.", tr: "O resepsiyonist.", level: "A1" },
      { en: "He is a taxi driver.", tr: "O taksi şoförü.", level: "A1" },
      { en: "I am a bus driver.", tr: "Ben otobüs şoförüyüm.", level: "A1" },
      { en: "She is a shop assistant.", tr: "O tezgahtar.", level: "A1" },
      { en: "He is an office worker.", tr: "O ofis çalışanı.", level: "A1" },
      { en: "She is a dentist.", tr: "O bir diş hekimidir.", level: "A2" },
      { en: "I want to be an architect.", tr: "Ben mimar olmak istiyorum.", level: "B1" },
      { en: "He is a waiter.", tr: "O bir garsondur.", level: "A1" },
      { en: "My sister is a scientist.", tr: "Kız kardeşim bilim insanıdır.", level: "B2" },
      { en: "They are construction workers.", tr: "Onlar inşaat işçileridir.", level: "A2" },
      { en: "She works as a translator.", tr: "O tercüman olarak çalışıyor.", level: "B2" },
      { en: "I am a sales manager.", tr: "Ben satış müdürüyüm.", level: "B1" },
      { en: "He is a taxi driver.", tr: "O taksi şoförüdür.", level: "A1" },
      { en: "My aunt is a hairdresser.", tr: "Teyzem kuaför.", level: "A1" },
      { en: "She is a photographer.", tr: "O bir fotoğrafçıdır.", level: "A2" },
      { en: "He works as a security guard.", tr: "O güvenlik görevlisi olarak çalışıyor.", level: "A2" },
      { en: "I am studying to be a vet.", tr: "Ben veteriner olmak için okuyorum.", level: "B1" },
      { en: "She is a flight attendant.", tr: "O hostes.", level: "A2" },
      { en: "My brother is a mechanic.", tr: "Erkek kardeşim tamirci.", level: "A1" },
      { en: "He is an electrician.", tr: "O elektrikçidir.", level: "A2" },
      { en: "I work as a librarian.", tr: "Ben kütüphaneci olarak çalışıyorum.", level: "A2" },
      { en: "She is a social worker.", tr: "O sosyal hizmet uzmanı.", level: "B1" },
      { en: "He is a butcher.", tr: "O kasap.", level: "A1" },
      { en: "My mother is a cleaner.", tr: "Annem temizlik görevlisi.", level: "A1" },
      { en: "She works as a babysitter.", tr: "O bebek bakıcısı olarak çalışıyor.", level: "A2" },
      { en: "I am a plumber.", tr: "Ben tesisatçıyım.", level: "A2" },
      { en: "He is a postman.", tr: "O postacı.", level: "A1" },
      { en: "She is a cashier.", tr: "O kasiyer.", level: "A1" },
      { en: "My uncle is a carpenter.", tr: "Amcam marangoz.", level: "A2" },
      { en: "He is a baker.", tr: "O fırıncı.", level: "A1" },
      { en: "I want to be a psychologist.", tr: "Ben psikolog olmak istiyorum.", level: "B1" },
      { en: "She is a real estate agent.", tr: "O emlakçı.", level: "B1" },
      { en: "He works as a consultant.", tr: "O danışman olarak çalışıyor.", level: "B2" },
      { en: "I am an IT specialist.", tr: "Ben BT uzmanıyım.", level: "B2" },
      { en: "She is a makeup artist.", tr: "O makyöz.", level: "A2" }
    ],
    vocabulary: [
      { en: "teacher", tr: "öğretmen", level: "A1" },
      { en: "doctor", tr: "doktor", level: "A1" },
      { en: "nurse", tr: "hemşire", level: "A1" },
      { en: "student", tr: "öğrenci", level: "A1" },
      { en: "waiter", tr: "garson", level: "A1" },
      { en: "driver", tr: "şoför", level: "A1" },
      { en: "farmer", tr: "çiftçi", level: "A1" },
      { en: "singer", tr: "şarkıcı", level: "A1" },
      { en: "mechanic", tr: "tamirci", level: "A1" },
      { en: "painter", tr: "boyacı", level: "A1" },
      { en: "cleaner", tr: "temizlik görevlisi", level: "A1" },
      { en: "cashier", tr: "kasiyer", level: "A1" },
      { en: "barber", tr: "berber", level: "A1" },
      { en: "hairdresser", tr: "kuaför", level: "A1" },
      { en: "baker", tr: "fırıncı", level: "A1" },
      { en: "butcher", tr: "kasap", level: "A1" },
      { en: "postman", tr: "postacı", level: "A1" },
      { en: "cook", tr: "aşçı", level: "A1" },
      { en: "musician", tr: "müzisyen", level: "A1" },
      { en: "dancer", tr: "dansçı", level: "A1" },
      { en: "salesperson", tr: "satıcı", level: "A1" },
      { en: "worker", tr: "işçi", level: "A1" },
      { en: "police officer", tr: "polis", level: "A1" },
      { en: "firefighter", tr: "itfaiyeci", level: "A1" },
      { en: "taxi driver", tr: "taksi şoförü", level: "A1" },
      { en: "bus driver", tr: "otobüs şoförü", level: "A1" },
      { en: "shop assistant", tr: "tezgahtar", level: "A1" },
      { en: "office worker", tr: "ofis çalışanı", level: "A1" },
      { en: "factory worker", tr: "fabrika işçisi", level: "A1" },
      { en: "cleaner", tr: "temizlikçi", level: "A1" },
      { en: "gardener", tr: "bahçıvan", level: "A1" },
      { en: "security guard", tr: "güvenlik görevlisi", level: "A1" },
      { en: "receptionist", tr: "resepsiyonist", level: "A1" },
      { en: "waiter", tr: "garson", level: "A1" },
      { en: "waitress", tr: "bayan garson", level: "A1" },
      { en: "chef", tr: "şef aşçı", level: "A1" },
      { en: "builder", tr: "inşaatçı", level: "A1" },
      { en: "artist", tr: "sanatçı", level: "A1" },
      { en: "writer", tr: "yazar", level: "A1" },
      { en: "actor", tr: "aktör", level: "A1" },
      { en: "actress", tr: "aktris", level: "A1" },
      { en: "model", tr: "model", level: "A1" },
      { en: "photographer", tr: "fotoğrafçı", level: "A1" },
      { en: "soldier", tr: "asker", level: "A1" },
      { en: "sailor", tr: "denizci", level: "A1" },
      { en: "dentist", tr: "diş hekimi", level: "A1" },
      { en: "vet", tr: "veteriner", level: "A1" },
      { en: "librarian", tr: "kütüphaneci", level: "A1" },
      { en: "guide", tr: "rehber", level: "A1" },
      { en: "journalist", tr: "gazeteci", level: "A1" },
      { en: "engineer", tr: "mühendis", level: "A2" },
      { en: "police officer", tr: "polis", level: "A2" },
      { en: "firefighter", tr: "itfaiyeci", level: "A2" },
      { en: "chef", tr: "aşçı", level: "A2" },
      { en: "lawyer", tr: "avukat", level: "B1" },
      { en: "accountant", tr: "muhasebeci", level: "B1" },
      { en: "dentist", tr: "diş hekimi", level: "A2" },
      { en: "pilot", tr: "pilot", level: "A2" },
      { en: "driver", tr: "şoför", level: "A1" },
      { en: "waiter", tr: "garson", level: "A1" },
      { en: "farmer", tr: "çiftçi", level: "A1" },
      { en: "architect", tr: "mimar", level: "B1" },
      { en: "artist", tr: "sanatçı", level: "A2" },
      { en: "musician", tr: "müzisyen", level: "A2" },
      { en: "journalist", tr: "gazeteci", level: "B1" },
      { en: "scientist", tr: "bilim insanı", level: "B2" },
      { en: "programmer", tr: "programcı", level: "B2" },
      { en: "secretary", tr: "sekreter", level: "A2" },
      { en: "receptionist", tr: "resepsiyonist", level: "A2" },
      { en: "singer", tr: "şarkıcı", level: "A1" },
      { en: "actor", tr: "aktör", level: "A2" },
      { en: "director", tr: "yönetmen", level: "B1" },
      { en: "manager", tr: "müdür", level: "A2" },
      { en: "salesperson", tr: "satıcı", level: "A1" },
      { en: "cashier", tr: "kasiyer", level: "A1" },
      { en: "barber", tr: "berber", level: "A1" },
      { en: "hairdresser", tr: "kuaför", level: "A1" },
      { en: "photographer", tr: "fotoğrafçı", level: "A2" },
      { en: "designer", tr: "tasarımcı", level: "B1" },
      { en: "translator", tr: "tercüman", level: "B2" },
      { en: "soldier", tr: "asker", level: "A2" },
      { en: "pharmacist", tr: "eczacı", level: "A2" },
      { en: "veterinarian", tr: "veteriner", level: "B1" },
      { en: "mechanic", tr: "tamirci", level: "A1" },
      { en: "electrician", tr: "elektrikçi", level: "A2" },
      { en: "plumber", tr: "tesisatçı", level: "A2" },
      { en: "carpenter", tr: "marangoz", level: "A2" },
      { en: "painter", tr: "boyacı", level: "A1" },
      { en: "cleaner", tr: "temizlik görevlisi", level: "A1" },
      { en: "security guard", tr: "güvenlik görevlisi", level: "A2" },
      { en: "postman", tr: "postacı", level: "A1" },
      { en: "librarian", tr: "kütüphaneci", level: "A2" },
      { en: "guide", tr: "rehber", level: "A2" },
      { en: "flight attendant", tr: "hostes", level: "A2" },
      { en: "baker", tr: "fırıncı", level: "A1" },
      { en: "butcher", tr: "kasap", level: "A1" },
      { en: "psychologist", tr: "psikolog", level: "B1" }
    ],
    errorHunt: [
      { wrong: "I am teacher.", correct: "I am a teacher.", explanation: "Meslek isimleri önünde 'a/an' kullanılır.", level: "A1" },
      { wrong: "She is doctor.", correct: "She is a doctor.", explanation: "Tekil mesleklerde 'a/an' gereklidir.", level: "A1" },
      { wrong: "He work as engineer.", correct: "He works as an engineer.", explanation: "'He' ile 'works' kullanılır ve 'engineer' önünde 'an'.", level: "A2" },
      { wrong: "My father are a pilot.", correct: "My father is a pilot.", explanation: "Tekil özne için 'is' kullanılır.", level: "A1" },
      { wrong: "I want be a chef.", correct: "I want to be a chef.", explanation: "'Want' fiilinden sonra 'to' gerekir.", level: "A2" },
      { wrong: "She working as nurse.", correct: "She works as a nurse.", explanation: "Present Simple: 'works' ve 'a nurse'.", level: "A2" },
      { wrong: "They is police officers.", correct: "They are police officers.", explanation: "Çoğul özne için 'are' kullanılır.", level: "A1" },
      { wrong: "He is an waiter.", correct: "He is a waiter.", explanation: "'Waiter' sessiz harfle başlar, 'a' kullanılır.", level: "A1" }
    ],
    roleplay: [
      { 
        scenario: "Birine mesleğini söylüyorsun (öğretmensin).",
        options: [
          "I teacher.",
          "I am teacher.",
          "I am a teacher.",
          "I are a teacher."
        ],
        correct: 2,
        explanation: "Meslek: 'I am + a/an + meslek'",
        level: "A1"
      },
      { 
        scenario: "Arkadaşına babanın mesleğini anlatıyorsun (doktor).",
        options: [
          "My father is doctor.",
          "My father doctor.",
          "My father is a doctor.",
          "My father are a doctor."
        ],
        correct: 2,
        explanation: "Tekil özne + is + a/an + meslek",
        level: "A1"
      },
      { 
        scenario: "Gelecekte ne olmak istediğini söylüyorsun (mühendis).",
        options: [
          "I want be an engineer.",
          "I want to be engineer.",
          "I want to be an engineer.",
          "I wanting to be an engineer."
        ],
        correct: 2,
        explanation: "'Want to be' yapısı ve 'engineer' önünde 'an'",
        level: "A2"
      },
      { 
        scenario: "Kız kardeşinin mesleğini söylüyorsun (hemşire).",
        options: [
          "She is nurse.",
          "She nurse.",
          "She is a nurse.",
          "She are a nurse."
        ],
        correct: 2,
        explanation: "'She is + a/an + meslek' yapısı",
        level: "A1"
      },
      { 
        scenario: "Arkadaşların ne iş yaptığını söylüyorsun (programcı).",
        options: [
          "They is programmers.",
          "They are programmer.",
          "They are programmers.",
          "They programmer."
        ],
        correct: 2,
        explanation: "Çoğul: 'They are + meslek (çoğul)'",
        level: "B2"
      },
      { 
        scenario: "Nerede çalıştığını söylüyorsun (bankada).",
        options: [
          "I work in a bank.",
          "I work at bank.",
          "I working at a bank.",
          "I work on a bank."
        ],
        correct: 0,
        explanation: "İş yeri: 'work in/at + yer'",
        level: "A2"
      },
      { 
        scenario: "Amcanın mesleğini açıklıyorsun (çiftçi).",
        options: [
          "My uncle is farmer.",
          "My uncle farmer.",
          "My uncle is a farmer.",
          "My uncle are farmer."
        ],
        correct: 2,
        explanation: "Meslek tanıtımı: 'is + a/an + meslek'",
        level: "A1"
      },
      { 
        scenario: "Ne olarak çalıştığını söylüyorsun (tasarımcı).",
        options: [
          "I work as designer.",
          "I work as a designer.",
          "I working as a designer.",
          "I am work as a designer."
        ],
        correct: 1,
        explanation: "'Work as + a/an + meslek' yapısı",
        level: "B1"
      }
    ]
  },
  
  family_members: {
    name: "Family Members",
    icon: "👨‍👩‍👧‍👦",
    description: "Aile Bireyleri",
    trToEn: [
      { tr: "Bu benim ailem.", en: "This is my family.", level: "A1" },
      { tr: "Annem çok güzel.", en: "My mother is very beautiful.", level: "A1" },
      { tr: "Babam uzun boylu.", en: "My father is tall.", level: "A1" },
      { tr: "Bir erkek kardeşim var.", en: "I have a brother.", level: "A1" },
      { tr: "İki kız kardeşim var.", en: "I have two sisters.", level: "A1" },
      { tr: "Büyükannem çok nazik.", en: "My grandmother is very kind.", level: "A1" },
      { tr: "Büyükbabam yaşlı.", en: "My grandfather is old.", level: "A1" },
      { tr: "Annem evde.", en: "My mother is at home.", level: "A1" },
      { tr: "Babam işte.", en: "My father is at work.", level: "A1" },
      { tr: "Kardeşim küçük.", en: "My sibling is small.", level: "A1" },
      { tr: "Ablam büyük.", en: "My older sister is big.", level: "A1" },
      { tr: "Ailem mutlu.", en: "My family is happy.", level: "A1" },
      { tr: "Annem ve babam.", en: "My mother and father.", level: "A1" },
      { tr: "Kardeşlerim okula gider.", en: "My siblings go to school.", level: "A1" },
      { tr: "Büyükbabamı seviyorum.", en: "I love my grandfather.", level: "A1" },
      { tr: "Büyükannem iyi pişirir.", en: "My grandmother cooks well.", level: "A1" },
      { tr: "Babam arabası var.", en: "My father has a car.", level: "A1" },
      { tr: "Annem çalışıyor.", en: "My mother works.", level: "A1" },
      { tr: "Kardeşim küçük bir çocuk.", en: "My sibling is a small child.", level: "A1" },
      { tr: "Ailemle yaşıyorum.", en: "I live with my family.", level: "A1" },
      { tr: "Annemin adı Ayşe.", en: "My mother's name is Ayşe.", level: "A1" },
      { tr: "Babamın adı Mehmet.", en: "My father's name is Mehmet.", level: "A1" },
      { tr: "Bir kardeşim var.", en: "I have one sibling.", level: "A1" },
      { tr: "Üç kardeşiz.", en: "We are three siblings.", level: "A1" },
      { tr: "Kardeşim okula gidiyor.", en: "My sibling goes to school.", level: "A1" },
      { tr: "Annem ve babam evde.", en: "My mom and dad are at home.", level: "A1" },
      { tr: "Ailem çok mutlu.", en: "My family is very happy.", level: "A1" },
      { tr: "Babam araba kullanır.", en: "My father drives a car.", level: "A1" },
      { tr: "Annem yemek yapar.", en: "My mother cooks.", level: "A1" },
      { tr: "Kardeşim oyun oynar.", en: "My sibling plays games.", level: "A1" },
      { tr: "Büyükannem evde.", en: "My grandmother is at home.", level: "A1" },
      { tr: "Büyükbabam bahçede.", en: "My grandfather is in the garden.", level: "A1" },
      { tr: "Ablam öğretmen.", en: "My older sister is a teacher.", level: "A1" },
      { tr: "Ağabeyim doktor.", en: "My older brother is a doctor.", level: "A1" },
      { tr: "Annem güzel şarkı söyler.", en: "My mother sings beautifully.", level: "A1" },
      { tr: "Babam çok çalışkan.", en: "My father is very hardworking.", level: "A1" },
      { tr: "Kardeşlerim küçük.", en: "My siblings are small.", level: "A1" },
      { tr: "Ailem büyük.", en: "My family is big.", level: "A1" },
      { tr: "Ailem küçük.", en: "My family is small.", level: "A1" },
      { tr: "Annem nazik.", en: "My mother is kind.", level: "A1" },
      { tr: "Babam güçlü.", en: "My father is strong.", level: "A1" },
      { tr: "Büyükannem yaşlı.", en: "My grandmother is old.", level: "A1" },
      { tr: "Büyükbabam akıllı.", en: "My grandfather is smart.", level: "A1" },
      { tr: "Kardeşim eğlenceli.", en: "My sibling is funny.", level: "A1" },
      { tr: "Ailem sevgi dolu.", en: "My family is loving.", level: "A1" },
      { tr: "Annem sabırlı.", en: "My mother is patient.", level: "A1" },
      { tr: "Babam neşeli.", en: "My father is cheerful.", level: "A1" },
      { tr: "Kardeşim sessiz.", en: "My sibling is quiet.", level: "A1" },
      { tr: "Ablam akıllı.", en: "My older sister is intelligent.", level: "A1" },
      { tr: "Ağabeyim uzun.", en: "My older brother is tall.", level: "A1" },
      { tr: "Annem yorgun.", en: "My mother is tired.", level: "A1" },
      { tr: "Babam meşgul.", en: "My father is busy.", level: "A1" },
      { tr: "Kardeşim hasta.", en: "My sibling is sick.", level: "A1" },
      { tr: "Büyükannem sağlıklı.", en: "My grandmother is healthy.", level: "A1" },
      { tr: "Büyükbabam mutlu.", en: "My grandfather is happy.", level: "A1" },
      { tr: "Ailem birlikte.", en: "My family is together.", level: "A1" },
      { tr: "Annem uyuyor.", en: "My mother is sleeping.", level: "A1" },
      { tr: "Babam çalışıyor.", en: "My father is working.", level: "A1" },
      { tr: "Kardeşim oynuyor.", en: "My sibling is playing.", level: "A1" },
      { tr: "Büyükannem dinleniyor.", en: "My grandmother is resting.", level: "A1" },
      { tr: "Büyükbabam okur.", en: "My grandfather reads.", level: "A1" },
      { tr: "Annem televizyon izler.", en: "My mother watches TV.", level: "A1" },
      { tr: "Babam gazete okur.", en: "My father reads newspapers.", level: "A1" },
      { tr: "Kardeşim müzik dinler.", en: "My sibling listens to music.", level: "A1" },
      { tr: "Ablam kitap okur.", en: "My older sister reads books.", level: "A1" },
      { tr: "Ağabeyim spor yapar.", en: "My older brother does sports.", level: "A1" },
      { tr: "Annem alışveriş yapar.", en: "My mother goes shopping.", level: "A1" },
      { tr: "Babam araba yıkar.", en: "My father washes the car.", level: "A1" },
      { tr: "Kardeşim bisiklete biner.", en: "My sibling rides a bike.", level: "A1" },
      { tr: "Büyükannem bahçede çalışır.", en: "My grandmother works in the garden.", level: "A1" },
      { tr: "Büyükbabam yürüyüş yapar.", en: "My grandfather goes for walks.", level: "A1" },
      { tr: "Ailem piknik yapar.", en: "My family has picnics.", level: "A1" },
      { tr: "Annem sabah kahvaltı hazırlar.", en: "My mother prepares breakfast.", level: "A1" },
      { tr: "Babam akşam eve gelir.", en: "My father comes home in the evening.", level: "A1" },
      { tr: "Kardeşim öğle uyur.", en: "My sibling sleeps at noon.", level: "A1" },
      { tr: "Büyükannem erken kalkar.", en: "My grandmother wakes up early.", level: "A1" },
      { tr: "Büyükbabam geç uyur.", en: "My grandfather sleeps late.", level: "A1" },
      { tr: "Annem her gün temizlik yapar.", en: "My mother cleans every day.", level: "A1" },
      { tr: "Babam her hafta market alışverişi yapar.", en: "My father shops at the market every week.", level: "A1" },
      { tr: "Kardeşim her gün okula gider.", en: "My sibling goes to school every day.", level: "A1" },
      { tr: "Ablam her sabah koşar.", en: "My older sister runs every morning.", level: "A1" },
      { tr: "Ağabeyim her akşam çalışır.", en: "My older brother works every evening.", level: "A1" },
      { tr: "Annem çok iyi yemek yapar.", en: "My mother cooks very well.", level: "A1" },
      { tr: "Babam çok iyi araba kullanır.", en: "My father drives very well.", level: "A1" },
      { tr: "Kardeşim çok iyi İngilizce konuşur.", en: "My sibling speaks English very well.", level: "A1" },
      { tr: "Büyükannem çok iyi pasta yapar.", en: "My grandmother makes cakes very well.", level: "A1" },
      { tr: "Büyükbabam çok iyi hikaye anlatır.", en: "My grandfather tells stories very well.", level: "A1" },
      { tr: "Ailem her pazar kiliseye gider.", en: "My family goes to church every Sunday.", level: "A1" },
      { tr: "Annem her hafta pazara gider.", en: "My mother goes to the market every week.", level: "A1" },
      { tr: "Babam her gün işe gider.", en: "My father goes to work every day.", level: "A1" },
      { tr: "Kardeşim her gün ders çalışır.", en: "My sibling studies every day.", level: "A1" },
      { tr: "Büyükannem her gün dua eder.", en: "My grandmother prays every day.", level: "A1" },
      { tr: "Büyükbabam her gün bahçede çalışır.", en: "My grandfather works in the garden every day.", level: "A1" },
      { tr: "Ablam her hafta spor salonuna gider.", en: "My older sister goes to the gym every week.", level: "A1" },
      { tr: "Ağabeyim her hafta sonu arkadaşlarıyla görüşür.", en: "My older brother meets friends every weekend.", level: "A1" },
      { tr: "Annem beni çok sever.", en: "My mother loves me very much.", level: "A1" },
      { tr: "Babam beni çok sever.", en: "My father loves me very much.", level: "A1" },
      { tr: "Kardeşim benimle oynar.", en: "My sibling plays with me.", level: "A1" },
      { tr: "Büyükannem bana hikaye anlatır.", en: "My grandmother tells me stories.", level: "A1" },
      { tr: "Büyükbabam bana yardım eder.", en: "My grandfather helps me.", level: "A1" },
      { tr: "Ablam bana yardım eder.", en: "My older sister helps me.", level: "A1" },
      { tr: "Ağabeyim bana öğretir.", en: "My older brother teaches me.", level: "A1" },
      { tr: "Ailem beni destekler.", en: "My family supports me.", level: "A1" }
    ],
    enToTr: [
      { en: "I love my family.", tr: "Ailemi seviyorum.", level: "A1" },
      { en: "This is my mother.", tr: "Bu benim annem.", level: "A1" },
      { en: "This is my father.", tr: "Bu benim babam.", level: "A1" },
      { en: "My brother is tall.", tr: "Erkek kardeşim uzun.", level: "A1" },
      { en: "My sister is small.", tr: "Kız kardeşim küçük.", level: "A1" },
      { en: "I have a brother.", tr: "Bir erkek kardeşim var.", level: "A1" },
      { en: "I have a sister.", tr: "Bir kız kardeşim var.", level: "A1" },
      { en: "My grandmother is old.", tr: "Büyükannem yaşlı.", level: "A1" },
      { en: "My grandfather is kind.", tr: "Büyükbabam nazik.", level: "A1" },
      { en: "My family is happy.", tr: "Ailem mutlu.", level: "A1" },
      { en: "My mother is at home.", tr: "Annem evde.", level: "A1" },
      { en: "My father is at work.", tr: "Babam işte.", level: "A1" },
      { en: "I have two brothers.", tr: "İki erkek kardeşim var.", level: "A1" },
      { en: "I have three siblings.", tr: "Üç kardeşim var.", level: "A1" },
      { en: "My family is big.", tr: "Ailem büyük.", level: "A1" },
      { en: "My family is small.", tr: "Ailem küçük.", level: "A1" },
      { en: "My mother cooks.", tr: "Annem yemek pişirir.", level: "A1" },
      { en: "My father works.", tr: "Babam çalışır.", level: "A1" },
      { en: "My brother plays.", tr: "Erkek kardeşim oynar.", level: "A1" },
      { en: "My sister studies.", tr: "Kız kardeşim ders çalışır.", level: "A1" },
      { en: "I live with my family.", tr: "Ailemle yaşıyorum.", level: "A1" },
      { en: "We are a family.", tr: "Biz bir aileyiz.", level: "A1" },
      { en: "My parents are at home.", tr: "Ebeveynlerim evde.", level: "A1" },
      { en: "My mother is beautiful.", tr: "Annem güzel.", level: "A1" },
      { en: "My father is strong.", tr: "Babam güçlü.", level: "A1" },
      { en: "My sibling is young.", tr: "Kardeşim genç.", level: "A1" },
      { en: "My grandmother is kind.", tr: "Büyükannem nazik.", level: "A1" },
      { en: "My grandfather is smart.", tr: "Büyükbabam akıllı.", level: "A1" },
      { en: "My older sister is tall.", tr: "Ablam uzun.", level: "A1" },
      { en: "My older brother is big.", tr: "Ağabeyim büyük.", level: "A1" },
      { en: "My mother is patient.", tr: "Annem sabırlı.", level: "A1" },
      { en: "My father is busy.", tr: "Babam meşgul.", level: "A1" },
      { en: "My sibling is funny.", tr: "Kardeşim eğlenceli.", level: "A1" },
      { en: "My family is loving.", tr: "Ailem sevgi dolu.", level: "A1" },
      { en: "My grandmother is healthy.", tr: "Büyükannem sağlıklı.", level: "A1" },
      { en: "My grandfather is happy.", tr: "Büyükbabam mutlu.", level: "A1" },
      { en: "My mother is tired.", tr: "Annem yorgun.", level: "A1" },
      { en: "My father is cheerful.", tr: "Babam neşeli.", level: "A1" },
      { en: "My sibling is quiet.", tr: "Kardeşim sessiz.", level: "A1" },
      { en: "My older sister is intelligent.", tr: "Ablam akıllı.", level: "A1" },
      { en: "My older brother is tall.", tr: "Ağabeyim uzun.", level: "A1" },
      { en: "My family is together.", tr: "Ailem birlikte.", level: "A1" },
      { en: "My mother is sleeping.", tr: "Annem uyuyor.", level: "A1" },
      { en: "My father is working.", tr: "Babam çalışıyor.", level: "A1" },
      { en: "My sibling is playing.", tr: "Kardeşim oynuyor.", level: "A1" },
      { en: "My grandmother is resting.", tr: "Büyükannem dinleniyor.", level: "A1" },
      { en: "My grandfather reads.", tr: "Büyükbabam okur.", level: "A1" },
      { en: "My mother watches TV.", tr: "Annem televizyon izler.", level: "A1" },
      { en: "My father reads newspapers.", tr: "Babam gazete okur.", level: "A1" },
      { en: "My sibling listens to music.", tr: "Kardeşim müzik dinler.", level: "A1" },
      { en: "My older sister reads books.", tr: "Ablam kitap okur.", level: "A1" },
      { en: "My older brother does sports.", tr: "Ağabeyim spor yapar.", level: "A1" },
      { en: "My mother goes shopping.", tr: "Annem alışveriş yapar.", level: "A1" },
      { en: "My father washes the car.", tr: "Babam araba yıkar.", level: "A1" },
      { en: "My sibling rides a bike.", tr: "Kardeşim bisiklete biner.", level: "A1" },
      { en: "My grandmother works in the garden.", tr: "Büyükannem bahçede çalışır.", level: "A1" },
      { en: "My grandfather goes for walks.", tr: "Büyükbabam yürüyüş yapar.", level: "A1" },
      { en: "My family has picnics.", tr: "Ailem piknik yapar.", level: "A1" },
      { en: "My mother prepares breakfast.", tr: "Annem sabah kahvaltı hazırlar.", level: "A1" },
      { en: "My father comes home in the evening.", tr: "Babam akşam eve gelir.", level: "A1" },
      { en: "My sibling sleeps at noon.", tr: "Kardeşim öğle uyur.", level: "A1" },
      { en: "My grandmother wakes up early.", tr: "Büyükannem erken kalkar.", level: "A1" },
      { en: "My grandfather sleeps late.", tr: "Büyükbabam geç uyur.", level: "A1" },
      { en: "My mother cleans every day.", tr: "Annem her gün temizlik yapar.", level: "A1" },
      { en: "My father shops at the market every week.", tr: "Babam her hafta market alışverişi yapar.", level: "A1" },
      { en: "My sibling goes to school every day.", tr: "Kardeşim her gün okula gider.", level: "A1" },
      { en: "My older sister runs every morning.", tr: "Ablam her sabah koşar.", level: "A1" },
      { en: "My older brother works every evening.", tr: "Ağabeyim her akşam çalışır.", level: "A1" },
      { en: "My mother cooks very well.", tr: "Annem çok iyi yemek yapar.", level: "A1" },
      { en: "My father drives very well.", tr: "Babam çok iyi araba kullanır.", level: "A1" },
      { en: "My sibling speaks English very well.", tr: "Kardeşim çok iyi İngilizce konuşur.", level: "A1" },
      { en: "My grandmother makes cakes very well.", tr: "Büyükannem çok iyi pasta yapar.", level: "A1" },
      { en: "My grandfather tells stories very well.", tr: "Büyükbabam çok iyi hikaye anlatır.", level: "A1" },
      { en: "My family goes to church every Sunday.", tr: "Ailem her pazar kiliseye gider.", level: "A1" },
      { en: "My mother goes to the market every week.", tr: "Annem her hafta pazara gider.", level: "A1" },
      { en: "My father goes to work every day.", tr: "Babam her gün işe gider.", level: "A1" },
      { en: "My sibling studies every day.", tr: "Kardeşim her gün ders çalışır.", level: "A1" },
      { en: "My grandmother prays every day.", tr: "Büyükannem her gün dua eder.", level: "A1" },
      { en: "My grandfather works in the garden every day.", tr: "Büyükbabam her gün bahçede çalışır.", level: "A1" },
      { en: "My older sister goes to the gym every week.", tr: "Ablam her hafta spor salonuna gider.", level: "A1" },
      { en: "My older brother meets friends every weekend.", tr: "Ağabeyim her hafta sonu arkadaşlarıyla görüşür.", level: "A1" },
      { en: "My mother loves me very much.", tr: "Annem beni çok sever.", level: "A1" },
      { en: "My father loves me very much.", tr: "Babam beni çok sever.", level: "A1" },
      { en: "My sibling plays with me.", tr: "Kardeşim benimle oynar.", level: "A1" },
      { en: "My grandmother tells me stories.", tr: "Büyükannem bana hikaye anlatır.", level: "A1" },
      { en: "My grandfather helps me.", tr: "Büyükbabam bana yardım eder.", level: "A1" },
      { en: "My older sister helps me.", tr: "Ablam bana yardım eder.", level: "A1" },
      { en: "My older brother teaches me.", tr: "Ağabeyim bana öğretir.", level: "A1" },
      { en: "My family supports me.", tr: "Ailem beni destekler.", level: "A1" },
      { en: "My mother is kind.", tr: "Annem nazik.", level: "A1" },
      { en: "My father is hardworking.", tr: "Babam çalışkan.", level: "A1" },
      { en: "My sibling is sick.", tr: "Kardeşim hasta.", level: "A1" },
      { en: "My grandmother is at home.", tr: "Büyükannem evde.", level: "A1" },
      { en: "My grandfather is in the garden.", tr: "Büyükbabam bahçede.", level: "A1" },
      { en: "My older sister is a teacher.", tr: "Ablam öğretmen.", level: "A1" },
      { en: "My older brother is a doctor.", tr: "Ağabeyim doktor.", level: "A1" },
      { en: "My mother sings beautifully.", tr: "Annem güzel şarkı söyler.", level: "A1" },
      { en: "My father drives a car.", tr: "Babam araba kullanır.", level: "A1" },
      { en: "My sibling plays games.", tr: "Kardeşim oyun oynar.", level: "A1" },
      { en: "My siblings are small.", tr: "Kardeşlerim küçük.", level: "A1" },
      { en: "I have one sibling.", tr: "Bir kardeşim var.", level: "A1" },
      { en: "We are three siblings.", tr: "Üç kardeşiz.", level: "A1" },
      { en: "My mother makes food.", tr: "Annem yemek yapar.", level: "A1" }
    ],
    vocabulary: [
      { en: "mother", tr: "anne", level: "A1" },
      { en: "father", tr: "baba", level: "A1" },
      { en: "sister", tr: "kız kardeş", level: "A1" },
      { en: "brother", tr: "erkek kardeş", level: "A1" },
      { en: "grandmother", tr: "büyükanne", level: "A1" },
      { en: "grandfather", tr: "büyükbaba", level: "A1" },
      { en: "son", tr: "oğul", level: "A1" },
      { en: "daughter", tr: "kız", level: "A1" },
      { en: "family", tr: "aile", level: "A1" },
      { en: "mom", tr: "anne", level: "A1" },
      { en: "dad", tr: "baba", level: "A1" },
      { en: "grandma", tr: "büyükanne", level: "A1" },
      { en: "grandpa", tr: "büyükbaba", level: "A1" },
      { en: "child", tr: "çocuk", level: "A1" },
      { en: "children", tr: "çocuklar", level: "A1" },
      { en: "baby", tr: "bebek", level: "A1" },
      { en: "boy", tr: "erkek çocuk", level: "A1" },
      { en: "girl", tr: "kız çocuk", level: "A1" },
      { en: "man", tr: "adam", level: "A1" },
      { en: "woman", tr: "kadın", level: "A1" },
      { en: "people", tr: "insanlar", level: "A1" },
      { en: "person", tr: "kişi", level: "A1" },
      { en: "parent", tr: "ebeveyn", level: "A1" },
      { en: "parents", tr: "anne baba", level: "A1" },
      { en: "sibling", tr: "kardeş", level: "A1" },
      { en: "siblings", tr: "kardeşler", level: "A1" },
      { en: "older", tr: "daha büyük", level: "A1" },
      { en: "younger", tr: "daha küçük", level: "A1" },
      { en: "big", tr: "büyük", level: "A1" },
      { en: "small", tr: "küçük", level: "A1" },
      { en: "old", tr: "yaşlı", level: "A1" },
      { en: "young", tr: "genç", level: "A1" },
      { en: "name", tr: "isim", level: "A1" },
      { en: "age", tr: "yaş", level: "A1" },
      { en: "home", tr: "ev", level: "A1" },
      { en: "house", tr: "ev", level: "A1" },
      { en: "love", tr: "sevmek", level: "A1" },
      { en: "live", tr: "yaşamak", level: "A1" },
      { en: "work", tr: "çalışmak", level: "A1" },
      { en: "happy", tr: "mutlu", level: "A1" },
      { en: "aunt", tr: "teyze/hala", level: "A2" },
      { en: "uncle", tr: "amca/dayı", level: "A2" },
      { en: "cousin", tr: "kuzen", level: "A2" },
      { en: "parents", tr: "ebeveynler", level: "A2" },
      { en: "grandparents", tr: "büyükanne ve büyükbaba", level: "A2" },
      { en: "sibling", tr: "kardeş", level: "A2" },
      { en: "son", tr: "oğul", level: "A1" },
      { en: "daughter", tr: "kız", level: "A1" },
      { en: "husband", tr: "koca/eş", level: "A2" },
      { en: "wife", tr: "karı/eş", level: "A2" },
      { en: "nephew", tr: "yeğen (erkek)", level: "B1" },
      { en: "niece", tr: "yeğen (kız)", level: "B1" },
      { en: "family", tr: "aile", level: "A1" },
      { en: "relative", tr: "akraba", level: "B1" }
    ],
    errorHunt: [
      { wrong: "I have two brother.", correct: "I have two brothers.", explanation: "İkiden fazla için çoğul eki '-s' gerekir.", level: "A1" },
      { wrong: "My mother are a teacher.", correct: "My mother is a teacher.", explanation: "Tekil özne için 'is' kullanılır.", level: "A1" },
      { wrong: "He is my young brother.", correct: "He is my younger brother.", explanation: "Karşılaştırma: 'younger' (daha küçük)", level: "A2" },
      { wrong: "My grandfather have 70 years.", correct: "My grandfather is 70 years old.", explanation: "Yaş için 'be' fiili kullanılır: 'is + yaş + years old'", level: "A2" },
      { wrong: "She is sister of me.", correct: "She is my sister.", explanation: "İyelik: 'my sister' (benim kız kardeşim)", level: "A1" },
      { wrong: "My parents lives in Ankara.", correct: "My parents live in Ankara.", explanation: "Çoğul özne için '-s' eki kullanılmaz.", level: "A2" },
      { wrong: "I love very much my family.", correct: "I love my family very much.", explanation: "Kelime sırası: fiil + nesne + zarf", level: "A2" },
      { wrong: "Our family is five persons.", correct: "We are a family of five.", explanation: "Doğru ifade: 'a family of + sayı'", level: "A2" }
    ],
    roleplay: [
      { 
        scenario: "Ailende kaç kişi olduğunu söylüyorsun (4 kişi).",
        options: [
          "My family is four persons.",
          "We are a family of four.",
          "My family has four.",
          "We have four family."
        ],
        correct: 1,
        explanation: "Aile sayısı: 'a family of + sayı'",
        level: "A2"
      },
      { 
        scenario: "Kardeşin olup olmadığını söylüyorsun (bir kız kardeş var).",
        options: [
          "I have a sister.",
          "I am have a sister.",
          "I has a sister.",
          "I have sister."
        ],
        correct: 0,
        explanation: "'Have' fiili ile iyelik: 'I have + a/an + tekil'",
        level: "A1"
      },
      { 
        scenario: "Büyükbabanın yaşını söylüyorsun (75 yaşında).",
        options: [
          "My grandfather has 75 years.",
          "My grandfather have 75 years old.",
          "My grandfather is 75 years old.",
          "My grandfather 75 years old."
        ],
        correct: 2,
        explanation: "Yaş: 'be + yaş + years old'",
        level: "A2"
      },
      { 
        scenario: "Annenin mesleğini anlatıyorsun (doktor).",
        options: [
          "My mother is doctor.",
          "My mother is a doctor.",
          "My mother doctor.",
          "My mother are doctor."
        ],
        correct: 1,
        explanation: "Meslek: 'be + a/an + meslek'",
        level: "A1"
      },
      { 
        scenario: "Kardeşinin hangi okula gittiğini söylüyorsun.",
        options: [
          "My brother go to school.",
          "My brother going to school.",
          "My brother goes to school.",
          "My brother is go to school."
        ],
        correct: 2,
        explanation: "3. tekil şahıs: 'goes' (Present Simple)",
        level: "A1"
      },
      { 
        scenario: "Ailenin nerede yaşadığını söylüyorsun (İzmir).",
        options: [
          "My family live at Izmir.",
          "My family lives in Izmir.",
          "My family living in Izmir.",
          "My family is live in Izmir."
        ],
        correct: 1,
        explanation: "'Family' tekil sayılır: 'lives in + şehir'",
        level: "A2"
      },
      { 
        scenario: "Küçük kardeşini tanıtıyorsun.",
        options: [
          "He is my young brother.",
          "He is my more young brother.",
          "He is my younger brother.",
          "He is my youngest brother."
        ],
        correct: 2,
        explanation: "Karşılaştırma: 'younger' (daha küçük)",
        level: "A2"
      },
      { 
        scenario: "Ailenin nasıl olduğunu söylüyorsun (mutlu).",
        options: [
          "My family very happy.",
          "My family is very happy.",
          "My family are very happy.",
          "My family be very happy."
        ],
        correct: 1,
        explanation: "'Family' tekil: 'is + sıfat'",
        level: "A1"
      }
    ]
  },
  
  tense_present: {
    name: "Present Tense",
    icon: "⏰",
    description: "Simple & Continuous",
    trToEn: [
      { tr: "Ben her gün okula gidiyorum.", en: "I go to school every day.", level: "A1" },
      { tr: "O şu anda kitap okuyor.", en: "He is reading a book now.", level: "A1" },
      { tr: "Biz İngilizce konuşuyoruz.", en: "We speak English.", level: "A1" },
      { tr: "Onlar şu anda müzik dinliyorlar.", en: "They are listening to music now.", level: "A1" },
      { tr: "Anne yemek pişiriyor.", en: "Mom is cooking.", level: "A1" },
      { tr: "Çocuklar bahçede oynuyorlar.", en: "The children are playing in the garden.", level: "A1" },
      { tr: "O her akşam televizyon izler.", en: "She watches TV every evening.", level: "A1" },
      { tr: "Ben şu anda ev ödevimi yapıyorum.", en: "I am doing my homework now.", level: "A1" },
      { tr: "Kardeşim uyuyor.", en: "My brother is sleeping.", level: "A1" },
      { tr: "Onlar İstanbul'da yaşıyorlar.", en: "They live in Istanbul.", level: "A1" },
      { tr: "O şu an duş alıyor.", en: "She is taking a shower now.", level: "A1" },
      { tr: "Arkadaşlarım parkta koşuyorlar.", en: "My friends are running in the park.", level: "A1" },
      { tr: "O bisiklete biniyor.", en: "He is riding a bike.", level: "A1" },
      { tr: "Öğretmen tahtaya yazıyor.", en: "The teacher is writing on the board.", level: "A1" },
      { tr: "Kedim şu anda uyuyor.", en: "My cat is sleeping now.", level: "A1" },
      { tr: "Ben şu anda telefonda konuşuyorum.", en: "I am talking on the phone now.", level: "A1" },
      { tr: "O İngilizce öğreniyor.", en: "She is learning English.", level: "A1" },
      { tr: "Ben su içiyorum.", en: "I am drinking water.", level: "A1" },
      { tr: "O müzik dinliyor.", en: "He is listening to music.", level: "A1" },
      { tr: "Biz yemek yiyoruz.", en: "We are eating.", level: "A1" },
      { tr: "Onlar oynuyorlar.", en: "They are playing.", level: "A1" },
      { tr: "Ben çalışıyorum.", en: "I am working.", level: "A1" },
      { tr: "O gülüyor.", en: "She is laughing.", level: "A1" },
      { tr: "Biz yürüyoruz.", en: "We are walking.", level: "A1" },
      { tr: "Onlar koşuyorlar.", en: "They are running.", level: "A1" },
      { tr: "Ben yüzüyorum.", en: "I am swimming.", level: "A1" },
      { tr: "O şarkı söylüyor.", en: "She is singing.", level: "A1" },
      { tr: "Biz dans ediyoruz.", en: "We are dancing.", level: "A1" },
      { tr: "Onlar yazıyorlar.", en: "They are writing.", level: "A1" },
      { tr: "Ben okuyorum.", en: "I am reading.", level: "A1" },
      { tr: "O uçuyor.", en: "He is flying.", level: "A1" },
      { tr: "Biz oturuyoruz.", en: "We are sitting.", level: "A1" },
      { tr: "Onlar duruyorlar.", en: "They are standing.", level: "A1" },
      { tr: "Ben geliyorum.", en: "I am coming.", level: "A1" },
      { tr: "O gidiyor.", en: "She is going.", level: "A1" },
      { tr: "Biz bekliyoruz.", en: "We are waiting.", level: "A1" },
      { tr: "Onlar bakıyorlar.", en: "They are looking.", level: "A1" },
      { tr: "Ben düşünüyorum.", en: "I am thinking.", level: "A1" },
      { tr: "O ağlıyor.", en: "He is crying.", level: "A1" },
      { tr: "Biz konuşuyoruz.", en: "We are talking.", level: "A1" },
      { tr: "Onlar sürüyorlar.", en: "They are driving.", level: "A1" },
      { tr: "Ben açıyorum.", en: "I am opening.", level: "A1" },
      { tr: "O kapıyor.", en: "She is closing.", level: "A1" },
      { tr: "Biz başlıyoruz.", en: "We are starting.", level: "A1" },
      { tr: "Onlar bitiriyorlar.", en: "They are finishing.", level: "A1" },
      { tr: "Ben satın alıyorum.", en: "I am buying.", level: "A1" },
      { tr: "O satıyor.", en: "He is selling.", level: "A1" },
      { tr: "Biz öğreniyoruz.", en: "We are learning.", level: "A1" },
      { tr: "Onlar öğretiyorlar.", en: "They are teaching.", level: "A1" },
      { tr: "Ben anlamıyorum.", en: "I don't understand.", level: "A1" },
      { tr: "O biliyor.", en: "She knows.", level: "A1" },
      { tr: "Biz seviyoruz.", en: "We love.", level: "A1" },
      { tr: "Onlar istiyorlar.", en: "They want.", level: "A1" },
      { tr: "Ben ihtiyacım var.", en: "I need.", level: "A1" },
      { tr: "O kullanıyor.", en: "He uses.", level: "A1" },
      { tr: "Biz yaparız.", en: "We do.", level: "A1" },
      { tr: "Onlar yaparlar.", en: "They make.", level: "A1" },
      { tr: "Ben alırım.", en: "I take.", level: "A1" },
      { tr: "O verir.", en: "She gives.", level: "A1" },
      { tr: "Biz buluruz.", en: "We find.", level: "A1" },
      { tr: "Onlar bulurlar.", en: "They find.", level: "A1" },
      { tr: "Ben bir şey söylüyorum.", en: "I am saying something.", level: "A1" },
      { tr: "O bir şey soruyor.", en: "He is asking something.", level: "A1" },
      { tr: "Biz bir şey yapıyoruz.", en: "We are doing something.", level: "A1" },
      { tr: "Onlar bir şey yiyorlar.", en: "They are eating something.", level: "A1" },
      { tr: "Ben her gün koşuyorum.", en: "I run every day.", level: "A1" },
      { tr: "O her gün yüzüyor.", en: "She swims every day.", level: "A1" },
      { tr: "Biz her gün çalışıyoruz.", en: "We work every day.", level: "A1" },
      { tr: "Onlar her gün oynuyorlar.", en: "They play every day.", level: "A1" },
      { tr: "Ben şimdi uyuyorum.", en: "I am sleeping now.", level: "A1" },
      { tr: "O şimdi okuyor.", en: "She is reading now.", level: "A1" },
      { tr: "Biz şimdi yazıyoruz.", en: "We are writing now.", level: "A1" },
      { tr: "Onlar şimdi konuşuyorlar.", en: "They are talking now.", level: "A1" },
      { tr: "Ben kitap okuyorum.", en: "I read books.", level: "A1" },
      { tr: "O müzik dinliyor.", en: "He listens to music.", level: "A1" },
      { tr: "Biz film izliyoruz.", en: "We watch movies.", level: "A1" },
      { tr: "Onlar oyun oynuyorlar.", en: "They play games.", level: "A1" },
      { tr: "Ben çay içiyorum.", en: "I drink tea.", level: "A1" },
      { tr: "O kahve içiyor.", en: "She drinks coffee.", level: "A1" },
      { tr: "Biz su içiyoruz.", en: "We drink water.", level: "A1" },
      { tr: "Onlar süt içiyorlar.", en: "They drink milk.", level: "A1" },
      { tr: "Ben yemek yiyorum.", en: "I eat food.", level: "A1" },
      { tr: "O meyve yiyor.", en: "He eats fruit.", level: "A1" },
      { tr: "Biz sebze yiyoruz.", en: "We eat vegetables.", level: "A1" },
      { tr: "Onlar ekmek yiyorlar.", en: "They eat bread.", level: "A1" },
      { tr: "Ben araba kullanıyorum.", en: "I drive a car.", level: "A1" },
      { tr: "O bisiklet sürüyor.", en: "She rides a bike.", level: "A1" },
      { tr: "Biz yürüyoruz.", en: "We walk.", level: "A1" },
      { tr: "Onlar koşuyorlar.", en: "They run.", level: "A1" },
      { tr: "Ben evdeyim.", en: "I am at home.", level: "A1" },
      { tr: "O okulda.", en: "She is at school.", level: "A1" },
      { tr: "Biz işteyiz.", en: "We are at work.", level: "A1" },
      { tr: "Onlar parkta.", en: "They are at the park.", level: "A1" },
      { tr: "Ben mutluyum.", en: "I am happy.", level: "A1" },
      { tr: "O üzgün.", en: "He is sad.", level: "A1" },
      { tr: "Biz yorgunuz.", en: "We are tired.", level: "A1" },
      { tr: "Onlar açlar.", en: "They are hungry.", level: "A1" },
      { tr: "Ben susuzum.", en: "I am thirsty.", level: "A1" }
    ],
    enToTr: [
      { en: "I work every day.", tr: "Ben her gün çalışırım.", level: "A1" },
      { en: "She is studying.", tr: "O çalışıyor.", level: "A1" },
      { en: "We play football.", tr: "Biz futbol oynarız.", level: "A1" },
      { en: "They are eating.", tr: "Onlar yemek yiyorlar.", level: "A1" },
      { en: "He is drinking water.", tr: "O su içiyor.", level: "A1" },
      { en: "I am writing a letter.", tr: "Ben mektup yazıyorum.", level: "A1" },
      { en: "We are waiting for the bus.", tr: "Biz otobüs bekliyoruz.", level: "A1" },
      { en: "He teaches English.", tr: "O İngilizce öğretir.", level: "A1" },
      { en: "I am looking at you.", tr: "Ben sana bakıyorum.", level: "A1" },
      { en: "She is dancing now.", tr: "O şimdi dans ediyor.", level: "A1" },
      { en: "I am sitting on the chair.", tr: "Ben sandalyede oturuyorum.", level: "A1" },
      { en: "They are laughing.", tr: "Onlar gülüyorlar.", level: "A1" },
      { en: "We are learning Turkish.", tr: "Biz Türkçe öğreniyoruz.", level: "A1" },
      { en: "She is getting ready.", tr: "O hazırlanıyor.", level: "A1" },
      { en: "I sleep.", tr: "Ben uyurum.", level: "A1" },
      { en: "He eats.", tr: "O yer.", level: "A1" },
      { en: "She drinks.", tr: "O içer.", level: "A1" },
      { en: "We run.", tr: "Biz koşarız.", level: "A1" },
      { en: "They sing.", tr: "Onlar şarkı söylerler.", level: "A1" },
      { en: "I read.", tr: "Ben okurum.", level: "A1" },
      { en: "He writes.", tr: "O yazar.", level: "A1" },
      { en: "She swims.", tr: "O yüzer.", level: "A1" },
      { en: "We walk.", tr: "Biz yürürüz.", level: "A1" },
      { en: "They dance.", tr: "Onlar dans ederler.", level: "A1" },
      { en: "I am reading.", tr: "Ben okuyorum.", level: "A1" },
      { en: "Do you live here?", tr: "Burada mı yaşıyorsunuz?", level: "A2" },
      { en: "She doesn't smoke.", tr: "O sigara içmez.", level: "A2" },
      { en: "We are waiting for the bus.", tr: "Biz otobüs bekliyoruz.", level: "A1" },
      { en: "He teaches English.", tr: "O İngilizce öğretir.", level: "A1" },
      { en: "I am looking at you.", tr: "Ben sana bakıyorum.", level: "A1" },
      { en: "They don't understand.", tr: "Onlar anlamıyorlar.", level: "A2" },
      { en: "She is dancing now.", tr: "O şimdi dans ediyor.", level: "A1" },
      { en: "We always help each other.", tr: "Biz her zaman birbirimize yardım ederiz.", level: "A2" },
      { en: "I am sitting on the chair.", tr: "Ben sandalyede oturuyorum.", level: "A1" },
      { en: "He runs every morning.", tr: "O her sabah koşar.", level: "A2" },
      { en: "They are laughing.", tr: "Onlar gülüyorlar.", level: "A1" },
      { en: "She never lies.", tr: "O asla yalan söylemez.", level: "A2" },
      { en: "I am feeling happy.", tr: "Ben mutlu hissediyorum.", level: "A2" },
      { en: "We are learning Turkish.", tr: "Biz Türkçe öğreniyoruz.", level: "A1" },
      { en: "He always comes late.", tr: "O her zaman geç gelir.", level: "A2" },
      { en: "They are talking about you.", tr: "Onlar senin hakkında konuşuyorlar.", level: "A2" },
      { en: "I am thinking about it.", tr: "Ben bunun hakkında düşünüyorum.", level: "A2" },
      { en: "She is getting ready.", tr: "O hazırlanıyor.", level: "A1" },
      { en: "We usually stay home.", tr: "Biz genellikle evde kalırız.", level: "A2" }
    ],
    vocabulary: [
      { en: "work", tr: "çalışmak", level: "A1" },
      { en: "study", tr: "ders çalışmak", level: "A1" },
      { en: "play", tr: "oynamak", level: "A1" },
      { en: "read", tr: "okumak", level: "A1" },
      { en: "write", tr: "yazmak", level: "A1" },
      { en: "listen", tr: "dinlemek", level: "A1" },
      { en: "watch", tr: "izlemek", level: "A1" },
      { en: "speak", tr: "konuşmak", level: "A1" },
      { en: "eat", tr: "yemek", level: "A1" },
      { en: "drink", tr: "içmek", level: "A1" },
      { en: "sleep", tr: "uyumak", level: "A1" },
      { en: "wake up", tr: "uyanmak", level: "A1" },
      { en: "cook", tr: "yemek pişirmek", level: "A1" },
      { en: "wait", tr: "beklemek", level: "A1" },
      { en: "run", tr: "koşmak", level: "A1" },
      { en: "walk", tr: "yürümek", level: "A1" },
      { en: "swim", tr: "yüzmek", level: "A1" },
      { en: "dance", tr: "dans etmek", level: "A1" },
      { en: "sing", tr: "şarkı söylemek", level: "A1" },
      { en: "ride", tr: "bisiklete binmek", level: "A1" },
      { en: "sit", tr: "oturmak", level: "A1" },
      { en: "stand", tr: "ayakta durmak", level: "A1" },
      { en: "laugh", tr: "gülmek", level: "A1" },
      { en: "cry", tr: "ağlamak", level: "A1" },
      { en: "help", tr: "yardım etmek", level: "A1" },
      { en: "go", tr: "gitmek", level: "A1" },
      { en: "come", tr: "gelmek", level: "A1" },
      { en: "do", tr: "yapmak", level: "A1" },
      { en: "make", tr: "yapmak", level: "A1" },
      { en: "see", tr: "görmek", level: "A1" },
      { en: "look", tr: "bakmak", level: "A1" },
      { en: "live", tr: "yaşamak", level: "A1" },
      { en: "love", tr: "sevmek", level: "A1" },
      { en: "like", tr: "beğenmek", level: "A1" },
      { en: "want", tr: "istemek", level: "A1" },
      { en: "need", tr: "ihtiyaç duymak", level: "A1" },
      { en: "have", tr: "sahip olmak", level: "A1" },
      { en: "know", tr: "bilmek", level: "A1" },
      { en: "talk", tr: "konuşmak", level: "A1" },
      { en: "say", tr: "söylemek", level: "A1" },
      { en: "think", tr: "düşünmek", level: "A2" },
      { en: "understand", tr: "anlamak", level: "A2" },
      { en: "learn", tr: "öğrenmek", level: "A1" },
      { en: "teach", tr: "öğretmek", level: "A2" },
      { en: "cook", tr: "yemek pişirmek", level: "A1" },
      { en: "wait", tr: "beklemek", level: "A1" },
      { en: "run", tr: "koşmak", level: "A1" },
      { en: "walk", tr: "yürümek", level: "A1" },
      { en: "swim", tr: "yüzmek", level: "A1" },
      { en: "dance", tr: "dans etmek", level: "A1" },
      { en: "sing", tr: "şarkı söylemek", level: "A1" },
      { en: "drive", tr: "araba kullanmak", level: "A2" },
      { en: "ride", tr: "bisiklete binmek", level: "A1" },
      { en: "sit", tr: "oturmak", level: "A1" },
      { en: "stand", tr: "ayakta durmak", level: "A1" },
      { en: "laugh", tr: "gülmek", level: "A1" },
      { en: "cry", tr: "ağlamak", level: "A1" },
      { en: "help", tr: "yardım etmek", level: "A1" }
    ],
    errorHunt: [
      { wrong: "She is work in a hospital.", correct: "She works in a hospital.", explanation: "Present Simple kullanılmalı, 'is working' veya 'works' olmalı.", level: "A1" },
      { wrong: "I go to school now.", correct: "I am going to school now.", explanation: "'Now' kelimesi Present Continuous gerektirir.", level: "A1" },
      { wrong: "They are live in Istanbul.", correct: "They live in Istanbul.", explanation: "'Live' fiili durum bildirdiği için Simple kullanılır.", level: "A1" },
      { wrong: "He play football every day.", correct: "He plays football every day.", explanation: "3. tekil şahıs için '-s' eki gereklidir.", level: "A1" },
      { wrong: "We studying English.", correct: "We are studying English.", explanation: "Present Continuous için 'be' fiili gereklidir.", level: "A1" },
      { wrong: "She don't like coffee.", correct: "She doesn't like coffee.", explanation: "3. tekil şahıs için 'doesn't' kullanılır.", level: "A2" },
      { wrong: "I am drink tea every morning.", correct: "I drink tea every morning.", explanation: "'Every morning' alışkanlık gösterir, Simple kullanılır.", level: "A2" },
      { wrong: "They working now.", correct: "They are working now.", explanation: "Present Continuous için 'be' fiili şarttır.", level: "A1" }
    ],
    roleplay: [
      { 
        scenario: "Arkadaşın sana ne yaptığını soruyor. Şu anda kitap okuyorsun.",
        options: [
          "I read a book.",
          "I am reading a book.",
          "I reading a book.",
          "I reads a book."
        ],
        correct: 1,
        explanation: "Şu anda yapılan bir eylem için Present Continuous kullanılır.",
        level: "A1"
      },
      { 
        scenario: "İş görüşmesinde nerede çalıştığını söylüyorsun.",
        options: [
          "I am working in a bank.",
          "I working in a bank.",
          "I work in a bank.",
          "I works in a bank."
        ],
        correct: 2,
        explanation: "Sürekli durum bildiren cümlede Present Simple kullanılır.",
        level: "A2"
      },
      { 
        scenario: "Telefonda konuşuyorsun, annene ne yaptığını söylüyorsun.",
        options: [
          "I study my lessons.",
          "I am study my lessons.",
          "I studying my lessons.",
          "I am studying my lessons."
        ],
        correct: 3,
        explanation: "Şu anda devam eden eylem için 'am/is/are + -ing' kullanılır.",
        level: "A1"
      },
      { 
        scenario: "Arkadaşına haftasonları ne yaptığını anlatıyorsun.",
        options: [
          "I am playing football.",
          "I playing football.",
          "I play football.",
          "I plays football."
        ],
        correct: 2,
        explanation: "Alışkanlık bildiren ifadeler Present Simple ile kurulur.",
        level: "A2"
      },
      { 
        scenario: "Kardeşinin şu anki durumunu açıklıyorsun.",
        options: [
          "He sleeps now.",
          "He sleep now.",
          "He is sleeping now.",
          "He sleeping now."
        ],
        correct: 2,
        explanation: "'Now' kelimesi Present Continuous kullanımını gerektirir.",
        level: "A1"
      },
      { 
        scenario: "Sınıf arkadaşlarının ne yaptıklarını öğretmene söylüyorsun.",
        options: [
          "They are talk.",
          "They talking.",
          "They talks.",
          "They are talking."
        ],
        correct: 3,
        explanation: "Çoğul özne ile Present Continuous: 'are + -ing'",
        level: "A1"
      },
      { 
        scenario: "Her sabah ne içtiğini söylüyorsun.",
        options: [
          "I am drinking tea.",
          "I drinks tea.",
          "I drink tea.",
          "I drinking tea."
        ],
        correct: 2,
        explanation: "Rutin eylemler Present Simple ile ifade edilir.",
        level: "A2"
      },
      { 
        scenario: "Arkadaşına şu an ne dinlediğini söylüyorsun.",
        options: [
          "I listen to music.",
          "I am listening to music.",
          "I listening to music.",
          "I listens to music."
        ],
        correct: 1,
        explanation: "Şu anda yapılan eylem için Present Continuous tercih edilir.",
        level: "A1"
      }
    ]
  },
  
  prepositions: {
    name: "Prepositions",
    icon: "📍",
    description: "in, on, at, under...",
    trToEn: [
      { tr: "Kitap masanın üzerinde.", en: "The book is on the table.", level: "A1" },
      { tr: "Kedi sandalyenin altında.", en: "The cat is under the chair.", level: "A1" },
      { tr: "Çocuklar parkta.", en: "The children are in the park.", level: "A1" },
      { tr: "Resim duvarda.", en: "The picture is on the wall.", level: "A1" },
      { tr: "Okul köprünün arkasında.", en: "The school is behind the bridge.", level: "A1" },
      { tr: "Kalem çantanın içinde.", en: "The pen is in the bag.", level: "A1" },
      { tr: "Köpek ağacın yanında.", en: "The dog is next to the tree.", level: "A1" },
      { tr: "Anahtar kapının arkasında.", en: "The key is behind the door.", level: "A1" },
      { tr: "Kuş ağacın üstünde.", en: "The bird is on the tree.", level: "A1" },
      { tr: "Ayakkabılar yatağın altında.", en: "The shoes are under the bed.", level: "A1" },
      { tr: "Çiçekler bahçede.", en: "The flowers are in the garden.", level: "A1" },
      { tr: "Saat 8'de buluşuyoruz.", en: "We meet at 8 o'clock.", level: "A1" },
      { tr: "Tuvalet nerede?", en: "Where is the toilet?", level: "A1" },
      { tr: "Müze istasyonun yakınında.", en: "The museum is near the station.", level: "A1" },
      { tr: "Gece uyurum.", en: "I sleep at night.", level: "A1" },
      { tr: "Telefon masanın üstünde.", en: "The phone is on the desk.", level: "A1" },
      { tr: "Banka postanenin yanında.", en: "The bank is next to the post office.", level: "A1" },
      { tr: "Kedi kanepenin arkasında.", en: "The cat is behind the sofa.", level: "A1" },
      { tr: "Top yatağın altında.", en: "The ball is under the bed.", level: "A1" },
      { tr: "Fincan masanın üzerinde.", en: "The cup is on the table.", level: "A1" },
      { tr: "O masada oturuyor.", en: "He is sitting at the desk.", level: "A1" },
      { tr: "Saat 5'te buluşuyoruz.", en: "We meet at 5 o'clock.", level: "A1" },
      { tr: "O Türkiye'de yaşıyor.", en: "She lives in Turkey.", level: "A1" },
      { tr: "Araba garajda.", en: "The car is in the garage.", level: "A1" },
      { tr: "Çocuklar sınıfta.", en: "The children are in the classroom.", level: "A1" },
      { tr: "Köpek bahçede.", en: "The dog is in the garden.", level: "A1" },
      { tr: "Anahtarlar çantada.", en: "The keys are in the bag.", level: "A1" },
      { tr: "Resimler duvarda.", en: "The pictures are on the wall.", level: "A1" },
      { tr: "Saat masada.", en: "The clock is on the table.", level: "A1" },
      { tr: "Bardak rafta.", en: "The glass is on the shelf.", level: "A1" },
      { tr: "Kuş ağaçta.", en: "The bird is in the tree.", level: "A1" },
      { tr: "Fare delikte.", en: "The mouse is in the hole.", level: "A1" },
      { tr: "Çiçek vazoda.", en: "The flower is in the vase.", level: "A1" },
      { tr: "Su bardakta.", en: "The water is in the glass.", level: "A1" },
      { tr: "Yemek tabakta.", en: "The food is on the plate.", level: "A1" },
      { tr: "Saat 9'da başlar.", en: "It starts at 9.", level: "A1" },
      { tr: "Pazartesi günü görüşürüz.", en: "We meet on Monday.", level: "A1" },
      { tr: "Sabah koşuyorum.", en: "I run in the morning.", level: "A1" },
      { tr: "Akşam televizyon izlerim.", en: "I watch TV in the evening.", level: "A1" },
      { tr: "Öğlende yemek yeriz.", en: "We eat lunch at noon.", level: "A1" },
      { tr: "Gece uyurum.", en: "I sleep at night.", level: "A1" },
      { tr: "Yaz ayında tatile gideriz.", en: "We go on vacation in summer.", level: "A1" },
      { tr: "Kışın kar yağar.", en: "It snows in winter.", level: "A1" },
      { tr: "İlkbaharda çiçekler açar.", en: "Flowers bloom in spring.", level: "A1" },
      { tr: "Sonbahar yapraklar düşer.", en: "Leaves fall in autumn.", level: "A1" },
      { tr: "Evde oturuyorum.", en: "I am sitting at home.", level: "A1" },
      { tr: "İşte çalışıyor.", en: "He is working at work.", level: "A1" },
      { tr: "Okulda ders çalışıyorum.", en: "I am studying at school.", level: "A1" },
      { tr: "Parkta oynuyorlar.", en: "They are playing in the park.", level: "A1" },
      { tr: "Bahçede koşuyorlar.", en: "They are running in the garden.", level: "A1" },
      { tr: "Sınıfta oturuyoruz.", en: "We are sitting in the classroom.", level: "A1" },
      { tr: "Kütüphanede okuyorum.", en: "I am reading in the library.", level: "A1" },
      { tr: "Müzede geziyoruz.", en: "We are visiting the museum.", level: "A1" },
      { tr: "Sinemada film izliyoruz.", en: "We are watching a movie in the cinema.", level: "A1" },
      { tr: "Restoranda yemek yiyoruz.", en: "We are eating in the restaurant.", level: "A1" },
      { tr: "Otobüste oturuyorum.", en: "I am sitting on the bus.", level: "A1" },
      { tr: "Trende seyahat ediyoruz.", en: "We are traveling on the train.", level: "A1" },
      { tr: "Uçakta uçuyoruz.", en: "We are flying in the plane.", level: "A1" },
      { tr: "Arabada oturuyorum.", en: "I am sitting in the car.", level: "A1" },
      { tr: "Bisiklette gidiyorum.", en: "I am going on the bike.", level: "A1" },
      { tr: "Masanın üzerinde kitap var.", en: "There is a book on the table.", level: "A1" },
      { tr: "Sandalyenin altında kedi var.", en: "There is a cat under the chair.", level: "A1" },
      { tr: "Çantanın içinde kalem var.", en: "There is a pen in the bag.", level: "A1" },
      { tr: "Duvarın üzerinde resim var.", en: "There is a picture on the wall.", level: "A1" },
      { tr: "Bahçenin içinde çiçek var.", en: "There are flowers in the garden.", level: "A1" },
      { tr: "Yatağın altında ayakkabı var.", en: "There are shoes under the bed.", level: "A1" },
      { tr: "Ağacın üstünde kuş var.", en: "There is a bird on the tree.", level: "A1" },
      { tr: "Kapının arkasında anahtar var.", en: "There is a key behind the door.", level: "A1" },
      { tr: "Rafın üstünde bardak var.", en: "There is a glass on the shelf.", level: "A1" },
      { tr: "Tabağın üzerinde yemek var.", en: "There is food on the plate.", level: "A1" },
      { tr: "Bardağın içinde su var.", en: "There is water in the glass.", level: "A1" },
      { tr: "Vazonun içinde çiçek var.", en: "There is a flower in the vase.", level: "A1" },
      { tr: "Deliğin içinde fare var.", en: "There is a mouse in the hole.", level: "A1" },
      { tr: "Sınıfın içinde çocuklar var.", en: "There are children in the classroom.", level: "A1" },
      { tr: "Garajın içinde araba var.", en: "There is a car in the garage.", level: "A1" },
      { tr: "Parkın içinde köpek var.", en: "There is a dog in the park.", level: "A1" },
      { tr: "Ben evdeyim.", en: "I am at home.", level: "A1" },
      { tr: "O iştedir.", en: "He is at work.", level: "A1" },
      { tr: "Biz okuldayız.", en: "We are at school.", level: "A1" },
      { tr: "Onlar parktalar.", en: "They are in the park.", level: "A1" },
      { tr: "Sen neredesin?", en: "Where are you?", level: "A1" },
      { tr: "O evde mi?", en: "Is he at home?", level: "A1" },
      { tr: "Onlar işte mi?", en: "Are they at work?", level: "A1" },
      { tr: "Siz okulda mısınız?", en: "Are you at school?", level: "A1" },
      { tr: "Kitap nerede?", en: "Where is the book?", level: "A1" },
      { tr: "Kedi nerede?", en: "Where is the cat?", level: "A1" },
      { tr: "Kalem nerede?", en: "Where is the pen?", level: "A1" },
      { tr: "Anahtarlar nerede?", en: "Where are the keys?", level: "A1" },
      { tr: "Ayakkabılar nerede?", en: "Where are the shoes?", level: "A1" },
      { tr: "Çocuklar nerede?", en: "Where are the children?", level: "A1" },
      { tr: "Köpek nerede?", en: "Where is the dog?", level: "A1" },
      { tr: "Araba nerede?", en: "Where is the car?", level: "A1" },
      { tr: "Telefon nerede?", en: "Where is the phone?", level: "A1" },
      { tr: "Saat nerede?", en: "Where is the clock?", level: "A1" },
      { tr: "Bardak nerede?", en: "Where is the glass?", level: "A1" },
      { tr: "Tabak nerede?", en: "Where is the plate?", level: "A1" }
    ],
    enToTr: [
      { en: "The cup is on the table.", tr: "Fincan masanın üzerinde.", level: "A1" },
      { en: "He is sitting at the desk.", tr: "O masada oturuyor.", level: "A1" },
      { en: "The ball is under the bed.", tr: "Top yatağın altında.", level: "A1" },
      { en: "She lives in Turkey.", tr: "O Türkiye'de yaşıyor.", level: "A1" },
      { en: "The bank is next to the post office.", tr: "Banka postanenin yanında.", level: "A1" },
      { en: "The cat is behind the sofa.", tr: "Kedi kanepenin arkasında.", level: "A1" },
      { en: "We meet at 5 o'clock.", tr: "Saat 5'te buluşuyoruz.", level: "A1" },
      { en: "The phone is on the desk.", tr: "Telefon masanın üstünde.", level: "A1" },
      { en: "The museum is near the station.", tr: "Müze istasyonun yakınında.", level: "A1" },
      { en: "I sleep at night.", tr: "Gece uyurum.", level: "A1" },
      { en: "The book is on the table.", tr: "Kitap masanın üzerinde.", level: "A1" },
      { en: "The cat is under the chair.", tr: "Kedi sandalyenin altında.", level: "A1" },
      { en: "The children are in the park.", tr: "Çocuklar parkta.", level: "A1" },
      { en: "The picture is on the wall.", tr: "Resim duvarda.", level: "A1" },
      { en: "The school is behind the bridge.", tr: "Okul köprünün arkasında.", level: "A1" },
      { en: "The pen is in the bag.", tr: "Kalem çantanın içinde.", level: "A1" },
      { en: "The dog is next to the tree.", tr: "Köpek ağacın yanında.", level: "A1" },
      { en: "The key is behind the door.", tr: "Anahtar kapının arkasında.", level: "A1" },
      { en: "The bird is on the tree.", tr: "Kuş ağacın üstünde.", level: "A1" },
      { en: "The shoes are under the bed.", tr: "Ayakkabılar yatağın altında.", level: "A1" },
      { en: "The flowers are in the garden.", tr: "Çiçekler bahçede.", level: "A1" },
      { en: "We meet at 8 o'clock.", tr: "Saat 8'de buluşuyoruz.", level: "A1" },
      { en: "Where is the toilet?", tr: "Tuvalet nerede?", level: "A1" },
      { en: "The car is in the garage.", tr: "Araba garajda.", level: "A1" },
      { en: "The children are in the classroom.", tr: "Çocuklar sınıfta.", level: "A1" },
      { en: "The dog is in the garden.", tr: "Köpek bahçede.", level: "A1" },
      { en: "The keys are in the bag.", tr: "Anahtarlar çantada.", level: "A1" },
      { en: "The pictures are on the wall.", tr: "Resimler duvarda.", level: "A1" },
      { en: "The clock is on the table.", tr: "Saat masada.", level: "A1" },
      { en: "The glass is on the shelf.", tr: "Bardak rafta.", level: "A1" },
      { en: "The bird is in the tree.", tr: "Kuş ağaçta.", level: "A1" },
      { en: "The mouse is in the hole.", tr: "Fare delikte.", level: "A1" },
      { en: "The flower is in the vase.", tr: "Çiçek vazoda.", level: "A1" },
      { en: "The water is in the glass.", tr: "Su bardakta.", level: "A1" },
      { en: "The food is on the plate.", tr: "Yemek tabakta.", level: "A1" },
      { en: "It starts at 9.", tr: "Saat 9'da başlar.", level: "A1" },
      { en: "We meet on Monday.", tr: "Pazartesi günü görüşürüz.", level: "A1" },
      { en: "I run in the morning.", tr: "Sabah koşuyorum.", level: "A1" },
      { en: "I watch TV in the evening.", tr: "Akşam televizyon izlerim.", level: "A1" },
      { en: "We eat lunch at noon.", tr: "Öğlende yemek yeriz.", level: "A1" },
      { en: "I sleep at night.", tr: "Gece uyurum.", level: "A1" },
      { en: "We go on vacation in summer.", tr: "Yaz ayında tatile gideriz.", level: "A1" },
      { en: "It snows in winter.", tr: "Kışın kar yağar.", level: "A1" },
      { en: "Flowers bloom in spring.", tr: "İlkbaharda çiçekler açar.", level: "A1" },
      { en: "Leaves fall in autumn.", tr: "Sonbahar yapraklar düşer.", level: "A1" },
      { en: "I am sitting at home.", tr: "Evde oturuyorum.", level: "A1" },
      { en: "He is working at work.", tr: "İşte çalışıyor.", level: "A1" },
      { en: "I am studying at school.", tr: "Okulda ders çalışıyorum.", level: "A1" },
      { en: "They are playing in the park.", tr: "Parkta oynuyorlar.", level: "A1" },
      { en: "They are running in the garden.", tr: "Bahçede koşuyorlar.", level: "A1" },
      { en: "We are sitting in the classroom.", tr: "Sınıfta oturuyoruz.", level: "A1" },
      { en: "I am reading in the library.", tr: "Kütüphanede okuyorum.", level: "A1" },
      { en: "We are visiting the museum.", tr: "Müzede geziyoruz.", level: "A1" },
      { en: "We are watching a movie in the cinema.", tr: "Sinemada film izliyoruz.", level: "A1" },
      { en: "We are eating in the restaurant.", tr: "Restoranda yemek yiyoruz.", level: "A1" },
      { en: "I am sitting on the bus.", tr: "Otobüste oturuyorum.", level: "A1" },
      { en: "We are traveling on the train.", tr: "Trende seyahat ediyoruz.", level: "A1" },
      { en: "We are flying in the plane.", tr: "Uçakta uçuyoruz.", level: "A1" },
      { en: "I am sitting in the car.", tr: "Arabada oturuyorum.", level: "A1" },
      { en: "I am going on the bike.", tr: "Bisiklette gidiyorum.", level: "A1" },
      { en: "There is a book on the table.", tr: "Masanın üzerinde kitap var.", level: "A1" },
      { en: "There is a cat under the chair.", tr: "Sandalyenin altında kedi var.", level: "A1" },
      { en: "There is a pen in the bag.", tr: "Çantanın içinde kalem var.", level: "A1" },
      { en: "There is a picture on the wall.", tr: "Duvarın üzerinde resim var.", level: "A1" },
      { en: "There are flowers in the garden.", tr: "Bahçenin içinde çiçek var.", level: "A1" },
      { en: "There are shoes under the bed.", tr: "Yatağın altında ayakkabı var.", level: "A1" },
      { en: "There is a bird on the tree.", tr: "Ağacın üstünde kuş var.", level: "A1" },
      { en: "There is a key behind the door.", tr: "Kapının arkasında anahtar var.", level: "A1" },
      { en: "There is a glass on the shelf.", tr: "Rafın üstünde bardak var.", level: "A1" },
      { en: "There is food on the plate.", tr: "Tabağın üzerinde yemek var.", level: "A1" },
      { en: "There is water in the glass.", tr: "Bardağın içinde su var.", level: "A1" },
      { en: "There is a flower in the vase.", tr: "Vazonun içinde çiçek var.", level: "A1" },
      { en: "There is a mouse in the hole.", tr: "Deliğin içinde fare var.", level: "A1" },
      { en: "There are children in the classroom.", tr: "Sınıfın içinde çocuklar var.", level: "A1" },
      { en: "There is a car in the garage.", tr: "Garajın içinde araba var.", level: "A1" },
      { en: "There is a dog in the park.", tr: "Parkın içinde köpek var.", level: "A1" },
      { en: "I am at home.", tr: "Ben evdeyim.", level: "A1" },
      { en: "He is at work.", tr: "O iştedir.", level: "A1" },
      { en: "We are at school.", tr: "Biz okuldayız.", level: "A1" },
      { en: "They are in the park.", tr: "Onlar parktalar.", level: "A1" },
      { en: "Where are you?", tr: "Sen neredesin?", level: "A1" },
      { en: "Is he at home?", tr: "O evde mi?", level: "A1" },
      { en: "Are they at work?", tr: "Onlar işte mi?", level: "A1" },
      { en: "Are you at school?", tr: "Siz okulda mısınız?", level: "A1" },
      { en: "Where is the book?", tr: "Kitap nerede?", level: "A1" },
      { en: "Where is the cat?", tr: "Kedi nerede?", level: "A1" },
      { en: "Where is the pen?", tr: "Kalem nerede?", level: "A1" },
      { en: "Where are the keys?", tr: "Anahtarlar nerede?", level: "A1" },
      { en: "Where are the shoes?", tr: "Ayakkabılar nerede?", level: "A1" },
      { en: "Where are the children?", tr: "Çocuklar nerede?", level: "A1" },
      { en: "Where is the dog?", tr: "Köpek nerede?", level: "A1" },
      { en: "Where is the car?", tr: "Araba nerede?", level: "A1" },
      { en: "Where is the phone?", tr: "Telefon nerede?", level: "A1" },
      { en: "Where is the clock?", tr: "Saat nerede?", level: "A1" },
      { en: "Where is the glass?", tr: "Bardak nerede?", level: "A1" },
      { en: "Where is the plate?", tr: "Tabak nerede?", level: "A1" },
      { en: "The dog is on the sofa.", tr: "Köpek kanepede.", level: "A1" },
      { en: "The cat is in the box.", tr: "Kedi kutuda.", level: "A1" }
    ],
    vocabulary: [
      { en: "in", tr: "içinde, -de/-da", level: "A1" },
      { en: "on", tr: "üzerinde, üstünde", level: "A1" },
      { en: "at", tr: "-de/-da (konum/zaman)", level: "A1" },
      { en: "under", tr: "altında", level: "A1" },
      { en: "behind", tr: "arkasında", level: "A1" },
      { en: "in front of", tr: "önünde", level: "A2" },
      { en: "next to", tr: "yanında", level: "A1" },
      { en: "between", tr: "arasında", level: "A2" },
      { en: "near", tr: "yakınında", level: "A1" },
      { en: "opposite", tr: "karşısında", level: "A2" },
      { en: "above", tr: "yukarısında", level: "A2" },
      { en: "below", tr: "aşağısında", level: "A2" },
      { en: "inside", tr: "içeride", level: "A2" },
      { en: "outside", tr: "dışarıda", level: "A2" },
      { en: "over", tr: "üzerinde", level: "A2" },
      { en: "across", tr: "karşısında", level: "A2" },
      { en: "through", tr: "içinden", level: "A2" },
      { en: "along", tr: "boyunca", level: "A2" },
      { en: "around", tr: "etrafında", level: "A2" },
      { en: "beside", tr: "yanında", level: "A2" },
      { en: "by", tr: "yanında, ile (araç)", level: "A2" },
      { en: "with", tr: "ile, -le/-la", level: "A1" },
      { en: "without", tr: "olmadan, -siz/-sız", level: "A2" },
      { en: "from", tr: "-den/-dan", level: "A1" },
      { en: "to", tr: "-e/-a", level: "A1" },
      { en: "for", tr: "için", level: "A1" },
      { en: "about", tr: "hakkında", level: "A2" },
      { en: "during", tr: "boyunca, sırasında", level: "A2" },
      { en: "after", tr: "sonra", level: "A1" },
      { en: "before", tr: "önce", level: "A1" }
    ],
    errorHunt: [
      { wrong: "The book is in the table.", correct: "The book is on the table.", explanation: "'On' yüzey üzerinde olmak için kullanılır.", level: "A1" },
      { wrong: "She lives at Turkey.", correct: "She lives in Turkey.", explanation: "Ülkeler için 'in' kullanılır.", level: "A1" },
      { wrong: "The cat is on the chair.", correct: "The cat is under the chair.", explanation: "Altında anlamı için 'under' kullanılır.", level: "A1" },
      { wrong: "We meet in 5 o'clock.", correct: "We meet at 5 o'clock.", explanation: "Saat için 'at' kullanılır.", level: "A1" },
      { wrong: "The picture is at the wall.", correct: "The picture is on the wall.", explanation: "Duvarda asılı şeyler için 'on' kullanılır.", level: "A1" },
      { wrong: "He is sitting in the desk.", correct: "He is sitting at the desk.", explanation: "Masa başında oturmak için 'at' kullanılır.", level: "A2" },
      { wrong: "The ball is on the bed.", correct: "The ball is under the bed.", explanation: "Altında için 'under' doğru seçimdir.", level: "A1" },
      { wrong: "I live on Istanbul.", correct: "I live in Istanbul.", explanation: "Şehirler için 'in' kullanılır.", level: "A1" }
    ],
    roleplay: [
      { 
        scenario: "Birine kaleminin nerede olduğunu söylüyorsun (çantanın içinde).",
        options: [
          "It's at my bag.",
          "It's on my bag.",
          "It's in my bag.",
          "It's under my bag."
        ],
        correct: 2,
        explanation: "İçinde anlamı için 'in' kullanılır.",
        level: "A1"
      },
      { 
        scenario: "Arkadaşına buluşma saatini söylüyorsun (saat 3'te).",
        options: [
          "Let's meet in 3 o'clock.",
          "Let's meet on 3 o'clock.",
          "Let's meet at 3 o'clock.",
          "Let's meet under 3 o'clock."
        ],
        correct: 2,
        explanation: "Saat için 'at' edatı kullanılır.",
        level: "A1"
      },
      { 
        scenario: "Kedinin nerede olduğunu açıklıyorsun (masanın altında).",
        options: [
          "The cat is on the table.",
          "The cat is in the table.",
          "The cat is at the table.",
          "The cat is under the table."
        ],
        correct: 3,
        explanation: "'Under' altında anlamına gelir.",
        level: "A1"
      },
      { 
        scenario: "Evin nerede olduğunu tarif ediyorsun (parkın yanında).",
        options: [
          "It's next to the park.",
          "It's in the park.",
          "It's at the park.",
          "It's on the park."
        ],
        correct: 0,
        explanation: "'Next to' yanında anlamındadır.",
        level: "A1"
      },
      { 
        scenario: "Hangi ülkede yaşadığını söylüyorsun (Türkiye'de).",
        options: [
          "I live at Turkey.",
          "I live on Turkey.",
          "I live in Turkey.",
          "I live under Turkey."
        ],
        correct: 2,
        explanation: "Ülkeler için 'in' edatı kullanılır.",
        level: "A1"
      },
      { 
        scenario: "Resmin nerede olduğunu söylüyorsun (duvarda).",
        options: [
          "It's in the wall.",
          "It's at the wall.",
          "It's on the wall.",
          "It's under the wall."
        ],
        correct: 2,
        explanation: "Duvara asılı şeyler için 'on' kullanılır.",
        level: "A1"
      },
      { 
        scenario: "Köpeğin nerede durduğunu söylüyorsun (ağacın arkasında).",
        options: [
          "It's in front of the tree.",
          "It's behind the tree.",
          "It's on the tree.",
          "It's at the tree."
        ],
        correct: 1,
        explanation: "'Behind' arkasında demektir."
      },
      { 
        scenario: "Toplanma yerini belirtiyorsun (istasyonda).",
        options: [
          "Meet me in the station.",
          "Meet me on the station.",
          "Meet me at the station.",
          "Meet me under the station."
        ],
        correct: 2,
        explanation: "Belirli bir yerde buluşmak için 'at' kullanılır."
      }
    ]
  },
  
  daily_vocabulary: {
    name: "Daily Vocabulary",
    icon: "📚",
    description: "A1-A2 Günlük Kelimeler",
    trToEn: [
      { tr: "Merhaba, nasılsın?", en: "Hello, how are you?", level: "A1" },
      { tr: "İyiyim, teşekkür ederim.", en: "I'm fine, thank you.", level: "A1" },
      { tr: "Adın ne?", en: "What is your name?", level: "A1" },
      { tr: "Benim adım Ali.", en: "My name is Ali.", level: "A1" },
      { tr: "Kaç yaşındasın?", en: "How old are you?", level: "A1" },
      { tr: "Ben 25 yaşındayım.", en: "I am 25 years old.", level: "A1" },
      { tr: "Nerede yaşıyorsun?", en: "Where do you live?", level: "A1" },
      { tr: "İstanbul'da yaşıyorum.", en: "I live in Istanbul.", level: "A1" },
      { tr: "Ne iş yapıyorsun?", en: "What do you do?", level: "A1" },
      { tr: "Ben öğrenciyim.", en: "I am a student.", level: "A1" },
      { tr: "Bugün hava güzel.", en: "The weather is nice today.", level: "A1" },
      { tr: "Yarın görüşürüz.", en: "See you tomorrow.", level: "A1" },
      { tr: "Nerelisin?", en: "Where are you from?", level: "A1" },
      { tr: "Ben Türkiye'denim.", en: "I am from Turkey.", level: "A1" },
      { tr: "Saat kaç?", en: "What time is it?", level: "A1" },
      { tr: "Ne yapıyorsun?", en: "What are you doing?", level: "A1" },
      { tr: "Tuvalet nerede?", en: "Where is the toilet?", level: "A1" },
      { tr: "Anlamıyorum.", en: "I don't understand.", level: "A1" },
      { tr: "İyi geceler.", en: "Good night.", level: "A1" },
      { tr: "Hoşça kal.", en: "Goodbye.", level: "A1" },
      { tr: "Günaydın!", en: "Good morning!", level: "A1" },
      { tr: "Çok teşekkür ederim.", en: "Thank you very much.", level: "A1" },
      { tr: "Rica ederim.", en: "You're welcome.", level: "A1" },
      { tr: "Özür dilerim.", en: "I'm sorry.", level: "A1" },
      { tr: "Affedersiniz.", en: "Excuse me.", level: "A1" },
      { tr: "Acıktım.", en: "I'm hungry.", level: "A1" },
      { tr: "İyi günler!", en: "Have a nice day!", level: "A1" },
      { tr: "Sonra görüşürüz!", en: "See you later!", level: "A1" },
      { tr: "Telefon numaran nedir?", en: "What's your phone number?", level: "A1" },
      { tr: "Susadım.", en: "I'm thirsty.", level: "A1" },
      { tr: "Yorgunum.", en: "I'm tired.", level: "A1" },
      { tr: "Mutluyum.", en: "I'm happy.", level: "A1" },
      { tr: "Sorun değil.", en: "No problem.", level: "A1" },
      { tr: "Evet, lütfen.", en: "Yes, please.", level: "A1" },
      { tr: "Hayır, teşekkürler.", en: "No, thank you.", level: "A1" },
      { tr: "Ben hasta değilim.", en: "I am not sick.", level: "A1" },
      { tr: "O çok güzel.", en: "She is very beautiful.", level: "A1" },
      { tr: "Bu çok pahalı.", en: "This is very expensive.", level: "A1" },
      { tr: "O ucuz.", en: "That is cheap.", level: "A1" },
      { tr: "Bugün çok sıcak.", en: "It is very hot today.", level: "A1" },
      { tr: "Yarın soğuk olacak.", en: "It will be cold tomorrow.", level: "A1" },
      { tr: "Yağmur yağıyor.", en: "It is raining.", level: "A1" },
      { tr: "Kar yağıyor.", en: "It is snowing.", level: "A1" },
      { tr: "Güneşli bir gün.", en: "It is a sunny day.", level: "A1" },
      { tr: "Rüzgar esiyor.", en: "It is windy.", level: "A1" },
      { tr: "Ben çok açım.", en: "I am very hungry.", level: "A1" },
      { tr: "Sen çok susuzmusun.", en: "You are very thirsty.", level: "A1" },
      { tr: "O çok yorgun.", en: "He is very tired.", level: "A1" },
      { tr: "Biz mutluyuz.", en: "We are happy.", level: "A1" },
      { tr: "Onlar üzgünler.", en: "They are sad.", level: "A1" },
      { tr: "Ben evdeyim.", en: "I am at home.", level: "A1" },
      { tr: "O okulda.", en: "She is at school.", level: "A1" },
      { tr: "Biz işteyiz.", en: "We are at work.", level: "A1" },
      { tr: "Onlar parkta.", en: "They are at the park.", level: "A1" },
      { tr: "Su içiyorum.", en: "I am drinking water.", level: "A1" },
      { tr: "Yemek yiyorum.", en: "I am eating food.", level: "A1" },
      { tr: "Kitap okuyorum.", en: "I am reading a book.", level: "A1" },
      { tr: "Müzik dinliyorum.", en: "I am listening to music.", level: "A1" },
      { tr: "Televizyon izliyorum.", en: "I am watching TV.", level: "A1" },
      { tr: "Çalışıyorum.", en: "I am working.", level: "A1" },
      { tr: "Ders çalışıyorum.", en: "I am studying.", level: "A1" },
      { tr: "Uyuyorum.", en: "I am sleeping.", level: "A1" },
      { tr: "Yürüyorum.", en: "I am walking.", level: "A1" },
      { tr: "Koşuyorum.", en: "I am running.", level: "A1" },
      { tr: "Oynuyorum.", en: "I am playing.", level: "A1" },
      { tr: "Gülüyorum.", en: "I am laughing.", level: "A1" },
      { tr: "Ağlıyorum.", en: "I am crying.", level: "A1" },
      { tr: "Konuşuyorum.", en: "I am talking.", level: "A1" },
      { tr: "Yazıyorum.", en: "I am writing.", level: "A1" },
      { tr: "Çiziyorum.", en: "I am drawing.", level: "A1" },
      { tr: "Şarkı söylüyorum.", en: "I am singing.", level: "A1" },
      { tr: "Dans ediyorum.", en: "I am dancing.", level: "A1" },
      { tr: "Yüzüyorum.", en: "I am swimming.", level: "A1" },
      { tr: "Araba kullanıyorum.", en: "I am driving a car.", level: "A1" },
      { tr: "Bisiklet sürüyorum.", en: "I am riding a bike.", level: "A1" },
      { tr: "Otobüs bekliyorum.", en: "I am waiting for the bus.", level: "A1" },
      { tr: "Alışveriş yapıyorum.", en: "I am shopping.", level: "A1" },
      { tr: "Yemek pişiriyorum.", en: "I am cooking.", level: "A1" },
      { tr: "Temizlik yapıyorum.", en: "I am cleaning.", level: "A1" },
      { tr: "Duş alıyorum.", en: "I am taking a shower.", level: "A1" },
      { tr: "Giyiniyorum.", en: "I am getting dressed.", level: "A1" },
      { tr: "Kahvaltı yapıyorum.", en: "I am having breakfast.", level: "A1" },
      { tr: "Öğle yemeği yiyorum.", en: "I am having lunch.", level: "A1" },
      { tr: "Akşam yemeği yiyorum.", en: "I am having dinner.", level: "A1" },
      { tr: "Çay içiyorum.", en: "I am drinking tea.", level: "A1" },
      { tr: "Kahve içiyorum.", en: "I am drinking coffee.", level: "A1" },
      { tr: "Süt içiyorum.", en: "I am drinking milk.", level: "A1" },
      { tr: "Meyve suyu içiyorum.", en: "I am drinking juice.", level: "A1" },
      { tr: "Ekmek yiyorum.", en: "I am eating bread.", level: "A1" },
      { tr: "Meyve yiyorum.", en: "I am eating fruit.", level: "A1" },
      { tr: "Sebze yiyorum.", en: "I am eating vegetables.", level: "A1" },
      { tr: "Et yiyorum.", en: "I am eating meat.", level: "A1" },
      { tr: "Balık yiyorum.", en: "I am eating fish.", level: "A1" },
      { tr: "Pasta yiyorum.", en: "I am eating cake.", level: "A1" },
      { tr: "Dondurma yiyorum.", en: "I am eating ice cream.", level: "A1" },
      { tr: "Bir soru soruyorum.", en: "I am asking a question.", level: "A1" },
      { tr: "Cevap veriyorum.", en: "I am answering.", level: "A1" },
      { tr: "Yardım istiyorum.", en: "I am asking for help.", level: "A1" }
    ],
    enToTr: [
      { en: "Good morning!", tr: "Günaydın!", level: "A1" },
      { en: "Good night!", tr: "İyi geceler!", level: "A1" },
      { en: "Thank you very much.", tr: "Çok teşekkür ederim.", level: "A1" },
      { en: "You're welcome.", tr: "Rica ederim.", level: "A1" },
      { en: "I'm sorry.", tr: "Özür dilerim.", level: "A1" },
      { en: "Excuse me.", tr: "Affedersiniz.", level: "A1" },
      { en: "I don't understand.", tr: "Anlamıyorum.", level: "A1" },
      { en: "Where is the bathroom?", tr: "Tuvalet nerede?", level: "A1" },
      { en: "I'm hungry.", tr: "Acıktım.", level: "A1" },
      { en: "Have a nice day!", tr: "İyi günler!", level: "A1" },
      { en: "See you later!", tr: "Sonra görüşürüz!", level: "A1" },
      { en: "What's your phone number?", tr: "Telefon numaran nedir?", level: "A1" },
      { en: "I'm thirsty.", tr: "Susadım.", level: "A1" },
      { en: "I'm tired.", tr: "Yorgunum.", level: "A1" },
      { en: "I'm happy.", tr: "Mutluyum.", level: "A1" },
      { en: "No problem.", tr: "Sorun değil.", level: "A1" },
      { en: "Hello, how are you?", tr: "Merhaba, nasılsın?", level: "A1" },
      { en: "I'm fine, thank you.", tr: "İyiyim, teşekkür ederim.", level: "A1" },
      { en: "What is your name?", tr: "Adın ne?", level: "A1" },
      { en: "My name is Ali.", tr: "Benim adım Ali.", level: "A1" },
      { en: "How old are you?", tr: "Kaç yaşındasın?", level: "A1" },
      { en: "I am 25 years old.", tr: "Ben 25 yaşındayım.", level: "A1" },
      { en: "Where do you live?", tr: "Nerede yaşıyorsun?", level: "A1" },
      { en: "I live in Istanbul.", tr: "İstanbul'da yaşıyorum.", level: "A1" },
      { en: "What do you do?", tr: "Ne iş yapıyorsun?", level: "A1" },
      { en: "I am a student.", tr: "Ben öğrenciyim.", level: "A1" },
      { en: "The weather is nice today.", tr: "Bugün hava güzel.", level: "A1" },
      { en: "See you tomorrow.", tr: "Yarın görüşürüz.", level: "A1" },
      { en: "Where are you from?", tr: "Nerelisin?", level: "A1" },
      { en: "I am from Turkey.", tr: "Ben Türkiye'denim.", level: "A1" },
      { en: "What time is it?", tr: "Saat kaç?", level: "A1" },
      { en: "What are you doing?", tr: "Ne yapıyorsun?", level: "A1" },
      { en: "Where is the toilet?", tr: "Tuvalet nerede?", level: "A1" },
      { en: "Goodbye.", tr: "Hoşça kal.", level: "A1" },
      { en: "Yes, please.", tr: "Evet, lütfen.", level: "A1" },
      { en: "No, thank you.", tr: "Hayır, teşekkürler.", level: "A1" },
      { en: "I am not sick.", tr: "Ben hasta değilim.", level: "A1" },
      { en: "She is very beautiful.", tr: "O çok güzel.", level: "A1" },
      { en: "This is very expensive.", tr: "Bu çok pahalı.", level: "A1" },
      { en: "That is cheap.", tr: "O ucuz.", level: "A1" },
      { en: "It is very hot today.", tr: "Bugün çok sıcak.", level: "A1" },
      { en: "It will be cold tomorrow.", tr: "Yarın soğuk olacak.", level: "A1" },
      { en: "It is raining.", tr: "Yağmur yağıyor.", level: "A1" },
      { en: "It is snowing.", tr: "Kar yağıyor.", level: "A1" },
      { en: "It is a sunny day.", tr: "Güneşli bir gün.", level: "A1" },
      { en: "It is windy.", tr: "Rüzgar esiyor.", level: "A1" },
      { en: "I am very hungry.", tr: "Ben çok açım.", level: "A1" },
      { en: "You are very thirsty.", tr: "Sen çok susuzmusun.", level: "A1" },
      { en: "He is very tired.", tr: "O çok yorgun.", level: "A1" },
      { en: "We are happy.", tr: "Biz mutluyuz.", level: "A1" },
      { en: "They are sad.", tr: "Onlar üzgünler.", level: "A1" },
      { en: "I am at home.", tr: "Ben evdeyim.", level: "A1" },
      { en: "She is at school.", tr: "O okulda.", level: "A1" },
      { en: "We are at work.", tr: "Biz işteyiz.", level: "A1" },
      { en: "They are at the park.", tr: "Onlar parkta.", level: "A1" },
      { en: "I am drinking water.", tr: "Su içiyorum.", level: "A1" },
      { en: "I am eating food.", tr: "Yemek yiyorum.", level: "A1" },
      { en: "I am reading a book.", tr: "Kitap okuyorum.", level: "A1" },
      { en: "I am listening to music.", tr: "Müzik dinliyorum.", level: "A1" },
      { en: "I am watching TV.", tr: "Televizyon izliyorum.", level: "A1" },
      { en: "I am working.", tr: "Çalışıyorum.", level: "A1" },
      { en: "I am studying.", tr: "Ders çalışıyorum.", level: "A1" },
      { en: "I am sleeping.", tr: "Uyuyorum.", level: "A1" },
      { en: "I am walking.", tr: "Yürüyorum.", level: "A1" },
      { en: "I am running.", tr: "Koşuyorum.", level: "A1" },
      { en: "I am playing.", tr: "Oynuyorum.", level: "A1" },
      { en: "I am laughing.", tr: "Gülüyorum.", level: "A1" },
      { en: "I am crying.", tr: "Ağlıyorum.", level: "A1" },
      { en: "I am talking.", tr: "Konuşuyorum.", level: "A1" },
      { en: "I am writing.", tr: "Yazıyorum.", level: "A1" },
      { en: "I am drawing.", tr: "Çiziyorum.", level: "A1" },
      { en: "I am singing.", tr: "Şarkı söylüyorum.", level: "A1" },
      { en: "I am dancing.", tr: "Dans ediyorum.", level: "A1" },
      { en: "I am swimming.", tr: "Yüzüyorum.", level: "A1" },
      { en: "I am driving a car.", tr: "Araba kullanıyorum.", level: "A1" },
      { en: "I am riding a bike.", tr: "Bisiklet sürüyorum.", level: "A1" },
      { en: "I am waiting for the bus.", tr: "Otobüs bekliyorum.", level: "A1" },
      { en: "I am shopping.", tr: "Alışveriş yapıyorum.", level: "A1" },
      { en: "I am cooking.", tr: "Yemek pişiriyorum.", level: "A1" },
      { en: "I am cleaning.", tr: "Temizlik yapıyorum.", level: "A1" },
      { en: "I am taking a shower.", tr: "Duş alıyorum.", level: "A1" },
      { en: "I am getting dressed.", tr: "Giyiniyorum.", level: "A1" },
      { en: "I am having breakfast.", tr: "Kahvaltı yapıyorum.", level: "A1" },
      { en: "I am having lunch.", tr: "Öğle yemeği yiyorum.", level: "A1" },
      { en: "I am having dinner.", tr: "Akşam yemeği yiyorum.", level: "A1" },
      { en: "I am drinking tea.", tr: "Çay içiyorum.", level: "A1" },
      { en: "I am drinking coffee.", tr: "Kahve içiyorum.", level: "A1" },
      { en: "I am drinking milk.", tr: "Süt içiyorum.", level: "A1" },
      { en: "I am drinking juice.", tr: "Meyve suyu içiyorum.", level: "A1" },
      { en: "I am eating bread.", tr: "Ekmek yiyorum.", level: "A1" },
      { en: "I am eating fruit.", tr: "Meyve yiyorum.", level: "A1" },
      { en: "I am eating vegetables.", tr: "Sebze yiyorum.", level: "A1" },
      { en: "I am eating meat.", tr: "Et yiyorum.", level: "A1" },
      { en: "I am eating fish.", tr: "Balık yiyorum.", level: "A1" },
      { en: "I am eating cake.", tr: "Pasta yiyorum.", level: "A1" },
      { en: "I am eating ice cream.", tr: "Dondurma yiyorum.", level: "A1" },
      { en: "I am asking a question.", tr: "Bir soru soruyorum.", level: "A1" },
      { en: "I am answering.", tr: "Cevap veriyorum.", level: "A1" },
      { en: "I am asking for help.", tr: "Yardım istiyorum.", level: "A1" }
    ],
    vocabulary: [
      { en: "hello", tr: "merhaba", level: "A1" },
      { en: "goodbye", tr: "güle güle", level: "A1" },
      { en: "please", tr: "lütfen", level: "A1" },
      { en: "thank you", tr: "teşekkür ederim", level: "A1" },
      { en: "yes", tr: "evet", level: "A1" },
      { en: "no", tr: "hayır", level: "A1" },
      { en: "water", tr: "su", level: "A1" },
      { en: "food", tr: "yemek", level: "A1" },
      { en: "house", tr: "ev", level: "A1" },
      { en: "family", tr: "aile", level: "A1" },
      { en: "friend", tr: "arkadaş", level: "A1" },
      { en: "school", tr: "okul", level: "A1" },
      { en: "work", tr: "iş", level: "A1" },
      { en: "money", tr: "para", level: "A1" },
      { en: "time", tr: "zaman", level: "A1" },
      { en: "day", tr: "gün", level: "A1" },
      { en: "today", tr: "bugün", level: "A1" },
      { en: "tomorrow", tr: "yarın", level: "A1" },
      { en: "yesterday", tr: "dün", level: "A1" },
      { en: "now", tr: "şimdi", level: "A1" },
      { en: "morning", tr: "sabah", level: "A1" },
      { en: "evening", tr: "akşam", level: "A1" },
      { en: "night", tr: "gece", level: "A1" },
      { en: "week", tr: "hafta", level: "A1" },
      { en: "month", tr: "ay", level: "A2" },
      { en: "year", tr: "yıl", level: "A1" },
      { en: "name", tr: "isim", level: "A1" },
      { en: "age", tr: "yaş", level: "A1" },
      { en: "person", tr: "kişi", level: "A1" },
      { en: "man", tr: "adam", level: "A1" },
      { en: "woman", tr: "kadın", level: "A1" },
      { en: "child", tr: "çocuk", level: "A1" },
      { en: "book", tr: "kitap", level: "A1" },
      { en: "phone", tr: "telefon", level: "A1" },
      { en: "car", tr: "araba", level: "A1" }
    ],
    errorHunt: [
      { wrong: "How are you name?", correct: "What is your name?", explanation: "İsim sormak için 'What' kullanılır.", level: "A1" },
      { wrong: "I have 25 years.", correct: "I am 25 years old.", explanation: "Yaş için 'be' fiili kullanılır.", level: "A1" },
      { wrong: "I live at Istanbul.", correct: "I live in Istanbul.", explanation: "Şehirler için 'in' kullanılır.", level: "A1" },
      { wrong: "Where is you from?", correct: "Where are you from?", explanation: "'You' ile 'are' kullanılır.", level: "A1" },
      { wrong: "Good morning! Nice to meet you! I fine.", correct: "Good morning! Nice to meet you! I am fine.", explanation: "'Be' fiili eksik.", level: "A1" },
      { wrong: "Thank you very much. Welcome.", correct: "Thank you very much. You're welcome.", explanation: "'You're welcome' = Rica ederim.", level: "A1" },
      { wrong: "How much cost this?", correct: "How much does this cost?", explanation: "Soru cümlesinde yardımcı fiil 'does' gereklidir.", level: "A2" },
      { wrong: "I no understand.", correct: "I don't understand.", explanation: "İngilizce'de olumsuz için 'don't/doesn't' kullanılır.", level: "A1" }
    ],
    roleplay: [
      { 
        scenario: "Birine ilk kez tanışıyorsun, adını söyle.",
        options: [
          "My name Ali.",
          "I am name is Ali.",
          "My name is Ali.",
          "Name is Ali."
        ],
        correct: 2,
        explanation: "İsim tanıtımı: 'My name is + isim'",
        level: "A1"
      },
      { 
        scenario: "Birisi sana teşekkür etti, nazikçe cevap ver.",
        options: [
          "No problem.",
          "You're welcome.",
          "Okay.",
          "Yes."
        ],
        correct: 1,
        explanation: "'You're welcome' teşekküre en yaygın karşılıktır.",
        level: "A1"
      },
      { 
        scenario: "Yaşını söylemen gerekiyor.",
        options: [
          "I have 20 years.",
          "I 20 years old.",
          "I am 20 years old.",
          "My age 20."
        ],
        correct: 2,
        explanation: "Yaş için: 'I am + sayı + years old'",
        level: "A1"
      },
      { 
        scenario: "Birine sabah selamlaşıyorsun.",
        options: [
          "Good night!",
          "Good evening!",
          "Good afternoon!",
          "Good morning!"
        ],
        correct: 3,
        explanation: "'Good morning' sabah selamlaşmasıdır.",
        level: "A1"
      },
      { 
        scenario: "Bir şey anlamadın, kibarca söyle.",
        options: [
          "I no understand.",
          "I not understand.",
          "I don't understand.",
          "I doesn't understand."
        ],
        correct: 2,
        explanation: "Olumsuz: 'I don't + fiil'",
        level: "A1"
      },
      { 
        scenario: "Nerede yaşadığını söylüyorsun.",
        options: [
          "I live at Ankara.",
          "I live on Ankara.",
          "I living in Ankara.",
          "I live in Ankara."
        ],
        correct: 3,
        explanation: "Şehir için 'in' kullanılır ve 'live' Present Simple.",
        level: "A1"
      },
      { 
        scenario: "Acıktığını ifade ediyorsun.",
        options: [
          "I am hungry.",
          "I have hungry.",
          "I hungry.",
          "I am have hungry."
        ],
        correct: 0,
        explanation: "'Hungry' sıfat, 'be' fiili ile kullanılır.",
        level: "A1"
      },
      { 
        scenario: "Birinden yardım istiyorsun.",
        options: [
          "You help me?",
          "Can you help me?",
          "Help me you?",
          "You can help me?"
        ],
        correct: 1,
        explanation: "Kibarca istek: 'Can you + fiil?'",
        level: "A2"
      }
    ]
  }
};

// ==================== OYUN MODLARI ====================
const MODES = {
  mcq: {
    name: "Doğruyu Vur",
    icon: "🎯",
    description: "Çoktan seçmeli sorular",
    questionCount: 10,
    allowCustomCount: true
  },
  sentenceBuild: {
    name: "Cümle İnşa Et",
    icon: "🧩",
    description: "Kelimeleri doğru sırala",
    questionCount: 8,
    allowCustomCount: true
  },
  quickTranslate: {
    name: "Hızlı Çevir",
    icon: "⚡",
    description: "30 saniyede çevir",
    questionCount: 15,
    timeLimit: 30,
    allowCustomCount: true
  },
  errorHunt: {
    name: "Hata Bul",
    icon: "🔍",
    description: "Yanlışı yakala",
    questionCount: 8,
    allowCustomCount: true
  },
  matching: {
    name: "Eşleştir",
    icon: "🔗",
    description: "Kelimeleri eşleştir",
    pairCount: 8,
    allowCustomCount: true
  },
  roleplay: {
    name: "Duruma Göre Konuş",
    icon: "🎭",
    description: "En uygun cümleyi seç",
    questionCount: 8,
    allowCustomCount: true
  }
};

// ==================== SORU SAYISI SEÇENEKLERİ ====================
const QUESTION_COUNT_OPTIONS = [10, 20, 30, 40, 50];

// ==================== SEVİYE SİSTEMİ ====================
const LEVELS = {
  A1: {
    name: "A1 - Başlangıç",
    icon: "🌱",
    description: "Temel kelimeler ve basit cümleler",
    color: "#4CAF50"
  },
  A2: {
    name: "A2 - Temel",
    icon: "🌿",
    description: "Günlük konuşmalar ve basit ifadeler",
    color: "#8BC34A"
  },
  B1: {
    name: "B1 - Orta",
    icon: "🌳",
    description: "Orta seviye dil kullanımı",
    color: "#FFC107"
  },
  B2: {
    name: "B2 - Orta Üstü",
    icon: "🎯",
    description: "İleri seviye konuşma ve yazma",
    color: "#FF9800"
  }
};

// ==================== UYGULAMA DURUMU ====================
const state = {
  currentScreen: 'home', // home, levelSelect, topicSelect, modeSelect, questionCountSelect, game, result
  selectedLevel: null, // A1, A2, B1, B2
  selectedTopics: [], // Artık çoklu seçim
  selectedMode: null,
  selectedQuestionCount: null,
  score: 0,
  questionIndex: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  questions: [],
  currentQuestion: null,
  timer: null,
  timerInterval: null,
  // Cümle inşa için
  selectedWords: [],
  // Eşleştirme için
  selectedCards: [],
  matchedPairs: 0,
  // Cevap kontrolü için
  answered: false
};

// ==================== DOM ELEMENTLER ====================
const mainContent = document.getElementById('mainContent');
const headerInfo = document.getElementById('headerInfo');

// ==================== EKRAN YÖNLENDİRME ====================
function navigateTo(screen) {
  state.currentScreen = screen;
  
  switch(screen) {
    case 'home':
      renderHome();
      break;
    case 'levelSelect':
      renderLevelSelect();
      break;
    case 'topicSelect':
      renderTopicSelect();
      break;
    case 'modeSelect':
      renderModeSelect();
      break;
    case 'questionCountSelect':
      renderQuestionCountSelect();
      break;
    case 'game':
      renderGame();
      break;
    case 'result':
      renderResult();
      break;
  }
}

// ==================== HOME EKRANI ====================
function renderHome() {
  headerInfo.innerHTML = '';
  
  mainContent.innerHTML = `
    <div class="container home-screen">
      <div class="home-icon">🎮</div>
      <h2>İngilizce-Türkçe Mini Oyunlar</h2>
      <p>
        6 farklı oyun moduyla İngilizce öğrenmenin eğlenceli yolu!<br>
        Seviyeni seç, konunu belirle ve öğrenmeye başla.
      </p>
      <button class="btn btn-primary" onclick="navigateTo('levelSelect')">
        🚀 Başla
      </button>
    </div>
  `;
}

// ==================== SEVİYE SEÇİMİ ====================
function renderLevelSelect() {
  headerInfo.innerHTML = '<span>📊 Seviye Seçimi</span>';
  
  let cardsHTML = '';
  for (let key in LEVELS) {
    const level = LEVELS[key];
    cardsHTML += `
      <div class="card level-card" onclick="selectLevel('${key}')" tabindex="0" 
           onkeypress="if(event.key==='Enter') selectLevel('${key}')"
           style="border-color: ${level.color};">
        <div class="card-icon">${level.icon}</div>
        <h3>${level.name}</h3>
        <p>${level.description}</p>
      </div>
    `;
  }
  
  mainContent.innerHTML = `
    <div class="container">
      <h2 class="text-center mb-2">Seviyenizi Seçin</h2>
      <p class="text-center mb-3" style="color: #666;">
        İngilizce seviyenize uygun sorular alacaksınız
      </p>
      <div class="cards-grid">
        ${cardsHTML}
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary" onclick="navigateTo('home')">
          ⬅ Geri
        </button>
      </div>
    </div>
  `;
}

function selectLevel(levelKey) {
  state.selectedLevel = levelKey;
  navigateTo('topicSelect');
}

// ==================== KONU SEÇİMİ ====================
function renderTopicSelect() {
  const level = LEVELS[state.selectedLevel];
  headerInfo.innerHTML = `
    <span>${level.icon} ${level.name}</span>
    <span>📚 Konu Seçimi</span>
  `;
  
  let cardsHTML = '';
  for (let key in DATA) {
    const topic = DATA[key];
    const isSelected = state.selectedTopics.includes(key);
    
    cardsHTML += `
      <div class="topic-card ${isSelected ? 'selected' : ''}" onclick="toggleTopic('${key}')" tabindex="0" 
           onkeypress="if(event.key==='Enter') toggleTopic('${key}')">
        <div class="checkbox-wrapper">
          <input type="checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation()">
        </div>
        <div class="card-icon">${topic.icon}</div>
        <h3>${topic.name}</h3>
        <p>${topic.description}</p>
      </div>
    `;
  }
  
  mainContent.innerHTML = `
    <div class="container">
      <h2 class="text-center mb-2">Konuları Seçin</h2>
      <p class="text-center mb-3" style="color: #666;">
        Birden fazla konu seçebilirsiniz. ${level.name} seviyesine uygun sorular gelecek.
      </p>
      <div class="cards-grid">
        ${cardsHTML}
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary" onclick="navigateTo('levelSelect')">
          ⬅ Geri
        </button>
        <button class="btn btn-primary" onclick="proceedToModeSelect()" 
                ${state.selectedTopics.length === 0 ? 'disabled' : ''}>
          Devam Et (${state.selectedTopics.length} konu seçildi) ➡
        </button>
      </div>
    </div>
  `;
}

function toggleTopic(topicKey) {
  const index = state.selectedTopics.indexOf(topicKey);
  if (index === -1) {
    // Ekle
    state.selectedTopics.push(topicKey);
  } else {
    // Çıkar
    state.selectedTopics.splice(index, 1);
  }
  renderTopicSelect();
}

function proceedToModeSelect() {
  if (state.selectedTopics.length === 0) {
    alert('Lütfen en az bir konu seçin!');
    return;
  }
  navigateTo('modeSelect');
}

function selectTopic(topicKey) {
  state.selectedTopics = [topicKey];
  navigateTo('modeSelect');
}

// ==================== MOD SEÇİMİ ====================
function renderModeSelect() {
  const level = LEVELS[state.selectedLevel];
  const topicNames = state.selectedTopics.map(key => DATA[key].name).join(', ');
  headerInfo.innerHTML = `
    <span>${level.icon} ${level.name}</span>
    <span>📚 ${topicNames}</span>
  `;
  
  let cardsHTML = '';
  for (let key in MODES) {
    const mode = MODES[key];
    cardsHTML += `
      <div class="card" onclick="selectMode('${key}')" tabindex="0"
           onkeypress="if(event.key==='Enter') selectMode('${key}')">
        <div class="card-icon">${mode.icon}</div>
        <h3>${mode.name}</h3>
        <p>${mode.description}</p>
      </div>
    `;
  }
  
  mainContent.innerHTML = `
    <div class="container">
      <h2 class="text-center mb-3">Bir Oyun Modu Seçin</h2>
      <div class="cards-grid">
        ${cardsHTML}
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary" onclick="navigateTo('topicSelect')">
          ⬅ Geri
        </button>
      </div>
    </div>
  `;
}

function selectMode(modeKey) {
  state.selectedMode = modeKey;
  const mode = MODES[modeKey];
  
  // Eğer mod soru sayısı seçimine izin veriyorsa, soru sayısı ekranına git
  if (mode.allowCustomCount) {
    navigateTo('questionCountSelect');
  } else {
    // Aksi halde direkt oyunu başlat
    state.selectedQuestionCount = mode.questionCount || mode.pairCount || 10;
    initGame();
    navigateTo('game');
  }
}

// ==================== SORU SAYISI SEÇİMİ ====================
function renderQuestionCountSelect() {
  const level = LEVELS[state.selectedLevel];
  const topicNames = state.selectedTopics.map(key => DATA[key].name).join(', ');
  const mode = MODES[state.selectedMode];
  
  headerInfo.innerHTML = `
    <span>${level.icon} ${level.name}</span>
    <span>📚 ${topicNames}</span>
    <span>${mode.icon} ${mode.name}</span>
  `;
  
  let cardsHTML = '';
  QUESTION_COUNT_OPTIONS.forEach(count => {
    cardsHTML += `
      <div class="card" onclick="selectQuestionCount(${count})" tabindex="0"
           onkeypress="if(event.key==='Enter') selectQuestionCount(${count})">
        <div class="card-icon">🔢</div>
        <h3>${count} Soru</h3>
        <p>${state.selectedMode === 'matching' ? count + ' çift eşleştirme' : count + ' soru çöz'}</p>
      </div>
    `;
  });
  
  mainContent.innerHTML = `
    <div class="container">
      <h2 class="text-center mb-3">Kaç Soru Çözmek İstersiniz?</h2>
      <div class="cards-grid">
        ${cardsHTML}
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary" onclick="navigateTo('modeSelect')">
          ⬅ Geri
        </button>
      </div>
    </div>
  `;
}

function selectQuestionCount(count) {
  state.selectedQuestionCount = count;
  initGame();
  navigateTo('game');
}

// ==================== OYUN BAŞLATMA ====================
function initGame() {
  // Durumu sıfırla
  state.score = 0;
  state.questionIndex = 0;
  state.correctAnswers = 0;
  state.wrongAnswers = 0;
  state.questions = [];
  state.answered = false;
  state.selectedWords = [];
  state.selectedCards = [];
  state.matchedPairs = 0;
  
  // Timer temizle
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  
  // Tüm seçili konuları birleştir
  const combinedTopic = combineTopics(state.selectedTopics);
  
  // Soruları hazırla
  const mode = MODES[state.selectedMode];
  const questionCount = state.selectedQuestionCount || mode.questionCount || 10;
  
  switch(state.selectedMode) {
    case 'mcq':
      generateMCQQuestions(combinedTopic, questionCount);
      break;
    case 'sentenceBuild':
      generateSentenceBuildQuestions(combinedTopic, questionCount);
      break;
    case 'quickTranslate':
      generateQuickTranslateQuestions(combinedTopic, questionCount);
      state.timer = mode.timeLimit;
      break;
    case 'errorHunt':
      generateErrorHuntQuestions(combinedTopic, questionCount);
      break;
    case 'matching':
      generateMatchingPairs(combinedTopic, questionCount);
      break;
    case 'roleplay':
      generateRoleplayQuestions(combinedTopic, questionCount);
      break;
  }
}

// Birden fazla konuyu birleştir ve seviyeye göre filtrele
function combineTopics(topicKeys) {
  const combined = {
    name: topicKeys.map(key => DATA[key].name).join(' + '),
    trToEn: [],
    enToTr: [],
    vocabulary: [],
    errorHunt: [],
    roleplay: []
  };
  
  // Seviye hiyerarşisi: A1 < A2 < B1 < B2
  const levelOrder = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4 };
  const selectedLevelValue = levelOrder[state.selectedLevel];
  
  topicKeys.forEach(key => {
    const topic = DATA[key];
    
    // Her kategoriyi seviyeye göre filtrele
    combined.trToEn.push(...filterByLevel(topic.trToEn, selectedLevelValue, levelOrder));
    combined.enToTr.push(...filterByLevel(topic.enToTr, selectedLevelValue, levelOrder));
    combined.vocabulary.push(...filterByLevel(topic.vocabulary, selectedLevelValue, levelOrder));
    combined.errorHunt.push(...filterByLevel(topic.errorHunt, selectedLevelValue, levelOrder));
    combined.roleplay.push(...filterByLevel(topic.roleplay, selectedLevelValue, levelOrder));
  });
  
  return combined;
}

// Seviyeye göre filtreleme fonksiyonu
function filterByLevel(items, selectedLevelValue, levelOrder) {
  return items.filter(item => {
    // Eğer item'in level'ı yoksa (eski veriler için), tüm seviyelerde göster
    if (!item.level) return true;
    
    const itemLevelValue = levelOrder[item.level];
    // Seçilen seviye ve altındaki seviyeleri dahil et
    return itemLevelValue <= selectedLevelValue;
  });
}

// ==================== OYUN RENDER ====================
function renderGame() {
  const mode = MODES[state.selectedMode];
  const level = LEVELS[state.selectedLevel];
  const topicNames = state.selectedTopics.map(key => DATA[key].name).join(' + ');
  
  // Header bilgisi
  let timerHTML = '';
  if (state.selectedMode === 'quickTranslate') {
    timerHTML = `
      <div class="info-item">
        <label>Süre</label>
        <span class="timer" id="timerDisplay">${state.timer}s</span>
      </div>
    `;
    
    // Timer başlat
    if (!state.timerInterval) {
      state.timerInterval = setInterval(updateTimer, 1000);
    }
  }
  
  let questionInfo = '';
  if (state.selectedMode !== 'matching') {
    questionInfo = `
      <div class="info-item">
        <label>Soru</label>
        <span>${state.questionIndex + 1}/${state.questions.length}</span>
      </div>
    `;
  }
  
  headerInfo.innerHTML = `
    <span>${level.icon} ${level.name}</span>
    <span>📚 ${topicNames}</span>
    <span>${mode.icon} ${mode.name}</span>
    <span>⭐ Skor: ${state.score}</span>
  `;
  
  let contentHTML = '';
  
  switch(state.selectedMode) {
    case 'mcq':
      contentHTML = renderMCQ();
      break;
    case 'sentenceBuild':
      contentHTML = renderSentenceBuild();
      break;
    case 'quickTranslate':
      contentHTML = renderQuickTranslate();
      break;
    case 'errorHunt':
      contentHTML = renderErrorHunt();
      break;
    case 'matching':
      contentHTML = renderMatching();
      break;
    case 'roleplay':
      contentHTML = renderRoleplay();
      break;
  }
  
  mainContent.innerHTML = `
    <div class="container">
      <div class="game-header">
        <div class="game-info">
          ${questionInfo}
          <div class="info-item">
            <label>Skor</label>
            <span>${state.score}</span>
          </div>
          ${timerHTML}
        </div>
      </div>
      ${contentHTML}
    </div>
  `;
}

// ==================== MCQ OYUNU ====================
function generateMCQQuestions(topic, count) {
  const allSentences = [...topic.trToEn, ...topic.enToTr];
  const shuffled = shuffleArray(allSentences);
  
  // Eğer istenen sayı mevcut cümlelerden fazlaysa, cümleleri tekrarla
  const available = [];
  while (available.length < count) {
    available.push(...shuffled);
  }
  
  state.questions = available.slice(0, count).map(item => {
    const isTrToEn = item.tr && item.en;
    const question = isTrToEn ? (Math.random() > 0.5 ? item.tr : item.en) : '';
    const correctAnswer = question === item.tr ? item.en : item.tr;
    
    // Distractor'lar oluştur
    const distractors = generateDistractors(correctAnswer, allSentences, question === item.tr ? 'en' : 'tr');
    const options = shuffleArray([correctAnswer, ...distractors]);
    
    return {
      question,
      options,
      correctAnswer
    };
  });
  
  state.currentQuestion = state.questions[0];
}

function generateDistractors(correct, allSentences, lang) {
  const distractors = [];
  const candidates = allSentences
    .map(s => lang === 'en' ? s.en : s.tr)
    .filter(s => s !== correct && s);
  
  while (distractors.length < 3 && candidates.length > 0) {
    const randomIndex = Math.floor(Math.random() * candidates.length);
    distractors.push(candidates[randomIndex]);
    candidates.splice(randomIndex, 1);
  }
  
  // Yeterli distractor yoksa basit varyasyon oluştur
  while (distractors.length < 3) {
    distractors.push(correct + " (variant)");
  }
  
  return distractors;
}

function renderMCQ() {
  const q = state.currentQuestion;
  
  const optionsHTML = q.options.map((option, index) => `
    <button class="option-btn" onclick="checkMCQAnswer('${escapeHtml(option)}')" 
            ${state.answered ? 'disabled' : ''}>
      ${option}
    </button>
  `).join('');
  
  return `
    <div class="question-area">
      <div class="question-text">${q.question}</div>
      <div class="options-grid">
        ${optionsHTML}
      </div>
      <div id="feedback"></div>
      <div class="btn-group" id="nextBtnGroup" style="display: none;">
        <button class="btn btn-primary" onclick="nextQuestion()">
          Sonraki Soru ➡
        </button>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-danger" onclick="quitGame()">
        🏠 Menüye Dön
      </button>
    </div>
  `;
}

function checkMCQAnswer(selected) {
  if (state.answered) return;
  
  state.answered = true;
  const correct = state.currentQuestion.correctAnswer;
  const isCorrect = selected === correct;
  
  // Skorlama
  if (isCorrect) {
    state.score += 10;
    state.correctAnswers++;
  } else {
    state.score -= 5;
    state.wrongAnswers++;
  }
  
  // Feedback göster
  const feedbackDiv = document.getElementById('feedback');
  if (isCorrect) {
    feedbackDiv.innerHTML = `<div class="feedback success">✅ Doğru! +10 puan</div>`;
  } else {
    feedbackDiv.innerHTML = `<div class="feedback error">❌ Yanlış! Doğru cevap: ${correct}</div>`;
  }
  
  // Butonları renklendir
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    if (btn.textContent.trim() === correct) {
      btn.classList.add('correct');
    } else if (btn.textContent.trim() === selected && !isCorrect) {
      btn.classList.add('wrong');
    }
  });
  
  // Sonraki butonunu göster
  document.getElementById('nextBtnGroup').style.display = 'flex';
}

function nextQuestion() {
  state.questionIndex++;
  state.answered = false;
  
  if (state.questionIndex >= state.questions.length) {
    // Oyun bitti
    navigateTo('result');
  } else {
    state.currentQuestion = state.questions[state.questionIndex];
    renderGame();
  }
}

// ==================== CÜMLE İNŞA ET ====================
function generateSentenceBuildQuestions(topic, count) {
  const allSentences = [...topic.trToEn, ...topic.enToTr];
  const shuffled = shuffleArray(allSentences);
  
  // Yeterli soru olmayabilir, tekrarla
  const available = [];
  while (available.length < count) {
    available.push(...shuffled);
  }
  
  state.questions = available.slice(0, count).map(item => {
    const useEnglish = Math.random() > 0.5;
    const sentence = useEnglish ? item.en : item.tr;
    const prompt = useEnglish ? item.tr : item.en;
    const words = sentence.split(' ');
    
    return {
      prompt,
      correctSentence: sentence,
      words: shuffleArray([...words]),
      correctWords: words
    };
  });
  
  state.currentQuestion = state.questions[0];
  state.selectedWords = [];
}

function renderSentenceBuild() {
  const q = state.currentQuestion;
  
  const availableWords = q.words.filter(w => !state.selectedWords.includes(w));
  const wordChipsHTML = availableWords.map((word, index) => `
    <div class="word-chip" onclick="selectWord('${escapeHtml(word)}')">
      ${word}
    </div>
  `).join('');
  
  const selectedChipsHTML = state.selectedWords.map(word => `
    <div class="word-chip selected" onclick="deselectWord('${escapeHtml(word)}')">
      ${word}
    </div>
  `).join('');
  
  return `
    <div class="question-area">
      <div class="question-text">Bu cümleyi oluştur: "${q.prompt}"</div>
      
      <h4 class="mb-2">Kelimeler:</h4>
      <div class="word-pool">
        ${wordChipsHTML || '<span style="color: #999;">Tüm kelimeler seçildi</span>'}
      </div>
      
      <h4 class="mb-2">Cümleniz:</h4>
      <div class="sentence-area ${state.selectedWords.length === 0 ? 'empty' : ''}">
        ${selectedChipsHTML}
      </div>
      
      <div id="feedback"></div>
      
      <div class="btn-group">
        <button class="btn btn-success" onclick="checkSentenceBuild()" 
                ${state.selectedWords.length === 0 ? 'disabled' : ''}>
          ✓ Kontrol Et
        </button>
        <button class="btn btn-secondary" onclick="resetSentence()">
          🔄 Sıfırla
        </button>
      </div>
      
      <div class="btn-group" id="nextBtnGroup" style="display: none;">
        <button class="btn btn-primary" onclick="nextQuestion()">
          Sonraki Soru ➡
        </button>
      </div>
    </div>
    <div class="btn-group mt-3">
      <button class="btn btn-danger" onclick="quitGame()">
        🏠 Menüye Dön
      </button>
    </div>
  `;
}

function selectWord(word) {
  if (state.answered) return;
  state.selectedWords.push(word);
  renderGame();
}

function deselectWord(word) {
  if (state.answered) return;
  const index = state.selectedWords.indexOf(word);
  if (index > -1) {
    state.selectedWords.splice(index, 1);
  }
  renderGame();
}

function resetSentence() {
  state.selectedWords = [];
  renderGame();
}

function checkSentenceBuild() {
  if (state.answered) return;
  state.answered = true;
  
  const userSentence = state.selectedWords.join(' ');
  const correct = state.currentQuestion.correctSentence;
  const isCorrect = userSentence.toLowerCase().trim() === correct.toLowerCase().trim();
  
  if (isCorrect) {
    state.score += 10;
    state.correctAnswers++;
    document.getElementById('feedback').innerHTML = `
      <div class="feedback success">✅ Mükemmel! +10 puan</div>
    `;
  } else {
    state.score -= 5;
    state.wrongAnswers++;
    document.getElementById('feedback').innerHTML = `
      <div class="feedback error">
        ❌ Yanlış!<br>
        Doğru cümle: <strong>${correct}</strong>
      </div>
    `;
  }
  
  document.getElementById('nextBtnGroup').style.display = 'flex';
}

// ==================== HIZLI ÇEVİR ====================
function generateQuickTranslateQuestions(topic, count) {
  const allSentences = [...topic.trToEn, ...topic.enToTr];
  const shuffled = shuffleArray(allSentences);
  
  // Yeterli soru olmayabilir, tekrarla
  const available = [];
  while (available.length < count) {
    available.push(...shuffled);
  }
  
  state.questions = available.slice(0, count).map(item => {
    const question = Math.random() > 0.5 ? item.tr : item.en;
    const correctAnswer = question === item.tr ? item.en : item.tr;
    
    // MCQ formatında
    const distractors = generateDistractors(correctAnswer, allSentences, question === item.tr ? 'en' : 'tr');
    const options = shuffleArray([correctAnswer, ...distractors.slice(0, 2)]); // 3 seçenek
    
    return {
      question,
      options,
      correctAnswer
    };
  });
  
  state.currentQuestion = state.questions[0];
}

function renderQuickTranslate() {
  const q = state.currentQuestion;
  
  const optionsHTML = q.options.map(option => `
    <button class="option-btn" onclick="checkQuickAnswer('${escapeHtml(option)}')"
            ${state.answered ? 'disabled' : ''}>
      ${option}
    </button>
  `).join('');
  
  return `
    <div class="question-area">
      <div class="question-text">${q.question}</div>
      <div class="options-grid">
        ${optionsHTML}
      </div>
      <div id="feedback"></div>
    </div>
  `;
}

function checkQuickAnswer(selected) {
  if (state.answered) return;
  
  state.answered = true;
  const correct = state.currentQuestion.correctAnswer;
  const isCorrect = selected === correct;
  
  if (isCorrect) {
    state.score += 10;
    state.correctAnswers++;
  } else {
    state.score -= 5;
    state.wrongAnswers++;
  }
  
  // Otomatik sonraki soru
  setTimeout(() => {
    state.questionIndex++;
    state.answered = false;
    
    if (state.questionIndex >= state.questions.length) {
      navigateTo('result');
    } else {
      state.currentQuestion = state.questions[state.questionIndex];
      renderGame();
    }
  }, 800);
  
  // Feedback
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    if (btn.textContent.trim() === correct) {
      btn.classList.add('correct');
    } else if (btn.textContent.trim() === selected && !isCorrect) {
      btn.classList.add('wrong');
    }
  });
}

function updateTimer() {
  state.timer--;
  const display = document.getElementById('timerDisplay');
  if (display) {
    display.textContent = state.timer + 's';
  }
  
  if (state.timer <= 0) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    
    // Süre bitti, bonus ekle
    state.score += state.timer; // Negatif olabilir ama sorun değil
    navigateTo('result');
  }
}

// ==================== HATA BUL ====================
function generateErrorHuntQuestions(topic, count) {
  const errors = topic.errorHunt || [];
  const shuffled = shuffleArray(errors);
  
  // Yeterli hata yoksa tekrarla
  const available = [];
  while (available.length < count) {
    available.push(...shuffled);
  }
  
  state.questions = available.slice(0, count).map(item => {
    // 4 seçenek: doğru cümle + 3 distractor
    const options = [
      item.correct,
      item.wrong,
      item.wrong.replace(/\b\w+\b/, (match) => match + 's'), // Basit varyasyon
      item.correct.split(' ').reverse().join(' ').substring(0, 30) // Karışık varyasyon
    ];
    
    return {
      wrongSentence: item.wrong,
      correctAnswer: item.correct,
      explanation: item.explanation,
      options: shuffleArray(options)
    };
  });
  
  state.currentQuestion = state.questions[0];
}

function renderErrorHunt() {
  const q = state.currentQuestion;
  
  const optionsHTML = q.options.map(option => `
    <button class="option-btn" onclick="checkErrorHunt('${escapeHtml(option)}')"
            ${state.answered ? 'disabled' : ''}>
      ${option}
    </button>
  `).join('');
  
  return `
    <div class="question-area">
      <div class="question-text">
        🔍 Bu cümlede hata var! Doğru versiyonunu seç:<br>
        <span style="color: #d9534f; font-weight: 700;">"${q.wrongSentence}"</span>
      </div>
      <div class="options-grid">
        ${optionsHTML}
      </div>
      <div id="feedback"></div>
      <div class="btn-group" id="nextBtnGroup" style="display: none;">
        <button class="btn btn-primary" onclick="nextQuestion()">
          Sonraki Soru ➡
        </button>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-danger" onclick="quitGame()">
        🏠 Menüye Dön
      </button>
    </div>
  `;
}

function checkErrorHunt(selected) {
  if (state.answered) return;
  state.answered = true;
  
  const correct = state.currentQuestion.correctAnswer;
  const isCorrect = selected === correct;
  
  if (isCorrect) {
    state.score += 10;
    state.correctAnswers++;
    document.getElementById('feedback').innerHTML = `
      <div class="feedback success">
        ✅ Doğru! +10 puan<br>
        <small>${state.currentQuestion.explanation}</small>
      </div>
    `;
  } else {
    state.score -= 5;
    state.wrongAnswers++;
    document.getElementById('feedback').innerHTML = `
      <div class="feedback error">
        ❌ Yanlış!<br>
        Doğru: <strong>${correct}</strong><br>
        <small>${state.currentQuestion.explanation}</small>
      </div>
    `;
  }
  
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    if (btn.textContent.trim() === correct) {
      btn.classList.add('correct');
    } else if (btn.textContent.trim() === selected && !isCorrect) {
      btn.classList.add('wrong');
    }
  });
  
  document.getElementById('nextBtnGroup').style.display = 'flex';
}

// ==================== EŞLEŞTİRME ====================
function generateMatchingPairs(topic, pairCount) {
  const vocab = topic.vocabulary || [];
  const shuffled = shuffleArray(vocab);
  
  // Yeterli kelime yoksa tekrarla
  const available = [];
  while (available.length < pairCount) {
    available.push(...shuffled);
  }
  
  const selected = available.slice(0, pairCount);
  
  // Kartlar: EN ve TR
  const cards = [];
  selected.forEach(item => {
    cards.push({ text: item.en, pair: item.tr, type: 'en', matched: false });
    cards.push({ text: item.tr, pair: item.en, type: 'tr', matched: false });
  });
  
  state.questions = shuffleArray(cards);
  state.matchedPairs = 0;
  state.selectedCards = [];
}

function renderMatching() {
  const cardsHTML = state.questions.map((card, index) => {
    let className = 'match-card';
    if (card.matched) className += ' matched';
    if (state.selectedCards.includes(index)) className += ' selected';
    
    return `
      <div class="${className}" onclick="selectMatchCard(${index})"
           ${card.matched ? 'style="pointer-events: none;"' : ''}>
        ${card.text}
      </div>
    `;
  }).join('');
  
  return `
    <div class="question-area">
      <h3 class="text-center mb-3">Kelimeleri eşleştir</h3>
      <p class="text-center mb-3">Eşleşen: ${state.matchedPairs} / ${state.questions.length / 2}</p>
      <div class="matching-grid">
        ${cardsHTML}
      </div>
      <div id="feedback"></div>
    </div>
    <div class="btn-group mt-3">
      <button class="btn btn-danger" onclick="quitGame()">
        🏠 Menüye Dön
      </button>
    </div>
  `;
}

function selectMatchCard(index) {
  const card = state.questions[index];
  if (card.matched) return;
  
  // Zaten seçili mi?
  if (state.selectedCards.includes(index)) {
    state.selectedCards = state.selectedCards.filter(i => i !== index);
    renderGame();
    return;
  }
  
  state.selectedCards.push(index);
  
  // İki kart seçildi mi?
  if (state.selectedCards.length === 2) {
    const [first, second] = state.selectedCards;
    const card1 = state.questions[first];
    const card2 = state.questions[second];
    
    // Eşleşme kontrolü
    const isMatch = (card1.text === card2.pair) || (card2.text === card1.pair);
    
    if (isMatch) {
      // Doğru eşleşme
      state.questions[first].matched = true;
      state.questions[second].matched = true;
      state.matchedPairs++;
      state.score += 10;
      state.correctAnswers++;
      
      state.selectedCards = [];
      
      // Tüm eşleşmeler tamamlandı mı?
      if (state.matchedPairs === state.questions.length / 2) {
        setTimeout(() => {
          navigateTo('result');
        }, 1000);
      } else {
        renderGame();
      }
    } else {
      // Yanlış eşleşme
      state.score -= 5;
      state.wrongAnswers++;
      
      // Shake animasyonu için class ekle
      setTimeout(() => {
        state.selectedCards = [];
        renderGame();
      }, 800);
      
      renderGame();
      // Yanlış kartlara animasyon
      document.querySelectorAll('.match-card.selected').forEach(el => {
        el.classList.add('wrong');
      });
    }
  } else {
    renderGame();
  }
}

// ==================== ROLEPLAY ====================
function generateRoleplayQuestions(topic, count) {
  const scenarios = topic.roleplay || [];
  const shuffled = shuffleArray(scenarios);
  
  // Yeterli senaryo yoksa tekrarla
  const available = [];
  while (available.length < count) {
    available.push(...shuffled);
  }
  
  state.questions = available.slice(0, count);
  state.currentQuestion = state.questions[0];
}

function renderRoleplay() {
  const q = state.currentQuestion;
  
  const optionsHTML = q.options.map((option, index) => `
    <button class="option-btn" onclick="checkRoleplay(${index})"
            ${state.answered ? 'disabled' : ''}>
      ${option}
    </button>
  `).join('');
  
  return `
    <div class="question-area">
      <div class="question-text">
        🎭 Senaryo:<br>
        ${q.scenario}
      </div>
      <h4 class="mb-2">En uygun cümle:</h4>
      <div class="options-grid">
        ${optionsHTML}
      </div>
      <div id="feedback"></div>
      <div class="btn-group" id="nextBtnGroup" style="display: none;">
        <button class="btn btn-primary" onclick="nextQuestion()">
          Sonraki Soru ➡
        </button>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-danger" onclick="quitGame()">
        🏠 Menüye Dön
      </button>
    </div>
  `;
}

function checkRoleplay(selectedIndex) {
  if (state.answered) return;
  state.answered = true;
  
  const q = state.currentQuestion;
  const isCorrect = selectedIndex === q.correct;
  
  if (isCorrect) {
    state.score += 10;
    state.correctAnswers++;
    document.getElementById('feedback').innerHTML = `
      <div class="feedback success">
        ✅ Harika! +10 puan<br>
        <small>💡 ${q.explanation}</small>
      </div>
    `;
  } else {
    state.score -= 5;
    state.wrongAnswers++;
    document.getElementById('feedback').innerHTML = `
      <div class="feedback error">
        ❌ Yanlış!<br>
        Doğru: <strong>${q.options[q.correct]}</strong><br>
        <small>💡 ${q.explanation}</small>
      </div>
    `;
  }
  
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, index) => {
    if (index === q.correct) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });
  
  document.getElementById('nextBtnGroup').style.display = 'flex';
}

// ==================== SONUÇ EKRANI ====================
function renderResult() {
  // Timer temizle
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  
  // Timer bonusu ekle
  if (state.selectedMode === 'quickTranslate' && state.timer > 0) {
    state.score += state.timer;
  }
  
  const level = LEVELS[state.selectedLevel];
  const topicNames = state.selectedTopics.map(key => DATA[key].name).join(' + ');
  const mode = MODES[state.selectedMode];
  
  const totalQuestions = state.correctAnswers + state.wrongAnswers;
  const accuracy = totalQuestions > 0 ? Math.round((state.correctAnswers / totalQuestions) * 100) : 0;
  
  let resultIcon = '🎉';
  let resultMessage = 'Tebrikler!';
  
  if (accuracy >= 80) {
    resultIcon = '🏆';
    resultMessage = 'Mükemmel Performans!';
  } else if (accuracy >= 60) {
    resultIcon = '🎯';
    resultMessage = 'İyi İş!';
  } else if (accuracy >= 40) {
    resultIcon = '📚';
    resultMessage = 'İyi Deneme!';
  } else {
    resultIcon = '💪';
    resultMessage = 'Tekrar Dene!';
  }
  
  headerInfo.innerHTML = `<span>🏁 Oyun Bitti</span>`;
  
  mainContent.innerHTML = `
    <div class="container result-screen">
      <div class="result-icon">${resultIcon}</div>
      <h2>${resultMessage}</h2>
      <p>${level.name} - ${topicNames}</p>
      <p style="color: #666; font-size: 0.9rem;">${mode.name}</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h4>Toplam Skor</h4>
          <p>${state.score}</p>
        </div>
        <div class="stat-card">
          <h4>Doğru</h4>
          <p style="color: #5cb85c;">${state.correctAnswers}</p>
        </div>
        <div class="stat-card">
          <h4>Yanlış</h4>
          <p style="color: #d9534f;">${state.wrongAnswers}</p>
        </div>
        <div class="stat-card">
          <h4>Başarı</h4>
          <p style="color: #4a90e2;">${accuracy}%</p>
        </div>
      </div>
      
      <div class="btn-group">
        <button class="btn btn-success" onclick="retryGame()">
          🔄 Tekrar Oyna
        </button>
        <button class="btn btn-primary" onclick="navigateTo('modeSelect')">
          🎮 Başka Mod
        </button>
        <button class="btn btn-secondary" onclick="navigateTo('home')">
          🏠 Ana Menü
        </button>
      </div>
    </div>
  `;
}

function retryGame() {
  initGame();
  navigateTo('game');
}

function quitGame() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  
  if (confirm('Oyundan çıkmak istediğinize emin misiniz? İlerlemeniz kaybolacak.')) {
    navigateTo('home');
  }
}

// ==================== YARDIMCI FONKSİYONLAR ====================
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ==================== BAŞLAT ====================
window.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
});

// Sayfa kapanırken timer temizle
window.addEventListener('beforeunload', () => {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
  }
});
