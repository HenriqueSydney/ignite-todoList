import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {    
      flex: 1,
      alignItems:'flex-start',
      justifyContent: 'flex-start',
      backgroundColor:"#1A1A1A",     
  },
  header:{
    width: '100%',
    height: 150,
    justifyContent:'center',
    alignItems: 'center',   
    flexDirection: 'row',
    backgroundColor: '#0D0D0D'
  },
  body:{    
    flex:1,
    width: '100%',
    justifyContent: 'flex-start',
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: -30
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    height: 54,
    padding: 0
  },
  input: {
    flex:1,
    height: 54,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 6,
    color: '#F2F2F2',
    padding: 16,
    fonteSize: 16,
    fontFamily: 'Inter_400Regular'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Inter_400Regular'
  },
  button: {
    width: 52,
    height: 52,   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    marginLeft: 5
  },  
  taskContainer:{
    marginTop: 60
  },
  infoContainer: {
    width: '100%',
    height: 19,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  createdConcludedContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    height: 19
  },
  infoText:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Inter_700Bold'
  },
  infoCreated: {
    color: '#4EA8DE'   
  },
  infoConcluded: {
    color: '#8284FA'   
  },
  infoCount: {
    justifyContent: 'center',
    paddingTop: 2,
    paddingRight: 8,
    paddingBottom: 2,
    paddingLeft: 8,
    borderRadius: 999,
    backgroundColor: '#333333',
    marginLeft: 10,
    fontSize: 12,
    color: '#D9D9D9',
    lineHeight: 15,
    fontWeight: 'bold'
  }
});

