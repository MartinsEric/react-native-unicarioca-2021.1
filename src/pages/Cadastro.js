

import {StatusBar} from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image} from 'react-native';



export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function cadastro(){
        alert('ok');
    }

    function foto(){
        alert('ok');
    }

    

    return (
        <View style={styles.container}>
            <StatusBar hidden/>
             

          <Image style ={styles.logofechar} source={require('./imagem/icone_fechar.png')}/>
          <Image style ={styles.logofoto} source={require('./imagem/icone_perfil.png')}/>

            <TouchableOpacity style={styles.carregarfoto} onPress={()=>cadastro()}> 
                    <Text style={{color:'purple',textAlign:'center'}}>Carregar nova foto</Text>
                    </TouchableOpacity>

            
                
        

                <Text style={styles.text}>Nome completo</Text>
                <TextInput placeholder = "Nome..." style = {styles.textInput} onChangeText={text=>setNome(text)}/>
                <Text style={styles.text}>E-mail</Text>
                <TextInput placeholder = "E-mail..." style = {styles.textInput} onChangeText={text=>setEmail(text)}/>
                <Text style={styles.text}>Senha</Text>
                <TextInput secureTextEntry={true} placeholder = "........" style = {styles.textInput} onChangeText={text=>setSenha(text)}/>
                <Text style={styles.text}>Confirmar Senha</Text>
                <TextInput secureTextEntry={true} placeholder = "........" style = {styles.textInput} onChangeText={text=>setConfirmarSenha(text)}/>

        
            
                <TouchableOpacity style={styles.voltarCadastro} onPress={()=>cadastro()}>
                    <Text style={{color:'purple',textAlign:'center'}} >VOLTAR</Text>
                    </TouchableOpacity>

                            <TouchableOpacity style={styles.concluirCadastro} onPress={()=>cadastro()}>
                                <Text style={{color:'purple',textAlign:'center'}}>CONCLUIR</Text>
                                
                            </TouchableOpacity>
            

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20,
        borderColor: 'purple', 
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 4,
        
        
       
    },

    textInput:{
        width: '100%',
        height: 48,
        backgroundColor: 'white',
        paddingLeft: 10,
        marginBottom:10,
        margin: 20,
        color: 'black',
        borderColor: 'black', 
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 3
    
        
    },
    voltarCadastro:{
        
        width:'40%',
        height:45,
        backgroundColor: 'white',
        borderColor: 'purple',
        borderRadius: 10,
        justifyContent: 'center',
        marginRight: 150,
        color: 'blue',
        marginTop: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        
        
    },

    concluirCadastro:{
        
        width:'40%',
        height:45,
        backgroundColor: 'white',
        borderColor: 'purple',
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 150, 
        marginTop: -45,
        borderStyle: 'solid',
        borderWidth: 2,
        
        
    },

    text:{
        borderColor: 'black',
        width: '100%',
    },

    carregarfoto:{
        backgroundColor: 'white',
        width: 150,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: 'black',
        margin: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'purple'
        
        
        
    },

    logofoto:{
        backgroundColor: '#3376b5',
        width: 100,
        height: 100,
        borderRadius:100,
    
    },

    logofechar:{
        marginLeft: 330,
        width: 30,
        height: 30,
        margin: 2


    }
   
   
    
    
});



