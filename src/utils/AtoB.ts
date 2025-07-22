export default function AtoB(value: string) {
  try {
    return JSON.parse(decodeURIComponent(atob(value)));
  } catch (error) {
    console.error(error);
    return value;
  }
}
