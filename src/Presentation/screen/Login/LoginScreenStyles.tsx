import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

export const styles = StyleSheet.create ({
    container:{
        flex:1, 
        justifyContent: 'center',
        /* alignItems:'center', */
        padding:20,
    },
    titulo:{
        marginBottom:35,
        textAlign: "center",
        
    },
    input: {
      /* height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10, */

      width: '100%',
      height: 40,
      borderWidth:1,
      borderColor: '#000000',
      borderRadius: 5,
      margin: 12,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    label:{
        marginBottom:5,
        /* textAlign: "center", */

    },

    buttonContainer:{
        flexDirection:'row',//ocupar todo el espacio del body
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },

    registerContainer:{
        flexDirection:'row',//ocupar todo el espacio del body
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop: 10,
    },

    link:{
        color: MyColors.primary,
        textDecorationLine: 'underline',
    },
    registerText:{
        fontSize: 16,
        color: '#333',
    },
    button:{
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    loginButton: {
        backgroundColor: MyColors.primary,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }

});