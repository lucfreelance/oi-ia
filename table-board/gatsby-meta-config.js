/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Título de tu sitio web o aplicación
 * @prop {string} description Descripción de tu sitio web o aplicación
 * @prop {string} author Nombre del autor o responsable del proyecto
 * @prop {string} siteUrl URL de tu sitio web o aplicación
 * @prop {string} lang Idioma de tu sitio web o aplicación
 * @prop {string} utterances URL del repositorio de GitHub para almacenar comentarios
 * @prop {string} favicon Ruta del archivo del favicon
 * @prop {Links} links
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "table-board de Oportunidades Ilimitadas",
  description: `Vistas detalladas de apps / webs de #InteligenciaArtificial`,
  author: "@lucfreelance",
  siteUrl: "https://oportunidadesilimitadas.com/table-board/",
  lang: "en",
  utterances: "https://github.com/lucfreelance/oi_ia/issues",
  links: {
    github: "https://github.com/lucfreelance/oi_ia/",
  },
  favicon: "src/images/icon.ico",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
