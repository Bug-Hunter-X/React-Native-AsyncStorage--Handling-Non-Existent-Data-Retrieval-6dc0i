```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null; // or a default value
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null; // or a default value
  }
};

//Example usage
getData('myKey').then((data) => {
  console.log('Retrieved data:', data);
});
```