import { Platform } from 'react-native'

const styles = StyleSheet.create({
  height: (Platform.OS === 'ios' )? 200: 100,
})

if (Platform.Version === 21) {
  console.log('Running on Lollipop!');
}

if (parseInt(Platform.Version, 10) >= 9) {
  console.log('Running version higher than 8');
}

// MyTask.android.js
// MyTask.ios.js
// const MyTask = requirte('./MyTask')
