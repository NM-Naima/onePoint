import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addElement } from '../../store';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function Element(props){
    return(
        <View style = {styles.sectionListElement}>
            <Text style= {styles.element}>{props.el}</Text>
        </View>
    )
};

function AppContainer(){
    const [ el, setEl ] = useState('');
    const els = useSelector(state => state.data);
    const dispatch = useDispatch();

    const addEl = () => {
      
      dispatch(addElement(el))
      setEl('')

    };

    const elOnChange = e => {
        setEl(e.target.value)
    };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.sectionTitle}>
        <Text style={styles.title}>Add Elements</Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <View style = {styles.sectionInput}>
              <TextInput
              onChange={elOnChange}
              placeholder="add a new element!"
              editable
              numberOfLines={40}
              multiline
              style= {styles.input}
              value={el}    
              /> 
              </View>
              <TouchableOpacity
              style={styles.button}
              onPress={addEl}
              >
              <Text>Add</Text>
              </TouchableOpacity>
              {console.log(el)}
              <View>
                  {els.map((el, index) => <Element key={index} element={el}/>)}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const { width : WIDTH } = Dimensions.get('window');
const { height : HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollView: {
    
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {  
    height: 50,
    justifyContent: "center" ,
    width : WIDTH,
    backgroundColor: Colors.lighter,  
  },
  title : {
    alignSelf:'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionListElement : {
    height:40,
    width: WIDTH - 500,
    backgroundColor:'#31F9BD', 
    borderRadius: 3,
    marginBottom: 10,
    justifyContent: "center" 
  },
  element:{
    fontSize:15,
    fontWeight: '400',
  },
  sectionInput : {
    height:40,
    width: WIDTH - 500,
    borderWidth:2, 
    borderRadius: 3,
    marginBottom: 30,
    justifyContent: "center" 
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 30,
    marginRight:140,
    marginLeft:140,
    borderRadius: 30,
  }, 
});

export default AppContainer;
