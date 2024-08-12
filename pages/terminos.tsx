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

const Terms = () => (
  <ScreenWrapper>
  <Wrapper>
    <TitleText>Términos y condiciones</TitleText>
    <h3>Términos y Condiciones</h3>
    <Text>monefin presta el Servicio desde el sitio web de su propiedad www.monefin.net (el “Sitio Web”), donde los Usuarios cargan sus datos personales para recibir ofertas de préstamos. De esta manera, monefin permite que las financieras puedan acceder a los datos que cargan los Usuarios.</Text>
    <Text>Los presentes Términos y Condiciones regirán el uso de la Plataforma y el Servicio suministrado por monefin a los usuarios, quien acepta expresamente los mismos mediante el envío del formulario de contratación.</Text>
    <br />
    <h4>DECLARACIÓN Y RECONOCIMIENTOS DE LOS USUARIOS.</h4>
    <Text>Los Usuarios declaran y reconocen que:
a) Contratan voluntariamente con monefin.
b) Ceden sus datos voluntariamente a monefin y sujetan la cesión a la Política de Privacidad que han aceptado y que forman parte de los presentes Términos y Condiciones.
c) monefin no es una entidad financiera ni una entidad no financiera dedicada al otorgamiento de los préstamos. 
d) monefin no otorga los préstamos.
e) monefin no garantiza el otorgamiento de los préstamos a los usuarios. La decisión de otorgar o no los préstamos, es exclusiva de las entidades financieras.
f) monefin no asume responsabilidad alguna por la calidad, características y demás elementos de los préstamos ofrecidos por las entidades financieras.
g) monefin no controla, ni supervisa, ni asume responsabilidad alguna, en relación a la veracidad y exactitud de la descripción e información de los Préstamos que ofrecen las entidades financieras.
h) monefin no controla, ni supervisa, ni asume responsabilidad alguna, en relación al cumplimiento de los requisitos legales para ofrecer los Préstamos por parte de las entidades financieras.
i) monefin no garantiza la capacidad y legitimación de las entidades financieras para ofrecer los préstamos.
j) El Servicio no constituye una oferta para otorgar los Préstamos.
k) La decisión de contratar los Préstamos es exclusiva del Cliente y lo hace sobre la base de información otorgada por las entidades financieras, ajena a monefin.
  </Text>
  <br />
  <h4>RESPONSABILIDAD DE LOS USUARIOS.</h4>
  <Text>Los Usuarios son responsables de todos los datos que incluyan en los formularios que envíen a monefin así como del contenido de cualquier otra comunicación que envíe a ésta. Los Usuarios responderán de la veracidad de los datos facilitados, reservándose monefin el derecho a excluir de los Servicios a los usuarios que hubieren facilitado datos falsos o inexactos, sin perjuicio de las demás acciones que procedan en derecho.</Text>
  <br />
  <h4>LIMITACIONES DE USO.</h4>
  <Text>Rigen las presentes limitaciones a la contratación del Servicio.
a) Sólo podrán contratar personas mayores de 18 años.
b) Los Usuarios no utilizarán el Servicio para ningún propósito ilícito ni ilegal.
c) monefin se reserva el derecho de restringir o cancelar el acceso al Servicio si, en su criterio, los Usuarios utilizan el Servicio para infringir alguna ley, violar derechos de terceros o incumplir las presentes condiciones de contratación.
d) Los Usuarios no utilizarán ningún material que pueda contener virus, malware o cualquier componente nocivo ni modificarán de ninguna manera el contenido del Sitio web.
e) Los Usuarios son los únicos responsables del uso del Sitio Web.
f) Los Usuarios se comprometen a notificar inmediatamente a monefin cualquier uso no autorizado de la dirección de su correo electrónico registrado o de cualquier otra violación de seguridad.
</Text>
<br />
  <h4>ENLACES A SITIOS WEB.</h4>
  <Text>monefin puede facilitar enlaces, websites o servicios de terceros a través del sitio web. Los Usuarios entienden y aceptan que monefin no controla y no es responsable de estos servicios y Préstamos. Los enlaces desde este Sitio web a sitios web de terceros se muestran únicamente con fines informativos y monefin no se hace responsable de sus contenidos. Los Usuarios son los únicos responsables del uso de los enlaces a otras páginas web que se muestran en el Sitio web.
