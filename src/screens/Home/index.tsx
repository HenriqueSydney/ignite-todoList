import { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";

import { Task } from "../../components/Task";

import Logo from "../../assets/Logo.png";
import PlusButton from "../../assets/plus.png";

import { styles } from "./styles";

export function Home(){
  const [ToDoCreated, setToDoCreated] = useState<number>(0);
  const [ToDoConcluded, setToDoConcluded] = useState<number>(0);

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskItem, setTaskItem] = useState('');

  const [tasksConcluded, setTasksConcluded] = useState<string[]>([]);
  
  function handleTaskAdd() {
    if(taskItem == ''){
      return;
    }
    
    if(taskItem.length < 3){
      return Alert.alert("Tarefa Inválida","Tarefas devem ter, pelo menos, 3 caracteres.")
    }

    if(tasks.includes(taskItem)){
      return Alert.alert("Tarefa já existe","Tarefa já incluída.")
    }

    setTasks(prevState => [taskItem, ...prevState]);    
    setToDoCreated(prevState => prevState + 1);    
    setTaskItem('');
  }

  function handleTaskDone(clickedTask: string) { 
    if(tasksConcluded.includes(clickedTask)){
      setTasksConcluded(prevState => prevState.filter(task => task !== clickedTask));
      setToDoConcluded(prevState => prevState - 1); 
    } else{
      setTasksConcluded(prevState => [...prevState, clickedTask]);
      setToDoConcluded(prevState => prevState + 1); 
    }
  }

  function handleTaskRemove(clickedTask: string) {  
     
    Alert.alert("Remover", `Deseja remover a tarefa "${clickedTask}"?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task !== clickedTask));
          setToDoCreated(prevState => prevState - 1);
          tasksConcluded.includes(clickedTask) ? setToDoConcluded(prevState => prevState - 1 ) : '';
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>

      <Image
        source={Logo}
      />
      </View>
     
      <View style={styles.body}>

        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#6B6B6B'
            onChangeText={setTaskItem}
            value={taskItem}
            returnKeyType="send"
            blurOnSubmit={false}
            onSubmitEditing={handleTaskAdd}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd} >
            <Image source={PlusButton} />
          </TouchableOpacity>

        </View>
      
        <View style={styles.taskContainer}>

          <View style={styles.infoContainer}>            
            <View style={styles.createdConcludedContainer}>
              <Text style={[styles.infoCreated, styles.infoText]}>
                Criadas
              </Text>

              <Text style={styles.infoCount}>
                {ToDoCreated}
              </Text>
            </View>

            <View style={styles.createdConcludedContainer}>
              <Text style={[styles.infoConcluded, styles.infoText]}>
                Concluídas
              </Text>

              <Text style={styles.infoCount}>
                {ToDoConcluded}
              </Text>
            </View>

          </View>
          
          <FlatList 
            style={{marginBottom: 120}}
            data={tasks}        
            keyExtractor={item => item}
            renderItem={({ item }) =>  (
              <Task 
                key={item}
                task={item} 
                onClick={() => handleTaskDone(item)}
                onRemove={() => handleTaskRemove(item)}   
                checkButton={(tasksConcluded.includes(item))}       
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => ( <ListEmpty /> )}
            fadingEdgeLength={100}
          />
        </View>

      </View>

    </View>
  )
}
