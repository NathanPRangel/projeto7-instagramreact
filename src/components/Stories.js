export default function Stories() {
    const infosStories= [
      {imagem:"assets/img/9gag.svg", nomeUsuario:"9gag"},
      {imagem:"assets/img/meowed.svg", nomeUsuario:"meowed"},
      {imagem:"assets/img/barked.svg", nomeUsuario:"barked"},
      {imagem:"assets/img/nathanwpylestrangeplanet.svg", nomeUsuario:"nathanwpylestrangeplanet"},
      {imagem:"assets/img/wawawicomics.svg", nomeUsuario:"wawawicomics"},
      {imagem:"assets/img/respondeai.svg", nomeUsuario:"respondeai"},
      {imagem:"assets/img/catanacomics.svg", nomeUsuario:"catanacomics"},
      {imagem:"assets/img/memeriagourmet.svg", nomeUsuario:"memeriagourmet"},
  ]
    return (
      <div className="stories">
        {infosStories.map((s)=><UmStory key={s.nomeUsuario} imagem={s.imagem} usuario={s.nomeUsuario} />)}
  
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
  }
  
  function UmStory(props) {
    return (
      <div className="story">
        <div className="imagem">
          <img src={props.imagem} />
        </div>
        <div className="usuario">
          {props.usuario}
        </div>
      </div>
    )
  }