import React,{ useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function (){
    const [categories, setCategories] = useState([])

    const [filter, setfilter] = useState("");
    const [ filter2, setfilter2] = useState("");

    useEffect(() => {
      fetch('http://192.168.10.105:4000/service/',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
    }, []);

  const Item = ({name,contact, service, value, date}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name} </Text>
      <Text style={styles.title}>{service} </Text>
      <Text style={styles.title}>{contact} </Text>
      <Text style={styles.title}>{service} </Text>
      <Text style={styles.title}>01/01/2023 </Text>
    </View>
  );

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.item}>
                  <Text style={styles.title}>Nome  </Text>
                  <Text style={styles.title}>Serviço  </Text>
                  <Text style={styles.title}>Contato  </Text>
                  <Text style={styles.title}>Valor  </Text>
                  <Text style={styles.title}>Data  </Text>
                </View>
                <FlatList
                data={categories}
                renderItem={({item}) => <Item name={item.name} contact = {item.contact} service={item.service} value = {item.value} date= {item.date}/> }
                keyExtractor={item => item.id}
                />
            </View>
    );

  }
  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#58b1e5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 2,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 12,
    },
  });
