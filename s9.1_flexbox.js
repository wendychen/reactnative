const Direction = (props) => {
  return (
    <View style={styles.container}>
      <Box />
      <Box />
      <Box />
      <View style={{ flexDirection: 'row' }}>
        <Box />
        <Box />
        <Box />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AED581',
  }
});