</Text>
<br />
  <h4>RESPONSABILIDAD DE monefin.</h4>
  <Text>monefin hará los mejores esfuerzos para permitir que los Usuarios accedan al Servicio. No se responsabiliza por desperfectos de conexión de red que puedan provocar daños en los equipos, impedir la conexión o limitar total o parcialmente el acceso de los Usuarios al Servicio. monefin no se responsabilizará de desperfectos o daños que produzcan las empresas suministradoras de servicio (energía o internet). monefin solo responderá por aquellos daños o perjuicios que le puedan ser imputados a título de dolo o culpa grave.
</Text>
<br />
  <h4>PROPIEDAD INTELECTUAL.</h4>
  <Text>El Cliente reconoce y acepta que todos los derechos sobre las marcas registradas, software y nombres comerciales de monefin son de su propiedad exclusiva, por lo que no adquirirá, afirmará ni registrará ningún derecho sobre tales marcas o software o nombres comerciales que en su totalidad o en parte sea igual o similar los nombres anteriores o a cualquier otra marca, patente o software o nombre comercial que en el presente o en el futuro sea propiedad o sea usado por monefin. Asimismo, el Cliente reconoce y acepta que la propiedad intelectual, autoría sobre las imágenes, diseños, texto, software y demás creaciones que se desprenden del sitio web de monefin, son de titularidad de éste. Todos los contenidos del Sitio Web pertenecen a monefin y están protegidos por la legislación sobre propiedad intelectual. El Sitio Web es propiedad de monefin. Los derechos de autor, software, la información, los materiales y su publicación en el Sitio Web son de propiedad monefin. Se pueden imprimir, copiar, descargar o almacenar temporalmente fragmentos de este Sitio web para su uso personal o para utilizar nuestros Préstamosy servicios. Usted no tiene derecho a realizar ningún cambio. Cualquier otro uso de la información y los materiales de este Sitio web, incluyendo su uso en otras páginas web, como cualquier mención de monefin está prohibido.</Text>
  <br />
  <h4>IMÁGENES PERSONALES Y OPINIONES.</h4>
  <Text>En ciertos casos, monefin puede utilizar imágenes y/u opiniones de los Usuarios vinculados al Servicio, para lo cual los Usuarios prestan su expreso consentimiento.​
</Text>
<br />
  <h4>LEY APLICABLE.
</h4>
  <Text>Este Servicio deberá ser interpretado y cumplido de acuerdo con, y los derechos de las Partes serán regidos por las leyes de la República Argentina.
</Text>
<br />
  <h4>JURISDICCIÓN.</h4>
  <Text>Para el caso de suscitarse controversias, las Partes se someten exclusivamente a la jurisdicción de los Tribunales Comerciales de la Capital Federal, renunciando a cualquier otro fuero o jurisdicción.
</Text>
<br />
  <h4>NOTIFICACIONES.</h4>
  <Text>Todos los avisos y notificaciones requeridos con causa en el Servicio, serán por escrito y enviados en idioma español, mediante correo certificado, carta documento, o correo electrónico dirigido a las direcciones indicadas en la portada del presente. La fecha de cualquier aviso o notificación será la fecha en que sea recibida por el destinatario.</Text>
  <br />
  <h4>MODIFICACIONES Y CONTRATACIÓN.</h4>
  <Text>Estos Términos y Condiciones Generales junto al formulario completado por los Usuarios constituye la totalidad de lo acordado y entendido por éstos y monefin. monefin podrá modificarlos en cualquier momento sin previo aviso y los publicará en el Sitio Web. Los Usuarios se comprometen a revisar periódicamente los Términos y Condiciones. Si usted utiliza el Sitio Web después de que los cambios hayan sido modificados, eso significa que está de acuerdo con los nuevos Términos y Condiciones.</Text>
  <br />
  <h4>VALIDEZ.</h4>
  <Text>En caso de que cualquiera de las secciones de los presentes Términos y Condiciones Generales sea considerada inválida, ineficaz o violatoria a las leyes aplicables, el resto de las cláusulas de los presentes Términos y Condiciones Generales continuarán en vigor.</Text>
  <br />
  <h4>PERMISOS WHATSAPP O SMS.
</h4>
  <Text>El usuario que utilice el sitio web podrá proporcionar algunos datos personales a efectos de mantenerse en contacto y recibir información mediante whatsapp o SMS respecto de servicios que se pongan a disposición de la persona en relación a los servicios utilizados.
</Text>
  <Footer />
  </Wrapper>
  </ScreenWrapper>
);

export default Terms;
