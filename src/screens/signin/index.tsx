import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./style";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/buttonicon";
export function SignIn() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}e organize suas{`\n`}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
