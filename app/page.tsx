"use client";

import RollSlots from "@/components/RollSlots";
import { Button } from "@/components/ui/button";
import useTeams from "@/hooks/useTeams";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { Cairo } from "next/font/google";
import { useState } from "react";
import Players from "../components/Players";
import { IPlayer, players } from "../db/players";
const cairo = Cairo({ subsets: ["latin"] });

export default function Home() {
  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
  const [step, setStep] = useState(1);

  const { makeTeams, teams } = useTeams({ setStep });

  return (
    <>
      <AnimatePresence>
        {step == 1 && (
          <>
            <p className={cairo.className}>اختار اللي هيلعب</p>
            <div className="grid grid-cols-3 min-[321px]:grid-cols-4 gap-3">
              {players.map((player) => (
                <Players player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
              ))}
            </div>
          </>
        )}
        {step == 2 && (
          <div className="flex flex-col gap-2 w-full items-center ">
            <div className=" flex  w-full justify-self-end">
              <Button
                onClick={() => setStep(1)}
                variant={"secondary"}
                className={cn(cairo.className, " bg-white text-black font-bold text-lg rounded-full")}
              >
                رجوع
              </Button>
            </div>
            <div>
              <RollSlots teams={teams} />
            </div>
          </div>
        )}
      </AnimatePresence>
      {step == 1 && (
        <div className="w-10/12 flex justify-between">
          <Button
            disabled={selectedPlayers.length % 2 !== 0 || selectedPlayers.length == 0}
            className={cn(cairo.className, "w-full bg-[#1e90ff] text-white font-bold text-lg rounded-full")}
            variant={"secondary"}
            onClick={() => {
              makeTeams(selectedPlayers);
              setSelectedPlayers([]);
            }}
          >
            {selectedPlayers.length % 2 !== 0 ? "لازم عدد زوجي" : "ابدأ"}
          </Button>
        </div>
      )}
    </>
  );
}
