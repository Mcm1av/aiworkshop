export {};

declare global {
  interface Window {
    __setTheme: (theme: "light" | "dark") => void;
    __getTheme: () => "light" | "dark";
  }
}