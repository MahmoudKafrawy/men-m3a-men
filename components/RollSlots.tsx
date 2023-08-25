import { players } from "@/db/players";
import SlotCounter from "react-slot-counter";
import PlayerCard from "./PlayerCard";
function RollSlots({ teams }: { teams: any[] }) {
  return teams.map((team) => (
    <div className="my-4">
      <SlotCounter
        duration={1.5}
        value={...team.map((t: any) => (
          <div className="h-20 w-20" key={t.id}>
            <PlayerCard player={players[t.id - 1]} />
          </div>
        ))}
        dummyCharacters={[
          ...players.map((_v, index) => (
            <div className="h-20 w-20" key={index}>
              <PlayerCard player={players[index]} />
            </div>
          )),
        ]}
      />
    </div>
  ));
}

export default RollSlots;
