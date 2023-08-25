import { useEffect, useState } from "react";

export default function useTeams({ setStep }: { setStep: any }) {
  const [teams, setTeams] = useState<any>([]);

  const makeTeams = (playersToPick: any) => {
    let internalTeams: any = [];
    let thePlayers = [...playersToPick];
    const numberOfTeams = playersToPick.length / 2;

    for (let index = 1; index <= numberOfTeams; index++) {
      const shuffledArray = thePlayers.sort(() => 0.5 - Math.random());

      const result = shuffledArray.slice(0, 2);
      internalTeams.push([...result]);

      result.forEach((v: any) => (thePlayers = thePlayers.filter((p) => p.id !== v.id)));
    }

    setTeams([...internalTeams]);
  };

  useEffect(() => {
    if (teams.length > 0) setStep(2);
  }, [teams]);

  return { makeTeams, teams };
}
