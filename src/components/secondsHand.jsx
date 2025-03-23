export default function SecondsHand({ seconds }) {
    return (
        <div style={{
            transform: `rotate(${seconds * 6}deg)`,
            animation: `timer 60s linear infinite forwards`
        }} id="seconds-hand"></div>
    )
}