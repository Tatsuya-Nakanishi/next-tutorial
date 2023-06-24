import styles from "@/styles/Home.module.css";
import { Purple_Purse } from "next/font/google";
import Image from "next/image";
export function Headline(props) {
  return (
    <div>
      <p>
        {props.title}
        {props.children}
      </p>
    </div>
  );
}
