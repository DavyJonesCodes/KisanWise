"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Monkey D. Luffy",
    role: "Captain",
    initials: "ML",
    image: "/KisanWise/Team/luffy.png",
  },
  {
    name: "Roronoa Zoro",
    role: "Swordsman",
    initials: "RZ",
    image: "/KisanWise/Team/zoro.png",
  },
  {
    name: "Nami",
    role: "Navigator",
    initials: "N",
    image: "/KisanWise/Team/nami.png",
  },
  {
    name: "Usopp",
    role: "Sniper",
    initials: "U",
    image: "/KisanWise/Team/usopp.png",
  },
  {
    name: "Sanji",
    role: "Cook",
    initials: "S",
    image: "/KisanWise/Team/sanji.png",
  },
  {
    name: "Tony Tony Chopper",
    role: "Doctor",
    initials: "TC",
    image: "/KisanWise/Team/chopper.png",
  },
  {
    name: "Nico Robin",
    role: "Archaeologist",
    initials: "NR",
    image: "/KisanWise/Team/robin.png",
  },
  {
    name: "Franky",
    role: "Shipwright",
    initials: "F",
    image: "/KisanWise/Team/franky.png",
  },
  {
    name: "Brook",
    role: "Musician",
    initials: "B",
    image: "/KisanWise/Team/brook.png",
  },
];

export default function TeamSection() {
  return (
    <section className="relative my-16 flex w-full max-w-3xl flex-col gap-12 px-4 sm:px-8 lg:max-w-6xl">
      <div className="flex flex-grow flex-col gap-4">
        <h1 className="text-4xl font-bold text-foreground">Our Team</h1>
        <p className="text-muted-foreground">
          Meet our dedicated team of agricultural innovators, inspired by the
          legendary crew of One Piece.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start rounded-2xl p-2 transition-all hover:scale-110 hover:bg-popover sm:p-4"
          >
            <Avatar className="h-32 w-32 text-3xl">
              <AvatarImage src={member.image} alt={member.name}></AvatarImage>
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <h1 className="mt-6 text-center text-foreground">{member.name}</h1>
            <p className="mt-1 text-center text-muted-foreground">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
