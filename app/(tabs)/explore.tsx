import BackgroundLayout from "@/components/ui/BackgroundLayout";
import { Colors } from "@/constants/Colors";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Pressable,
} from "react-native";

import { Ollama } from "ollama";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const mockBotReply = async (userMessage: string): Promise<string> => {
  // Simulate bot reply (replace with real API call)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Bot: You said "${userMessage}"`);
    }, 800);
  });
};

const ExploreChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const botReplyText = await mockBotReply(input);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: botReplyText,
      sender: "bot",
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <BackgroundLayout>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <Pressable onPress={sendMessage} style={styles.sendButton}>
            <Text style={{ color: "#ffff", fontSize: 16 }}>Send</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    bottom: 80,
    position: "fixed",
    minWidth: "100%",
  },
  messagesList: { padding: 16, flexGrow: 1, justifyContent: "flex-end" },
  messageContainer: {
    marginVertical: 4,
    padding: 10,
    borderRadius: 12,
    minWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#ECECEC",
    alignSelf: "flex-start",
  },
  messageText: { fontSize: 16 },
  inputContainer: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 45,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  sendButton: {
    backgroundColor: Colors.light.text,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExploreChatScreen;
