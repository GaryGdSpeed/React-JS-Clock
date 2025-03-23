export default function HoursHand({ hours, minutes }) {
    return (
        <div style={{
            transform: `rotate(${hours * 30 + Math.floor(minutes / 2)}deg)`,
            animation: `timer ${3600 * 12}s linear infinite forwards`
        }} id="hours-hand"></div>
    )
}