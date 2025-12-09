import WeatherContent from "./WeatherContent.js"
export default {
    components: {WeatherContent},
    template:`

        <div class="flex flex-wrap gap-4 justify-center p-4">   
            <weather-content ></weather-content>
        </div  
    `,
    data(){
        return {
            Weather: []
        }
    }
}