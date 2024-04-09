from django.core.validators import RegexValidator
# Define una expresión regular que acepta solo letras, números y espacios
alphanumeric_validator = RegexValidator(
    regex=r'^[a-zA-Z0-9\s]+$',
    message='Este campo solo puede contener letras, números y espacios.'
)

numeric_string_validator = RegexValidator(
    regex='^[0-9]+$',
    message='Este campo solo puede contener números.',
    code='invalid_numeric'
)

letter_validator = RegexValidator(
    regex='^[a-zA-Z\s]+$',
    message='Este campo solo puede contener letras.',
    code='invalid_letter'
)
cuil_validator = RegexValidator(
    regex='^(20|23|24|27|30|33|34)(\d{8})(\d)$',
    message='Este campo debe ser un CUIL válido.',
    code='invalid_cuil'
)
