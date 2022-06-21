type ConteudoProps = {
    // text?: string   // ? TORNANDO A PROPRIEDADE OPCIONAL
    text: string
}

const Conteudo = (props: ConteudoProps) => {
    return (
        <div>
            <div>{props.text}</div>
        </div>
    )
}

export { Conteudo }