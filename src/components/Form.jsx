import InputText from './InputText'
import SelectDropdown from './SelectDropdown'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import { courses, states, getStateCities } from '../models/data'
import { useState } from 'react' // [1]

export default function Form() {
  const [formData, setFormData] = useState({}) // Dados do formuário
  const [openedDropdown, setOpenedDropdown] = useState(null)
  const [validFields, setValidFields] = useState([])
  const [displayValidationMessage, setDisplayValidationMessage] = useState(false)

  function handleToggleDropdown(label) {
    setOpenedDropdown(
      openedDropdown === label ? null : label
    )
  }

  function handleSetData(dataName, value) {
    setFormData({
      ...formData,
      [dataName]: value
    }) // [2]
    setOpenedDropdown(null);
  }

  // Lidar com o envio do formulário
  function handleFormSubmit(e) {
    e.preventDefault()
    if (validFields.length !== 4) {
      setDisplayValidationMessage(true)
    } else {
      setDisplayValidationMessage(false)
    }
  }

  function turnFieldInvalid(field) {
    const validFieldsCopy = validFields;
    for (let i = 0; i < validFieldsCopy.length; i++) {
      if (validFieldsCopy[i] === field) {
        validFieldsCopy.splice(i, 1)
        i--;
      }
    }

    setValidFields([...validFieldsCopy]); // [2]
  }

  function turnFieldValid(field) {
    const validFieldsCopy = validFields;
    for (let i = 0; i < validFieldsCopy.length; i++) {
      // Campo já é válido
      if (validFieldsCopy[i] === field) return;
    }

    validFieldsCopy.push(field)
    setValidFields([...validFieldsCopy]) // [2]
  }

  function validateField(fieldLabel, value) {
    !value || value === ''
      ? turnFieldInvalid(fieldLabel)
      : turnFieldValid(fieldLabel)
  }

  return (
    <form action="" className='form' onSubmit={handleFormSubmit} data-validated={displayValidationMessage}>
      <div className='form-title'>
        CADASTRO DE INGRESSANTES
      </div>
      <div className="form-inputs">
        <InputText
          /* [5] */
          label={'Nome'}
          onChange={(e) => {
            handleSetData('name', e.target.value)
            validateField('nome', e.target.value)
          }}
        />
        <SelectDropdown
          /* [5] */
          label={'Curso'}
          dataName={'course'}
          options={courses}
          selectedValue={formData.course}
          onValidateField={validateField}
          onSelectValue={handleSetData}
          onToggleDropdown={handleToggleDropdown}
          openedDropdown={openedDropdown}
        />
        <SelectDropdown
          label={'Estado'}
          dataName={'state'}
          options={states}
          selectedValue={formData.state}
          onValidateField={validateField}
          onSelectValue={handleSetData}
          onToggleDropdown={handleToggleDropdown}
          openedDropdown={openedDropdown}
        />
        <SelectDropdown
          label={'Cidade'}
          dataName={'city'}
          options={getStateCities(formData.state)}
          defaultOption={'Escolha um estado primeiro'}
          selectedValue={formData.city}
          onValidateField={validateField}
          onSelectValue={handleSetData}
          onToggleDropdown={handleToggleDropdown}
          openedDropdown={openedDropdown}
        />
      </div>
      {displayValidationMessage && (
        <div className="form-validation-message">
          <p>* Por favor, preencha todos os campos</p>
        </div>
      )} {/* [2] */}
      <div className="form-buttons">
        <ButtonSecondary
          text={'Voltar'}
        />
        <ButtonPrimary
          type='submit'
          text={'Gravar'}
        />
      </div>
    </form>
  )
}