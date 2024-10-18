import { z } from "zod";

/**
 * @description Esquema de validación para el registro de usuarios. Este esquema
 * se asegura de que los datos proporcionados por el usuario durante el registro 
 * sean correctos y cumplan con las reglas de validación definidas.
 */
export const registerSchema = z.object({
  /**
   * @property {string} username - El nombre de usuario proporcionado por el cliente.
   * Debe ser una cadena de texto obligatoria con al menos 3 caracteres.
   * @throws {Error} Si no se proporciona el nombre de usuario o tiene menos de 3 caracteres.
   */
  username: z
    .string({
      required_error: "El nombre de usuario es obligatorio",  // Mensaje de error si no se proporciona el campo.
    })
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",  // Mensaje de error si el nombre de usuario es demasiado corto.
    }),

  /**
   * @property {string} email - El correo electrónico proporcionado por el cliente.
   * Debe ser una cadena de texto obligatoria con un formato válido y no puede contener 
   * espacios en blanco u otros caracteres inválidos.
   * @throws {Error} Si no se proporciona el correo o el formato es incorrecto.
   */
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",  // Mensaje de error si no se proporciona el campo.
    })
    .email({
      message: "El formato del correo electrónico no es válido",  // Mensaje de error si el formato es incorrecto.
    })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "El correo electrónico contiene caracteres no válidos",  // Mensaje de error si el email tiene caracteres no permitidos.
    }),

  /**
   * @property {string} password - La contraseña proporcionada por el cliente.
   * Debe ser una cadena de texto obligatoria que cumpla con los requisitos mínimos:
   * - Mínimo 8 caracteres
   * - Al menos una letra minúscula
   * - Al menos una letra mayúscula
   * - Al menos un número
   * - Al menos un carácter especial
   * @throws {Error} Si la contraseña no cumple con los requisitos de seguridad.
   */
  password: z
    .string({ required_error: "La contraseña es obligatoria" })  // Mensaje de error si no se proporciona el campo.
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",  // Mensaje de error si la contraseña es demasiado corta.
    })
    .regex(/[a-z]/, {
      message: "La contraseña debe contener al menos una letra minúscula",  // Mensaje de error si no contiene minúsculas.
    })
    .regex(/[A-Z]/, {
      message: "La contraseña debe contener al menos una letra mayúscula",  // Mensaje de error si no contiene mayúsculas.
    })
    .regex(/[0-9]/, {
      message: "La contraseña debe contener al menos un número",  // Mensaje de error si no contiene números.
    })
    .regex(/[\W_]/, {
      message: "La contraseña debe contener al menos un carácter especial",  // Mensaje de error si no contiene caracteres especiales.
    }),

  /**
   * @property {string} confirmPassword - Confirmación de la contraseña proporcionada por el cliente.
   * Debe ser una cadena de texto obligatoria, utilizada para verificar que ambas contraseñas coincidan.
   * @throws {Error} Si no se proporciona este campo.
   */
  confirmPassword: z
    .string({ required_error: "La confirmación de la contraseña es obligatoria" }),  // Mensaje de error si no se proporciona la confirmación.
});

/**
 * @description Esquema de validación para el inicio de sesión de usuarios. Este esquema
 * asegura que los datos proporcionados al iniciar sesión sean válidos.
 */
export const loginSchema = z.object({
  /**
   * @property {string} email - El correo electrónico proporcionado por el cliente.
   * Debe ser una cadena de texto obligatoria con un formato válido y no puede contener
   * caracteres no permitidos.
   * @throws {Error} Si no se proporciona el correo o el formato es incorrecto.
   */
  email: z
    .string({
      required_error: "El correo electrónico es obligatorio",  // Mensaje de error si no se proporciona el campo.
    })
    .email({
      message: "El formato del correo electrónico no es válido",  // Mensaje de error si el formato es incorrecto.
    })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "El correo electrónico contiene caracteres no válidos",  // Mensaje de error si contiene caracteres no permitidos.
    }),

  /**
   * @property {string} password - La contraseña proporcionada por el cliente.
   * Debe ser una cadena de texto obligatoria.
   * @throws {Error} Si no se proporciona la contraseña.
   */
  password: z.string({ required_error: "La contraseña es obligatoria" }),  // Mensaje de error si no se proporciona el campo.
});
