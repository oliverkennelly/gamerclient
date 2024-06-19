import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ViewGame = ({authToken}) => {
    const {gameId} = useParams()
    const [game, setGame] = useState({})

    const fetchGame = async () => {
        const response = await fetch(`http://localhost:8000/games/${gameId}`, {
            headers: {
                "Authorization": authToken
            }
        })
        const gameReply = await response.json()
        setGame(gameReply)
    }

    useEffect(()=>{
        fetchGame()
    }, [gameId])

    return (
        <div key={`key-${game.id}`}>
                {game.title} (by {game.designer})
                {game.description}
                Released {game.year_released}
                Players: {game.number_of_players}
                Age Recomendation: {game.age_rec}
                <div>Categories: {game.categories}</div>
        </div>
    )
}