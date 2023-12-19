export const getEpisode = async (episodio, setEpisodeData) => {
    const res = await fetch(episodio);
    const data = await res.json();
    setEpisodeData(data);
}