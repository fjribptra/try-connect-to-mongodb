import Image from "next/image";
import { mongodb_connection } from "./libs/mongodb";

export default function Home() {
  mongodb_connection()
  return (
    <div className="container mx-auto">
      <h1>Hello</h1>
    </div>
  );
}
