import { getData } from "./axios";

export async function safeGetData<T>(
  ...args: Parameters<typeof getData<T>>
): Promise<T | null> {
  try {
    return await getData<T>(...args);
  } catch (error) {
    return null;
  }
}
