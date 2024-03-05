class CuentaBancaria{
    constructor(nombre,saldo,ncuenta){
        this.nombre=nombre
        this.saldo=saldo
        this.ncuenta=ncuenta
    }

    retiro(cantidad){
        if (cantidad>this.saldo) {
            return "saldo insuficiente"
        } else {
            return this.saldo=this.saldo-cantidad
        }
    }

    abono(cantidad){
        return this.saldo=this.saldo+cantidad
    }
}

const reti = document.getElementById("retiro")
const cliente=new CuentaBancaria("leo d",0,"00000-2")
const abono=document.getElementById("abono")
reti.addEvenetListener("click", ()=>{
    const cantidad=document.getElementById("cantidad").value
    const response=document.getElementById("respuesta")

    response.innerText=cliente.retiro(cantidad)
})

abono.addEvenetListener("click",()=>{
    const cantidad=parseFloat(document.getElementById("cantidad").value)

    const response=document.getElementById("respuesta")
    response.innerText=cliente.abono(cantidad)
})