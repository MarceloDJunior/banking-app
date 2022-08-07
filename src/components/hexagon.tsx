import { StyleSheet, View } from 'react-native';

type Props = {
  size: number;
  color: string;
};

export const Hexagon = ({ size, color }: Props) => {
  const dynamicStyles = styles(size, color);

  return (
    <View style={dynamicStyles.hexagon}>
      <View style={dynamicStyles.hexagonInner} />
      <View style={dynamicStyles.hexagonBefore} />
      <View style={dynamicStyles.hexagonAfter} />
    </View>
  );
};

const styles = (size: number, color: string) =>
  StyleSheet.create({
    hexagon: {
      height: size,
      width: size * 0.75,
    },
    hexagonInner: {
      height: size,
      width: size * 0.75,
      backgroundColor: color,
    },
    hexagonAfter: {
      position: 'absolute',
      left: size * 0.25 * -1,
      top: 0,
      bottom: 0,
      width: 0,
      height: size,
      borderStyle: 'solid',
      borderTopWidth: size * 0.5,
      borderTopColor: 'transparent',
      borderBottomWidth: size * 0.5,
      borderBottomColor: 'transparent',
      borderRightWidth: size * 0.25,
      borderRightColor: color,
    },
    hexagonBefore: {
      position: 'absolute',
      right: size * 0.25 * -1,
      top: 0,
      bottom: 0,
      width: 0,
      height: size,
      borderStyle: 'solid',
      borderTopWidth: size * 0.5,
      borderTopColor: 'transparent',
      borderBottomWidth: size * 0.5,
      borderBottomColor: 'transparent',
      borderLeftWidth: size * 0.25,
      borderLeftColor: color,
    },
  });
