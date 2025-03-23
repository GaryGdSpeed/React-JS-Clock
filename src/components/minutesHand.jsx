export default function MinutesHand({ minutes, seconds }) {
    return (
        <div style={{
            transform: `rotate(${minutes * 6 + Math.floor(seconds / 60)}deg)`,
            animation: `timer 3600s linear infinite forwards`
        }} id="minutes-hand"></div>
    )
}