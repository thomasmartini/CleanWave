import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useContext } from "react";
import themeContext from "../config/ThemeContext";

const CollectedPage = () => {
    const theme = useContext(themeContext);
    const collectedItems = [
        { title: "Plastic flessen", price: 3 },
        { title: "Blikjes", price: 2 },
        { title: "Overgebleven afval", price: 4 },
    ];

    const notVerifiedItems = [
        { title: "Plastic flessen", price: 4 },
        { title: "Blikjes", price: 2 },
        { title: "Overgeleven afval", price: 6 },
    ];

    const totalCollected = collectedItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <View>
                <View style={styles.header}>
                    <Text style={[styles.headerText, { color: theme.color }]}>
                        Total Collected: €{totalCollected}
                    </Text>
                </View>
                <View style={styles.listContainer}>
                    <Text style={[styles.listTitle, { color: theme.color }]}>
                        Collected
                    </Text>
                    {collectedItems.map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.listItem,
                                { backgroundColor: theme.listItem },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.itemTitle,
                                    { color: theme.color },
                                ]}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={[
                                    styles.itemPrice,
                                    { color: theme.color },
                                ]}
                            >
                                €{item.price}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.listContainer}>
                    <Text style={[styles.listTitle, { color: theme.color }]}>
                        Not yet verified
                    </Text>
                    {notVerifiedItems.map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.listItem,
                                { backgroundColor: theme.listItem },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.itemTitle,
                                    { color: theme.color },
                                ]}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={[
                                    styles.itemPrice,
                                    { color: theme.color },
                                ]}
                            >
                                €{item.price}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: " ",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0782F9",
    },
    listContainer: {
        marginBottom: 20,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        marginBottom: 10,
    },
    itemTitle: {
        flex: 1,
        fontSize: 16,
        marginRight: 10,
    },
    itemPrice: {
        fontSize: 16,
        color: "#888888",
    },
});

export default CollectedPage;
