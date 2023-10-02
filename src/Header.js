import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GCRFicon from './GCRFicon.png'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export default function Header() {
	return (
		<Box sx={{
			display: 'flex',
			backgroundColor: "#00000090",
			backdropFilter: "blur(0.3rem)",
			gap: "1rem",
			padding: "1rem",
			position: "fixed",
			top: "0.1px",
			width: "100vw",
			zIndex: 1,
		}}>
			<Typography sx={{
				fontSize: '1.5rem',
				fontFamily: 'Poppins',
				fontWeight: 500,
				flexGrow: 1,
				color: "#fff"
			}}
			>
				<img src={GCRFicon} style={{ "width": "2rem", position: "relative", top: "0.2rem" }} /> GCSJ
			</Typography>
			<Button className='btn' sx={{ color: "#fff" }} startIcon={<HomeIcon />}>Home</Button>
			<Button className='btn' sx={{ color: "#fff" }} startIcon={<FormatListBulletedIcon />}>report</Button>
			<Button className='btn' sx={{ color: "#fff" }} startIcon={<LeaderboardIcon />}>leaderboard</Button>

		</Box>
	)
}