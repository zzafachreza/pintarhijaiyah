import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};
export const apiURL = 'https://zavalabs.com/pintarhijaiyah/api/';

export const dataSuara = [
  {
    id: 1,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/1.mpeg',
  },
  {
    id: 2,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/2.mpeg',
  },
  {
    id: 3,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/3.mpeg',
  },
  {
    id: 4,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/4.mpeg',
  },
  {
    id: 5,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/5.mpeg',
  },
  {
    id: 6,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/6.mpeg',
  },
  {
    id: 7,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/7.mpeg',
  },
  {
    id: 8,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/8.mpeg',
  },
  {
    id: 9,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/9.mpeg',
  },
  {
    id: 10,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/10.mpeg',
  },
  {
    id: 11,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/11.mpeg',
  },
  {
    id: 12,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/12.mpeg',
  },
  {
    id: 13,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/13.mpeg',
  },
  {
    id: 14,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/14.mpeg',
  },
  {
    id: 15,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/15.mpeg',
  },
  {
    id: 16,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/16.mpeg',
  },
  {
    id: 17,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/17.mpeg',
  },
  {
    id: 18,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/18.mpeg',
  },
  {
    id: 19,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/19.mpeg',
  },
  {
    id: 20,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/20.mpeg',
  },
  {
    id: 21,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/21.mpeg',
  },
  {
    id: 22,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/22.mpeg',
  },
  {
    id: 23,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/23.mpeg',
  },
  {
    id: 24,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/24.mpeg',
  },
  {
    id: 25,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/25.mpeg',
  },
  {
    id: 26,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/26.mpeg',
  },
  {
    id: 27,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/27.mpeg',
  },
  {
    id: 28,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/28.mpeg',
  },
  {
    id: 29,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/29.mpeg',
  },
  {
    id: 30,
    key: 'https://zavalabs.com/pintarhijaiyah/suara/30.mpeg',
  },
]

export const dataHijaiyah = [

  {
    id: 5,
    image: require('../../assets/5.png'),
    lafal: 'jim'
  },

  {
    id: 4,
    image: require('../../assets/4.png'),
    lafal: 'tsa'
  },
  {
    id: 3,
    image: require('../../assets/3.png'),
    lafal: 'ta'
  },
  {
    id: 2,
    image: require('../../assets/2.png'),
    lafal: 'ba'
  },
  {
    id: 1,
    image: require('../../assets/1.png'),
    lafal: 'alif'
  },





  {
    id: 10,
    image: require('../../assets/10.png'),
    lafal: 'ro'
  },
  {
    id: 9,
    image: require('../../assets/9.png'),
    lafal: 'dzal'
  },

  {
    id: 8,
    image: require('../../assets/8.png'),
    lafal: 'dal'
  },
  {
    id: 7,
    image: require('../../assets/7.png'),
    lafal: 'kho'
  },
  {
    id: 6,
    image: require('../../assets/6.png'),
    lafal: 'ha'
  },







  {
    id: 15,
    image: require('../../assets/15.png'),
    lafal: 'dhad'
  },
  {
    id: 14,
    image: require('../../assets/14.png'),
    lafal: 'shod'
  },
  {
    id: 13,
    image: require('../../assets/13.png'),
    lafal: 'syin'
  },
  {
    id: 12,
    image: require('../../assets/12.png'),
    lafal: 'sin'
  },
  {
    id: 11,
    image: require('../../assets/11.png'),
    lafal: 'zai'
  },


  {
    id: 20,
    image: require('../../assets/20.png'),
    lafal: 'fa'
  },

  {
    id: 19,
    image: require('../../assets/19.png'),
    lafal: 'ghin'
  },

  {
    id: 18,
    image: require('../../assets/18.png'),
    lafal: "'ain"
  },
  {
    id: 17,
    image: require('../../assets/17.png'),
    lafal: 'zha'
  },
  {
    id: 16,
    image: require('../../assets/16.png'),
    lafal: 'tha'
  },


  {
    id: 25,
    image: require('../../assets/25.png'),
    lafal: 'nun'
  },
  {
    id: 24,
    image: require('../../assets/24.png'),
    lafal: 'mim'
  },
  {
    id: 23,
    image: require('../../assets/23.png'),
    lafal: 'lam'
  },
  {
    id: 22,
    image: require('../../assets/22.png'),
    lafal: 'kaf'
  },

  {
    id: 21,
    image: require('../../assets/21.png'),
    lafal: 'qof'
  },


  {
    id: 30,
    image: require('../../assets/30.png'),
    lafal: 'ya'
  },
  {
    id: 29,
    image: require('../../assets/29.png'),
    lafal: 'hamzah'
  },
  {
    id: 28,
    image: require('../../assets/28.png'),
    lafal: 'lam alif'
  },
  {
    id: 27,
    image: require('../../assets/27.png'),
    lafal: 'ha'
  },
  {
    id: 26,
    image: require('../../assets/26.png'),
    lafal: 'wau'
  },


]


