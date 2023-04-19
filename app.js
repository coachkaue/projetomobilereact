import React, { useState } from "react"
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {

  const [pessoas, setPessoas] = useState([
    { nome :'consultoria', key: 0},
    { nome :'roupas', key: 1},
    { nome :'suplementação', key: 2},
    { nome :'manipulados', key: 3},
  ])
  return (
    <View style={styles.h1}>
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.key}
      data={pessoas}
      renderItem={({ item}) => (
        <Text style={styles.item}> {item.nome}</Text>
      )}  
    />
    <Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'gray',marginRight:9, fontSize:10}}>
        Informação:  Quais os 3 pilares da saúde?
Algumas outras necessidades do nosso corpo  chamadas de pilares  estão inteiramente interligadas e também necessitam de atenção para que a vida seja realmente saudável. Dessa forma, podemos resumir os principais pilares da saúde em: exercícios físicos, alimentação, sono e saúde mental.
        </Text>
        <Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'gray',marginRight:9, fontSize:10}}>
        Informação: Como se divide a dieta?
O mais comum é dividido 40:40:20, ou seja, 40% das calorias atribuída à proteína, 40% de carboidrato e 20% de gorduras. A partir daqui, saber quantos gramas de cada macronutriente você precisa é uma questão de aritmética simples. Como exemplo, digamos que seu alvo de ingestão calórica é 2 mil calorias por dia.
        </Text>
        <Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'gray',marginRight:9, fontSize:10}}>Frequência de treino

Informação: Existem pessoas que quando ficam uma semana sem ir para academia querem compensar tudo em um único dia , e isso é um grande erro porque a frequência com que você faz exercícios é mais importante do que a duração dos treinos.
A frequência de treinamento é o número de sessões realizadas durante um período específico de tempo, sendo grande responsável pelos seus resultados porque precisamos de estímulos contínuos tanto para perder gordura, quanto para hipertrofia. 
Se você não tem uma frequência, que seja 3,4 ou 5 vezes por semana você pode ter redução dos níveis de força, queda no condicionamento e perda de massa muscular. 
Não há nenhum problema se você não tem disponibilidade de ir para a academia a semana inteira, o importante é que mesmo indo apenas 3 vezes que você se comprometa com essa frequência. 
O melhor caminho é alinhar junto com o profissional de educação física qual a melhor estratégia para o seu objetivo e definir qual será a duração de cada treino e a frequência dentro da sua disponibilidade.
Ser consistente é um desafio, as vezes você tem preguiça de levantar mais cedo, ou a chuva atrapalha ou está cansado demais após o trabalho. A verdade é que sempre vão existir pedras no caminho, mas em vez de focar no problema, você deve focar na solução e fazer o que você se propôs a fazer.</Text>

<Text style={{color:'white',padding: 15,marginTop: 15,alignItems: 'center',flexDirection: 'row',justifyContent: 'space-around', textAlign: 'justify', backgroundColor: 'gray',marginRight:9, fontSize:10}}>Informação: Os principais suplementos que podem ser usados para melhorar o desempenho e ganhar massa muscular são: whey protein, creatina, BCAA, glutamina, Caseína, carnitina, L-arginina, Proteínas vegetais </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1 : {
    backgroundColor:'white',
    
  },
 
  item : {
    
    fontSize: 25,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    borderRadius:50,
    marginTop:49,
    margin:4,
    flexDirection:"row",
    alignContent:'center',
    width: 190,
    height: 105,
    textAlign:'center',
    borderRightWidth:10,
    paddingRight:10,
    justifyContent: 'center',
    
    
    
  },
  
});
