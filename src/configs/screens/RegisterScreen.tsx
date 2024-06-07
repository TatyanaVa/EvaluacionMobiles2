import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Snackbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../theme/styles';
import { auth } from '../configuraciones/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

interface FormResgister{
  email:string;
  password:string;
}
interface MessageSnackBar{
  visible:boolean;
  message:string;
  color:string;
}
export const RegisterScreen = () => {
  
  const[formRegister,setFormregister]=useState<FormResgister>({
    email:'',
    password:''
})
const [showMessage,setShowMessage]=useState<MessageSnackBar>({
  visible:false,
  message:'',
  color:'#fff'
  });
  const navigation =useNavigation();
const handerSetValues=(key:string,value:string)=>{
  setFormregister({...formRegister,[key]:value})
}

const handlerFormRegister=async()=>{
  if(!formRegister.email||!formRegister.password){
      setShowMessage({
          visible:true, 
          message:'Completa todos los campos!',
          color:'#8f0e1a'
      });
      return;
  }
  try {
    const response=await createUserWithEmailAndPassword(
        auth,
        formRegister.email,
        formRegister.password
    );
    setShowMessage({
        visible:true,
        message:'Registro exitoso!',
        color:'#2e7324'
    })
    console.log(response);
} catch (ex){
    console.log(ex);
    setShowMessage({
    visible:true,
    message:'No se logró registrar, intentelo más tarde!',
    color:'#8f0e1a'
})
}

}
  return (
    <View style={styles.root}>
        <Text style={styles.text}>Registrate</Text>
        <TextInput
            mode='outlined'
            label="Correo"
            placeholder='Escribe tu correo'
            style={styles.inputs}
            onChangeText={(value)=>handerSetValues('email',value)}
            />
        <TextInput
            mode='outlined'
            label="Contraseña"
            placeholder='Escribe tu contraseña'
            secureTextEntry
            //right={<TextInput.Icon icon="eye" onPress={()=> setHiddenPassword(!hiddenPassword)}/>}
            style={styles.inputs}
            onChangeText={(value)=>handerSetValues('password',value)}
          />
          <Button style={styles.button} mode="contained" onPress={handlerFormRegister}>Registrar</Button> 
        <Snackbar
          visible={showMessage.visible}
          onDismiss={()=>setShowMessage({...showMessage,visible:false})}
          style={{backgroundColor:showMessage.color}}>
          {showMessage.message}
          
    </Snackbar>
      </View>
)
}



