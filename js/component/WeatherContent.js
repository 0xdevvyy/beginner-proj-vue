export default {
    template: `
         <div class="pt-8 flex flex-wrap gap-4 justify-center">
            <div 
            class="w-60 bg-blue-100 shadow-md rounded-xl p-4 text-center" 
            v-for="data in content" 
            :key="data.name"
            >
                <h3 class="font-semibold text-gray-800">{{ data.city }}</h3>
                <p class="text-gray-700">{{ data.condition }}</p>
                <div class="text-2xl font-bold mt-2">{{ data.temperature }}°C</div>
                <p class="text-sm text-gray-600">Humidity: {{ data.humidity }}%</p>
            </div>
        </div>
    `,

    props:{
       content: {
            type: Array,
            default: () => []
        }
    }
}