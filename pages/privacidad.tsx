import React from 'react';
import styled from 'styled-components';

import Footer from '../containers/Footer';

const Wrapper = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center ;
  margin: 0 36px;
  margin-top: 20px;
  padding-bottom: 100px;
`;

const TitleText = styled.h2`
  font-size: 20px;
  line-height: 24px;
  margin: 20px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic1000};
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic2000};
`;
const ScreenWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic100};
  width: 100%;
  border-radius: 1px;

  @media (min-width: 767px) {
    width: 70%;
    border-radius: 15px;
  }

  @media (max-width: 320px) {
    width: 100%;
    border-radius: 15px;
  }
  @media (min-width: 1200px) {
    width: 40%;
    border-radius: 15px;
  }

`;

const Privacy = () => (
  <ScreenWrapper>
  <Wrapper>
    <TitleText>Políticas de Privacidad</TitleText>
    <Text>La presente Política de Privacidad (“Política de Privacidad”) rige para el tratamiento de los datos personales que usted como usuario (“Usuario”) del sitio web, voluntariamente brinda a Monefin LLC( “Monefin”), al navegar por la misma y utilizar los productos, servicios y/o herramientas (“Servicios”) dispuestos para el Usuario por Monefin a través de su sitio web (el “Sitio”). Esta Política de Privacidad debe ser leída en conjunto con los respectivos términos de uso (“Términos de Uso”).</Text>
    <Text>Al acceder al Sitio y utilizar los Servicios, el Usuario manifiesta estar consciente de esta Política de Privacidad que rige su relación con Monefin. Monefin, reitera su compromiso con nuestros Usuarios y su preocupación con la privacidad y con la protección de sus datos personales. En caso de dudas sobre esta Política de Privacidad, entre en contacto con nosotros a través de los canales indicados al final de este instrumento.</Text>
    <br />
    <h4>I. RECOLECCIÓN DE DATOS PERSONALES</h4>
    <Text>1.1. En el desempeño de sus Servicios, Monefin solicita y obtiene datos personales de sus Usuarios, datos que el Usuario brindará voluntariamente a fin de poder utilizar los Servicios ofrecidos por Monefin al usar el Sitio y/o al registrarse y/o al crear una cuenta en él.
1.2. Los datos personales requeridos a los Usuarios a través del Sitio, serán utilizados con la finalidad descripta en el punto 2.2 de esta Política de Privacidad. Los datos objeto de tratamiento no serán utilizados para finalidades distintas o incompatibles con las mencionadas en el punto 2.2. y que motivaron su obtención. Asimismo, se deja constancia que los datos requeridos a los Usuarios resultan adecuados, pertinentes y no excesivos para la finalidad para la cual se recaban.
1.2.1 Monefin sólo requerirá a los Usuarios datos tales como: apellido, nombre, documento de identidad, fecha de nacimiento, dirección de correo electrónico, etc., absteniéndose de solicitar datos sensibles (Art. 7 de la ley N° 25.326). En caso que sea de su interés, el Usuario podrá suministrar a Monefin datos personales sensibles, limitado ellos a brindar voluntariamente información relacionada a su embarazo, que serán tratados para las finalidades descritas en la presente Política de Privacidad. El suministro de esta información es siempre voluntario, debiendo el Usuario prestar su consentimiento en forma separada para poder hacer tratamiento de estos datos. Se entiende como dato sensible, aquellos datos personales referidos al origen racial y étnico; opiniones o convicciones política, religiosas, filosóficas o morales; afiliación sindical; e información relacionada a la salud o a la salud o a la vida sexual Los Usuarios garantizan la veracidad y certeza de los datos personales que ingresen en el Sitio, asumiendo la correspondiente responsabilidad en caso de que los mismos resulten inexactos. Monefin, en su condición de destinatario de los datos, no asume ninguna responsabilidad en caso de existir inexactitud en los datos personales ingresados por los Usuarios.
1.3. En caso que el Usuario desee adquirir productos o Servicios a través del Sitio, Monefin deberá recolectar datos adicionales, tales como datos de tarjetas de crédito o débito u otros medios de pagos habilitados en el Sitio, así como la dirección de entrega y datos relacionados, que serán exclusivamente utilizados para fines de realización de pago de los Servicios contratados.
1.4. Los datos personales informados podrán ser almacenados en servidores localizados en el exterior - teniendo en cuenta los servicios de almacenamiento en nube (cloud) que Monefin utiliza - y solamente serán suministrados a terceros en los términos dispuesto por la ley 25.326 y/o mediante orden judicial. Al utilizar los Servicios, el Usuario expresamente presta su consentimiento con que sus datos sean transferidos al exterior, aún a países que no cuenten con niveles adecuados de protección de datos.
1.5. Los datos recolectados por Monefin son almacenados bajo las más rígidas prácticas de seguridad de información en el banco de datos de Monefin (“Banco de Datos”). El Banco de Datos es rigurosamente supervisado y protegido, de modo que solo funcionarios habilitados tienen acceso, los cuales están contractualmente obligados a los deberes de secreto y confidencialidad.
1.6. Al acceder al Sitio, ciertas informaciones sobre el Usuario, como el protocolo de Internet (dirección IP), sistema operativo, tiempo gastado en el Sitio, el identificador individual de un dispositivo móvil y otros datos sobre su configuración, como la resolución de la pantalla, entre otras informaciones, serán almacenadas por Monefin. Esos datos son necesarios para poder mostrarle a los Usuarios los contenidos del Sitio y para su correcto funcionamiento. Estos datos pasan por un análisis estadístico, que no está conectado a datos personales.
1.7. Kimberly – Clark utiliza cookies informáticas para reconocer las preferencias de los Usuarios a fin de poder mejorar el contenido del Sitio en la forma correspondiente. Cada Usuario sigue siendo anónimo. Los datos personales se guardan únicamente cuando son ingresados de manera voluntaria por los Usuarios al acceder a los Servicios prestados por Monefin. Kimberly- Clark otorgará a la información obtenida por medio de cookies el mismo tratamiento que le brinda a la información de datos personales. Las finalidades de la recopilación de información a través de cookies son las mismas por las que se recolecta información personal. La información recopilada a través de cookies será transferida a terceros dentro de los mismos límites que la información personal. Monefin mantendrá esta información segura de acuerdo a ley y le otorgará también carácter de confidencial. Los Usuarios cuentan con los mismos derechos sobre la información recogida por medio de cookies que aquellos datos personales otorgados. Los Usuarios se encuentran en la capacidad de deshabilitar la mayoría de cookies que son enviadas a las computadoras y dispositivos móviles por medio del cambio de las configuraciones predispuestas para sus navegadores y sistemas operativos. Deshabilitar las cookies en el navegador puede originar que Monefin no pueda ofrecer y/o prestar el mismo servicio y/o contenido personalizado a sus Usuarios.
  </Text>  <br />
  <h4>II. TRATAMIENTO DE DATOS PERSONALES</h4>
  <Text>2.1. Para la ejecución de los Servicios, Monefin realizará, siempre respetando la legislación pertinente, la transferencia de datos personales suministrados por los Usuarios para los colaboradores comerciales y operativos de Monefin.
2.1.1. En el ejercicio de sus actividades, Monefin comparte informaciones con terceros, siempre con vistas a posibilitar y a perfeccionar la oferta de sus Servicios y productos, en los siguientes casos:
(i) Uso de proveedores o colaboradores: Monefin puede compartir informaciones insertadas por el Usuario con otras personas jurídicas colaboradoras de Monefin, por ejemplo, para el suministro de servicios informáticos o de otro tipo;
(ii) Nuevos negocios: En caso de adquisición o fusión de empresas, establecimiento de colaboraciones comerciales, joint ventures y otros negocios;
(iii) cumplimento de obligación legal: Monefin podrá compartir la información brindada por el Usuario en caso de ser requerido para dar cumplimiento con toda y/o cualquier intimación legal, ya sea judicial o administrativa, caso tal caso Monefin notificará al Usuario sobre cuáles informaciones serán compartidas si la ley así lo permite.
2.2. Monefin valoriza la privacidad de sus Usuarios y utiliza los datos personales recolectados con las siguientes finalidades: Presentación y venta de productos, así como la ejecución de los diversos servicios y/o herramientas dispuestos para los Usuarios por Monefin a través del Sitio. Para cumplir esa finalidad, los datos ingresado por el Usuario en el Sitio podrán ser compartidos con colaboradores, de la manera descripta en la presente Política de Privacidad. Entrar en contacto con el Usuario para confirmar las informaciones que hayan sido suministradas y solicitar el envío de informaciones que aún estén pendientes para que Monefin pueda prestar adecuadamente sus Servicios, o para tratar consultas de los Usuarios que contactan Monefin; Trazar perfiles y tendencias demográficas de uso del Sitio; Envío de notificaciones y/o correo electrónico marketing: este canal es utilizado para envío de contenido segmentado sobre nuestros servicios y/o de nuestros colaboradores (conforme lo establecido por el Art.27 de la Lay 25.326 y su Decreto Reglamentario 1558/2001); Realización de operaciones comerciales, en el caso de suministro de datos de tarjeta de crédito o débito, con el objetivo de la realización de compra de productos o adquisición de Servicios. Monefin utiliza estas informaciones exclusivamente con la finalidad de procesamiento del pago en cuestión; y Los datos también podrán ser utilizados en la gestión y mejoría de las funcionalidades del Sitio, así como para la personalización de los Servicios ofertados y la realización de estadísticas y estudios.
2.3. En todo caso, los datos recolectados a través del Sitio y en razón de la ejecución de los Servicios serán almacenados por un plazo de hasta diez (10) años una vez transcurrido dicho plazo los mismos serán eliminados.
</Text>
<br />
  <h4>III. DE LOS SISTEMAS Y APLICACIONES DE TERCEROS</h4>
  <Text>3.1. Monefin no se responsabiliza por el tratamiento de datos personales efectuado por terceros. Los tratamientos realizados por terceros serán regidos por sus respectivas Políticas de Privacidad.
3.2. Cabrá a los Usuarios, antes de utilizar sistemas, aplicaciones, sitios web y plataformas en general de alguno de los colaboradores de Monefin, leer atentamente la respectiva Política de Privacidad, estando consciente de que Monefin no tiene ninguna responsabilidad o injerencia sobre los tratamientos de datos personales eventualmente conducidos por sus colaboradores o por cualesquiera terceros.
</Text>
  <h4>IV. DE LA VERACIDAD Y ACTUALIDAD DE LOS DATOS Y LOS DERECHOS DE LOS TITULARES</h4>
  <Text>4.1. Los Usuarios tienen el derecho a exigir información sobre el tratamiento de sus datos personales; a exigir que se modifiquen datos incorrectos o incompletos; a exigir que se eliminen sus datos personales, cuando su almacenamiento carezca de fundamento legal o cuando estuvieren caducos; a exigir que se eliminen o bloqueen sus datos, en su caso, cuando haya proporcionado voluntariamente sus datos personales o ellos se usen para comunicaciones comerciales y no desee continuar figurando en el registro respectivo, sea de modo definitivo o temporal; a oponerse a la utilización de sus datos personales con fines de publicidad, investigación de mercado o encuestas de opinión; y a revocar su consentimiento sobre el tratamiento de datos en todo momento con efecto en el futuro. En este último caso, ya no es posible seguir utilizando nuestra Plataforma (ello en concordancia con lo dispuesto por el Art.16 de la Ley 25.326 y su Decreto Reglamentario 1558/2001). Para ejercer estos derechos, el Usuario deberá ponerse en contacto con Monefin por medio del Canal de Atención indicado en el ítem VI de esta Política de Privacidad, estando consciente de que, en la hipótesis de eliminación de sus datos, no podrán más acceder a las funcionalidades y servicios dispuestos.

  </Text>
  <br />
  <h4>V. SEGURIDAD DE LAS INFORMACIONES</h4>
  <Text>5.1. Monefin tiene en vigor medidas de seguridad adecuadas con vistas a: (i) la protección contra el acceso no autorizado a los datos almacenados y a las copias de seguridad realizadas; e (ii) impedir alteraciones, divulgaciones y/o destrucciones no autorizadas de informaciones en poder de Monefin.
5.2. Monefin de restringir y/o anonimizar, cuando sea necesario, el acceso a los datos a las personas que necesiten de esas informaciones para prestar el soporte necesario a los Usuarios, o garantizar el mejor funcionamiento de los Servicios. Estos individuos se encuentran obligados al deber de confidencialidad y sujetos a punición disciplinaria, incluyendo rescisión del contrato de trabajo y acción penal en caso de incumplimiento de esa obligación.
5.3. Monefin adoptará las medidas técnicas y organizativas necesarias para garantizar la seguridad y confidencialidad de los datos personales legalmente requeridos, a fin de evitar su adulteración, pérdida, consulta o tratamiento no autorizado, sea que éstos provengan de la acción humana y/o del medio técnico utilizado. El material incluido en el Sitio (entendiéndose como material a: textos, informes, artículos, datos, comentarios, disertaciones, gráficos, logos, iconos, imágenes y archivos de cualquier tipo) se encuentran protegidos por las leyes de propiedad intelectual. Queda prohibida su publicación, radiodifusión, reedición para radiodifusión o publicación y su redistribución directa o indirecta por cualquier medio. Queda prohibido su almacenamiento total o parcial en computadoras, excepto para uso personal y sin fines comerciales. La publicación de información de propiedad de terceros será de responsabilidad exclusiva de sus autores. Monefin no asume responsabilidad alguna por cualquier demora, inexactitud, error u omisión en el mismo o en la transmisión o entrega de la totalidad o parte del mismo, ni por los daños emergentes de tales circunstancias. La utilización de la información publicada en el Sitio para cualquier finalidad por parte de los Usuarios será bajo su exclusiva responsabilidad o riesgo, Monefin no se responsabiliza por los daños, de cualquier tipo ocasionados por el uso de la información publicada.
5.4. Monefin no será responsable por los contenidos y/o la información provista en otras páginas web a las cuales los Usuarios puedan acceder mediante la utilización del Sitio. Tampoco responderá por la autenticidad y/o veracidad de la información ni de los datos consignados en las mismas.
5.5. Los Usuarios se obligan a hacer uso del Sitio y de todos sus Servicios de conformidad con la ley, los términos generales de uso, esta Política de Privacidad, la moral, las buenas costumbres generalmente aceptadas y el orden público, obligándose a abstenerse de utilizar el Sitio con fines ilícitos o contrario a lo aquí establecido, que de cualquier modo puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio, así como su reputación.
5.6. Blogs o foros: Monefin no se hace responsable por las publicaciones realizadas por los Usuarios dentro de sus blogs o foros. Las opiniones registradas en los blogs o foros no reflejan la posición de Monefin y son responsabilidad únicamente del Usuario que realizó la publicación. Asimismo, Monefin no se hará responsable de los daños y perjuicios por las publicaciones hechas por los Usuarios en sus blogs o foros que pudieran ocasionar la reproducción, distribución, publicación de fotos, videos o comentarios que se encuentren bajo la protección de los derechos de propiedad intelectual de terceros. Los usuarios ceden en favor de Monefin los derechos que estos tuviesen sobre sus comentarios, fotos o videos publicados en los blogs o foros. Monefin podrá emplear dicha información para los fines que considere pertinentes, siempre dentro de los parámetros de la finalidad establecida. Monefin se reserva el derecho de eliminar a su discreción aquellas publicaciones que se hagan en sus foros, blogs y el contenido que se encuentre en el Sitio sin previo aviso.
5.7. Redes sociales: Monefin hace uso de las redes sociales para otorgar una experiencia de navegación completa a sus Usuarios, sin embargo, no se hace responsable por la información contenida en las redes sociales a las que el Usuario pueda acceder por medio del Sitio. Las redes sociales de las que participan tanto Monefin como el Usuario cuentan con sus propias políticas de privacidad a las que deberán sujetarse todos los Usuarios de tales redes. Por las mencionadas razones, le recomendamos revisar las Políticas de Privacidad de las redes sociales para asegurarse encontrarse de acuerdo con éstas. Asimismo, Monefin se libera de toda responsabilidad que pueda ocasionar el incorrecto funcionamiento y/o el inadecuado uso de las redes sociales, la falsedad del contenido y la ilicitud de la forma en que éste fue obtenido, así como de los daños y perjuicios que se pudieran generar por las publicaciones en estas redes, siendo los únicos responsables los Usuarios de la red social que hayan realizado tales acciones.
</Text>
<br />
  <h4>VI. CANAL DE ATENCIÓN
</h4>
  <Text>6.1. El Usuario podrá entrar en contacto con Monefin por correo electrónico info@monefin.net
6.2. Monefin se reserva el derecho, a su sola discreción, de modificar, alterar o de otra manera actualizar, esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigencia desde el momento que se indique; en su defecto, se entenderá que su aplicación es inmediata. Monefin no limitara los derechos de los Usuarios en virtud de esta política de privacidad sin su consentimiento explícito. Al hacer click a “ACEPTO”, el Usuario reconoce haber leído y comprendido la presente Política de Privacidad, otorgando de esta forma su consentimiento para el tratamiento de los datos personales para los fines que se especificaron en los párrafos anteriores. Última actualización: 19 de enero de 2023
</Text>
  <Footer />
  </Wrapper>
  </ScreenWrapper>
);

export default Privacy;
