export  default{

    data(){
        return{
            mensaje: "Ay wei ayuda",
            objeto: false,
            button: null,
            objetos:[],
            nuevoobj:'',
            clic: false,
            selec:false,
            elm:false,
            mapes:false,
            nuevoarray:'',
            mapeo:''
        }
    },
    methods:{
        nuevoobjt(){
            this.objetos.push({
                dato: this.nuevoobj
            })
            console.log(this.objetos)
        },
        almacenarray(){
            this.mensaje.push({
                objetos:this.mensaje
            })
            console.log(this.almacenarray)
        },
        eliminar(indice){
            console.log(indice)
            this.objetos.splice(indice,1)

        },
        primeroo(){
            this.objetos.shift()
        },
        ultimoo(){
            this.objetos.pop()
        },
        comienzo(){
            this.objetos.unshift({
                dato: this.nuevoarray
            })
            console.log(this.objetos)
        },
        final(){
            this.objetos.push({
                dato:this.nuevoarray
            })
        },
        mape(){  this.mapeo.map((caso)=>({caso}))

        }
    }
    

}