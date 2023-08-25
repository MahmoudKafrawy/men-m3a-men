import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IPlayer } from "../db/players";
import PlayerCard from "./PlayerCard";
interface Props {
  player: IPlayer;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

export default function Players({ player, setSelectedPlayers, selectedPlayers }: Props) {
  const handleSelectPlayers = (selectedPlayer: IPlayer) => {
    if (selectedPlayers.find((p) => p.id == selectedPlayer.id)) {
      setSelectedPlayers([...selectedPlayers].filter((p) => p.id !== selectedPlayer.id));
      return;
    }

    setSelectedPlayers([...selectedPlayers, selectedPlayer]);
  };

  const isPlayerSelected = Boolean(selectedPlayers.find((p) => p.id == player.id));
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, y: "-50px" }}
      transition={{ duration: 0.3, delay: player.id / 6 }}
      exit={{ opacity: 0, scale: 0.8, y: "50px" }}
      className="w-20 h-20 "
      onClick={() => handleSelectPlayers(player)}
    >
      <PlayerCard player={player} isPlayerSelected={isPlayerSelected} />
    </motion.div>
  );
}
