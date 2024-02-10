function Home(){

    const estiloDoTitulo = {
        color: 'cornflowerblue', // cor do texto
        fontSize: '24px', // tamanho da fonte
        fontFamily: 'Arial, sans-serif', // tipo de fonte
        textAlign: 'center', // alinhamento do texto
    };

    const estiloDoTexto = {

        color: 'gray',
        fontFamily: 'Inconsolata, sans-serif'
    }

    return (
        <div>
            <h1 style={estiloDoTitulo}>Você conhece hoponopono? Eu conheço e recomendo</h1>
            <h2 style={estiloDoTexto}>Hoponopono é uma prática havaiana de cura e resolução de problemas que tem atraído interesse devido à sua abordagem única e espiritual.</h2>
            <h3 style={estiloDoTexto}>Uma característica distintiva do Hoponopono é a ênfase na responsabilidade pessoal. A ideia é que, ao assumir responsabilidade por tudo em sua vida, você pode influenciar positivamente o mundo ao seu redor. Isso inclui assumir a responsabilidade por problemas percebidos nos outros, pois a prática acredita que tudo está conectado.</h3>
        </div>
    );
}
export default Home;
