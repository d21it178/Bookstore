import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home1() {

    const Navigate = useNavigate();
    const onHome =() => {
    Navigate("/")
    };
  return (
    <div>Home1.....
    <button onClick={onHome}>go to home</button>
    </div>
  )
}
