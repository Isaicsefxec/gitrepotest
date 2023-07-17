import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet,Image } from 'react-native';
import { db } from "../config";
import App from "../randomkural";
import { ref, set } from "firebase/database";

const AddData= ({navigation}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [dateofarrest, setdateofarrest] = useState("");
    const [dateofremand, setdateofremand] = useState("");
    const [accusedphno1, setaccusedphno1] = useState("");
    const [accusedphno2, setaccusedphno2] = useState("");
    const [aadhar, setaadhar] = useState("");
    const [PAN_NO, setPAN_NO] = useState("");
    const [Mailid, setMailid] = useState("");
    const [Bankdeatils, setBankdeatils] = useState("");
    const [Location, setLocation] = useState("");
    const [Accusedphoto, setAccusedphoto] = useState("");
    const [accusedFatherMobileNo1, setaccusedFatherMobileNo1] = useState("");
    const [accusedFatherMobileNo2, setaccusedFatherMobileNo2] = useState("");
    const [accusedMotherMobileNo1, setaccusedMotherMobileNo1] = useState("");
    const [accusedMotherMobileNo2, setaccusedMotherMobileNo2] = useState("");
    const [accusedwifeMobileNo1, setaccusedwifeMobileNo1] = useState("");
    const [accusedwifeMobileNo2, setaccusedwifeMobileNo2] = useState("");
    const [accusedfriendMobileNo1, setaccusedfriendMobileNo1] = useState("");
    const [accusedfriendMobileNo2, setaccusedfriendMobileNo2] = useState("");
    const [accusedcontact, setaccusedcontact] = useState("");
    const [accusedsocialmediapage1, setaccusedsocialmediapage1] = useState("");
    const [accusedsocialmediapage2, setaccusedsocialmediapage2] = useState("");
    const [accusedsocialmediapage3, setaccusedsocialmediapage3] = useState("");
    // error msg display 
    const [error, setError] = useState(""); 
  
  const handlePress = () => {
    // Validate if crno is not empty
    if (!title || !body || !name || !address || !dateofremand || !accusedphno1 || !dateofarrest || !aadhar || !PAN_NO || !Mailid || !Bankdeatils || !Location || !Accusedphoto || !accusedFatherMobileNo1 || !accusedMotherMobileNo1 || !accusedwifeMobileNo1 || !accusedfriendMobileNo1 || !accusedcontact || !accusedsocialmediapage1){
      setError("This feild  is required!");
    }
    else {
      setError(""); // Reset error state variable
      // Call dataAddon function to add data to Firebase database
      dataAddon();
    }
  };

  const dataAddon = () => {
    set(ref(db, "posts/" + title), {
      title:title,
      body: body,
      name: name,
      address: address,
      dateofarrest: dateofarrest,
      dateofremand: dateofremand,
      accusedphno1: accusedphno1,
      accusedphno2: accusedphno2,
      aadhar: aadhar,
      PAN_NO: PAN_NO,
      Mailid: Mailid,
      Bankdeatils: Bankdeatils,
      Location: Location,
      Accusedphoto: Accusedphoto,
      accusedFatherMobileNo1: accusedFatherMobileNo1,
      accusedFatherMobileNo2: accusedFatherMobileNo2,
      accusedMotherMobileNo1: accusedMotherMobileNo1,
      accusedMotherMobileNo2: accusedMotherMobileNo2,
      accusedwifeMobileNo1: accusedwifeMobileNo1,
      accusedwifeMobileNo2: accusedwifeMobileNo2,
      accusedfriendMobileNo1: accusedfriendMobileNo1,
      accusedfriendMobileNo2: accusedfriendMobileNo2,
      accusedcontact: accusedcontact,
      accusedsocialmediapage1: accusedsocialmediapage1,
      accusedsocialmediapage2: accusedsocialmediapage2,
      accusedsocialmediapage3: accusedsocialmediapage3,
     
    });
    setTitle("");
    setBody("");
    setname("");
    setaddress("");
    dateofarrest("");
    dateofremand("");
    accusedphno1("");
    accusedphno2("");
    aadhar("");
    PAN_NO("");
    Mailid("");
    Bankdeatils("");
    Location("");
    setAccusedphoto("");
    accusedFatherMobileNo1("");
    setaccusedFatherMobileNo2("");
    setaccusedMotherMobileNo1("");
    setaccusedMotherMobileNo2("");
    setaccusedwifeMobileNo1("");
    setaccusedwifeMobileNo2("");
    setaccusedfriendMobileNo1("");
    setaccusedfriendMobileNo2("");
    setaccusedcontact("");
    setaccusedsocialmediapage1("");
    setaccusedsocialmediapage2("");
    setaccusedsocialmediapage3("");
   
  };
  return (

       <ScrollView>
    <View style={styles.container}>
  
      <Image
          style={{ height:100, width:100 , marginLeft : 120 }}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/4/40/Tamil_Nadu_Police_Logo.png'}}
      />
       <App></App>
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold' ,color: '#030303'}}>திருநெல்வேலி காவல் துறை தரவு</Text>
      <Text style={styles.header}>----Please type N/A if it not Applicable </Text>
      <Text style={styles.header}>Add ** If the data is not sure ---- </Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="CRNO"
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={body}
        onChangeText={(text) => setBody(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Reason * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={name}
        onChangeText={(text) => setname(text)}
        style={[    { borderWidth: 1, padding: 10 },    name.length > 0 && { backgroundColor: 'lightgreen' },  ]}
        placeholder="Accused Name * "
        maxLength={20}
        required
      />
   {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={address}
        onChangeText={(text) => setaddress(text)}
        style={[    { borderWidth: 1, padding: 10 },    address.length > 0 && { backgroundColor: 'lightgreen' },  ]}
        placeholder="Accused Address * "
        maxLength={20}
        required
      />

      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={dateofarrest}
        onChangeText={(text) => setdateofarrest(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Date of arrest* "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={dateofremand}
        onChangeText={(text) => setdateofremand(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Date of Remand* "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedphno1}
        onChangeText={(text) => setaccusedphno1(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accusedphno 1 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedphno2}
        onChangeText={(text) => setaccusedphno2(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accusedphno 2 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={aadhar}
        onChangeText={(text) => setaadhar(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Aadhar * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={PAN_NO}
        onChangeText={(text) => setPAN_NO(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="PAN NO * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={Mailid}
        onChangeText={(text) => setMailid(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Mail ID * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={Bankdeatils}
        onChangeText={(text) => setBankdeatils(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Bank details * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={Location}
        onChangeText={(text) => setLocation(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="LOCATION * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={Accusedphoto}
        onChangeText={(text) => setAccusedphoto(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Photo* "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedFatherMobileNo1}
        onChangeText={(text) => setaccusedFatherMobileNo1(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Father mobile No1 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedFatherMobileNo2}
        onChangeText={(text) => setaccusedFatherMobileNo2(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Father mobile No 2 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedMotherMobileNo1}
        onChangeText={(text) => setaccusedMotherMobileNo1(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Mother mobile No 1 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedMotherMobileNo2}
        onChangeText={(text) => setaccusedMotherMobileNo2(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Mother mobile no 2* "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedwifeMobileNo1}
        onChangeText={(text) => setaccusedwifeMobileNo1(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Wife mobile no 1 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedwifeMobileNo2}
        onChangeText={(text) => setaccusedwifeMobileNo2(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Wife mobile no 2 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedfriendMobileNo1}
        onChangeText={(text) => setaccusedfriendMobileNo1(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Friend mobile No 1 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedfriendMobileNo2}
        onChangeText={(text) => setaccusedfriendMobileNo2(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Friend mobile No 2 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedcontact}
        onChangeText={(text) => setaccusedcontact(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Contact * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedsocialmediapage1}
        onChangeText={(text) => setaccusedsocialmediapage1(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Social Media page 1 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedsocialmediapage2}
        onChangeText={(text) => setaccusedsocialmediapage2(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Social Media page 2 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={accusedsocialmediapage3}
        onChangeText={(text) => setaccusedsocialmediapage3(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Social Media page 3 * "
        maxLength={20}
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      
      <Button title="Submit" onPress={handlePress} />
      <Button title="Review"
      onPress={()=>navigation.navigate('RECHECKING')} color='#e74c3c'></Button>
    </View>
    </ScrollView>
  );
    // Assuming that you have already initialized your Firebase app and have a valid Firebase database reference (db) available

    // Set data to the Firebase database
    // You can use your own implementation here to set data to Firebase Realtime Database in React Native
    // Example: firebase.database().ref("posts/" + crno).set({ crno: crno })
    console.log("Data added successfully!");
    setCrno(""); // Reset crno state variable to an empty string
  };

  
export default AddData;const styles = StyleSheet.create({
  container: {
   
    
  },
  header: {
    fontSize: 15,
    textAlign: "center",
  },

  input: {
    
  },
  output:{
   height:100,
   width:100,
   alignItems:'center'

  }
  
  
});