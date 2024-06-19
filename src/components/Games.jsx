import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Games = ({authToken}) => {
    const navigate = useNavigate()
    const [games, setGames] = useState([])

    const fetchGames = async () => {
        const response = await fetch("http://localhost:8000/games", {
            headers: {
                "Authorization": authToken
            }
        })
        const gameReply = await response.json()
        setGames(gameReply)
    }

    useEffect(() => {
        fetchGames()
    }, [])

    const displayGames = () => {
        if (games && games.length) {
            return games.map(game => <div key={`key-${game.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
                {game.title} (by {game.designer})
                Score: {game.average_score} 
                {game.description} 
                Released {game.year_released} 
                Players: {game.number_of_players} 
                Age Recomendation: {game.age_rec} 
                <div>Categories: {game.categories}</div>
                <button type="submit"
                    onClick={()=>{navigate(`/view/${game.id}`)}}
                    className="button rounded-md bg-blue-700 text-blue-100 p-3 mt-4">
                    View Game
                </button>
            </div>)
        }

        return <h3>Loading games...</h3>
    }

    return (
        <>
            <h1 className="text-3xl">Game List</h1>
            {displayGames()}
        </>
    )
}