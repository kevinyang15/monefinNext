import { create } from 'zustand'


type FormState = {
  nombrecompleto: string | null;
  dni: string | null;
  email: string | null;
  setNombrecompleto: (nombrecompleto: string) => void;
  setDnizustand: (dni: string) => void;
  setEmailzustand: (email: string) => void;
  // setOffer: (offer: Offer) => void;
}

const useFormStore = create<FormState>((set) => ({
  nombrecompleto: null,
  dni: null,
  email: null,
  setNombrecompleto: (nombrecompleto: string) => set((state:any) => ({ nombrecompleto })),
  setDnizustand: (dni: string) => set((state:any) => ({ dni })),
  setEmailzustand: (email: string) => set((state:any) =>({ email })),
  // setOffer: (offer: Offer) => set((state:any) => ({ offer })),

}))

export default useFormStore;