import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    width: "80%", // Smaller width
    paddingVertical: 12, // Less height
    marginVertical: 8, // More space between buttons
    borderRadius: 20, // More rounded edges
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(220, 0, 0, 0.85)", // Deep red with slight transparency
    shadowColor: "#ff4d4d",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  orgButton: {
    width: "80%", // Smaller width
    paddingVertical: 12, // Less height
    marginVertical: 8, // More space between buttons
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 150, 0, 0.85)", // Deep green with slight transparency
    shadowColor: "#00cc00",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16, // Slightly smaller text
    fontWeight: "600", // Less bold for elegance
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1, // Slight spacing for readability
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
