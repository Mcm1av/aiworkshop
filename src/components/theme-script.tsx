import fs from "node:fs";
import path from "node:path";

export default function ThemeScript() {
  const file = fs.readFileSync(path.join(process.cwd(), "src/components/theme-init.js"), "utf8");
  return <script dangerouslySetInnerHTML={{ __html: file }} />;
}