import React, {useState} from 'react';
import './App.scss';
import {Center, Divider, MantineProvider, Modal, Space, Text, Title} from "@mantine/core";
import Copyright from './Copyright';

function Card(props: any) {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Modal
                fullScreen
                size={"auto"}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                title={<Text fz="xl">{props.title}</Text>}
                withCloseButton={true}
                onClose={() => setOpened(false)}
            >
                <video controls muted autoPlay className="videoContainer">
                    <source src={props.url} type="video/mp4" className="videoSource"/>
                </video>
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

function ElementWrapper(props: any) {
    return (
        <>
            <Seperator />
            <Center>
                <Title ta="center" order={3}>
                    {props.type}
                </Title>
            </Center>
            <Seperator />
            <div className="App" id="App">
                {props.kata}
            </div>
        </>
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

    const kata_fast = [
        {
            title: "Geki sai da ichi",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/01-Geki-sai-dai-ichi_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Geki sai da ni",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/02-Geki-sai-dai-ni_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Saifa",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/03-Saifa_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Senchin",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/04-Senchin_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanseru",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/05-Sanseru_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Shisochin",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/06-Shisochin_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Tensho",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/07-Tensho.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanchin",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/08-Sanchin.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sepai",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/09-Senpai_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sesan",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/10-Sesan_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kururunfa",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/11-Kururunfa_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Suparinpai",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/12-Suparinpai_fast.mp4",
            video_id: "p0a7eRxq_Lg"
        },
    ];
    
    const kata_slow = [
        {
            title: "Geki sai da ichi",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/01-Geki-sai-dai-ichi_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Geki sai da ni",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/02-Geki-sai-dai-ni_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Saifa",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/03-Saifa_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Senchin",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/04-Senchin_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        /*
        {
            title: "Sanseru",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/05-Sanseru_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        */
        {
            title: "Shisochin",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/06-Shisochin_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Tensho",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/07-Tensho.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sanchin",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/08-Sanchin.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sepai",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/09-Senpai_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Sesan",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/10-Sesan_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Kururunfa",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/11-Kururunfa_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
        {
            title: "Suparinpai",
            url: "https://github.com/KarateKenkyo/Data/raw/main/assets/12-Suparinpai_slow.mp4",
            video_id: "p0a7eRxq_Lg"
        },
    ];

    const kataFastRows = kata_fast.map((e) => (
        <Card
            className={"Card"}
            title={e.title}
            url={e.url}
            video_id={e.video_id}
        />
    ));

    const kataSlowRows = kata_slow.map((e) => (
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
                <Title ta="center" order={1}>Karateverein Kenkyo Rheinzabern e.V.</Title>
            </Center>
            <Center>
                <Title ta="center" order={3}>Die 12 Goju Ryu Katas</Title>
            </Center>

            <ElementWrapper type="Schnelle, Präsize und Korrekte Ausführung" kata={kataFastRows} />
            <ElementWrapper type="Langsame und Lehrreiche Ausführung" kata={kataSlowRows} />

            <Copyright />
        </MantineProvider>
    );
}
