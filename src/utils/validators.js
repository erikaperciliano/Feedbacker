export function validateEmptyAndLength3 (value) {
  if (!value) {
    return '*Este campo é obrigatório!'
  }

  if (value.length < 3) {
    return '*Este campo precisa de no mínimo 3 caracteres!'
  }

  return true
}
