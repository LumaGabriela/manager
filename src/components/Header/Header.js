import HeaderContainer from "./HeaderStyle"

const Header = ({logo, data, setData}) => {
    const updateValues = (e) => {
        const tipo = e.target.dataset.info
        let aux
        let novo = e.target.value

        let oldData = JSON.parse(JSON.stringify(data))
        for (let item in oldData) if(item === tipo) {
            oldData[item] = novo 
        }

        setData(oldData)
       

    }

    return(
        <HeaderContainer>
            <img src={logo}/>
            <section>
                <label>
                    <h3>Nome</h3>
                    <input type='text' alt='name'/>
                </label>
                <label>
                    <h3>Data da compra</h3>
                    <input onChange={(e) => updateValues(e)} type='date' alt='date' data-info='data'/>
                </label>
                <label>
                    <h3>Forma de pagamento</h3>
                    <label className="pagamento"> Dinheiro 
                        <input type='radio' value="dinheiro" name='forma' id="dinheiro" />
                    </label>
                    <label className="pagamento">Cartão
                        <input type='radio' value="cartao" id="cartao" name='forma' />
                    </label>
                </label>
                <label>
                    <h3>Valor total da compra (R$)</h3>
                    <input onChange={(e) => updateValues(e)} data-info='valor' type='number' min={0} alt='price'/>
                </label>
                <label>
                    <h3>Número de parcelas</h3>
                    <input onChange={(e) => updateValues(e)} data-info='parcela' type='number' min={0} alt='times'/>
                </label>
            </section>         
        </HeaderContainer>
    )
}

export default Header 