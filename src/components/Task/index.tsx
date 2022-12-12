import { Text, View, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { styles } from "./styles";

import Unchecked from "../../assets/check.png";
import Checked from "../../assets/checked.png";
import Trash from "../../assets/trash.png";
import TrashPressed from "../../assets/trashPressed.png";

import { useState } from "react";

type Props = {
  task: string;
  checkButton: boolean;
  onRemove: () => void;
  onClick: () => void;  
}

export function Task({ task, checkButton, onRemove, onClick }: Props){  
  const [isPress, setIsPress] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={onClick}>
          <Image source={(checkButton) ? Checked : Unchecked} />
        </TouchableOpacity>
        
        <Text style={(checkButton) ? styles.taskConcluded : styles.task}>
          {task}
        </Text> 
      </View>
      
      <TouchableHighlight 
        activeOpacity={1}
        underlayColor='#333333'
        style={isPress ? [styles.removeButtonPressed, styles.removeButton] : styles.removeButton}
        onHideUnderlay={() => setIsPress(false)}
        onShowUnderlay={() => setIsPress(true)}
        onPress={onRemove}
      >
          <Image source={isPress ? TrashPressed : Trash} />  
      </TouchableHighlight>        
    </View>
  )
}

