import { View, Image, Text } from "react-native";

import { styles } from "./styles";

import Clipboard from "../../assets/Clipboard.png";

export function ListEmpty(){
  return (
    <View style={styles.container}>
        <Image
        source={Clipboard}
        />

        <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas
        </Text>

        <Text style={styles.listEmptyTextComplement}>
            Crie tarefas e organize seus itens a fazer
        </Text>
    </View>
  );
}
