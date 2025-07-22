import AtoB from "../AtoB";
import BtoA from "../BtoA";

export const setSessionStorage = <T>(key: string, value: T): void => {
  if (
    typeof window !== "undefined" &&
    typeof window.sessionStorage !== "undefined"
  ) {
    const storeValue = BtoA(value);
    sessionStorage.setItem(key, storeValue);
  }
};

export const getSessionStorage = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const value = sessionStorage.getItem(key);
    if (value) {
      const storedValue = AtoB(value);
      try {
        return JSON.parse(storedValue) as T;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return storedValue as T;
      }
    }
  }
  return null;
};

export const removeSessionStorage = (key: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};

export const clearSessionStorage = () => {
  if (typeof window !== "undefined") {
    sessionStorage.clear();
  }
};
