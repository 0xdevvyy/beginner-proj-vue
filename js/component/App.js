import Navigation from "./Navigation.js";
import CardWeather from "./CardWeather.js";
export default {
    components: {Navigation, CardWeather},
    template: `
        <navigation></navigation>
        <div class="mt-8">
            <card-weather></card-weather>
        </div>
    `
}