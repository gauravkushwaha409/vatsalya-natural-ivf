/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_API_URL } from "./endpoints";

export const getData = async <T = any>(
  url: string,
  params?: Record<string, any>,
  options?: {
    timeout?: number;
  }
): Promise<T> => {
  const controller = new AbortController();
  const timeout = options?.timeout ?? 30000;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const queryString = params
      ? "?" +
        new URLSearchParams(
          Object.entries(params).reduce<Record<string, string>>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        ).toString()
      : "";

    const response = await fetch(`${BASE_API_URL}${url}${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Request failed to ${url}:`, {
        status: response.status,
        statusText: response.statusText,
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();

    return data;
  } catch (error: any) {
    console.log("inside catch--->");
    if (error.name === "AbortError") {
      console.error(`Request to ${url} timed out after ${timeout}ms`);
    } else {
      console.error(`Request failed to ${url}:`, error);
    }
    throw error;
  }
};
