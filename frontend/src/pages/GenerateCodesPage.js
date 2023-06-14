import { useState } from "react";
import styles from './GenerateCodesPage.module.css';
import { apiRequest } from "../services/apiRequest";
import Loading from "../components/Loading";

function GenerateCodesPage() {
  const [codesQuantityInput, setCodesQuantityInput] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateCodeClick = () => {
    const data = {
      quantidade: Number(codesQuantityInput),
    }

    apiRequest('POST', '/gerar-codigo-promocional', data, setIsLoading);
  }

  const buttonStyles = {
    backgroundColor: '#23297A',
    border: '1px solid #23297A',
    height: '38px',
    marginBottom: '12px',
    marginTop: '8px',
    width: '100%',
    fontSize: '14px',
  }
  const inputStyle = {
    marginBottom: '8px',
  }
  const labelStyle = {
    marginBottom: '8px',
  }
  const inputContainerStyle = {
    marginBottom: '16px',
  }

  return (
    <section className={ styles['page-container'] }>
      <form className={ styles['form-container'] }>
        <div className="form-group" style={ inputContainerStyle }>
          <label 
            htmlFor="codes-quantity-input"
            style={ labelStyle }
          >
            Quantidade de códigos a ser gerado
          </label>
          <input
            className="form-control"
            id="codes-quantity-input"
            type="number"
            min={ 1 }
            max={ 1000000 }
            style={ inputStyle }
            name="codesQuantityInput"
            value={ codesQuantityInput }
            onChange={ ({ target: { value } }) => setCodesQuantityInput(value) }
            placeholder="Digite a quantidade de códigos que deseja gerar"
          />
        </div>
        { isLoading && <Loading /> }
        <button
          className="btn btn-primary"
          id="codes-generate-button"
          type="button"
          style={ buttonStyles }
          onClick={ handleGenerateCodeClick }
          disabled={ isLoading }
        >
          Gerar
        </button>
      </form>
    </section>
  )
}

export default GenerateCodesPage;
