import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const TermsOfUse = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis
        justo sit amet luctus bibendum. Curabitur semper posuere laoreet.
        Integer et dui eu est euismod tincidunt. Sed nunc odio, vestibulum sed
        maximus eget, eleifend sit amet dolor. Nullam vehicula venenatis risus
        sit amet sodales. Integer non odio sodales, eleifend ipsum nec, iaculis
        leo. In sit amet tellus fermentum, cursus lacus nec, mollis sapien.
        Nulla vel nibh diam. Ut pulvinar metus eu venenatis vulputate. Donec
        sodales nunc sollicitudin elit facilisis, id vulputate dui sollicitudin.
        Suspendisse venenatis rutrum velit eu dignissim. Donec efficitur, quam
        quis eleifend luctus, ex ex efficitur dolor, et laoreet dolor purus ac
        neque. Duis aliquam hendrerit mollis. Pellentesque facilisis nec tellus
        a vestibulum. Sed non tincidunt justo. Aenean tortor nulla, ullamcorper
        in cursus id, egestas quis libero. Vestibulum dapibus, sem quis viverra
        dignissim, lacus ligula egestas orci, vitae dignissim neque est sed
        dolor. Quisque at eros placerat, blandit quam quis, elementum tortor. Ut
        aliquet id mi at convallis. Sed placerat, ante vitae tincidunt posuere,
        magna libero semper augue, vel tincidunt libero est quis purus. Sed
        lacus eros, vestibulum vitae eleifend nec, feugiat imperdiet eros. Nunc
        et libero id lectus malesuada aliquam. Fusce augue ex, consequat ut
        dolor eget, aliquam egestas velit.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: responsiveWidth(5),
    backgroundColor: '#fff',
  },
  text: {
    fontSize: responsiveFontSize(2), // Adjusts based on screen size
    lineHeight: responsiveFontSize(3), // Adjusts line height based on screen size
    color: '#333',
  },
});

export default TermsOfUse;
