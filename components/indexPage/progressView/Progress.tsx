import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";

interface ProgressPieProps {
  progress: number; // Progress as a percentage (0 to 100)
}

const ProgressPie: React.FC<ProgressPieProps> = ({ progress }) => {
  const wheelSize = 80;
  const radius = wheelSize;
  const svgSize = wheelSize * 2 + 20;
  const strokeWidth = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg
        height={svgSize + 40}
        width={svgSize + 40}
        style={{
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 6,
          elevation: 5, // For Android shadow
          borderRadius: 11,}}
      >
        <Circle
          cx={(svgSize + 40) / 2}
          cy={(svgSize + 40) / 2}
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          r={radius}
          cx={(svgSize + 40) / 2}
          cy={(svgSize + 40) / 2}
          stroke="#4caf50"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${(svgSize + 40) / 2} ${(svgSize + 40) / 2})`}
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F4332",
  },
});

export default ProgressPie;
