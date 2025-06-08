import { ThemedText } from "@/components/ThemedText";
import BackgroundLayout from "@/components/ui/BackgroundLayout";
import React, { useState, useRef, useEffect } from "react";
import { remapProps } from "nativewind";
import {
  View,
  TextInput,
  FlatList,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

remapProps(FlatList, {
  contentContainerClassName: "contentContainerStyle",
});

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
      className={`m-1 p-3 min-w-[80%] rounded-lg ${item.sender === "user" ? "bg-background-400 self-end" : "bg-tabIconDefault-900 self-start"}`}
    >
      <ThemedText type="default">{item.text}</ThemedText>
    </View>
  );

  return (
    <BackgroundLayout>
      <KeyboardAvoidingView
        className="flex-1 bg-transparent bottom-20, relative min-w-[100%]"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerClassName="p-4 flex-grow justify-end "
        />
        <View className="flex-row px-2 bg-transparent items-center pb-[20%] mx-[5%]">
          <TextInput
            className="flex-1 border border-tabIconDefault-600 rounded-xl h-[45px] px-4 py-2 mr-2 text-base bg-white"
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <Pressable
            onPress={sendMessage}
            className="bg-primary-300 px-4 py-2 rounded-xl justify-center items-center"
          >
            <Text className=" color-secondary-900 text-lg font-semibold">
              Send
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </BackgroundLayout>
  );
};

export default ExploreChatScreen;
