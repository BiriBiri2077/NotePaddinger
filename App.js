import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Button, Touchable, TouchableOpacity, StyleSheet, Text, TextInput } from "react-native"



export default function App() {

  const [estado,setarEstado] = useState('leitura');
  const [anotacao,setarAnotacao] = useState('');
  


  function atualizarTexto(){
    setarEstado('leitura');
  }

if(estado == 'leitura'){
 return(
  <View style={{flex:1}} >
    <StatusBar style="light" />
      <View style={styles.header}><Text style={{textAlign:'center',fontSize:20, color:'white'}}>Aplicativo Anotação</Text></View>
    {
      (anotacao != '')?
      <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
      :
      <View style={{padding:20}}><Text style={{opacity:0.3}}>adicione uma Anotação</Text></View>
    }
    <TouchableOpacity onPress={()=>setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
  </View>
 )}else if(estado == 'atualizando'){
  return(
  <View style={{flex:1}} >
      <StatusBar style="light" />
        <View style={styles.header}>
          <Text style={{textAlign:'center',fontSize:20, color:'white'}}>Aplicativo Anotação</Text></View>
        <TextInput style={{height:300, textAlignVertical:'top',padding:20}} onChangeText={(text)=>setarAnotacao(text)} multiline={true} numberOfLines={7} value={anotacao}></TextInput>
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
    fontSize:20
  },
  btnAnotacao:{
    position:'absolute',
    right:20,
    bottom:20,
    width:50,
    height:50,
    backgroundColor:'#069',
    borderRadius:25
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