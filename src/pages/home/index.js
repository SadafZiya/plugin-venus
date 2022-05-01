import { useQuery } from 'react-query'

const Home = () => {

    async function fetchPlugins() {
        const response = await fetch(
            "http://localhost:3001/items"
        );
        const data = await response.json();
        return data
    }

    const { isLoading, error, data } = useQuery('pluginData', fetchPlugins)

    return (
        <div className='container'>
            {
                isLoading ? <p>Loading ...</p>
                    : error ? <p>Error! {error.message}</p>
                        : (
                            data &&
                            data.length &&
                            data.map((plugin) => {
                                return <li key={plugin.id}>{plugin.title}</li>
                            })
                        )
            }
        </div>
    )
}

export default Home;