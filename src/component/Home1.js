import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Home1() {

    const Navigate = useNavigate();
    const onHome =() => {
    Navigate("/")
    alert("clicked");
    };
  return (
    <div>Home1.....
        <Button variant="contained" onClick={onHome} >Hello World</Button>
    {/* <button onClick={onHome}>go to home</button> */}
    </div>
  )
}
