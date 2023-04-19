import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  
  const [email, setemail] = useState('')
  const [nome, setnome] = useState('')
  const [senha, setsenha] = useState('')

  const cadastro = () => {
    alert(nome);
    alert(email);
    alert(senha);
  }


  return (
    <View style={styles.container}>
        <StatusBar hidden />

        <Image style={{width:300,height:200}} source={require('./assets/2.png')} />

        <TextInput placeholder='digite seu nome...                  ' style={{width: '100%', height:40,backgroundColor: 'white',borderRadius:20,paddingLeft:10,}} onChangeText={text=>setnome(text)} />
        <TextInput placeholder='digite seu e-mail...                 ' style={{width: '100%', height:40,backgroundColor: 'white',borderRadius:20,paddingLeft:10,}} onChangeText={text=>setemail(text)} />
        <TextInput placeholder='digite sua senha...                 ' style={{width: '100%', height:40,backgroundColor: 'white',borderRadius:20,paddingLeft:10,}} onChangeText={text=>setsenha(text)} />
        
        <TouchableOpacity style={styles.btncadastro} onPress={()=>cadastro()}>
          <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>cadastrar</Text>
        </TouchableOpacity>
        
        
        
        
        
  

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50
  },
  
  TextInput: {
    hidth:'100%',
    height:40,
    backgroundColor:'white'
  },
  btncadastro:{
    width:'50%',
    height:40,
    backgroundColor:'#27282D'
  }

});
