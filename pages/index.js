function Home(){

    const estiloDoTitulo = {
        color: 'cornflowerblue',
        fontSize: '24px', 
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center', 
    }
    const estiloDoTexto = {

        color: 'hotpink',
        fontFamily: 'Calibri, sans serif',
        textAlign: 'center', 
    };
    const estiloDaImagem = {
        maxWidth: '300px', 
        maxHeight: '200px', 
        objectFit: 'cover', // Mantém a proporção da imagem e cobre completamente o contêiner
        display: 'block',
        margin: '0 auto',
    };

    return (
        <div>
            <h1 style={estiloDoTitulo}>Oi filha, não desista dos seus sonhos!</h1>
            <br></br>
            <img
                src="https://i.imgur.com/uiN9S9n.gif"
                alt="mesa-de-estudo-gif"
                style={estiloDaImagem}
            />
            <h3 style={estiloDoTexto}>Tô sempre aqui do seu lado. Por isso, sorria 😁</h3>
        </div>
    );
}
export default Home;
