import React, {useState} from 'react';
import './App.scss';
import {Image, MantineProvider, Modal, Text} from "@mantine/core";

function Card(props: any) {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Modal
                size={"auto"}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                title={<Text fz="xl">{props.title}</Text>}
                withCloseButton={true}
                onClose={() => setOpened(false)}
            >
                <Image
                    radius={"md"}
                    src={props.url}
                    alt={"Hier sollte ein Bild sein ..."}
                    withPlaceholder
                />
            </Modal>

            <div
                className={"Card"}
                onClick={() => setOpened(true)}
            >
                <div className={"CardText"}>
                    <Text fz="xl">{props.title}</Text>
                </div>
                <img
                    alt={""}
                    className={"CardImage"}
                    src={props.url}
                />
            </div>
        </div>
    );
}

export default function App() {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <div className="App" id="App">
                <Card
                    title="Sanseiru"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Saifa"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Seisan"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Senchin"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Sanseiru - Bunkai"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Saifa - Bunkai"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Nage Waza"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Kumite Ura - I"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
                <Card
                    title="Kumite Ura - II"
                    url="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                />
            </div>
        </MantineProvider>
    );
}
