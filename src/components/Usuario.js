import React from "react"

export default function Usuario() {

    return (
        <UmUsuario imagem="assets/img/filomoderna.svg" usuario="AguaSeca" nome="GOKU" />
    )
}

function UmUsuario(props) {
    const [nome, setNome] = React.useState("")
    const [imagem, setImagem] = React.useState("")

    return (
        <div data-test="user" className="usuario">
            <img data-test="profile-image" src={!imagem ? (props.imagem) : (imagem)} onClick={()=>setImagem(prompt("Coloque a URL da sua foto"))}/>
            <div className="texto">
                <strong>{props.usuario}</strong>
                <span >
                    <span data-test="name" >{!nome ? (props.nome) : (nome)}</span>
                    <ion-icon data-test="edit-name" name="pencil" onClick={()=>setNome(prompt("Qual seu nome?"))}></ion-icon>
                </span>
            </div>
        </div>
    )
}

