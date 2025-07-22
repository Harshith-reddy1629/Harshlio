export default function BtoA(value: unknown) {
  return btoa(encodeURIComponent(JSON.stringify(value)));
}
