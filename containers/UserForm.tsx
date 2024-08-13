import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Bank from '../public/assets/bank.svg';
import Email from '../public/assets/email.svg';
import Phone from '../public/assets/phone.svg';
import { useRouter } from 'next/router';
import InputSelect, { Option } from '../components/InputSelect';
import { bankOptions, employmentOptions } from '../data/selectOptions';
import AutoComplete from '../components/AutoComplete';
import { SelectChangeEvent } from '@mui/material';
import Lottie from 'lottie-react';
import { gtag_report_conversion } from './gtag';
import WaitImg from '../public/assets/wait.json';
import useFormStore from '../state/useFormStore';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

// const DoubleWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// const MidWrapper = styled.div`
//   width: 48%;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

const CheckTextClickable = styled.span`
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  border-radius:10px;
`;

const UserForm = () => {
  // const theme = useTheme();
  const router = useRouter();

  const setNombrecompleto = useFormStore((state) => state.setNombrecompleto);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+54 ');
  const [employment, setEmployment] = useState<string>('');
  const [bank, setBank] = useState<Option>();
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para controlar el envío del formulario
  const [emailError, setEmailError] = useState(''); // Nuevo estado para manejar errores de validación del correo
  const [dniError, setDniError] = useState(''); // Compruebo la mayoría de edad.

  // const EmailIcon = <Image src={Email} alt="Email Icon" width={20} height={20} />

  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\\\]\\.,;:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const toggleCheck = () => setAcceptedTerms((t) => !t);

  const goToTyC = () => {};

  const disabledSubmit = !acceptedTerms || dni === '' || email === '' || phone === '+54 ' || !employment || !bank;

  const handleNewEmployment = (event: SelectChangeEvent<string>) => {
    if (event) setEmployment(event.target.value);
  }

  const handleNewBank = (_: React.SyntheticEvent<Element, Event>, value: Option | null) => {
    if (value) setBank(value);
  }

  const handleEmailChange = (newEmail: string) => {
    const formattedEmail = newEmail.toLowerCase().trim();
    setEmail(formattedEmail);
    if (!validEmail.test(formattedEmail)) {
      setEmailError('Recuerda escribir tu Correo Correctamente');
    } else {
      setEmailError('');
    }
  }

  const handleDniChange = (newDNI: string) => {
    if (newDNI.length > 8) return;
    const finalDNI = newDNI.replace(/\D/g, '');
    setDni(finalDNI);

    if (finalDNI.length < 6 || finalDNI.length > 8) {
      setDniError('El DNI debe ser un número entre 6 y 9 dígitos');
    } else {
      setDniError('');
    }
  }

  const handlePhoneChange = (newPhone: string) => {
    if (newPhone === '+54' || newPhone.length > 14) return;
    const finalPhone = newPhone.replace('+54 ', '').replace(/\D/g, '');
    setPhone('+54 ' + finalPhone);
  }

  const getCurrentDateFormatted = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JS son de 0 a 11
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Nueva función para verificar el correo electrónico
  const verifyEmail = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch('https://us-central1-monefinweb.cloudfunctions.net/Monefin-Email-Verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Email is not valid');
      }

      return true;
    } catch (error) {
      setEmailError('El Correo Electrónico no es Válido');
      return false;
    }
  };

  const submitForm = async () => {
    if (!validated) setValidated(true);

    if (!dni || !email || !phone || !employment || !bank || !acceptedTerms || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setEmailError(''); // Reset email error
    setDniError(''); // Reset dni error

    if (!validEmail.test(email)) {
      setEmailError('Parece que el Correo Electrónico está mal escrito');
      setIsSubmitting(false);
      return;
    }

    const emailIsValid = await verifyEmail(email);
    if (!emailIsValid) {
      setIsSubmitting(false);
      return;
    }

    const timestamp = getCurrentDateFormatted();
    const formData = {
      dni,
      email,
      phone,
      employment,
      bank,
      timestamp
    };

    try {
      const response = await fetch('https://us-central1-monefinweb.cloudfunctions.net/MonefinGetDni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        // console.log("Document written with ID: ", result.id);
        // console.log("Nombre del usuario: ", result.nombrecompleto);
        // console.log("Fecha de Nacimiento: ", result.fechanacimiento);

        const birthDate = new Date(result.fechanacimiento);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        // console.log(age)

        if (age < 18) {
          setDniError('Debes tener al menos 18 años para continuar.');
          setIsSubmitting(false);
          return;
        }
        
        setNombrecompleto(result.nombrecompleto);
        router.push('/espera');
        gtag_report_conversion();
      } else {
        console.error("Error adding document: ", await response.text());
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = !!dni || !!email || !!phone || !!employment || !!bank;

  return (
    <Wrapper>
      {isSubmitting && ( // Mostrar overlay solo cuando se está enviando el formulario
        <Overlay>
          <Lottie animationData={WaitImg} height={150} width={150} style={{ width:'200px' }}/>
        </Overlay>
      )}
      <Input
        label="40111232"
        label2="DNI"
        value={dni}
        handleChange={handleDniChange}
        type="tel"
        pattern="\d*"
        error={validated ? (dni ? undefined : 'DNI requerido') : undefined}
      />
      {dniError && <p style={{ color: '#e30000', fontSize: '11px', backgroundColor: 'rgb(35 35 35 / 7%)', padding: '2px 20px', borderRadius: '5px', fontWeight: '500', margin: '5px' }}>{dniError}</p>} {/* Mostrar error de DNI */}

      <Input
        label="ejemplo@gmail.com"
        label2="Correo Electrónico"
        value={email}
        handleChange={handleEmailChange}
        icon={Email.src}
        error={validated ? (email ? undefined : 'Email requerido') : undefined}
      />
     
      
      {emailError && <p style={{ color: '#e30000', fontSize: '11px', backgroundColor: 'rgb(35 35 35 / 7%)', padding: '2px 20px', borderRadius: '5px', fontWeight: '500', margin: '5px' }}>{emailError}</p>} {/* Mostrar error de correo */}
      <Input
        label="11"
        label2="Teléfono Celular"
        value={phone}
        handleChange={handlePhoneChange}
        icon={Phone.src}
        type="tel"
        pattern="\d*"
        error={validated ? (phone ? undefined : 'Teléfono requerido') : undefined}
      />
      <p style={{ fontSize:'12px', color:'gray',textAlign:'center', padding:'5px 0px' }}>Agregá tu teléfono celular sin el 0 y sin el 15.</p>
      <InputSelect
        options={employmentOptions}
        value={employment}
        handleChange={handleNewEmployment}
        placeholder="Situación laboral"
        disableClearable
      />
      <AutoComplete
        options={bankOptions}
        value={bank}
        handleChange={handleNewBank}
        placeholder="Seleccioná tu banco"
        icon={Bank}
      />
      <div style={{ display:'flex' }}>
        <Checkbox
          checked={acceptedTerms}
          handleChange={toggleCheck}
          text={(
            <>
              <p style={{ fontWeight:'400' }}>
                Acepto los <CheckTextClickable onClick={goToTyC}><strong>Términos y Condiciones</strong></CheckTextClickable>
              </p>
            </>
          )}
        />
      </div>
      <Button
        disabled={!hasErrors || disabledSubmit || isSubmitting} // Deshabilitar el botón durante el envío del formulario
        backgroundColor="#BDA1EC"
        textColor="fff"
        text="¡Buscar ofertas! 💰"
        onClick={submitForm}
      />
      <p style={{ fontSize:'10px', color:'gray',textAlign:'center', padding:'5px 0px' }}>Todos tus datos son almacenados de forma segura.</p>
    </Wrapper>
  );
};

export default UserForm;
