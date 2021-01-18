// 리엑티브 파일
import * as React from 'react';
import { StyleSheet } from 'react-native';

// 공통 파일
import * as common from './src/common/common';

// 네이게이션 정의된 파일
import Navigator from './src/navigation/stack';

// 리던스 정의된 파일
import store from './src/reducers/store'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// 로컬 스토리지 파일
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component{
  render(){
    const persistor = persistStore(store)
    const persistenceKey = "persistenceKey";
    const persistNavigationState = async (navState) => {
      try {
        await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))
      } catch(err) {
        console.log(err)
      }
    }
    const loadNavigationState = async () => {
      const jsonString = await AsyncStorage.getItem(persistenceKey)
      return JSON.parse(jsonString)
    }
    return(
      <Provider style={styles.container} store={store}>
        <PersistGate persistor={persistor}> 
          <Navigator  persistNavigationState={persistNavigationState} loadNavigationState={loadNavigationState} screenProps={{call:common.call}} />   {/*screenProps 네비게이션 props 전달하는 법 */}
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
