import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState} from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput,AsyncStorage, Image} from "react-native"




export default function App() {

  const [estado,setarEstado] = useState('leitura');
  const [anotacao,setarAnotacao,] = useState('');
  const [anotacao2,setarAnotacao2] = useState('');

  useEffect(()=>{
    (async () => {
      try{
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
        setarAnotacao(anotacaoLeitura);
      }catch(error){}
    })();
  },[])
  
  setData = async() => {
    try{
      await AsyncStorage.setItem('anotacao',anotacao);
    }catch(error){}
    alert('Sua anotação foi salva');
  }

  function atualizarTexto(){
    setarEstado('leitura');
    setData();
  }

if(estado == 'leitura'){ //tela inicial
 return(
  <View style={{flex:1, backgroundColor:'#C6D8E6'}} >
    <StatusBar style="light" />
      <View style={styles.header}><Text style={{textAlign:'center',fontSize:20, color:'white'}}>NotePaddinger</Text></View>
    {
      (anotacao != '')? // se houver anotação mostrar
    <View style={{padding:20}}>      
      <Text style={styles.anotacao}>{anotacao}</Text>
         
    </View>
      : //senão, adicionar
    <View><Text style={{opacity:0.3, textAlign:'center', paddingVertical:50, fontSize:18}}>adicione uma Anotação</Text></View>
    }
    <TouchableOpacity onPress={()=>setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>

  </View>
 )}else if(estado == 'atualizando'){ //fazendo anotação
  return(
    <View style={{flex:1, backgroundColor:'#5C93B8'}} >
        <StatusBar style="light" />
          <View style={styles.header}>
            <Text style={{textAlign:'center',fontSize:20, color:'white'}}>NotePaddinger</Text></View>
          <TextInput autoFocus={true} style={{height:300, textAlignVertical:'top',padding:20, backgroundColor:'#9DBED4', borderRadius:30, fontSize:20}} onChangeText={(text)=>setarAnotacao(text)} multiline={true} numberOfLines={7} value={anotacao}></TextInput>
        <TouchableOpacity onPress={()=>atualizarTexto()} style={styles.btnSalvar}><Text>OK</Text></TouchableOpacity>
    </View>
);}
}




const styles = StyleSheet.create({
  header:{
    width: '100%',
    padding:18,
    backgroundColor: '#9AB4DB'
  },
  anotacao:{
    fontSize:20,
    padding:5,
    backgroundColor:'#9AB4DB',
    paddingBottom:70,
    borderRadius:20,
    marginBottom:20
  },
  btnAnotacao:{
    width:50,
    height:50,
    backgroundColor:'#7B90AF',
    borderRadius:25,
    alignSelf:'center'
  },
  btnAnotacaoTexto:{
    color:'white',
    position:'relative',
    textAlign:'center',
    top:3,
    fontSize:30
  },
  btnSalvar:{
    position:'absolute',
    right:30,
    bottom:20,
    width:50,
    height:50,
    borderRadius:25,
    padding:15,
    backgroundColor:'#069',
    textAlign:'center',
    }

});