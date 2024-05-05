interface ISetScoreButtonProps {
  animeScore: number | null
  _id: string | null
  updateUserData: () => Promise<void>
}

export type { ISetScoreButtonProps }
