import React from "react";
import { Center } from "@chakra-ui/react";
import FindIdForm from "../components/findaccount/FindIdForm";
import PwdRecoverForm from "../components/findaccount/PwdRecoverForm";

function FindAccountPage(props: { type: string }) {
    return (
        <>
            <Center>
                {props.type === "username" ? (
                    <FindIdForm />
                ) : (
                    <PwdRecoverForm />
                )}
            </Center>
        </>
    );
}

export default FindAccountPage;
