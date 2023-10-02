import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import cloud from './GCRFicon.png'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ReportContent = () => {
    const inputStyle = {
        color: 'white', 
        fontFamily: "poppins",
      };
    const labelStyle = {
        color: '#61dafb', 
        fontFamily: "poppins",
      };
    return (
        <Box className="Rbanner" sx = {{display: "flex", flexDirection: "column", placeItems: "center", paddingBottom : "2rem"}}>
            <img src={cloud} style = {{width: "10rem", marginTop:"10rem"}} />
            <Typography variant="h2" sx = {{fontWeight:600}}>Report</Typography>
            <Box sx = {{backdropFilter: "blur(0.2rem)",
                    backgroundColor: "#00000090",
                    borderRadius: "1.5rem",
                    borderTop: "0.5rem solid #da483b",
                    borderBottom: "0.5rem solid #ff9e0f",
                    borderLeft: "0.5rem solid #1ca45c",
                    borderRight: "0.5rem solid #4486f4",
                    display: "flex", 
                    flexDirection: "column", 
                    placeItems: "center", 
                    p:"1rem",
                    width: "max-content",
                    marginTop: "1rem",
                    marginBottom: "4rem"}}>
                
                <Typography variant="body1" sx = {{fontSize: "1.5rem", "fontFamily": "poppins", fontWeight: 600}}>Enter your email</Typography>
                <Box sx = {{display: "flex", placeItems: "center"}}>
                    <AlternateEmailIcon sx = {{position: "relative", top: "0.5rem", left: "1rem"}} />
                    <TextField id="standard-basic" label="Email" variant="standard"
                        sx = {{
                            m:"2rem",
                            borderRadius: "1rem",
                            width: "40ch"
                        }} 
                        InputProps={{
                            style: inputStyle,

                        }}
                        InputLabelProps={{
                            style: labelStyle,
                        }}
                        />
                </Box>
                <Button variant="contained" sx = {{
                    borderRadius: "1.5rem"
                }}>Check Report</Button>

            </Box>
        </Box>
    )
}

export default ReportContent