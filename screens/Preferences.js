import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Preferences() {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState({
    food_preferences: [],
    accommodation_preferences: [],
    transport_preferences: [],
    activity_preferences: [],
    interests: [],
  });

  const [clouds, setClouds] = useState({
    cloud1: { top: "7%", left: "-20%", width: 300, height: 200 },
    cloud2: { top: "5%", right: "-10%", width: 150, height: 200 },
    cloud3: { bottom: "70%", left: "45%", width: 150, height: 250 },
    cloud4: { bottom: "61%", right: "25%", width: 180, height: 300 },
    cloud5: { top: "12%", left: "56%", width: 200, height: 200 },
  });

  const steps = [
    {
      title: "O que você gosta de comer?",
      field: "food_preferences",
      options: ["japonesa", "italiana", "brasileira", "francesa", "mexicana", "indiana"],
    },
    {
      title: "Qual tipo de acomodação você prefere?",
      field: "accommodation_preferences",
      options: ["hotel", "pousada", "resort", "hostel", "apartamento", "casa"],
    },
    {
      title: "Como você prefere se locomover?",
      field: "transport_preferences",
      options: ["avião", "carro", "ônibus", "trem", "cruzeiro"],
    },
    {
      title: "Quais atividades você gosta?",
      field: "activity_preferences",
      options: ["city_tour", "museus", "parques", "compras", "gastronomia"],
    },
    {
      title: "O que você mais gosta de fazer?",
      field: "interests",
      options: ["praia", "trilha", "caminhada", "balada", "shows", "natureza"],
    },
  ];

  const handleSelect = (option) => {
    const field = steps[currentStep].field;
    setPreferences((prev) => {
      const current = [...prev[field]];
      const index = current.indexOf(option);

      if (index >= 0) {
        current.splice(index, 1);
      } else if (current.length < 3) {
        current.push(option);
      }

      return {
        ...prev,
        [field]: current,
      };
    });
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      console.log(preferences);
      alert("Preferências salvas com sucesso!");
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Adicionando as 5 nuvens com ajustes individuais */}
      {Object.keys(clouds).map((cloudKey) => (
        <Image
          key={cloudKey}
          source={require("../assets/images/nuvem.png")} // Certifique-se de que o caminho está correto
          style={[
            styles.cloud,
            clouds[cloudKey], // Aplica as propriedades específicas da nuvem
          ]}
          resizeMode="contain"
        />
      ))}

      {/* Container branco na parte superior */}
      <View style={styles.whiteContainer}>
        <Text style={styles.whiteContainerText}></Text>
      </View>

      {/* Título acima do container e das nuvens */}
      <Text style={styles.titleAboveAll}>{steps[currentStep].title}</Text>

      <View style={styles.overlay}>
        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <View
              key={index}
              style={[
                styles.stepIndicator,
                index === currentStep && styles.activeStepIndicator,
              ]}
            />
          ))}
        </View>

        <View style={styles.optionsContainer}>
          {steps[currentStep].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelect(option)}
              style={[
                styles.option,
                preferences[steps[currentStep].field].includes(option) && styles.selectedOption,
              ]}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.navButton}>
            <Text style={styles.navButtonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={styles.navButton}>
            <Text style={styles.navButtonText}>
              {currentStep === steps.length - 1 ? "Finalizar" : "Próximo"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007AFF",
    position: "relative", 
  },
  cloud: {
    position: "absolute",
    opacity: 1,
    zIndex: 10, // Abaixo do container branco e do título
  },
  whiteContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20, // Acima das nuvens, mas abaixo do título
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  whiteContainerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  titleAboveAll: {
    position: "absolute",
    top: "12%", // Posiciona acima do container e das nuvens
    left: 1,
    right: 0,
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "#0000FF", // Cor azul
    zIndex: 30,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 100, // Para não sobrepor o container branco
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  stepIndicator: {
    width: 10,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: 5,
  },
  activeStepIndicator: {
    backgroundColor: "#836FFF",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
  option: {
    margin: 10,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedOption: {
    backgroundColor: "#ADD8E6",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  navButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  navButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});