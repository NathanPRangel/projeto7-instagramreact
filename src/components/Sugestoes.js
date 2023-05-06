export default function Sugestoes() {
    const infosSugestoes=[
        {img:"assets/img/respondeai.svg", nome:"Narutinn", tipo:"Segue você"},
        {img:"assets/img/chibirdart.svg", nome:"chibirdart", tipo:"Segue você"},
        {img:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", tipo:"Novo no Instagram"},
        {img:"assets/img/adorable_animals.svg", nome:"adorable_animals", tipo:"Segue você"},
        {img:"assets/img/smallcutecats.svg", nome:"smallcutecats", tipo:"Segue você"},
    ]
        return (
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
            {infosSugestoes.map((s)=> <UmaSugestao key={s.nome} img={s.img} nome={s.nome} tipo={s.tipo} />)}
            </div>
        )
    }
    
    function UmaSugestao(props){
        return(
            <div className="sugestao">
            <div className="usuario">
                <img src={props.img} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.tipo}</div>
                </div>
            </div>
    
            <div className="seguir">Seguir</div>
        </div>
        )
    }