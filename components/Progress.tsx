import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";

interface ProgressPieProps {
  progress: number; // Progress as a percentage (0 to 100)
}

const ProgressPie: React.FC<ProgressPieProps> = ({ progress }) => {
  const wheelSize = 60;
  const radius = wheelSize;
  const svgSize = wheelSize * 2 + 20;
  const strokeWidth = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height={svgSize} width={svgSize}>
        <Circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          r={radius}
          cx={svgSize / 2}
          cy={svgSize / 2}
          stroke="#4caf50"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.text}>{`${progress}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    color: "#4caf50",
  },
});

export default ProgressPie;
