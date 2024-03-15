import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

export const styles = StyleSheet.create ({
    container:{
        flex:1, 
        justifyContent: 'center',
        alignItems:'center', 
        padding:20,
        backgroundColor: MyColors.background,
    },
    titulo:{
        fontSize: 20,
        marginBottom:20,
        color: MyColors.primary
        
    },
    input: {
      /* height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10, */

      width: '100%',
      height: 40,
      borderWidth:1,
      borderColor: '#ccc',
      borderRadius: 5,
      margin: 12,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    
});