'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import DynamicList from "../../../../component/AdminPanel/List/DynamicList";
import commonStyles from 'src/app/AdminPanel/AdminPanel.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useContext, useEffect, useState} from "react";
import {AlertContext} from "../../../../component/AdminPanel/Alerts/AlertContext";
import {LoadingContext} from "../../../../component/Loading/LoadingContext";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENDPOINT = '/students/';

export default function Page() {
    const [currentData, setCurrentData] = useState([]);
    const url = `${BASE_URL}${ENDPOINT}`;
    const alertContext = useContext(AlertContext);
    const loadingContext = useContext(LoadingContext);

    const fetchData = async () => {
        const result = await fetch(url)
            .then(response => response.json())
            .finally(() => changeLoadingProcessState(false)).catch((reason) => {
                showErrorAlert();
                console.log(reason);
            });

        setCurrentData(getValidStudents(result));
    }

    useEffect(() => {
            changeLoadingProcessState(true);
            fetchData()
        },
        []);

    return (
        <Box className="list">
            {generateList()}
        </Box>
    );

    function generateList() {
        return (
            <DynamicList
                icon={<AccountCircleIcon sx={{color: '#FFFFFF', transform: 'scale(1.9)'}}></AccountCircleIcon>}
                itemValues={currentData.map((student) => student.name + " " + student.surname + " Id:" + student.student_id)}
                itemIDs={currentData.map((student) => student.student_id)}
                dataLength={currentData.length}
                title={"студентів"}
                itemName={"Студент "}
                editComponentUrl={'/AdminPanel/Students/EditStudent'}
            >
            </DynamicList>
        );
    }

    function getValidStudents(students) {
        let validStudents = [];

        for (const student of students) {
            if (student.student_id != 1) {
                validStudents.push(student);
            }
        }

        return validStudents;
    }

    function showErrorAlert() {
        alertContext.setErrorOccurredState();
    }

    function changeLoadingProcessState(state) {
        loadingContext.setLoadingState(state);
    }
}

