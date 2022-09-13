function possibleBonus(position1, position2) {
const subtracted = position2 - position1;
if (position1>position2) {
return false}
else if (subtracted<7) {
  return true
    }
else {
    return false
    }
}
