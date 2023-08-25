import { IPlayer } from "../db/players";

function PlayerCard({ player, isPlayerSelected = true }: { player: IPlayer; isPlayerSelected?: boolean }) {
  return (
    <div
      style={{
        backgroundImage: "url(/frame.png)",
        filter: isPlayerSelected ? "unset" : "grayscale(100%)",
        backgroundSize: "80px",
        display: "flex",
        height: "80px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={player?.avatar} className="w-16 h-16" />
    </div>
  );
}

export default PlayerCard;