export const dataSambung = [
  {
    id: 0,
    image: require('../../assets/0s.png'),

  },
  {
    id: 1,
    image: require('../../assets/1s.png'),
  },
  {
    id: 2,
    image: require('../../assets/2s.png'),
  },
  {
    id: 3,
    image: require('../../assets/3s.png'),
  },
  {
    id: 4,
    image: require('../../assets/4s.png'),
  },
  {
    id: 5,
    image: require('../../assets/5s.png'),
  },
  {
    id: 6,
    image: require('../../assets/6s.png'),
  },
  {
    id: 7,
    image: require('../../assets/7s.png'),
  },
  {
    id: 8,
    image: require('../../assets/8s.png'),
  },
  {
    id: 9,
    image: require('../../assets/9s.png'),
  },
  {
    id: 10,
    image: require('../../assets/10s.png'),
  },
  {
    id: 11,
    image: require('../../assets/11s.png'),
  },
  {
    id: 12,
    image: require('../../assets/12s.png'),
  },
  {
    id: 13,
    image: require('../../assets/13s.png'),
  },
  {
    id: 14,
    image: require('../../assets/14s.png'),
  },
  {
    id: 15,
    image: require('../../assets/15s.png'),
  },
  {
    id: 16,
    image: require('../../assets/16s.png'),
  },
]

export const datasambungSuara = [
  {
    id: 1,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/1.mpeg',
  },
  {
    id: 2,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/2.mpeg',
  },
  {
    id: 3,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/3.mpeg',
  },
  {
    id: 4,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/4.mpeg',
  },
  {
    id: 5,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/5.mpeg',
  },
  {
    id: 6,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/6.mpeg',
  },
  {
    id: 7,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/7.mpeg',
  },
  {
    id: 8,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/8.mpeg',
  },
  {
    id: 9,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/9.mpeg',
  },
  {
    id: 10,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/10.mpeg',
  },
  {
    id: 11,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/11.mpeg',
  },
  {
    id: 12,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/12.mpeg',
  },
  {
    id: 13,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/13.mpeg',
  },
  {
    id: 14,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/14.mpeg',
  },
  {
    id: 15,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/15.mpeg',
  },
  {
    id: 16,
    key: 'https://zavalabs.com/pintarhijaiyah/sambung/16.mpeg',
  }
]


export const dataLagu = [
  {
    id: 1,
    judul: 'Rukun Iman',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/1.mp3',
  },
  {
    id: 2,
    judul: 'Doa Khatam Alquran',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/2.mp3',
  },
  {
    id: 3,
    judul: 'Khatam Alquran',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/3.mp3',
  },
  {
    id: 4,
    judul: 'Deen Assalam (Agama perdamaian)',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/4.mp3',
  },
  {
    id: 5,
    judul: 'Ya Asyiqol (Wahai perindu)',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/5.mp3',
  },
  {
    id: 6,
    judul: 'Ya Rahman (Yang maha pemurah)',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/6.mp3',
  },
  {
    id: 7,
    judul: 'Doa Orang Tua',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/7.mp3',
  },
  {
    id: 8,
    judul: 'Ya Habibal Qolbi (Wahai kekasih hati)',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/8.mp3',
  },
  {
    id: 9,
    judul: 'Asmaul Husna',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/9.mp3',
  },
  {
    id: 10,
    judul: 'Assalamualaika Ya Rosulallah',
    key: 'https://zavalabs.com/pintarhijaiyah/lagu/10.mp3',
  },
]