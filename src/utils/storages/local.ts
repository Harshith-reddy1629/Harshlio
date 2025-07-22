import AtoB from "../AtoB";
import BtoA from "../BtoA";

export const setLocalStorage = <T>(key: string, value: T): void => {
  if (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  ) {
    localStorage.setItem(key, BtoA(value));
  }
};

export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return AtoB(value) as T;
      } catch (e) {
        console.error(e);
        return value as T;
      }
    }
  }
  return null;
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
