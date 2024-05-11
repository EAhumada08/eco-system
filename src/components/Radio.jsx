export default function Radio () {
  return (
    <fieldset>
      <legend>Sexo</legend>
      <div>
        <input
          type='radio'
          name='sexo'
          id='hombre'
          value={value}
        />
      </div>
    </fieldset>
  )
}
