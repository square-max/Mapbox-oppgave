




const url = "https://api.themoviedb.org/3/tv/1399-game-of-thrones/season/all?api_key=c1e3ae27389447ab6d24c2c406d607e8&language=en-US";

const showEpisodes = async () => {
    
    const response = await fetch(url);
    const json = await response.json();
    
    console.log(json.results);
    
    const options = {
    chart: {
        renderTo: "container",
        type: "line"
    },
    title: {
        text: "Top GAME of THRONES Seasons (IMDB)"
    },
    series: [
        {
            name: "Imdb Rating",
            data: [
                {
                    name: "Season 1",
                    y: 8.4
                },
                {
                    name: "Season 2",
                    y: 9.7
                },
                {
                    name: "Season 3",
                    y: 9.2
                },
                {
                    name: "Season 4",
                    y: 9.5
                },
                {
                    name: "Season 5",
                    y: 8.7
                },
                {
                    name: "Season 6",
                    y: 9
                },
                {
                    name: "Season 7",
                    y: 9.2
                },
                {
                    name: "Season 8",
                    y: 6.5
                }
            ]
        }
    ]
}

const chart = new Highcharts.Chart(options);
}

showEpisodes();