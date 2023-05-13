import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import oiIaSmallImage from "../images/oi_ia_small.png"

const links = [
  {
    text: "Asistente Copy",
    url: "asistente-copy",
    description:
      "La tecnología de Asistente de Copy IA utiliza técnicas avanzadas de procesamiento de lenguaje natural y aprendizaje automático para ayudar a los usuarios a crear contenido de alta calidad y de manera eficiente. Analiza el contexto y el tono deseado para producir contenido relevante y atractivo, ofreciendo sugerencias de palabras y frases y corrigiendo errores gramaticales y ortográficos. El Asistente de Copy IA tiene aplicaciones en una amplia variedad de campos y su sofisticación y precisión seguirá mejorando a medida que la tecnología de IA evolucione.",
  },
  {
    text: "Asistente Dev",
    url: "asistente-dev",
    description:
      "La inteligencia artificial está revolucionando la forma en que los desarrolladores de software crean y mantienen código. Los asistentes de código impulsados por IA son herramientas poderosas que ayudan a los programadores a escribir código de manera más eficiente y precisa, ahorrando tiempo y reduciendo errores. Estas aplicaciones utilizan técnicas de aprendizaje automático y procesamiento de lenguaje natural para entender el contexto del código y proporcionar sugerencias y soluciones relevantes. Con la tecnología de Asistente Dev impulsada por IA, los desarrolladores pueden enfocarse en la creación de soluciones innovadoras en lugar de perder tiempo en tareas tediosas de codificación.",
  },
  {
    text: "Asistente Digital",
    url: "asistente-digital",
    description:
      "Un asistente digital basado en inteligencia artificial es un programa informático diseñado para ayudar a los empleados a realizar tareas diarias de manera más eficiente. Puede programar reuniones, enviar correos electrónicos, gestionar tareas y recordatorios, e incluso responder preguntas frecuentes. Estos sistemas pueden aumentar la productividad de los empleados, mejorar la calidad del trabajo y ser personalizados para adaptarse a las necesidades de cada empresa. En resumen, los asistentes de oficina basados en inteligencia artificial tienen el potencial de mejorar significativamente el rendimiento empresarial.",
  },
  {
    text: "Asistente Sonido",
    url: "asistente-sonido",
    description:
      "La tecnología de Audio Asistente impulsada por la inteligencia artificial ha mejorado la eficiencia y la accesibilidad en varios entornos. Los sistemas de asistentes de voz permiten a los usuarios interactuar de manera más natural y realizar tareas como programar reuniones, buscar información y enviar correos electrónicos sin necesidad de escribir o hacer clic. Además, la tecnología ha abierto nuevas oportunidades para personas con discapacidades visuales y motoras. En general, se espera que la tecnología de Audio Asistente siga creciendo a medida que la inteligencia artificial continúe evolucionando.",
  },
  {
    text: "Editor Logo",
    url: "diseno-web",
    description:
      "Las herramientas de diseño de logos basadas en inteligencia artificial están revolucionando la forma en que se crea el branding empresarial. Utilizan algoritmos avanzados de aprendizaje automático para crear logos personalizados a partir de la información proporcionada por el usuario. Además, ofrecen opciones personalizables que permiten crear diseños de logos únicos y adaptados a las necesidades de cada empresa. Estas herramientas reducen significativamente el tiempo y el costo de producción y son ideales para pequeñas empresas y startups con un presupuesto limitado.",
  },
  {
    text: "Editor CV",
    url: "editor-cv",
    description:
      "El hacedor de currículo basado en inteligencia artificial utiliza algoritmos de aprendizaje automático para generar un currículum personalizado a partir de la información proporcionada por el usuario. Además de ofrecer plantillas y diseños personalizables, estos hacedores de currículo también brindan sugerencias para mejorar la redacción y destacar las habilidades y logros del usuario. La rapidez y facilidad de uso son algunas de las principales ventajas de esta tecnología.",
  },
  {
    text: "Editor Imagen",
    url: "editor-imagen",
    description:
      "Los editores de fotos impulsados por inteligencia artificial son una herramienta increíble que utiliza algoritmos de aprendizaje automático y redes neuronales para mejorar automáticamente la calidad de las imágenes. Son útiles para cualquier usuario, desde fotógrafos profesionales hasta personas que quieren mejorar sus fotos antes de compartirlas en redes sociales. ¡Es impresionante cómo la inteligencia artificial puede mejorar nuestras imágenes de una manera tan eficiente y rápida!",
  },
  {
    text: "Editor Video ",
    url: "editor-video",
    description:
      "La edición de video impulsada por inteligencia artificial permite a los editores realizar tareas repetitivas y automatizar procesos como la clasificación de imágenes, la estabilización y la corrección de color. También puede utilizarse para crear contenido personalizado en publicidad y marketing. Sin embargo, todavía hay limitaciones en la comprensión de la narrativa y la creatividad, lo que significa que se necesita la intervención humana. A medida que la tecnología sigue mejorando, se espera que su impacto en la industria del video siga creciendo.",
  },
  {
    text: "Texto a Imagen",
    url: "texto-a-imagen",
    description:
      "Los generadores de imágenes impulsados por inteligencia artificial son una tecnología fascinante que permite crear imágenes realistas a partir de un texto descriptivo mediante el uso de redes neuronales y técnicas de aprendizaje automático. Su aplicación en la publicidad y la creación de personajes para videojuegos ha demostrado ser especialmente valiosa, permitiendo a los anunciantes y desarrolladores de juegos ahorrar tiempo y dinero. Estos generadores pueden mejorar con el tiempo gracias a la recopilación de más información y la mejora de los algoritmos de aprendizaje automático. La tecnología detrás de estos generadores es muy impresionante y promete un futuro emocionante para la creación de imágenes realistas automatizadas.",
  },
  {
    text: "Texto a Sonido",
    url: "texto-a-sonido",
    description:
      "La tecnología de Texto a Audio y/o Texto a Sonido impulsada por la inteligencia artificial ha mejorado la accesibilidad y conveniencia para consumir información, así como impulsado la industria del contenido de audio. Los sistemas de conversión automática utilizan algoritmos de procesamiento de lenguaje natural y síntesis de voz para leer el texto en voz alta en diferentes idiomas y acentos. Aunque todavía hay desafíos, se espera que la tecnología continúe evolucionando y mejorando en el futuro.",
  },
  {
    text: "Texto a Video",
    url: "texto-a-video",
    description:
      "La tecnología de Texto a Vídeo ha evolucionado a lo largo de los años, gracias a la aplicación de técnicas de inteligencia artificial. Actualmente, la mayoría de los sistemas de Texto a Vídeo se basan en algoritmos de aprendizaje profundo, que les permiten aprender a partir de grandes cantidades de datos y generar contenido audiovisual de alta calidad. Los sistemas de Texto a Vídeo se utilizan en una variedad de contextos. Por ejemplo, en la publicidad, se pueden utilizar para crear vídeos personalizados para cada usuario. En la educación, los sistemas de Texto a Vídeo permiten la creación de materiales de formación de alta calidad de manera más rápida y eficiente. En el mundo del entretenimiento, los sistemas de Texto a Vídeo pueden utilizarse para crear animaciones y películas de manera automatizada.",
  },
  {
    text: "Texto a Búsqueda - Buscador Web",
    url: "buscador-web",
    description:
      "Los buscadores web con inteligencia artificial utilizan algoritmos de aprendizaje automático para analizar y clasificar el contenido de la web en función de la consulta de búsqueda del usuario. Con el uso, estos algoritmos se vuelven más precisos y eficientes. La personalización es una de las formas en que la inteligencia artificial ha mejorado los buscadores web, utilizando información previa del usuario para ofrecer resultados más relevantes. La búsqueda por voz es otra característica que permite a los usuarios buscar información de manera más rápida y eficiente. Además, el análisis de sentimiento permite a los buscadores web ofrecer resultados más precisos y relevantes. En resumen, los buscadores web con inteligencia artificial están transformando la forma en que los usuarios encuentran información en línea, ofreciendo una búsqueda más personalizada y eficiente.",
  },
]

const samplePageLinks = [
  {
    text: "Board",
    url: "/table/board.jsx",
    badge: true,
    description: "Página de reviews de apps / webs de #InteligenciaArtificial",
  },
  // { text: "TypeScript", url: "using-typescript" },
  // { text: "Server Side Rendering", url: "using-ssr" },
  // { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  {
    text: "Twitter oi_ia",
    url: "https://twitter.com/o_ilimitadas",
  },
  {
    text: "Instagram oi_ia",
    url: "https://instagram.com/oportunidadesilimitadas/",
  },
  {
    text: "Reddit oi_ia",
    url: "https://www.reddit.com/user/oi_ia",
  },
  {
    text: "Desarrollado por @lucfreelance",
    url: "https://github.com/lucfreelance",
  },
  // {
  //   text: "Showcase",
  //   url: "https://gatsbyjs.com/showcase/",
  // },
  // {
  //   text: "Contributing",
  //   url: "https://www.gatsbyjs.com/contributing/",
  // },
  // { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/oi_ia_small.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        <b>Board</b>Apps y Webs detalladas de Inteligencia Artificial
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="oi_ia" />

export default IndexPage
