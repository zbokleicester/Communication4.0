import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image, VirtualizedList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import DrawerButton from '../components/DrawerDesignButton';

const PageCampus = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>

     <View> <DrawerButton /> </View>
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({

  drawer:{

    height: 50,
    width: 50
  },

  imageDrawer:{

    height: 50,
    width: 50
  }
});

export default PageCampus;



// Cube3D.tsx
// import React from 'react';
// import { View, Image, StyleSheet, Dimensions } from 'react-native';
// import {
//   Gesture,
//   GestureDetector,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withDecay,
// } from 'react-native-reanimated';

// const { width } = Dimensions.get('window');
// const CUBE_SIZE = width * 0.6;

// const images = [
//   require('../assets/images/logoPOLEFO.png'), // Face avant
//   require('../assets/images/logoPOLEFO.png'), // Face arrière
//   require('../assets/images/logoPOLEFO.png'), // Gauche
//   require('../assets/images/logoPOLEFO.png'), // Droite
//   require('../assets/images/logoPOLEFO.png'), // Dessus
//   require('../assets/images/logoPOLEFO.png'), // Dessous
// ];

// const PageCampus = () => {
//   const rotateX = useSharedValue(0);
//   const rotateY = useSharedValue(0);

//   const panGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       rotateY.value += event.translationX / 2;
//       rotateX.value -= event.translationY / 2;
//     })
//     .onEnd((event) => {
//       rotateX.value = withDecay({ velocity: -event.velocityY });
//       rotateY.value = withDecay({ velocity: event.velocityX });
//     });

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [
//       { perspective: 1000 },
//       { rotateX: `${rotateX.value}deg` },
//       { rotateY: `${rotateY.value}deg` },
//     ],
//   }));

//   const getFaceTransformStyle = (
//   rotateXDeg: number,
//   rotateYDeg: number,
//   translateDistance: number
// ) => {
//   const transforms: any[] = [];

//   if (rotateXDeg !== 0) transforms.push({ rotateX: `${rotateXDeg}deg` });
//   if (rotateYDeg !== 0) transforms.push({ rotateY: `${rotateYDeg}deg` });

//   if (rotateYDeg === 90) transforms.push({ translateX: translateDistance });
//   else if (rotateYDeg === -90) transforms.push({ translateX: -translateDistance });
//   else if (rotateYDeg === 180) transforms.push({ translateY: 0 }); // arrière
//   else if (rotateXDeg === 90) transforms.push({ translateY: -translateDistance });
//   else if (rotateXDeg === -90) transforms.push({ translateY: translateDistance });
//   else transforms.push({ translateY: 0 }); // avant

//   return { transform: transforms };
// };


//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <GestureDetector gesture={panGesture}>
//         <Animated.View style={[styles.container, animatedStyle]}>
//           <View style={[styles.face, getFaceTransformStyle(0, 0, CUBE_SIZE / 2)]}>
//             <Image source={images[0]} style={styles.image} />
//           </View>
//           <View style={[styles.face, getFaceTransformStyle(0, 180, CUBE_SIZE / 2)]}>
//             <Image source={images[1]} style={styles.image} />
//           </View>
//           <View style={[styles.face, getFaceTransformStyle(0, -90, CUBE_SIZE / 2)]}>
//             <Image source={images[2]} style={styles.image} />
//           </View>
//           <View style={[styles.face, getFaceTransformStyle(0, 90, CUBE_SIZE / 2)]}>
//             <Image source={images[3]} style={styles.image} />
//           </View>
//           <View style={[styles.face, getFaceTransformStyle(90, 0, CUBE_SIZE / 2)]}>
//             <Image source={images[4]} style={styles.image} />
//           </View>
//           <View style={[styles.face, getFaceTransformStyle(-90, 0, CUBE_SIZE / 2)]}>
//             <Image source={images[5]} style={styles.image} />
//           </View>
//         </Animated.View>
//       </GestureDetector>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: CUBE_SIZE,
//     height: CUBE_SIZE,
//     alignSelf: 'center',
//     marginTop: 50,
//     position: 'relative',
//   },
//   face: {
//     position: 'absolute',
//     width: CUBE_SIZE,
//     height: CUBE_SIZE,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backfaceVisibility: 'hidden',
//   },
//   image: {
//     width: CUBE_SIZE,
//     height: CUBE_SIZE,
//     resizeMode: 'cover',
//   },
// });

// export default PageCampus;
