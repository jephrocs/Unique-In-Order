
uniqueInOrder = (iterable) => {
    empArr = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i + 1] !== iterable[i]) {
            empArr.push(iterable[i]);
        }
    } return empArr

}




if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />


      </View>
    );
  }
}
