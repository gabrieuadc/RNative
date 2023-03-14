import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function (){
    const [project, setProject] = React.useState([]);

    function createPost(project){
			fetch('http://192.168.10.105:4000/service/',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(project)
			})
			.then((resp) => resp.json())
			.then((data) => {
				alert("Cadastrado com Sucesso")
			})
			.catch((err) => console.log(err))
	};

	function submit(e) {
		e.preventDefault()
		createPost(project)
	}

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style= {{fontSize: 21}}>Cadastro de serviço</Text>
                <Text style={styles.paragraph}>
                  {'\n\n\n'}
                </Text>
                <TextInput style={styles.input} name="name" placeholder="Cliente"  onChangeText={(text) => setProject({...project, name: text})}/>
                <TextInput style={styles.input} name="contact" placeholder="Contato" keyboardType="numeric" onChangeText={(text) => setProject({...project, contact: text})}/>
                <TextInput style={styles.input} name="service" placeholder="Serviço" onChangeText={(text) => setProject({...project, service: text})} />
                <TextInput style={styles.input} name="value" placeholder="Valor" keyboardType="numeric" onChangeText={(text) => setProject({...project, value: text})} />
                <TextInput style={styles.input} name="date" placeholder="Data" onChangeText={(text) => setProject({...project, date: text})} />
                <Text style={styles.paragraph}>
                  {'\n'}
                </Text>
                <View style={{flexDirection: 'row'}}>
                <Button style={styles.fixToText} title="Novo" color="#0040FF" accessibilityLabel="Learn more about this purple button" />
                <Button style={styles.fixToText} title="Editar" color="#0040FF" accessibilityLabel="Learn more about this purple button" />
                <Button style={styles.fixToText} title="Gravar" color="#0040FF" accessibilityLabel="Learn more about this purple button" onPress={submit}/>
                </View>
            </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 25,
      width: 200,
      margin: 10,
      borderWidth: 1,
      padding: 5,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
