import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.text}>
        Welcome to Planet Clothing App

        At Planet Clothing App, we believe that fashion is more than just clothing—it's a form of self-expression. Our mission is to make stylish, high-quality clothing accessible to everyone, no matter where you are.

        Who We Are

        Founded in [Year], Planet Clothing App was created by a team of fashion enthusiasts and tech innovators who wanted to revolutionize the way people shop for clothes. We combine the latest trends with timeless classics to offer a diverse range of styles that cater to all tastes and preferences.

        What We Offer

        - Curated Collections: Our team of fashion experts curates collections that are both trendy and versatile, ensuring you can find the perfect outfit for any occasion.
        - High-Quality Materials: We are committed to using only the finest materials to ensure our clothes are not only stylish but also durable and comfortable.
        - Personalized Shopping Experience: Our app uses advanced AI technology to provide personalized recommendations based on your style preferences and shopping history.
        - Sustainable Fashion: We believe in sustainable fashion and are dedicated to reducing our environmental impact through eco-friendly practices and materials.

        Our Vision

        Our vision is to become a global leader in the fashion industry by continuously innovating and adapting to the changing needs of our customers. We strive to create a seamless shopping experience that combines the convenience of technology with the joy of discovering new fashion.

        Thank you for choosing [App Name]. We look forward to being a part of your style journey!

        Feel free to customize this to better fit your app's unique features and brand identity!
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
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2),
    color: '#000',
  },
  text: {
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveFontSize(2.8),
    color: '#333',
  },
});

export default AboutUs;
