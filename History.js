import React from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';

export default function SettingScreen({route,navigation}) {
    const{ data } = route.params;
    return (
    <View style={styles.container}>      
        <Text>History:</Text>
        <FlatList style={styles.lista}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.key}</Text>
          }
        />
    </View>  
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop:5,
      display: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputit: {
      width: 120,
      borderWidth: 1,
    },
    napit: {
      flexDirection:'row', 
      margin: 5,
      width: 100,
      justifyContent:'space-between',
    },
    lista: {
  
    }
  });