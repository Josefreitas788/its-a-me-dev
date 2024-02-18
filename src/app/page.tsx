"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import KeyLogger from "./components/keyLogger";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Counters that update separately</h1>
      {/* <MyButton /> */}
      <KeyLogger/>
    </div>
  );
}
