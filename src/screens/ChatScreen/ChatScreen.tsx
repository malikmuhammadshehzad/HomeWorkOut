import React, { useRef, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppText, BackButton, Message, Response } from "../../components";
import styles from "./style";
import { SVG } from "../../assets";
import { COLORS } from "../../theme";
import { useTranslation } from "react-i18next";

const Separator = () => <View style={styles.separator} />;

export default function ChatScreen(): JSX.Element {
  // States
  // const [search, setSearch] = useState<string>('');
  const [inputText, setInputText] = useState<string>("");
    const [listData, setListData] = useState([]);
    const flatListRef = useRef(null);
  // Hooks
  const {t} = useTranslation()

  const SearchInput = () => {
    setListData((prevList) => [...prevList, inputText]);
    setInputText("");

    // Scroll to the bottom when a new message is added
    setTimeout(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, 100);
};

// const clearAllChat = () => {
//     setListData([]);
// };

const scrollToBottom = () => {
    if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
    }
};

  return (
    <View style={styles.main}>

      {/* Header */}
        <View style={styles.top}>
        <BackButton />
        <AppText style={styles.textAI} transText={'AI'}/>
        <AppText style={styles.text} transText={'gpt'}/>

        {/* clearAllChat */}
        {/* <TouchableOpacity onPress={clearAllChat} style={styles.clearButton}>
                    <Text style={{ color: "#FF0000", fontWeight: "bold" }}>Clear </Text>
                </TouchableOpacity> */}
        </View>

        <Separator/>

        {/* Date */}
        {/* <AppText style={styles.date}>29 November 2023</AppText> */}


        {/* Content */}
        <FlatList
                ref={flatListRef}
                style={{ paddingHorizontal: 16, marginBottom: 1 }}
                data={listData}
                renderItem={({ item }) => (
                    <View>
                        <Message message={item} />
                        <Response prompt={item} />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
            />

        {/* Go to Bottom Button */}
        {listData.length > 0 && (
                <View style={styles.goToBottomContainer}>
                    <TouchableOpacity onPress={scrollToBottom} style={styles.goToBottomButton}>
                        {/* <Text style={{ color: "#0000FF", fontWeight: "bold" }}>Go to Bottom</Text> */}
                        <SVG.DownArrow/>
                    </TouchableOpacity>
                </View>
            )}

        <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholderTextColor={COLORS.whiteTwo} placeholder={t('ask')}  value={inputText} onChangeText={(text) => setInputText(text)}/>
        <View style={styles.upload}>
        {/* <SVG.UploadIcon/> */}
        </View>
        <View style={styles.line}>
        {/* <SVG.VerticalLine/> */}
        </View>
        <TouchableOpacity style={styles.icon} onPress={SearchInput}>
        <SVG.SendIcon/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

