import { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Comm from '@mui/icons-material/PeopleRounded';
import Leader from '@mui/icons-material/LeaderboardRounded';
import Profile from "@material-ui/icons/Person";
import Yoga from '@mui/icons-material/SelfImprovementRounded';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useNavigate } from 'react-router-dom'

const BottomNav = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate()

    return (
        <div
            style={{
                position: "fixed",
                bottom: "0",
                width: "100%",
                zIndex: 2,
                background: '#536B6F'

            }} >

            <BottomNavigation
                style={{ background: '#536B6F', height:'80px' }}
                showLabels
                value={value}
                onChange={(e, newValue) => {
                    setValue(newValue);
                }} >
                <BottomNavigationAction
                    style={{ color: '#fff' }}
                    label="Sessions"
                    icon={<Yoga />}
                    onClick={() => {
                        navigate("/sessions")
                    }} />
                <BottomNavigationAction style={{ color: '#fff' }}
                    label="Community"
                    icon={<Comm />}
                    onClick={() => {
                        navigate("/community")
                    }} />
                <BottomNavigationAction
                    style={{ color: '#fff' }}
                    label="Podium"
                    icon={<Leader />} onClick={() => {
                        navigate("/podium")
                    }} />
                <BottomNavigationAction
                    style={{ color: '#fff' }}
                    label="Profile"
                    icon={<Profile />}
                    onClick={() => {
                        navigate("/profile")
                    }} />
            </BottomNavigation>
        </div>
    );
};
export default BottomNav;
