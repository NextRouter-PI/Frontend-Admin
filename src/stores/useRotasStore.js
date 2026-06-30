import { defineStore } from 'pinia'

export const useRotasStore = defineStore('rotas', {

state: () => ({

rotas: [

{
id:1,
destino:'IFC - Araquari',
bairro:'Morro do Meio',
horario:'12h',
veiculo:'QHN1221',
motorista:'Roberto Carlos',
passageiros:18
},

{
id:2,
destino:'IFC - Araquari',
bairro:'Costa e Silva',
horario:'17h',
veiculo:'QHN6712',
motorista:'João Pedro',
passageiros:14
}

]

}),

getters:{

rotasHoje:(state)=>state.rotas,

totalPassageirosHoje:(state)=>{

return state.rotas.reduce(
(total,r)=>total+r.passageiros,
0
)

}

}

})