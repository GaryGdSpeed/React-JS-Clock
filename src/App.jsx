import "./App.css"
import { useState } from "react"
import SecondsHand from "./components/secondsHand";
import MinutesHand from "./components/minutesHand";
import HoursHand from "./components/hoursHand";

export default function App() {
  const currentTime = new Date();
  const [ clockHands, setClockHands ] = useState({
    seconds: currentTime.getSeconds(),
    minutes: currentTime.getMinutes(),
    hours: currentTime.getHours() < 12 ? currentTime.getHours() : currentTime.getHours() - 12,
  });

  return (
    <>
      <main id="the-clock">
        <SecondsHand seconds={clockHands.seconds} />
        <MinutesHand minutes={clockHands.minutes} seconds={clockHands.seconds} />
        <HoursHand hours={clockHands.hours} minutes={clockHands.minutes} />
    </main>
    <p>... Kevobizzi</p>
    </>
  )
}