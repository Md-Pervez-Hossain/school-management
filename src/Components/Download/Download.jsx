import Link from "next/link";
import React from "react";

const Download = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="/"> 1 . ১ম সাময়িকি পরীক্ষার রুটিন ডাউনলোড</Link>
        <Link href="/">2 . এসএসসি পরীক্ষার রুটিন ডাউনলোড</Link>
        <Link href="/"> 3 . ছুটির নোটিশ ডাউনলোড</Link>
        <Link href="/"> 4 . ভর্তি ফরম ডাউনলোড</Link>
        <Link href="/"> 5 . পরীক্ষার রুটিন ডাউনলোড</Link>
      </div>
    </div>
  );
};

export default Download;
