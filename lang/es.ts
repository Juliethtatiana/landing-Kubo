export default {
  application: 'Stack Front',
  loading: 'Cargando, por favor espere...',
  rol: {
    admin: 'Administrador',
    ops: 'Operador',
  },
  title: {
    welcome: '¡Bienvenido!',
    login: 'Iniciar sesión',
    forgotPassword: 'Recuperar contraseña',
    validateCode: 'CÓDIGO DE VERIFICACIÓN',
    changePassword: 'Restablecer contraseña',
    logout: 'Cerrar sesión',
  },
  form: {
    email: {
      label: 'Correo electrónico',
      placeholder: 'Escribir correo electrónico',
    },
    password: {
      label: 'Contraseña',
      placeholder: 'Escribir contraseña',
      tooltip:
        'La contraseña debe contener al menos una minúscula, una mayúscula y un número',
    },
    confirmPassword: {
      label: 'Repetir Contraseña',
      placeholder: 'Repetir Contraseña',
    },
  },
  button: {
    login: 'Iniciar sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
    sendCode: 'Enviar',
    resendCode: 'Reenviar código',
    validate: 'Verificar',
    reset: 'Restablecer',
    update: 'Actualizar',
    cancel: 'Cancelar',
    create: 'Crear',
    no: 'No',
    logout: 'Sí, salir',
    confirm: 'Confirmar',
  },
  rule: {
    form: 'Por favor revisa la información',
    image: 'Debe seleccionar una imagen',
    validation: {
      require: 'El dato es requerido para continuar',
      value: {
        min: 'Debe ser mayor o igual a {data}',
        max: 'Debe ser inferior o igual a {data}',
      },
      length: {
        min: 'Debe contener al menos {data} carácteres',
        max: 'No puede contener más de {data} carácteres',
      },
      email: 'Debe ser una dirección de correo válida',
      password: {
        min: 'La contraseña debe tener al menos 8 caracteres',
        valid:
          'La contraseña debe contener al menos una mayúscula, una minúscula y un número',
        confirm: 'Las contraseñas deben coincidir',
      },
      number: 'El dato es solo numérico',
    },
  },
  store: {
    apiServices: {
      sessionExpired:
        'Su sesión ha expirado, por favor inicie sesión nuevamente',
      loginRequired: 'Debe ingresar sus credenciales para continuar',
      timeOut:
        'Ha tardado demasiado en responder. Intente nuevamente más tarde',
      notFound:
        'No se encontró la url solicitada. Intente nuevamente más tarde',
      generalError:
        'Ocurrió un error en el servidor. Intente nuevamente más tarde',
    },
  },

  table: {
    empty: {
      title: 'Lo sentimos',
      message: 'Lamentablemente no tenemos datos que mostrar.',
    },
    loading: 'Cargando... Por favor aguarde un momento',
    state: {
      title: 'Estado',
      active: 'Activo',
      inactive: 'Inactivo',
    },
    admin: {
      name: 'Nombre y Apellido',
      email: 'Correo electrónico',
      role: 'Rol',
      cellphone: 'Teléfono',
    },
  },
  menu: {
    notification: 'Notificaciones',
    logout: 'Cerrar sesión',
    report: 'Reportes',
    payment: 'Pagos',
    setting: 'Parametrización',
    category: 'Categorías',
    plan: 'Planes',
    exerciseCatalog: 'Banco',
    client: 'Clientes',
    admin: 'Administradores',
    country: 'Países',
    language: 'Idiomas',
    help: 'Ayuda',
  },
  link: {
    terms: 'Términos y condiciones',
  },

  text: {
    brands: {
      firstTitle: {
        one: 'Da el primer paso para crear tu app,',
        two: 'Ellos ya lo hicieron:',
      },
      about: {
        title: 'Da el primer paso para crear tu app,',
        subtitle: '¿Qué ofrecemos?',
      },
      services: {
        first: {
          title: 'Desarrollo de apps multiplataforma y nativas',
          text: {
            one: ' Desarrollamos aplicaciones móviles que generan',
            span: 'ventajas competitivas en el mercado',
          },
        },
        second: {
          title: 'Diseño UX/ UI',
          text: {
            one: 'Creamos ',
            span: 'experiencias únicas ',
            two: 'para que los usuarios conecten con tu negocio',
          },
        },
        third: {
          title: 'QA Testing',
          text: {
            one: 'Hacemos las pruebas necesarias para que tu producto digital, salga con',
            span: 'los más altos estándares de calidad',
          },
        },
      },
      expert: {
        title: '¿Por qué escoger Kubo?',
        text1: 'Más de 15 años de experiencia',
        text2: '150 proyectos realizados',
        text3: 'Modelos de pago especiales',
      },
      clients: {
        title: 'Estos son algunos de los clientes que ',
        strongTitle: 'han confiado en nosotros',
        text: 'Trabajamos junto a ellos para dar vida a sus apps móviles y sitios web. ',
        instructions: '¡Selecciona y descubre quienes nos eligieron!',
        companies: 'Empresas',
        startups: 'Startups',
        government: 'Gobierno',
      },
      news: {
        title: 'Kubo news',
        strongText: '¿Qué hay de nuevo?',
        text: ' Descubre aquí las últimas maravillas del mundo digital',
      },
      contact: {
        title: '¿Listo para dar vida a tu idea?',
        subtitle: ' Creamos apps y damos vida a negocios exitosos',
      },
    },
    footer: {
      copyright:
        '© 2023 Kubo - Agencia digital de desarrollo de aplicaciones móviles, Colombia.',
      start: 'Empieza tu proyecto con Kubo',
      contactUs: 'Contactanos',
      phone: '+57 (601) 5800567',
      visit: 'Visitanos',
      direction: 'Carrera 49A Nº 93-39 La Castellana',
    },
  },
}
