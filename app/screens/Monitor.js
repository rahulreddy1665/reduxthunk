import React from 'react';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions/CrudActions';

const Monitor = props => {
  const [todo, setTodo] = useState('');

  const handleAdd = () => {
    props.CreateTodo(todo);
    console.log(props);
    setTodo('');
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Todo List
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* TextInput */}
        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: '90%',
            borderRadius: 5,
          }}
          placeholder="Add todo"
          onChangeText={text => setTodo(text)}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            width: '90%',
            borderRadius: 5,
            alignItems: 'center',
          }}
          onPress={handleAdd}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// For mapping the redux state to the page
const mapStateToProps = state => {
  return {
    TodoData: state.test.TodoData,
    isLoading: state.test.isLoading,
    error: state.test.error,
  };
};

// For mapping the function to the page(i.e the function which we called in reducers)
const mapDispatchToProps = dispatch => {
  return {
    CreateTodo: () => dispatch(actions.CreateTodo()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
