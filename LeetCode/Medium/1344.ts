// 1344. Angle Between Hands of a Clock
/*
 * Math
 */

function angleClock(hour: number, minutes: number): number {
  const minutesAngle = 6 * minutes;
  const hourAngle = (hour % 12) * 30 + 0.5 * minutes;

  const angle = Math.abs(minutesAngle - hourAngle);

  return Math.min(angle, 360 - angle);
}
