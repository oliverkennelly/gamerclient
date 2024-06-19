import { useEffect, useState } from "react"

export const Games = ({authToken}) => {

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
                {game.description}
                Released {game.year_released}
                Players: {game.number_of_players}
                Age Recomendation: {game.age_rec}
                <div>Categories: {game.categories}</div>
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