import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {   
      width:'100%',

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      backgroundColor:"#262626",

      borderRadius: 8,      
      borderColor: '#333333',  
   
      paddingTop: 12,
      paddingRight: 8,
      paddingBottom: 12,
      paddingLeft: 8,

      marginBottom: 10,
  },
  taskContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  task: {
    fontSize: 14,
    color: '#F2F2F2',
    marginLeft: 5
  },
  taskConcluded: {
    fontSize: 14,
    color: '#808080',
    marginLeft: 5,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    transition: 'color 1s'
  },
  removeButton: {
    minHeight: 32,
    maxHeight:32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeButtonPressed: {
    borderRadius: 4
  }
  
  
});

