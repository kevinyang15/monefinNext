import { create } from 'zustand'


type FormState = {
  nombrecompleto: string | null;
  dni: string | null;
  email: string | null;
  emailVerified: boolean;
  verificationCode: string | null;
  setNombrecompleto: (nombrecompleto: string) => void;
  setDnizustand: (dni: string) => void;
  setEmailzustand: (email: string) => void;
  setEmailVerified: (verified: boolean) => void;
  setVerificationCode: (code: string | null) => void;
  // setOffer: (offer: Offer) => void;
}

const useFormStore = create<FormState>((set) => ({
  nombrecompleto: null,
  dni: null,
  email: null,
  emailVerified: false,
  verificationCode: null,
  setNombrecompleto: (nombrecompleto: string) => set((state:any) => ({ nombrecompleto })),
  setDnizustand: (dni: string) => set((state:any) => ({ dni })),
  setEmailzustand: (email: string) => set((state:any) =>({ email })),
  setEmailVerified: (emailVerified: boolean) => set((state:any) => ({ emailVerified })),
  setVerificationCode: (verificationCode: string | null) => set((state:any) => ({ verificationCode })),
  // setOffer: (offer: Offer) => set((state:any) => ({ offer })),

}))

export default useFormStore;