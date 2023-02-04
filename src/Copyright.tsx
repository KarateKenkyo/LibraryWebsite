import {Center, Divider, Space} from "@mantine/core";
import {AiOutlineCopyrightCircle} from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";
import React from "react";

export default function Copyright() {
    return (
        <>
            <Space h="md" />
            <Divider my="sm"/>
            <Space h="md" />
            <Center>
                <AiOutlineCopyrightCircle />
                &shy;
                Copyright by Karateverein Kenkyo Rheinzabern e.V.
            </Center>
            <Space h="md" />
            <Divider my="sm"/>
            <Space h="md" />
        </>
    );
}