import WeatherContent from "./WeatherContent.js"
export default {
    components: {WeatherContent},
    template:`

        <div class="flex flex-wrap gap-4 justify-center p-4">   
            <weather-content :content="weather"></weather-content>
        </div  
    `,
    data(){
        return {
            weather: [],
        }
    },

    created(){
        fetch('http://localhost:3000/Weather')
            .then(res => res.json())
            .then(data => {
                this.weather = data
            })
    },


}