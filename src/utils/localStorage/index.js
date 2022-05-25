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
export const apiURL = 'https://zavalabs.com/pintarhijaiyah';

export const dataHijaiyah = [



  {
    image: require('../../assets/5.png'),
    lafal: 'jim'
  },

  {
    image: require('../../assets/4.png'),
    lafal: 'tsa'
  },
  {
    image: require('../../assets/3.png'),
    lafal: 'ta'
  },
  {
    image: require('../../assets/2.png'),
    lafal: 'ba'
  },
  {
    image: require('../../assets/1.png'),
    lafal: 'alif'
  },





  {
    image: require('../../assets/10.png'),
    lafal: 'ro'
  },
  {
    image: require('../../assets/9.png'),
    lafal: 'dzal'
  },

  {
    image: require('../../assets/8.png'),
    lafal: 'dal'
  },
  {
    image: require('../../assets/7.png'),
    lafal: 'kho'
  },
  {
    image: require('../../assets/6.png'),
    lafal: 'ha'
  },







  {
    image: require('../../assets/15.png'),
    lafal: 'dhad'
  },
  {
    image: require('../../assets/14.png'),
    lafal: 'shod'
  },
  {
    image: require('../../assets/13.png'),
    lafal: 'syin'
  },
  {
    image: require('../../assets/12.png'),
    lafal: 'sin'
  },
  {
    image: require('../../assets/11.png'),
    lafal: 'zai'
  },


  {
    image: require('../../assets/20.png'),
    lafal: 'fa'
  },

  {
    image: require('../../assets/19.png'),
    lafal: 'ghin'
  },

  {
    image: require('../../assets/18.png'),
    lafal: "'ain"
  },
  {
    image: require('../../assets/17.png'),
    lafal: 'zha'
  },
  {
    image: require('../../assets/16.png'),
    lafal: 'tha'
  },


  {
    image: require('../../assets/25.png'),
    lafal: 'nun'
  },
  {
    image: require('../../assets/24.png'),
    lafal: 'mim'
  },
  {
    image: require('../../assets/23.png'),
    lafal: 'lam'
  },
  {
    image: require('../../assets/22.png'),
    lafal: 'kaf'
  },

  {
    image: require('../../assets/21.png'),
    lafal: 'qof'
  },


  {
    image: require('../../assets/30.png'),
    lafal: 'ya'
  },
  {
    image: require('../../assets/29.png'),
    lafal: 'hamzah'
  },
  {
    image: require('../../assets/28.png'),
    lafal: 'lam alif'
  },
  {
    image: require('../../assets/27.png'),
    lafal: 'ha'
  },
  {
    image: require('../../assets/26.png'),
    lafal: 'wau'
  },


]