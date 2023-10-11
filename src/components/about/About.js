import React from 'react';
import Style from './About.module.scss';
import Section from "./Section";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return (
        <>
            {info.bio.map((text, index) => (
                <p>{text}</p>
            ))}
        </>
        );
    }

    function skillsText() {
        return <>
            <p style={{color: info.baseColor, fontWeight: "bold"}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor, fontWeight: "bold"}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p style={{color: info.baseColor, fontWeight: "bold"}}> Hobbies / Interests</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index} style={{listStyleType: "none", fontWeight: "normal"}}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Section text={aboutMeText()} title={"Introduction"}/>
            <Section text={skillsText()} title={"Skills"}/>
            <Section text={miscText()} title={"Experiences"}/>
        </Box>
    )
}