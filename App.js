import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState} from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput,AsyncStorage} from "react-native"





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
    }catch(error){

    }

    alert('Sua anotação foi salva');
  }


  function atualizarTexto(){
    setarEstado('leitura');
    setData();
  }

if(estado == 'leitura'){ //tela inicial
 return(
  <View style={{flex:1}} >
    <StatusBar style="light" />
      <View style={styles.header}><Text style={{textAlign:'center',fontSize:20, color:'white'}}>NotePaddinger</Text></View>
    {
      (anotacao != '')? // se houver anotação mostrar
      <View style={{padding:20}}>
        
        <Text style={styles.anotacao}>{anotacao}</Text>
        <Text style={styles.anotacao}>{anotacao2}</Text>
        
      </View>
      : //senão, adicionar
      <View><Text style={{opacity:0.3, textAlign:'center', paddingVertical:50}}>adicione uma Anotação</Text></View>
    }
          <TouchableOpacity onPress={()=>setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>

  </View>
 )}else if(estado == 'atualizando'){ //fazendo anotação
  return(
  <View style={{flex:1}} >
      <StatusBar style="light" />
        <View style={styles.header}>
          <Text style={{textAlign:'center',fontSize:20, color:'white'}}>NotePaddinger</Text></View>
        <TextInput autoFocus={true} style={{height:300, textAlignVertical:'top',padding:20}} onChangeText={(text)=>setarAnotacao(text)} multiline={true} numberOfLines={7} value={anotacao}></TextInput>
      <TouchableOpacity onPress={()=>atualizarTexto()} style={styles.btnSalvar}><Text style={{textAlign:'center', color:'white'}}>Salvar</Text></TouchableOpacity>
  </View>
);}
}




const styles = StyleSheet.create({
  header:{
    width: '100%',
    padding:15,
    backgroundColor: '#069'
  },
  anotacao:{
    fontSize:20,
    padding:5,
    backgroundColor:'orange',
    paddingBottom:70,
    borderRadius:20,
    marginBottom:20
  },
  btnAnotacao:{
    width:50,
    height:50,
    backgroundColor:'#069',
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
    right:20,
    bottom:20,
    width:100,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#069',
    }

});