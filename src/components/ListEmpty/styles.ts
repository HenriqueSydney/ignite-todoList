import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listEmptyText: {   
    color: '#808080',
    fonteSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
    marginTop: 15
  },
  listEmptyTextComplement: {
    color: '#808080',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular'    
  }
});

