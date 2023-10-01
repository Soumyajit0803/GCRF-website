import { Box, Divider, Toolbar, Typography } from "@mui/material";
import codeIIEST from './codeIIEST.png'
import MediaCard from "./profile";
import GCRFcool from './gcrfCool.png'


import Profile1 from "./Jyoti.jpg"
import Profile2 from "./Arnab.jpeg"

export default function Content(){
    return (
        <Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                
            }}>
                <Box>
                    <Typography 
                        variant = "h3" 
                        className="Question"
                        sx={{
                            padding: "1.5rem",
                        }}>What is GoogleCloudReady Facilitator Programme?
                    </Typography>
                    <Toolbar sx={{width: "75ch"}} className = "Text">
                        The GoogleCloudReady Facilitator program will provide you an opportunity to kickstart your career in cloud and get hands on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.<br /><br />

                        Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help. 😎 Check out the official website to know more about this program
                    </Toolbar>
                </Box>
                <img src = {GCRFcool} style ={{"width": "25rem", "padding": "1rem", "justify-self": "center", "align-self": "center"}}/>
            </Box>

            {/*Break here*/}
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                
                margin: "2rem"
                
            }}>
                <img src = {codeIIEST} style ={{"width": "15rem", "padding": "1rem", "justify-self": "center", "align-self": "center"}}/>
                <Box>
                    <Typography variant='h3' sx={{padding: "1.5rem", paddingTop: 0, fontWeight: 600}}>
                        Our Facilitators
                    </Typography>

                    <Toolbar variant='h6' style={{width: "75ch"}}>
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help.
                    </Toolbar>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "1rem"
                    }}>
                        <MediaCard name={"Jyoti Jaiswal"} description={"Hey, I am Jyoti Jaiswal. I like to introduce myself as a good observer, listener and reader. I am passionate about technology and human pyschology. I like to contribute in tech-communities. Besides that, I love cats more than I love dogs. Let's connect with me on twitter."} profile = {Profile1}/>
                        <MediaCard name={"Arnab Sen"} description={"I am a Software Developer with experience in Web Development, Automation, and Content Writing. For the past 2 years, I have worked around an immense variety of technologies and frameworks such as React, Vue in Frontend and Node, Flask, Rails in the Backend."} profile={Profile2} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}