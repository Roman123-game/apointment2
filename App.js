import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image,FlatList } from 'react-native';
import Data from './data/Data.js'

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList
    data = {Data}
    renderItem={(data) => <Text style={styles.text} >{data.title}</Text>}
    />
      <Text>  new App appointment</Text>
      <Image style={styles.mainImage} source={require('./assets/Frame2.png')} />
      <Button title="tap me"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50px',
    maxWidth: 320,
    margin: 'auto',
    minHeight:680,
    backgroundColor: '#f6eee3'


  },
  mainImage:{
    borderColor: 'black',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '15px',
    backgroundColor: '#e5cbba',

  },
  text:{
color: 'black'
  }
});
