import React, {useState} from 'react';
import './App.scss';
import {Center, Divider, MantineProvider, Modal, Space, Text, Title} from "@mantine/core";
import Copyright from './Copyright';

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
                <iframe
                    src="https://www.youtube.com/embed/p0a7eRxq_Lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Modal>

            <div
                className={props.className}
                onClick={() => setOpened(true)}
            >
                <div className={"CardText"}>
                    <Text fz="xl">{props.title}</Text>
                </div>
            </div>
        </div>
    );
}

function Seperator() {
    return (
        <>
            <Space h="xl" />
            <Divider />
            <Space h="xl" />
        </>
    );
}

export default function App() {

    const kata = [
        {
            title: "Geki sai da ichi",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Geki sai da ni",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Saifa",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanchin",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Tensho",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Shisochin",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanseru",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sepai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sesan",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kururunfa",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Suparinpai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
    ];

    const bunkai = [
        {
            title: "Geki sai da ichi - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Geki sai da ni - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Saifa - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanchin - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Shisochin - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanseru - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sepai - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kururunfa - Bunkai",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
    ];

    const kumite = [
        {
            title: "Nage Waza - I",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Nage Waza - II",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Nage Waza - III",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kumite Ura - I",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kumite Ura - II",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kumite Ura - III",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Selbstverteidigung - I",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Selbstverteidigung - II",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Selbstverteidigung - III",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Selbstverteidigung - IV",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Selbstverteidigung - V",
            url: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
            video_id: "p0a7eRxq_Lg"
        },
    ];

    const kataRows = kata.map((e) => (
        <Card
            className={"Card"}
            title={e.title}
            url={e.url}
            video_id={e.video_id}
        />
    ));

    const bunkaiRows = bunkai.map((e) => (
        <Card
            className={"Card"}
            title={e.title}
            url={e.url}
            video_id={e.video_id}
        />
    ));

    const kumiteRows = kumite.map((e) => (
        <Card
            className={"Card"}
            title={e.title}
            url={e.url}
            video_id={e.video_id}
        />
    ));

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <Seperator />
            <Center>
                <Title order={1}>
                    Karateverein Kenkyo Rheinzabern e.V.
                </Title>
            </Center>
            <Seperator />
            <div className="App" id="App">
                {kataRows}
            </div>
            <Seperator />
            <div className="App" id="App">
                {bunkaiRows}
            </div>
            <Seperator />
            <div className="App" id="App">
                {kumiteRows}
            </div>
            <Copyright />
        </MantineProvider>
    );
}
